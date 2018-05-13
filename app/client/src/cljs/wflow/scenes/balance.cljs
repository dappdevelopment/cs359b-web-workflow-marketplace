(ns wflow.scenes.balance
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [clojure.pprint :refer [pprint]]
            [wflow.data.workflows :as data.workflows]
            [wflow.data.user :as user]
            [wflow.components.layout :as layout]
            [wflow.router :as router]
            [wflow.services.workflow :as workflow]
            [wflow.utils.transit :as t]))


(def content-style
  {:position "absolute"
   :left (+ 230 1)
   :right 0
   :top 0
   :bottom 0})


(defn balance []
  [:div
   [sa/Header {:as "h2"} "Your remaining funds"]
   [sa/Button {:color "blue"} "Load more cash"]])


(defn home-panel []
  (let [active-item (re-frame/subscribe [::router/route-page])
        handle-item-click #(re-frame/dispatch [:navigate [%]])]
    [:div
     [layout/left-menu
      {:active-item active-item
       :handle-item-click handle-item-click}]
     [:div {:style content-style}
      [sa/Grid {:padded true}
       [sa/GridRow
        [sa/GridColumn
         [balance]]]]]]))


(defmethod router/panels :balance [] [home-panel])

