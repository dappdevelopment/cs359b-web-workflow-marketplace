(ns wflow.utils.forms
  (:require [oops.core :as o]))


(defn serialize-form
  "serializes form using jquery serializeArray"
  [form-el]
  (let [f (fn [form kvo]
            (assoc form
                   (keyword (o/oget kvo "name"))
                   (o/oget kvo "value")))]
    (->> (o/ocall! (js/$ form-el) "serializeArray")
      (array-seq)
      (reduce f {}))))


