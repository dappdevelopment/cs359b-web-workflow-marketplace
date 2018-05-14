(ns wflow.services.workflow
  (:require [wflow.services.server :as server]))


(defn init [ctx]
  (swap! ctx update :logs conj "init")
  (-> (server/ajax "GET" "/debug/rt/new")
    (.then #(swap! ctx merge %))))


(defn start [ctx id]
  (swap! ctx update :logs conj (str "start " id))
  (-> (server/ajax "GET" "/debug/rt/start"
                   {:query {:id id}})
    (.then #(swap! ctx assoc :started (js/Date.)))))


(defn init+start [ctx]
  (->
    (init ctx)
    (.then #(start ctx (:id %)))))


(defn stop [ctx id]
  (swap! ctx update :logs conj (str "stop " id))
  (-> (server/ajax "GET" "/debug/rt/stop"
                   {:query {:id id}})
    (.then #(swap! ctx dissoc :started))))


(defn navigate [ctx id]
  (when-let [url (js/prompt "url")]
    (swap! ctx update :logs conj (str "navigate " url))
    (-> (server/ajax "GET" "/debug/rt/dispatch"
                     {:query {:id id :data {:type "navigate" :value url}}})
      (.then #(swap! ctx merge %)))))


(defn click [ctx id]
  (when-let [selector (js/prompt "CSS selector:")]
    (swap! ctx update :logs conj (str "click " selector))
    (-> (server/ajax "GET" "/debug/rt/dispatch"
                     {:query {:id id :data {:type "click" :selector selector}}})
      (.then #(swap! ctx merge %)))))


(defn type-keys [ctx id]
  (when-let [selector (js/prompt "CSS selector:")]
    (let [ value (js/prompt "value") ]
      (swap! ctx update :logs conj (str "type " selector " " value))
      (-> (server/ajax "GET" "/debug/rt/dispatch"
                       {:query {:id id :data {:type "type" :selector selector :value value}}})
        (.then #(swap! ctx merge %))))))



(defn do-actions [ctx id actions]
  (when-not (empty? actions)
    (let [[action & remaining] actions]
      (-> (server/ajax "GET" "/debug/rt/dispatch"
                       {:query {:id id :data action}})
        (.then #(swap! ctx update :logs conj action))
        (.then (fn []
                 (js/setTimeout
                   #(do-actions ctx id remaining)
                   3000)))))))

