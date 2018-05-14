(ns wflow.scenes.user.login
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [goog.dom :as gdom]
            [wflow.services.re-frame :as services.re-frame]
            [wflow.utils.forms :as forms]
            [wflow.router :as router]))


;; TODO loading button icon during AJAX...
(re-frame/reg-event-fx
  ::login
  (fn [{:keys [db]} [_ data]]
    (let [data (assoc data :strategy "local")]
      {:ajax {:request ["POST" "authentication" {:data data}]
              :success [::login-success]
              :fail [:toast "error" "Login Failed"]}})))


(re-frame/reg-event-fx
  ::login-success
  ;; TODO choose which keys are stored
  [services.re-frame/->local-store]
  (fn [{:keys [db]} [_ session]]
    (let [{:keys [query-params]} (router/parse-url (.substr js/location.hash 1))
          navigate-event (if-let [path (:page query-params)]
                           [:set-url (str "#" path)]
                           [:navigate [:home]])]
      (println navigate-event)
      {:db (assoc db :session session)
       :dispatch-n [navigate-event
                    [:toast "clear"]]})))



;; TODO form validation, etc...
(defn- login [e]
  (.preventDefault e)
  (let [data (forms/serialize-form (gdom/getElement "login"))]
    (re-frame/dispatch [::login data])))


(defn login-panel []
  [sa/Grid {:padded true
            :centered true}
   [sa/GridRow
    [sa/GridColumn {:style {:max-width 450
                            :top 50}}
     [sa/Header {:as "h3"} "Login to your account"]
     [sa/Form
      {:size "large"
       :id "login"}
      [sa/Segment
       {:raised true}
       [sa/FormInput
        {:icon "user",
         :icon-position "left",
         :name "email"
         :placeholder "E-mail address"}]
       [sa/FormInput
        {:icon "lock",
         :icon-position "left",
         :placeholder "Password",
         :name "password"
         :type "password"}]
       [sa/Button {:size "large" :on-click login} "Login"]]]
     [sa/Message "New to us? " [:a {:href (router/url-for :signup)} "Sign Up"]]]]])


(defmethod router/panels :login [] [login-panel])

