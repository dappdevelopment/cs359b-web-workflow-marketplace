(ns wflow.utils.transit
  (:refer-clojure :exclude [read])
  (:require [cognitect.transit :as t]))


(def reader (t/reader :json))
(def writer (t/writer :json))


(def read (partial t/read reader))
(def write (partial t/write writer))
