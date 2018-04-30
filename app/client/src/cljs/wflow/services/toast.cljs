(ns wflow.services.toast
  (:require [re-frame.core :as re-frame]
            [oops.core :as o]))

(re-frame/reg-fx
  :toast
  (fn [[method message]]
    (o/ocall!+ js/toastr method message)))


(re-frame/reg-event-fx
  :toast
  (fn [ctx [_ method message]]
    {:toast [method message]}))
