(ns wflow.scenes.home
  (:require [wflow.router :as router]
            [re-frame.core :as re-frame]))

(defmethod router/panels :home [] (re-frame/dispatch [:navigate [:marketplace]]))
