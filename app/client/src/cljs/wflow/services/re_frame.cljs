(ns wflow.services.re-frame
  (:require [re-frame.core :as re-frame]
            [wflow.services.server :as server]
            [wflow.utils.storage :as storage]
            [cljs.spec.alpha :as s]))


(re-frame/reg-event-db
  ::write-path
  (fn [db [_ path value]]
    (assoc-in db path value)))


(re-frame/reg-event-db
  ::clean-path
  (fn [db [_ path]]
    (assoc-in db path nil)))



(defn reg-sub-remote [kw {:keys [path query cleanup default]
                          :or {query identity
                               cleanup identity
                               default nil}}]
  ;; TODO use truss
  (re-frame/reg-sub-raw
    kw
    (fn [db [_ & args]]
      (apply query args)

      (reagent.ratom/make-reaction
        #(get-in @db path default)
        :on-dispose cleanup))))




;; fetch remote data store
(defn rest-store
  [id {:keys [default persistence paging]
       :or {paging true
            default {:data []}}}]
  (let [path [:stores id]
        write! #(re-frame/dispatch [::write-path path %])
        clean! #(re-frame/dispatch [::clean-path path])
        extend-kw #(keyword (str (name %1) %2))
        query (fn [q]
                (-> (server/ajax "GET" path {:query q})
                  (.then write!)))
        cleanup (case persistence
                  :memory identity
                  clean!)]
    (if paging
      (let [page-id (extend-kw id "-meta")]
        (reg-sub-remote page-id {:path path
                                 :query query
                                 :cleanup cleanup
                                 :default default})
        (re-frame/reg-sub
          id
          ;; FIXME cannot pass params in this style
          :<- [page-id]
          (fn [page]
            (:data page))))
      (reg-sub-remote id {:path path
                          :query query
                          :cleanup cleanup
                          :default default}))))


(re-frame/reg-fx
  :ajax
  (fn [{:keys [request success fail]}]
    ;; TODO use truss...
    {:pre [(every? vector? [request success fail])]}
    (-> (apply server/ajax request)
      (.then #(re-frame/dispatch (conj success %))
             #(re-frame/dispatch (conj fail %))))))


(defn rest-call
  [id {:keys [method path success fail]}]
  (re-frame/reg-event-fx
    id
    (fn [{:keys [db]} [_ params]]
      {:ajax {:request [method path params]
              :success success
              :fail fail}})))




;; interceptors ;;;;
(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))


;; now we create an interceptor using `after`
(defn spec-intc [a-spec]
  (re-frame/after (partial check-and-throw a-spec)))



(re-frame/reg-cofx
  :local-store
  (fn [cofx _]
    (assoc cofx :local-store (storage/local-store->data))))


(re-frame/reg-cofx
  :memory-store
  (fn [cofx _]
    (assoc cofx :memory-store @storage/memory-store)))


(def ->local-store
  (re-frame/after storage/data->local-store))



(defn fx->event [fx-id]
  (re-frame/reg-event-fx
    fx-id
    (fn [ctx [_ event]]
      {fx-id event})))
