(ns wflow.scenes.workflow.create
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [clojure.pprint :refer [pprint]]
            [goog.dom :as gdom]
            [wflow.components.layout :as layout]
            [wflow.router :as router]
            [wflow.utils.forms :as forms]
            [wflow.services.workflow :as workflow]
            [wflow.utils.transit :as t]))


(def content-style
  {:position "absolute"
   :left (+ 230 1)
   :right 0
   :top 0
   :bottom 0})


(re-frame/reg-event-fx
  ::create-workflow
  (fn [{:keys [db]} [_ data]]
    {:ajax {:request ["POST" "/workflows" {:data data
                                           :authorization (get-in db [:session :accessToken])}]
            :success [:toast "success" "workflow created!"]
            :fail [:toast "error" "failed to save workflow"]}}))


(defn create-workflow [e]
  (let [form-element (gdom/getElement "create-workflow")
        data (forms/serialize-form form-element)]
    ;; TODO clear form once success/fail returns....
    (.reset form-element)
    (re-frame/dispatch [::create-workflow data])))


(defn workflows []
  [sa/Grid {:centered true
            :vertical-align "middle"}
   [sa/GridRow
    [sa/GridColumn {:style {:max-width 550
                            :top 25}}
     [sa/Segment {:raised true}
      [sa/Header {:as "h3"} "Create Workflow"]
      [sa/Form
       {:id "create-workflow"
        :on-submit create-workflow}
       [sa/FormField
        [:label "Workflow name"]
        [:input {:placeholder "Workflow name"
                 :name "name"}]]
       [sa/FormField
        [:label "Unique Identifier"]
        [:input {:placeholder "ID"
                 :name "slug"}]]
       [:span "TODO TAGS"]
       [sa/FormField
        [sa/Checkbox {:label "I agree to the Terms and Conditions"}]]
       [sa/Button {:type "submit"} "Submit"]]]]]])




(defn home-panel []
  (let [active-item (re-frame/subscribe [::router/route-page])
        handle-item-click #(re-frame/dispatch [:navigate [%]])]
    [:div
     [layout/left-menu
      {:active-item active-item
       :handle-item-click handle-item-click}]
     [:div {:style content-style}
      [workflows]]]))


(defmethod router/panels :workflow/create [] [home-panel])

