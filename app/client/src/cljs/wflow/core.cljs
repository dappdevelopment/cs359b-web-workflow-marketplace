(ns wflow.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]

            [wflow.scenes.user.login]
            [wflow.scenes.user.signup]
            [wflow.scenes.settings]
            [wflow.scenes.home]
            [wflow.scenes.workflow.create]
            [wflow.scenes.workflow.marketplace]
            [wflow.scenes.debug]

            [wflow.services.toast :as toast]
            [wflow.router :as router]
            [wflow.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))


(defn main-panel []
  (let [active-panel (re-frame/subscribe [::router/route-page])]
    (fn []
      (router/panels @active-panel))))


(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [main-panel]
                  (.getElementById js/document "app")))


(defn ^:export init []
  (dev-setup)
  (router/start!)
  (mount-root))

