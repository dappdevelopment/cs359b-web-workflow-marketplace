(ns wflow.services.re-frame
  (:require [re-frame.core :as re-frame]
            [wflow.services.server :as server]
            [wflow.utils.storage :as storage]
            [cljs.spec.alpha :as s]))


(re-frame/reg-event-db
  ::write-path
  (fn [db [_ path value]]
    (assoc-in db path value)))


(re-frame/reg-event-db
  ::clean-path
  (fn [db [_ path]]
    (assoc-in db path nil)))



(defn reg-sub-remote [kw {:keys [path query cleanup default]
                          :or {query identity
                               cleanup identity
                               default nil}}]
  ;; TODO use truss
  (re-frame/reg-sub-raw
    kw
    (fn [db [_ & args]]
      (apply query @db args)

      (reagent.ratom/make-reaction
        #(get-in @db path default)
        :on-dispose cleanup))))


(defn- page-params [query]
  (let [query (or query {:page 1})
        page (:page query)]
    (-> query
      (assoc "$skip" (* 10 (dec page)))
      ;; for mongodb backends especially
      (assoc-in ["$sort" "created_at"] 1)
      (dissoc :page))))



;; fetch remote data store
(defn rest-store
  [id {:keys [default persistence paging url url-fn query-fn]
       :or {paging true
            default {:data []}}}]
  (let [path [:stores id]
        write! #(re-frame/dispatch [::write-path path %])
        clean! #(re-frame/dispatch [::clean-path path])
        extend-kw #(keyword (namespace %1) (str (name %1) %2))
        query-fn (if query-fn
                   (fn [db q]
                     (-> (query-fn db q)
                       (js/Promise.resolve)
                       (.then write!)))
                   (fn [db q]
                     (let [token (get-in db [:session :accessToken])
                           url (if url-fn (url-fn db q) url)]
                       (-> (server/ajax "GET" url {:query (cond-> q paging page-params)
                                                   :authorization token})
                         (.then write!)))))
        cleanup (case persistence
                  :memory identity
                  clean!)]

    ;; reload event
    (re-frame/reg-fx
      [:reload-store id]
      (fn [[db q]]
        (query-fn db q)))

    (re-frame/reg-event-fx
      [:reload-store id]
      (fn [{:keys [db]} [_ q]]
        {:db db
         [:reload-store id] [db q]}))

    (if paging
      (let [page-id (extend-kw id "-page")
            meta-id (extend-kw id "-meta")]
        (reg-sub-remote page-id {:path path
                                 :query query-fn
                                 :cleanup cleanup
                                 :default {}})

        (re-frame/reg-sub
          meta-id
          (fn [[_ & args]]
            (re-frame/subscribe (into [page-id] args)))
          (fn [page]
            (if-let [{:keys [total limit skip]} page]
              (assoc page :pages (js/Math.ceil (/ total limit))
                    :active-page (inc (js/Math.ceil (/ skip limit))))
              page)))
        (re-frame/reg-sub
          id
          (fn [[_ & args]]
            (re-frame/subscribe (into [page-id] args)))
          (fn [page]
            (:data page default))))
      (reg-sub-remote id {:path path
                          :query query-fn
                          :cleanup cleanup
                          :default default}))))


(re-frame/reg-fx
  :ajax
  (fn [{:keys [request success fail]}]
    ;; TODO use truss...
    {:pre [(every? vector? [request success fail])]}
    (-> (apply server/ajax request)
      (.then #(re-frame/dispatch (conj success %))
             #(re-frame/dispatch (conj fail %))))))


(defn rest-call
  [id {:keys [method path success fail]}]
  (re-frame/reg-event-fx
    id
    (fn [{:keys [db]} [_ params]]
      {:ajax {:request [method path params]
              :success success
              :fail fail}})))




;; interceptors ;;;;
(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))


;; now we create an interceptor using `after`
(defn spec-intc [a-spec]
  (re-frame/after (partial check-and-throw a-spec)))



(re-frame/reg-cofx
  :local-store
  (fn [cofx _]
    (assoc cofx :local-store (storage/local-store->data))))


(re-frame/reg-cofx
  :memory-store
  (fn [cofx _]
    (assoc cofx :memory-store @storage/memory-store)))


(def ->local-store
  (re-frame/after storage/data->local-store))



(defn fx->event [fx-id]
  (re-frame/reg-event-fx
    fx-id
    (fn [ctx [_ event]]
      {fx-id event})))
