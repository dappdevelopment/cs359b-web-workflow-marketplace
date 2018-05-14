(ns wflow.services.server
  (:require [oops.core :as o]
            [wflow.utils.transit :as t]
            [clojure.walk :as w]
            [goog.Uri.QueryData :as qd]))


(def $ js/jQuery)


(def text->clj (comp w/keywordize-keys t/read))


(defn ajax
  ([method path]
   (ajax method path {}))
  ([method path {:as options
                 :keys [query data]}]
   (js/Promise.
     (fn [success fail]
       (let [success-fn (fn [data status $xhr]
                          (success data))
             error-fn   (fn [$xhr status error]
                          (fail
                            (ex-info (o/oget $xhr "status")
                                     (text->clj (o/oget $xhr "responseText")))))
             headers #js {"Authorization" (:authorization options)}
             converters #js {"text json" text->clj}]
         (o/ocall! $ "ajax"
                   #js
                   {:url (cond-> path
                           query (str "?" (o/ocall! $ "param" (clj->js query))))
                    :method method
                    :data (clj->js data)
                    :headers headers
                    :converters converters
                    :success success-fn
                    :error error-fn}))))))

