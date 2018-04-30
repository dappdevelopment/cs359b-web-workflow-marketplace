(ns wflow.scenes.workflow.mine
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [clojure.pprint :refer [pprint]]
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
   (for [{:as item :keys [id icon header desc]} items]
     ^{:key id}
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
       [sa/ListHeader {:as "a"} header]
       [sa/ListDescription {:as "a"} desc]]
      ])])




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

         [sa/Menu
          {:pointing true}
          [sa/MenuItem
           {:name "home",
            :active true,
            :on-click handle-item-click}]
          [sa/MenuItem
           {:name "messages",
            :active (= active-item "messages"),
            :on-click handle-item-click}]
          [sa/MenuItem
           {:name "friends",
            :active (= active-item "friends"),
            :on-click handle-item-click}]
          [sa/MenuMenu
           {:position "right"}
           [sa/MenuItem
            ;; [sa/Input {:icon "search", :placeholder "Search..."}]
            [sa/ButtonGroup
             {:color "teal"}
             [sa/Button "Allan Jiang"]]]]]


         [sa/Segment
          [sa/Header {:as "h2"} "Your Web Workflows"]
          [workflows
           [{:id 1 :icon "github" :header "Book Cheapest Flight"
             :desc "Updated 10 minutes ago"}
            {:id 2 :icon "github"
             :header "Add courses from Axess to Google Calendar"
             :desc "Updated 15 minutes ago"}
            {:id 3 :icon "github"
             :header "Random click on BuzzFeed quizzes"
             :desc "Updated 22 minutes ago"}
            ]]
          [sa/Button {:color "blue"} "Add new workflow"]]
         ]]]
      ]]))


(defmethod router/panels :home [] (re-frame/dispatch [:navigate [:workflow/mine]]))

(defmethod router/panels :workflow/mine [] [home-panel])

