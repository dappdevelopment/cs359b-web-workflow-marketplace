(ns wflow.scenes.workflow.marketplace
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




(defn workflows [items]
  [sa/ListSA
   {:divided true, :relaxed true}
   (for [{:as item :keys [_id name updatedAt]} items]
     (let [desc updatedAt]
       ^{:key _id}
       [sa/ListItem

        [sa/ListIcon
         {:style {:float "right"}
          :name "pencil", :vertical-align "middle"}]
        [sa/ListIcon
         {:style {:float "right"}
          :name "play", :vertical-align "middle"}]

        [sa/ListIcon
         {:name "like outline", :size "large", :vertical-align "middle"}]
        [sa/ListContent
         [sa/Header {:as "h4"} 93]]
        [sa/ListIcon
         {:name "dislike outline", :size "large", :vertical-align "middle"}]
        [sa/ListContent
         [sa/ListHeader {:as "a"} name]
         [sa/ListDescription {:as "a"} desc]]
        ]))])


(defn filters [{:keys [handle-item-click
                       active-item]}
               & children]
  (let [user @(re-frame/subscribe [::user/user])]
    [sa/Menu
     {:pointing true}
     [sa/MenuItem
      {:name "all",
       :active true,
       :on-click handle-item-click}]
     [sa/MenuItem
      {:name "trending",
       :active (= active-item "messages"),
       :on-click handle-item-click}]
     [sa/MenuItem
      {:name "top rated",
       :active (= active-item "friends"),
       :on-click handle-item-click}]
     [sa/MenuItem
      {:name "mine",
       :active (= active-item "friends"),
       :on-click handle-item-click}]
     [sa/MenuMenu
      {:position "right"}
      #_[sa/MenuItem
       [sa/Input {:icon "search", :placeholder "Search..."}]]
      [sa/MenuItem
       [sa/ButtonGroup
        {:color "teal"}
        ;; TODO build login
        [sa/Button {} "Allan Jiang"]]]]]))



(defn home-panel []
  (let [active-item (re-frame/subscribe [::router/route-page])
        handle-item-click #(re-frame/dispatch [:navigate [%]])
        workflow-data @(re-frame/subscribe [::data.workflows/workflows])]
    [:div
     [layout/left-menu
      {:active-item active-item
       :handle-item-click handle-item-click}]
     [:div {:style content-style}
      [sa/Grid {:padded true}
       [sa/GridRow
        [sa/GridColumn
         [filters {:handle-item-click #(js/alert "TODO") :active-item active-item}]
         [workflows workflow-data]]]]]]))


(defmethod router/panels :home [] (re-frame/dispatch [:navigate [:workflow/mine]]))

(defmethod router/panels :marketplace [] [home-panel])

