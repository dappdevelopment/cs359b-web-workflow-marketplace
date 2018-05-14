(ns figwheel.connect.build-dev (:require [wflow.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/wflow.core.mount-root (apply js/wflow.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'wflow.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3233/figwheel-ws"})

