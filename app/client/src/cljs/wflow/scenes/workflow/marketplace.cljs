(ns wflow.scenes.workflow.marketplace
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [soda-ash.core :as sa]
            [clojure.string :as str]
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

(def month-names
  "A vector of abbreviations for the twelve months, in order."
  ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(defn month-name
  "Returns the abbreviation for a month in the range [1..12]."
  [month]
  (get month-names (dec month)))

(defn- parse-iso-date
  "Returns a map with keys :year, :month, and :day from the given ISO 8601 date string."
  [date]
  (zipmap [:year :month :day] (map js/parseInt (str/split date #"-0?"))))

(defn- format-date [date]
  (let [{:keys [day month year]} (parse-iso-date date)]
    (str (month-name month) " " day ", " year)))


(defn workflows [items]
  [sa/ListSA
   {:divided true, :relaxed true}
   (for [{:as item :keys [_id name updatedAt]} items]
     (let [desc updatedAt
           price (str (rand-int 5) " WFT")]
       ^{:key _id}
       [sa/ListItem

        [sa/ListIcon
         {:style {:float "right"}
          :name "pencil", :vertical-align "middle"}]
        [sa/ListIcon
         {:style {:float "right"}
          :name "play", :vertical-align "middle"}]
        [sa/ButtonGroup
         {:style {:float "right"
                  :margin-right 10}
          :size "small"
          :color "yellow"}
         [sa/Button (str "Buy (" price ")")]]

        [sa/ListContent
         [sa/ListHeader {:as "a"} name]
         [sa/ListDescription {:as "a"} (format-date desc)]]]))])


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
        [sa/Button (:name user)]]]]]))



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


(defmethod router/panels :marketplace [] [home-panel])

