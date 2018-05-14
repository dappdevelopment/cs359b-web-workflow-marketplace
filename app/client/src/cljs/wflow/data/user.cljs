(ns wflow.data.user
  (:require [re-frame.core :as re-frame]
            [wflow.services.re-frame :as services.re-frame]
            [wflow.utils.forms :as forms]
            [wflow.router :as router]))

(re-frame/reg-sub
  ::user
  (fn [db]
    (get-in db [:session :user])))
