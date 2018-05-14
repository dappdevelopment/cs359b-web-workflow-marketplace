// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.router');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('bidi.bidi');
goog.require('re_frame.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('wflow.services.server');
goog.require('wflow.services.re_frame');
goog.require('wflow.utils.storage');
goog.require('oops.core');
wflow.router.static_resources = cljs.core.PersistentArrayMap.EMPTY;
wflow.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.merge.call(null,wflow.router.static_resources,cljs.core.PersistentHashMap.fromArrays(["","/balance","/workflow/create","/settings","/","/marketplace","/debug","/login","/signup"],[new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"balance","balance",418967409),new cljs.core.Keyword("workflow","create","workflow/create",-1269794359),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"marketplace","marketplace",236355452),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"signup","signup",1961016747)]))], null);
wflow.router.authorized_routes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"public","public",1566243851),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"public","public",1566243851)], null);
/**
 * bidi parse URL, and also handle query params
 */
wflow.router.parse_url = (function wflow$router$parse_url(url){
var query_data = goog.Uri.parse(url).getQueryData();
var query_keys = cljs.core.array_seq.call(null,query_data.getKeys());
var query_params = cljs.core.reduce.call(null,((function (query_data,query_keys){
return (function (p1__46170_SHARP_,p2__46171_SHARP_){
return cljs.core.assoc.call(null,p1__46170_SHARP_,cljs.core.keyword.call(null,p2__46171_SHARP_),query_data.get(p2__46171_SHARP_));
});})(query_data,query_keys))
,cljs.core.PersistentArrayMap.EMPTY,query_keys);
return cljs.core.assoc.call(null,bidi.bidi.match_route.call(null,wflow.router.routes,url),new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params);
});
wflow.router.dispatch_route = (function wflow$router$dispatch_route(matched_route,url){
var page = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route);
var route_params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(matched_route);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","request-route","wflow.router/request-route",78034255),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"url","url",276297046),url], null)], null));
});
wflow.router.start_BANG_ = (function wflow$router$start_BANG_(){
var G__46172 = (new goog.History());
goog.events.listen(G__46172,goog.history.EventType.NAVIGATE,((function (G__46172){
return (function (event){
var url = event.token;
var route = wflow.router.parse_url.call(null,url);
return wflow.router.dispatch_route.call(null,route,url);
});})(G__46172))
);

G__46172.setEnabled(true);

return G__46172;
});
/**
 * allows you to have last arg to url-for be query parameters
 *   It must have the key {:query-params {}}
 */
wflow.router.compute_path = (function wflow$router$compute_path(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46179 = arguments.length;
var i__33625__auto___46180 = (0);
while(true){
if((i__33625__auto___46180 < len__33624__auto___46179)){
args__33631__auto__.push((arguments[i__33625__auto___46180]));

var G__46181 = (i__33625__auto___46180 + (1));
i__33625__auto___46180 = G__46181;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return wflow.router.compute_path.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

wflow.router.compute_path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var larg = cljs.core.last.call(null,args);
if(cljs.core.truth_((function (){var and__32335__auto__ = cljs.core.map_QMARK_.call(null,larg);
if(and__32335__auto__){
return new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(larg);
} else {
return and__32335__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,bidi.bidi.path_for,wflow.router.routes,cljs.core.butlast.call(null,args))),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_46174 = wflow.services.server.$;
var _STAR_runtime_state_STAR_46178 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_46174,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_46176 = [target_obj_46174,(function (){var next_obj_46177 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_46174,(0),"param",true))?(target_obj_46174["param"]):null);
return next_obj_46177;
})()];
var fn_46175 = (call_info_46176[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_46175,oops.state.get_last_access_modifier.call(null))){
if(!((fn_46175 == null))){
return fn_46175.call((call_info_46176[(0)]),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(larg)));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_46178;
}})())].join('');
} else {
return cljs.core.apply.call(null,bidi.bidi.path_for,wflow.router.routes,args);
}
});

wflow.router.compute_path.cljs$lang$maxFixedArity = (0);

wflow.router.compute_path.cljs$lang$applyTo = (function (seq46173){
return wflow.router.compute_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46173));
});

wflow.router.ext_url_for = (function wflow$router$ext_url_for(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46183 = arguments.length;
var i__33625__auto___46184 = (0);
while(true){
if((i__33625__auto___46184 < len__33624__auto___46183)){
args__33631__auto__.push((arguments[i__33625__auto___46184]));

var G__46185 = (i__33625__auto___46184 + (1));
i__33625__auto___46184 = G__46185;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return wflow.router.ext_url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

wflow.router.ext_url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,wflow.router.compute_path,args);
});

wflow.router.ext_url_for.cljs$lang$maxFixedArity = (0);

wflow.router.ext_url_for.cljs$lang$applyTo = (function (seq46182){
return wflow.router.ext_url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46182));
});

wflow.router.url_for = (function wflow$router$url_for(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46187 = arguments.length;
var i__33625__auto___46188 = (0);
while(true){
if((i__33625__auto___46188 < len__33624__auto___46187)){
args__33631__auto__.push((arguments[i__33625__auto___46188]));

var G__46189 = (i__33625__auto___46188 + (1));
i__33625__auto___46188 = G__46189;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return wflow.router.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

wflow.router.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,wflow.router.compute_path,args))].join('');
});

wflow.router.url_for.cljs$lang$maxFixedArity = (0);

wflow.router.url_for.cljs$lang$applyTo = (function (seq46186){
return wflow.router.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46186));
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("wflow.router","navigate","wflow.router/navigate",2054230707),(function (db,p__46190){
var vec__46191 = p__46190;
var _ = cljs.core.nth.call(null,vec__46191,(0),null);
var route = cljs.core.nth.call(null,vec__46191,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"route","route",329891309),route);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("wflow.router","route-params","wflow.router/route-params",723167001),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("wflow.router","route-page","wflow.router/route-page",-2068391064),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"page","page",849072397)], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (args){
return location.href = cljs.core.apply.call(null,wflow.router.url_for,args);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"ext-navigate","ext-navigate",836824013),(function (args){
return location.href = cljs.core.apply.call(null,wflow.router.ext_url_for,args);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"set-url","set-url",1253200812),(function (url){
return location.href = url;
}));
wflow.services.re_frame.fx__GT_event.call(null,new cljs.core.Keyword(null,"navigate","navigate",657596805));
wflow.services.re_frame.fx__GT_event.call(null,new cljs.core.Keyword(null,"ext-navigate","ext-navigate",836824013));
wflow.services.re_frame.fx__GT_event.call(null,new cljs.core.Keyword(null,"set-url","set-url",1253200812));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.router","request-route","wflow.router/request-route",78034255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store","local-store",1708979092)),re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"memory-store","memory-store",-871465600))], null),(function (p__46194,p__46195){
var map__46196 = p__46194;
var map__46196__$1 = ((((!((map__46196 == null)))?((((map__46196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46196):map__46196);
var db = cljs.core.get.call(null,map__46196__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store = cljs.core.get.call(null,map__46196__$1,new cljs.core.Keyword(null,"local-store","local-store",1708979092));
var memory_store = cljs.core.get.call(null,map__46196__$1,new cljs.core.Keyword(null,"memory-store","memory-store",-871465600));
var vec__46197 = p__46195;
var _ = cljs.core.nth.call(null,vec__46197,(0),null);
var route = cljs.core.nth.call(null,vec__46197,(1),null);
var auth = cljs.core.get.call(null,wflow.router.authorized_routes,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"token","token",-1211463215));
var token = cljs.core.get_in.call(null,local_store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"accessToken","accessToken",1833707055)], null));
var new_db = cljs.core.merge.call(null,local_store,db);
var nxt = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","navigate","wflow.router/navigate",2054230707),route], null)], null);
var G__46201 = auth;
var G__46201__$1 = (((G__46201 instanceof cljs.core.Keyword))?G__46201.fqn:null);
switch (G__46201__$1) {
case "token":
if(cljs.core.truth_(new cljs.core.Keyword("session","valid","session/valid",-1896415562).cljs$core$IFn$_invoke$arity$1(memory_store))){
return nxt;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST","authentication",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),"jwt"], null),new cljs.core.Keyword(null,"authorization","authorization",-166302136),token], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","auth-success","wflow.router/auth-success",57593991),route], null),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, ["page",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(route)], null)], null)], null)], null)], null)], null);
}

break;
default:
return nxt;

}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.router","auth-success","wflow.router/auth-success",57593991),(function (p__46203,p__46204){
var map__46205 = p__46203;
var map__46205__$1 = ((((!((map__46205 == null)))?((((map__46205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46205):map__46205);
var db = cljs.core.get.call(null,map__46205__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46206 = p__46204;
var _ = cljs.core.nth.call(null,vec__46206,(0),null);
var route = cljs.core.nth.call(null,vec__46206,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wflow.router","validate-session","wflow.router/validate-session",-1621722871),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","navigate","wflow.router/navigate",2054230707),route], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("wflow.router","validate-session","wflow.router/validate-session",-1621722871),(function (){
return cljs.core.swap_BANG_.call(null,wflow.utils.storage.memory_store,cljs.core.assoc,new cljs.core.Keyword("session","valid","session/valid",-1896415562),true);
}));
if(typeof wflow.router.panels !== 'undefined'){
} else {
wflow.router.panels = (function (){var method_table__33400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__33401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__33402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__33403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__33404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wflow.router","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__33404__auto__,method_table__33400__auto__,prefer_table__33401__auto__,method_cache__33402__auto__,cached_hierarchy__33403__auto__));
})();
}
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"404"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Page not found."], null)], null);
}));

//# sourceMappingURL=router.js.map?rel=1526326059919
