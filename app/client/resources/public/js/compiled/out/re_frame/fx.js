// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37920 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__37921 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37922 = null;
var count__37923 = (0);
var i__37924 = (0);
while(true){
if((i__37924 < count__37923)){
var vec__37925 = cljs.core._nth.call(null,chunk__37922,i__37924);
var effect_key = cljs.core.nth.call(null,vec__37925,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37925,(1),null);
var temp__6736__auto___37941 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___37941)){
var effect_fn_37942 = temp__6736__auto___37941;
effect_fn_37942.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37943 = seq__37921;
var G__37944 = chunk__37922;
var G__37945 = count__37923;
var G__37946 = (i__37924 + (1));
seq__37921 = G__37943;
chunk__37922 = G__37944;
count__37923 = G__37945;
i__37924 = G__37946;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__37921);
if(temp__6738__auto__){
var seq__37921__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37921__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__37921__$1);
var G__37947 = cljs.core.chunk_rest.call(null,seq__37921__$1);
var G__37948 = c__33278__auto__;
var G__37949 = cljs.core.count.call(null,c__33278__auto__);
var G__37950 = (0);
seq__37921 = G__37947;
chunk__37922 = G__37948;
count__37923 = G__37949;
i__37924 = G__37950;
continue;
} else {
var vec__37928 = cljs.core.first.call(null,seq__37921__$1);
var effect_key = cljs.core.nth.call(null,vec__37928,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37928,(1),null);
var temp__6736__auto___37951 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___37951)){
var effect_fn_37952 = temp__6736__auto___37951;
effect_fn_37952.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37953 = cljs.core.next.call(null,seq__37921__$1);
var G__37954 = null;
var G__37955 = (0);
var G__37956 = (0);
seq__37921 = G__37953;
chunk__37922 = G__37954;
count__37923 = G__37955;
i__37924 = G__37956;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__37273__auto___37957 = re_frame.interop.now.call(null);
var duration__37274__auto___37958 = (end__37273__auto___37957 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37274__auto___37958,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__37273__auto___37957);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37920;
}} else {
var seq__37931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37932 = null;
var count__37933 = (0);
var i__37934 = (0);
while(true){
if((i__37934 < count__37933)){
var vec__37935 = cljs.core._nth.call(null,chunk__37932,i__37934);
var effect_key = cljs.core.nth.call(null,vec__37935,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37935,(1),null);
var temp__6736__auto___37959 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___37959)){
var effect_fn_37960 = temp__6736__auto___37959;
effect_fn_37960.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37961 = seq__37931;
var G__37962 = chunk__37932;
var G__37963 = count__37933;
var G__37964 = (i__37934 + (1));
seq__37931 = G__37961;
chunk__37932 = G__37962;
count__37933 = G__37963;
i__37934 = G__37964;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__37931);
if(temp__6738__auto__){
var seq__37931__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37931__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__37931__$1);
var G__37965 = cljs.core.chunk_rest.call(null,seq__37931__$1);
var G__37966 = c__33278__auto__;
var G__37967 = cljs.core.count.call(null,c__33278__auto__);
var G__37968 = (0);
seq__37931 = G__37965;
chunk__37932 = G__37966;
count__37933 = G__37967;
i__37934 = G__37968;
continue;
} else {
var vec__37938 = cljs.core.first.call(null,seq__37931__$1);
var effect_key = cljs.core.nth.call(null,vec__37938,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37938,(1),null);
var temp__6736__auto___37969 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___37969)){
var effect_fn_37970 = temp__6736__auto___37969;
effect_fn_37970.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37971 = cljs.core.next.call(null,seq__37931__$1);
var G__37972 = null;
var G__37973 = (0);
var G__37974 = (0);
seq__37931 = G__37971;
chunk__37932 = G__37972;
count__37933 = G__37973;
i__37934 = G__37974;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37975 = cljs.core.seq.call(null,value);
var chunk__37976 = null;
var count__37977 = (0);
var i__37978 = (0);
while(true){
if((i__37978 < count__37977)){
var map__37979 = cljs.core._nth.call(null,chunk__37976,i__37978);
var map__37979__$1 = ((((!((map__37979 == null)))?((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var effect = map__37979__$1;
var ms = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37975,chunk__37976,count__37977,i__37978,map__37979,map__37979__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37975,chunk__37976,count__37977,i__37978,map__37979,map__37979__$1,effect,ms,dispatch))
,ms);
}

var G__37983 = seq__37975;
var G__37984 = chunk__37976;
var G__37985 = count__37977;
var G__37986 = (i__37978 + (1));
seq__37975 = G__37983;
chunk__37976 = G__37984;
count__37977 = G__37985;
i__37978 = G__37986;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__37975);
if(temp__6738__auto__){
var seq__37975__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37975__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__37975__$1);
var G__37987 = cljs.core.chunk_rest.call(null,seq__37975__$1);
var G__37988 = c__33278__auto__;
var G__37989 = cljs.core.count.call(null,c__33278__auto__);
var G__37990 = (0);
seq__37975 = G__37987;
chunk__37976 = G__37988;
count__37977 = G__37989;
i__37978 = G__37990;
continue;
} else {
var map__37981 = cljs.core.first.call(null,seq__37975__$1);
var map__37981__$1 = ((((!((map__37981 == null)))?((((map__37981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37981):map__37981);
var effect = map__37981__$1;
var ms = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37975,chunk__37976,count__37977,i__37978,map__37981,map__37981__$1,effect,ms,dispatch,seq__37975__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37975,chunk__37976,count__37977,i__37978,map__37981,map__37981__$1,effect,ms,dispatch,seq__37975__$1,temp__6738__auto__))
,ms);
}

var G__37991 = cljs.core.next.call(null,seq__37975__$1);
var G__37992 = null;
var G__37993 = (0);
var G__37994 = (0);
seq__37975 = G__37991;
chunk__37976 = G__37992;
count__37977 = G__37993;
i__37978 = G__37994;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37995 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37996 = null;
var count__37997 = (0);
var i__37998 = (0);
while(true){
if((i__37998 < count__37997)){
var event = cljs.core._nth.call(null,chunk__37996,i__37998);
re_frame.router.dispatch.call(null,event);

var G__37999 = seq__37995;
var G__38000 = chunk__37996;
var G__38001 = count__37997;
var G__38002 = (i__37998 + (1));
seq__37995 = G__37999;
chunk__37996 = G__38000;
count__37997 = G__38001;
i__37998 = G__38002;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__37995);
if(temp__6738__auto__){
var seq__37995__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37995__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__37995__$1);
var G__38003 = cljs.core.chunk_rest.call(null,seq__37995__$1);
var G__38004 = c__33278__auto__;
var G__38005 = cljs.core.count.call(null,c__33278__auto__);
var G__38006 = (0);
seq__37995 = G__38003;
chunk__37996 = G__38004;
count__37997 = G__38005;
i__37998 = G__38006;
continue;
} else {
var event = cljs.core.first.call(null,seq__37995__$1);
re_frame.router.dispatch.call(null,event);

var G__38007 = cljs.core.next.call(null,seq__37995__$1);
var G__38008 = null;
var G__38009 = (0);
var G__38010 = (0);
seq__37995 = G__38007;
chunk__37996 = G__38008;
count__37997 = G__38009;
i__37998 = G__38010;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__38011 = cljs.core.seq.call(null,value);
var chunk__38012 = null;
var count__38013 = (0);
var i__38014 = (0);
while(true){
if((i__38014 < count__38013)){
var event = cljs.core._nth.call(null,chunk__38012,i__38014);
clear_event.call(null,event);

var G__38015 = seq__38011;
var G__38016 = chunk__38012;
var G__38017 = count__38013;
var G__38018 = (i__38014 + (1));
seq__38011 = G__38015;
chunk__38012 = G__38016;
count__38013 = G__38017;
i__38014 = G__38018;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__38011);
if(temp__6738__auto__){
var seq__38011__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38011__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__38011__$1);
var G__38019 = cljs.core.chunk_rest.call(null,seq__38011__$1);
var G__38020 = c__33278__auto__;
var G__38021 = cljs.core.count.call(null,c__33278__auto__);
var G__38022 = (0);
seq__38011 = G__38019;
chunk__38012 = G__38020;
count__38013 = G__38021;
i__38014 = G__38022;
continue;
} else {
var event = cljs.core.first.call(null,seq__38011__$1);
clear_event.call(null,event);

var G__38023 = cljs.core.next.call(null,seq__38011__$1);
var G__38024 = null;
var G__38025 = (0);
var G__38026 = (0);
seq__38011 = G__38023;
chunk__38012 = G__38024;
count__38013 = G__38025;
i__38014 = G__38026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1525108934610
