// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.services.workflow');
goog.require('cljs.core');
goog.require('wflow.services.server');
wflow.services.workflow.init = (function wflow$services$workflow$init(ctx){
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,"init");

return wflow.services.server.ajax.call(null,"GET","/debug/rt/new").then((function (p1__45948_SHARP_){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.merge,p1__45948_SHARP_);
}));
});
wflow.services.workflow.start = (function wflow$services$workflow$start(ctx,id){
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,["start ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));

return wflow.services.server.ajax.call(null,"GET","/debug/rt/start",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)).then((function (){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.assoc,new cljs.core.Keyword(null,"started","started",585705024),(new Date()));
}));
});
wflow.services.workflow.init_PLUS_start = (function wflow$services$workflow$init_PLUS_start(ctx){
return wflow.services.workflow.init.call(null,ctx).then((function (p1__45949_SHARP_){
return wflow.services.workflow.start.call(null,ctx,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45949_SHARP_));
}));
});
wflow.services.workflow.stop = (function wflow$services$workflow$stop(ctx,id){
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,["stop ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));

return wflow.services.server.ajax.call(null,"GET","/debug/rt/stop",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)).then((function (){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.dissoc,new cljs.core.Keyword(null,"started","started",585705024));
}));
});
wflow.services.workflow.navigate = (function wflow$services$workflow$navigate(ctx,id){
var temp__6738__auto__ = prompt("url");
if(cljs.core.truth_(temp__6738__auto__)){
var url = temp__6738__auto__;
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,["navigate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

return wflow.services.server.ajax.call(null,"GET","/debug/rt/dispatch",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"navigate",new cljs.core.Keyword(null,"value","value",305978217),url], null)], null)], null)).then(((function (url,temp__6738__auto__){
return (function (p1__45950_SHARP_){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.merge,p1__45950_SHARP_);
});})(url,temp__6738__auto__))
);
} else {
return null;
}
});
wflow.services.workflow.click = (function wflow$services$workflow$click(ctx,id){
var temp__6738__auto__ = prompt("CSS selector:");
if(cljs.core.truth_(temp__6738__auto__)){
var selector = temp__6738__auto__;
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,["click ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''));

return wflow.services.server.ajax.call(null,"GET","/debug/rt/dispatch",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"click",new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], null)], null)).then(((function (selector,temp__6738__auto__){
return (function (p1__45951_SHARP_){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.merge,p1__45951_SHARP_);
});})(selector,temp__6738__auto__))
);
} else {
return null;
}
});
wflow.services.workflow.type_keys = (function wflow$services$workflow$type_keys(ctx,id){
var temp__6738__auto__ = prompt("CSS selector:");
if(cljs.core.truth_(temp__6738__auto__)){
var selector = temp__6738__auto__;
var value = prompt("value");
cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,["type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));

return wflow.services.server.ajax.call(null,"GET","/debug/rt/dispatch",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"type",new cljs.core.Keyword(null,"selector","selector",762528866),selector,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null)).then(((function (value,selector,temp__6738__auto__){
return (function (p1__45952_SHARP_){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.merge,p1__45952_SHARP_);
});})(value,selector,temp__6738__auto__))
);
} else {
return null;
}
});
wflow.services.workflow.do_actions = (function wflow$services$workflow$do_actions(ctx,id,actions){
if(cljs.core.empty_QMARK_.call(null,actions)){
return null;
} else {
var vec__45953 = actions;
var seq__45954 = cljs.core.seq.call(null,vec__45953);
var first__45955 = cljs.core.first.call(null,seq__45954);
var seq__45954__$1 = cljs.core.next.call(null,seq__45954);
var action = first__45955;
var remaining = seq__45954__$1;
return wflow.services.server.ajax.call(null,"GET","/debug/rt/dispatch",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),action], null)], null)).then(((function (vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining){
return (function (){
return cljs.core.swap_BANG_.call(null,ctx,cljs.core.update,new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.conj,action);
});})(vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining))
).then(((function (vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining){
return (function (){
return setTimeout(((function (vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining){
return (function (){
return wflow.services.workflow.do_actions.call(null,ctx,id,remaining);
});})(vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining))
,(3000));
});})(vec__45953,seq__45954,first__45955,seq__45954__$1,action,remaining))
);
}
});

//# sourceMappingURL=workflow.js.map?rel=1526321164477
