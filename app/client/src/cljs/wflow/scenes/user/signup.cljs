(ns wflow.scenes.user.signup
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [goog.dom :as gdom]
            [wflow.services.re-frame :as services.re-frame]
            [wflow.utils.forms :as forms]
            [wflow.router :as router]))


;; TODO loading button icon during AJAX...
(re-frame/reg-event-fx
  ::signup
  (fn [{:keys [db]} [_ data]]
    (let [data (assoc data :strategy "local")]
      {:ajax {:request ["POST" "signup" {:data data}]
              :success [::signup-success]
              :fail [:toast "error" "Signup Failed"]}})))


(re-frame/reg-event-fx
  ::signup-success
  ;; TODO choose which keys are stored
  [services.re-frame/->local-store]
  (fn [{:keys [db]} [_ session]]
    (let [{:keys [query-params]} (router/parse-url (.substr js/location.hash 1))]
      {:db (assoc db :session session)
       :dispatch-n [[:navigate [:login]]
                    [:toast "clear"]]})))



;; TODO form validation, etc...
(defn- signup [e]
  (.preventDefault e)
  (let [data (forms/serialize-form (gdom/getElement "signup"))]
    (re-frame/dispatch [::signup data])))


(defn signup-panel []
  [sa/Grid {:padded true
            :centered true}
   [sa/GridRow
    [sa/GridColumn {:style {:max-width 450
                            :top 50}}
     [sa/Header {:as "h3"} "Signup to your account"]
     [sa/Form
      {:size "large"
       :id "signup"}
      [sa/Segment
       {:raised true}
       [sa/FormInput
        {:icon "user",
         :icon-position "left",
         :name "name"
         :placeholder "Full Name"}]
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
       [sa/Button {:size "large" :on-click signup} "Signup"]]]
     [sa/Message "Already have an account? " [:a {:href (router/url-for :login)} "Login"]]]]])


(defmethod router/panels :signup [] [signup-panel])

