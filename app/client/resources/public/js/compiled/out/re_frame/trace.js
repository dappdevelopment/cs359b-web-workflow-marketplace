// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37295){
var map__37296 = p__37295;
var map__37296__$1 = ((((!((map__37296 == null)))?((((map__37296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37296):map__37296);
var operation = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__32347__auto__ = child_of;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__37298_37310 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37299_37311 = null;
var count__37300_37312 = (0);
var i__37301_37313 = (0);
while(true){
if((i__37301_37313 < count__37300_37312)){
var vec__37302_37314 = cljs.core._nth.call(null,chunk__37299_37311,i__37301_37313);
var k_37315 = cljs.core.nth.call(null,vec__37302_37314,(0),null);
var cb_37316 = cljs.core.nth.call(null,vec__37302_37314,(1),null);
try{cb_37316.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e37305){var e_37317 = e37305;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37315,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_37317);
}
var G__37318 = seq__37298_37310;
var G__37319 = chunk__37299_37311;
var G__37320 = count__37300_37312;
var G__37321 = (i__37301_37313 + (1));
seq__37298_37310 = G__37318;
chunk__37299_37311 = G__37319;
count__37300_37312 = G__37320;
i__37301_37313 = G__37321;
continue;
} else {
var temp__6738__auto___37322 = cljs.core.seq.call(null,seq__37298_37310);
if(temp__6738__auto___37322){
var seq__37298_37323__$1 = temp__6738__auto___37322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37298_37323__$1)){
var c__33278__auto___37324 = cljs.core.chunk_first.call(null,seq__37298_37323__$1);
var G__37325 = cljs.core.chunk_rest.call(null,seq__37298_37323__$1);
var G__37326 = c__33278__auto___37324;
var G__37327 = cljs.core.count.call(null,c__33278__auto___37324);
var G__37328 = (0);
seq__37298_37310 = G__37325;
chunk__37299_37311 = G__37326;
count__37300_37312 = G__37327;
i__37301_37313 = G__37328;
continue;
} else {
var vec__37306_37329 = cljs.core.first.call(null,seq__37298_37323__$1);
var k_37330 = cljs.core.nth.call(null,vec__37306_37329,(0),null);
var cb_37331 = cljs.core.nth.call(null,vec__37306_37329,(1),null);
try{cb_37331.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e37309){var e_37332 = e37309;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37330,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_37332);
}
var G__37333 = cljs.core.next.call(null,seq__37298_37323__$1);
var G__37334 = null;
var G__37335 = (0);
var G__37336 = (0);
seq__37298_37310 = G__37333;
chunk__37299_37311 = G__37334;
count__37300_37312 = G__37335;
i__37301_37313 = G__37336;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1525108932643
