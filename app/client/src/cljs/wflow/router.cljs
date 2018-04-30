(ns wflow.router
  (:import goog.History)
  (:require [bidi.bidi :as bidi]
            [re-frame.core :as re-frame]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [goog.Uri :as Uri]
            [goog.Uri.QueryData :as QueryData]
            [wflow.services.server :as server]
            [wflow.services.re-frame :as services.re-frame]
            [wflow.utils.storage :as storage]
            [oops.core :as o]))



(def static-resources
  {})


;; route definitions
(def routes ["" (merge
                  static-resources
                  {""    :home
                   "/"   :home
                   "/workflows" :workflows
                   "/debug" :debug})])


(def authorized-routes
  ;; :public or :token uath
  {:home :public})


(defn- parse-url
  "bidi parse URL, and also handle query params"
  [url]
  (let [query-data (-> url (Uri/parse) (.getQueryData))
        query-keys (array-seq (.getKeys query-data))
        query-params (reduce #(assoc %1 (keyword %2) (.get query-data %2)) {} query-keys)]
    (assoc (bidi/match-route routes url)
           :query-params query-params)))


(defn- dispatch-route [matched-route url]
  (let [page (:handler matched-route)
        route-params (:route-params matched-route)]
    (re-frame/dispatch [::request-route {:page page :route-params route-params :url url}])))


(defn start! []
  (doto (History.)
    (gevents/listen
      EventType/NAVIGATE
      (fn [event]
        (let [url (.-token event)
              route (parse-url url)]
          (dispatch-route route url))))
    (.setEnabled true)))


(defn compute-path
  "allows you to have last arg to url-for be query parameters
  It must have the key {:query-params {}}"
  [& args]
  (let [larg (last args)]
    (if (and (map? larg)
             (:query-params larg))
      (str (apply bidi/path-for routes (butlast args))
           "?" (o/ocall! server/$ "param" (clj->js (:query-params larg))))
      (apply bidi/path-for routes args))))


(defn ext-url-for [& args]
  (apply compute-path args))


(defn url-for [& args]
  (str "#" (apply compute-path args)))



;; re-frame bindings
(re-frame/reg-event-db
  ::navigate
  (fn [db [_ route]]
    (assoc db :route route)))


(re-frame/reg-sub
  ::route-params
  (fn [db]
    (get-in db [:route :route-params])))


(re-frame/reg-sub
  ::route-page
  (fn [db]
    (get-in db [:route :page])))


(re-frame/reg-fx
  :navigate
  (fn [args]
    (set! (.-href js/location) (apply url-for args))))


(re-frame/reg-fx
  :ext-navigate
  (fn [args]
    (set! (.-href js/location) (apply ext-url-for args))))


(re-frame/reg-fx
  :set-url
  (fn [url]
    (set! (.-href js/location) url)))


(services.re-frame/fx->event :navigate)
(services.re-frame/fx->event :ext-navigate)
(services.re-frame/fx->event :set-url)


(re-frame/reg-event-fx
  ::request-route
  [(re-frame/inject-cofx :local-store)
   (re-frame/inject-cofx :memory-store)]
  (fn [{:keys [db local-store memory-store]} [_ route]]
    (let [auth (get authorized-routes (:page route))
          token (get-in local-store [:session :accessToken])
          new-db (merge local-store db)
          nxt {:db new-db
               :dispatch [::navigate route]}]
      (case auth
        :token
        (if (:session/valid memory-store)
          nxt
          {:db new-db
           :ajax {:request ["POST" "authentication" {:data {:strategy "jwt"}
                                                     :authorization token}]
                  :success [::auth-success route]
                  :fail [:navigate [:login {:query-params {"page" (:url route)}}]]}})

        nxt))))


(re-frame/reg-event-fx
  ::auth-success
  (fn [{:keys [db]} [_ route]]
    {::validate-session true
     :dispatch [::navigate route]}))


(re-frame/reg-fx
  ::validate-session
  (fn []
    (swap! storage/memory-store assoc :session/valid true)))


;; --------------------
(defmulti panels identity)
(defmethod panels :default []
  [:div
   [:h3 "404"]
   [:p "Page not found."]])

