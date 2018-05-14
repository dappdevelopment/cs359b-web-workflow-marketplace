// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.utils.storage');
goog.require('cljs.core');
goog.require('wflow.utils.transit');
goog.require('wflow.config');
goog.require('re_frame.core');
wflow.utils.storage.data__GT_local_store = (function wflow$utils$storage$data__GT_local_store(data){
return localStorage.setItem(wflow.config.ls_key,wflow.utils.transit.write.call(null,data));
});
wflow.utils.storage.local_store__GT_data = (function wflow$utils$storage$local_store__GT_data(){
var G__45800 = localStorage.getItem(wflow.config.ls_key);
if((G__45800 == null)){
return null;
} else {
return wflow.utils.transit.read.call(null,G__45800);
}
});
wflow.utils.storage.memory_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=storage.js.map?rel=1526321164214
