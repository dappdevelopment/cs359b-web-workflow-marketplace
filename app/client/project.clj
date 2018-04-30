(defproject wflow "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0-alpha16"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async "0.3.442"]
                 [org.clojure/test.check "0.9.0"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.taoensso/timbre "4.10.0"]
                 [devcards "0.2.3"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]
                 [bidi "2.1.3"]
                 [soda-ash "0.78.2"]
                 [binaryage/oops "0.5.8"]]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cljsbuild "1.1.5" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src/clj"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true  ;; <- note this
                                   ;; :open-urls will pop open your application
                                   ;; in the default browser once Figwheel has
                                   ;; started and complied your application.
                                   ;; Comment this out once it no longer serves you.
                                   :open-urls ["http://localhost:3233/cards.html"]}
                        :compiler { :main       "wflow.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/wflow_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id           "dev"
                        :source-paths ["src/cljs"]
                        :figwheel     {:on-jsload "wflow.core/mount-root"}
                        :compiler     {:main                 wflow.core
                                       :output-to            "resources/public/js/compiled/app.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :asset-path           "js/compiled/out"
                                       :source-map-timestamp true
                                       :preloads             [devtools.preload
                                                              #_day8.re-frame-10x.preload]
                                       :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                                       :external-config      {:devtools/config {:features-to-install :all}}
                                       }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "wflow.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/wflow.js"
                                   :optimizations :advanced}}]}

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 3233}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  #_[day8.re-frame/re-frame-10x "0.2.0"]
                                  [figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
