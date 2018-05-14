// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.utils.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
wflow.utils.transit.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
wflow.utils.transit.writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
wflow.utils.transit.read = cljs.core.partial.call(null,cognitect.transit.read,wflow.utils.transit.reader);
wflow.utils.transit.write = cljs.core.partial.call(null,cognitect.transit.write,wflow.utils.transit.writer);

//# sourceMappingURL=transit.js.map?rel=1526321164180
