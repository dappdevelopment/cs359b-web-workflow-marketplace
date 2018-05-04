(ns wflow.utils.storage
  (:require [wflow.utils.transit :as t]
            [wflow.config :as config]
            [re-frame.core :as re-frame]))


(defn data->local-store
  [data]
  (.setItem js/localStorage config/ls-key (t/write data)))


(defn local-store->data
  []
  (some->> (.getItem js/localStorage config/ls-key) (t/read)))


(def memory-store (atom {}))


