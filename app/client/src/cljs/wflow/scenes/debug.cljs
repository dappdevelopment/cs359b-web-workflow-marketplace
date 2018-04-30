(ns wflow.scenes.debug
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



(defn dbg-info [state]
  (fn []
    [sa/GridRow
     [sa/GridColumn
      [sa/Header {:as "h3"} "State"]
      [:pre>code {} (with-out-str
                      (-> @state
                        (dissoc :logs)
                        pprint))]]
     [sa/GridColumn
      [sa/Header {:as "h3"} "Logs"]
      [:pre>code {} (reduce (fn [s l]
                              (str s l "\n")) "" (get @state :logs))]]]))

(defn commands []
  [sa/TextArea {:id "commands"}])

(defn get-actions []
  (t/read (.-value (js/document.getElementById "commands"))))

(defn workflows []
  (r/with-let [state (r/atom {:logs []})]
    [sa/Grid
     {:columns "equal", :relaxed "very" :divided true}
     [sa/GridRow
      [sa/GridColumn
       [sa/Button {:on-click (partial workflow/init+start state)} "init+start"]
       [sa/Button {:on-click (partial workflow/stop state (:id @state))} "stop"]
       [sa/Button {:on-click (partial workflow/navigate state (:id @state))} "navigate"]
       [sa/Button {:on-click (partial workflow/click state (:id @state))} "click"]
       [sa/Button {:on-click (partial workflow/type-keys state (:id @state))} "type"]
       [sa/Button {:on-click #(workflow/do-actions state (:id @state) (get-actions))} "do"]]]
     [sa/GridRow
      [sa/GridColumn
       [commands]]]
     [dbg-info state]]))




(defn home-panel []
  (let [active-item (re-frame/subscribe [::router/route-page])
        handle-item-click #(re-frame/dispatch [:navigate [%]])]
    [:div
     [layout/left-menu
      {:active-item active-item
       :handle-item-click handle-item-click}]
     [:div {:style content-style}
      [workflows]]]))


(defmethod router/panels :debug [] [home-panel])



(comment
  "local state method:"

  (def data-path [:ui :home])


  (re-frame/reg-sub
    ::data
    (fn [db]
      (get-in db data-path)))


  (re-frame/reg-event-db
    ::set-panel
    [(re-frame/path data-path)]
    (fn [data [_ panel]]
      (assoc data :panel panel)))


  (re-frame/reg-sub
    ::panel
    :<- [::data]
    (fn [data]
      (:panel data :workflows)))
  )

