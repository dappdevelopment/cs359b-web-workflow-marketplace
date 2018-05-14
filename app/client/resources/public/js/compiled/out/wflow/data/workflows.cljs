(ns wflow.data.workflows
  (:require [re-frame.core :as re-frame]
            [wflow.services.re-frame :as services.re-frame]
            [wflow.utils.forms :as forms]
            [wflow.router :as router]))


(services.re-frame/rest-store
  ::workflows
  {:default []
   :url "/workflows"
   :paging true})
