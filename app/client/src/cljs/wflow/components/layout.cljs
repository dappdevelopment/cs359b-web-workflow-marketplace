(ns wflow.components.layout
  (:require [reagent.core :as r]
            [soda-ash.core :as sa]
            [wflow.router :as router]))


(def menu-style
  {:position "fixed"
   :top 0
   :bottom 0
   :left 0
   :width 230
   :padding-bottom "1em"
   :background "rgb(27, 28, 29)"
   :overflow-y "overlay"
   })


(def float-left
  {:float "left"
   :margin-left 0
   :margin-right 7})



(defn menu-item []
  [sa/MenuItem {:name "home" :active true}
   [sa/Icon {:name "inbox" :style float-left}]
   [sa/Label {:color "red"} "1"]
   "Inbox"])


(defn left-menu [{:keys [active-item handle-item-click]}]
  [sa/Menu
   {:inverted true
    :vertical true
    :fixed "left"
    :style menu-style}
   [sa/MenuItem {:name "home"}
    [sa/Image
     {:src (router/ext-url-for :img/logo-transparent)
      :style {:width 27}
      :spaced "right"}]
    [:strong "Web Workflows"]]
   [sa/MenuItem {:name "marketplace"
                 :active (= @active-item :marketplace)
                 :on-click #(handle-item-click :marketplace)}
    [sa/Icon {:name "briefcase" :style float-left}]
    [sa/Label {:color "red"} "1"]
    "My Workflows"]
   [sa/MenuItem {:name "workflow/create"
                 :active (= @active-item :workflow/create)
                 :on-click #(handle-item-click :workflow/create)}
    [sa/Icon {:name "plus" :style float-left}]
    "Create Workflow"]
   [sa/MenuItem {:name "balance"
                 :active (= @active-item :balance)
                 :on-click #(handle-item-click :balance)}
    [sa/Icon {:name "dollar" :style float-left}]
    "My Balance"]
   [sa/MenuItem {:name "settings"
                 :active (= @active-item :settings)
                 :on-click #(handle-item-click :settings)}
    [sa/Icon {:name "setting" :style float-left}]
    "Settings"]
   [sa/MenuItem {:name "debug"
                 :active (= @active-item :debug)
                 :on-click #(handle-item-click :debug)}
    [sa/Icon {:name "bug" :style float-left}]
    "Debug"]])







(def content-style
  {:margin-left 230})


(def item-menu-style
  {:position "fixed"
   :bottom 0
   :top 0
   :width 320
   :margin-top 0
   :margin-bottom 0
   :border-radius 0
   :overflow-y "overlay"
   })




(defn item-menu [{:keys [active-item handle-item-click]}]
  [sa/Menu
   {:vertical true
    :style (merge content-style item-menu-style)}
   [sa/MenuItem
    [sa/Input {:icon "search"
               :icon-position "left"
               :placeholder "Search cases..."}]]
   [sa/MenuItem
    {:active (= active-item "inbox"),
     :on-click handle-item-click}
    [sa/Header {:as "h4"} "Michael Flores"]
    [:p "Having trouble with my login..."]]
   [sa/MenuItem
    {:active (= active-item "inbox"),
     :on-click handle-item-click
     :style {:background-color "#1678c2"
             :color "white"}}
    [sa/Header {:as "h4"
                :style {:background-color "#1678c2"
                        :color "white"}} "Bob Holland"]
    [:p "Premium delivery plans?"]]
   [sa/MenuItem
    {:active (= active-item "inbox"),
     :on-click handle-item-click}
    [sa/Header {:as "h4"} "Kathleen McAfee"]
    [:p "Good to meet you!"]]])



(defn big-form [title form message]
  [:div.big-form
   [:style
    "#app, body div.big-form {
    height: 100%;
    }"]
   [sa/Grid
    {:text-align "center",
     :style {:height "100%"},
     :vertical-align "middle"}
    [sa/GridColumn
     {:style {:max-width 450}}
     [sa/Header
      {:as "h2"}
      [sa/Image {:src (router/ext-url-for :img/logo-circle)}]
      title]
     form
     message]]])
