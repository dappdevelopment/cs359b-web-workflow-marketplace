// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.services.re_frame');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wflow.services.server');
goog.require('wflow.utils.storage');
goog.require('cljs.spec.alpha');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("wflow.services.re-frame","write-path","wflow.services.re-frame/write-path",896231663),(function (db,p__46104){
var vec__46105 = p__46104;
var _ = cljs.core.nth.call(null,vec__46105,(0),null);
var path = cljs.core.nth.call(null,vec__46105,(1),null);
var value = cljs.core.nth.call(null,vec__46105,(2),null);
return cljs.core.assoc_in.call(null,db,path,value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("wflow.services.re-frame","clean-path","wflow.services.re-frame/clean-path",-1733042847),(function (db,p__46108){
var vec__46109 = p__46108;
var _ = cljs.core.nth.call(null,vec__46109,(0),null);
var path = cljs.core.nth.call(null,vec__46109,(1),null);
return cljs.core.assoc_in.call(null,db,path,null);
}));
wflow.services.re_frame.reg_sub_remote = (function wflow$services$re_frame$reg_sub_remote(kw,p__46112){
var map__46113 = p__46112;
var map__46113__$1 = ((((!((map__46113 == null)))?((((map__46113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46113):map__46113);
var path = cljs.core.get.call(null,map__46113__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.call(null,map__46113__$1,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.identity);
var cleanup = cljs.core.get.call(null,map__46113__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),cljs.core.identity);
var default$ = cljs.core.get.call(null,map__46113__$1,new cljs.core.Keyword(null,"default","default",-1987822328),null);
return re_frame.core.reg_sub_raw.call(null,kw,((function (map__46113,map__46113__$1,path,query,cleanup,default$){
return (function (db,p__46115){
var vec__46116 = p__46115;
var seq__46117 = cljs.core.seq.call(null,vec__46116);
var first__46118 = cljs.core.first.call(null,seq__46117);
var seq__46117__$1 = cljs.core.next.call(null,seq__46117);
var _ = first__46118;
var args = seq__46117__$1;
cljs.core.apply.call(null,query,cljs.core.deref.call(null,db),args);

return reagent.ratom.make_reaction.call(null,((function (vec__46116,seq__46117,first__46118,seq__46117__$1,_,args,map__46113,map__46113__$1,path,query,cleanup,default$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),path,default$);
});})(vec__46116,seq__46117,first__46118,seq__46117__$1,_,args,map__46113,map__46113__$1,path,query,cleanup,default$))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),cleanup);
});})(map__46113,map__46113__$1,path,query,cleanup,default$))
);
});
wflow.services.re_frame.page_params = (function wflow$services$re_frame$page_params(query){
var query__$1 = (function (){var or__32347__auto__ = query;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(1)], null);
}
})();
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(query__$1);
return cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,query__$1,"$skip",((10) * (page - (1)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$sort","created_at"], null),(1)),new cljs.core.Keyword(null,"page","page",849072397));
});
wflow.services.re_frame.rest_store = (function wflow$services$re_frame$rest_store(id,p__46122){
var map__46123 = p__46122;
var map__46123__$1 = ((((!((map__46123 == null)))?((((map__46123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46123):map__46123);
var default$ = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY], null));
var persistence = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"persistence","persistence",-203044807));
var paging = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"paging","paging",1716279728),true);
var url = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"url","url",276297046));
var url_fn = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"url-fn","url-fn",1228268268));
var query_fn = cljs.core.get.call(null,map__46123__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stores","stores",1203804823),id], null);
var write_BANG_ = ((function (path,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p1__46119_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.services.re-frame","write-path","wflow.services.re-frame/write-path",896231663),path,p1__46119_SHARP_], null));
});})(path,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
;
var clean_BANG_ = ((function (path,write_BANG_,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.services.re-frame","clean-path","wflow.services.re-frame/clean-path",-1733042847),path], null));
});})(path,write_BANG_,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
;
var extend_kw = ((function (path,write_BANG_,clean_BANG_,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p1__46120_SHARP_,p2__46121_SHARP_){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p1__46120_SHARP_),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__46120_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46121_SHARP_)].join(''));
});})(path,write_BANG_,clean_BANG_,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
;
var query_fn__$1 = (cljs.core.truth_(query_fn)?((function (path,write_BANG_,clean_BANG_,extend_kw,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (db,q){
return Promise.resolve(query_fn.call(null,db,q)).then(write_BANG_);
});})(path,write_BANG_,clean_BANG_,extend_kw,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
:((function (path,write_BANG_,clean_BANG_,extend_kw,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (db,q){
var token = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"accessToken","accessToken",1833707055)], null));
var url__$1 = (cljs.core.truth_(url_fn)?url_fn.call(null,db,q):url);
return wflow.services.server.ajax.call(null,"GET",url__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (){var G__46125 = q;
if(cljs.core.truth_(paging)){
return wflow.services.re_frame.page_params.call(null,G__46125);
} else {
return G__46125;
}
})(),new cljs.core.Keyword(null,"authorization","authorization",-166302136),token], null)).then(write_BANG_);
});})(path,write_BANG_,clean_BANG_,extend_kw,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
);
var cleanup = (function (){var G__46126 = persistence;
var G__46126__$1 = (((G__46126 instanceof cljs.core.Keyword))?G__46126.fqn:null);
switch (G__46126__$1) {
case "memory":
return cljs.core.identity;

break;
default:
return clean_BANG_;

}
})();
re_frame.core.reg_fx.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-store","reload-store",1600029471),id], null),((function (path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p__46127){
var vec__46128 = p__46127;
var db = cljs.core.nth.call(null,vec__46128,(0),null);
var q = cljs.core.nth.call(null,vec__46128,(1),null);
return query_fn__$1.call(null,db,q);
});})(path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
);

re_frame.core.reg_event_fx.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-store","reload-store",1600029471),id], null),((function (path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p__46131,p__46132){
var map__46133 = p__46131;
var map__46133__$1 = ((((!((map__46133 == null)))?((((map__46133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46133):map__46133);
var db = cljs.core.get.call(null,map__46133__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46134 = p__46132;
var _ = cljs.core.nth.call(null,vec__46134,(0),null);
var q = cljs.core.nth.call(null,vec__46134,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-store","reload-store",1600029471),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,q], null)]);
});})(path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
);

if(cljs.core.truth_(paging)){
var page_id = extend_kw.call(null,id,"-page");
var meta_id = extend_kw.call(null,id,"-meta");
wflow.services.re_frame.reg_sub_remote.call(null,page_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"query","query",-1288509510),query_fn__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),cleanup,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentArrayMap.EMPTY], null));

re_frame.core.reg_sub.call(null,meta_id,((function (page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p__46138){
var vec__46139 = p__46138;
var seq__46140 = cljs.core.seq.call(null,vec__46139);
var first__46141 = cljs.core.first.call(null,seq__46140);
var seq__46140__$1 = cljs.core.next.call(null,seq__46140);
var _ = first__46141;
var args = seq__46140__$1;
return re_frame.core.subscribe.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id], null),args));
});})(page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
,((function (page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (page){
var temp__6736__auto__ = page;
if(cljs.core.truth_(temp__6736__auto__)){
var map__46142 = temp__6736__auto__;
var map__46142__$1 = ((((!((map__46142 == null)))?((((map__46142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46142):map__46142);
var total = cljs.core.get.call(null,map__46142__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var limit = cljs.core.get.call(null,map__46142__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var skip = cljs.core.get.call(null,map__46142__$1,new cljs.core.Keyword(null,"skip","skip",602715391));
return cljs.core.assoc.call(null,page,new cljs.core.Keyword(null,"pages","pages",-285406513),Math.ceil((total / limit)),new cljs.core.Keyword(null,"active-page","active-page",370357330),(Math.ceil((skip / limit)) + (1)));
} else {
return page;
}
});})(page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
);

return re_frame.core.reg_sub.call(null,id,((function (page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (p__46144){
var vec__46145 = p__46144;
var seq__46146 = cljs.core.seq.call(null,vec__46145);
var first__46147 = cljs.core.first.call(null,seq__46146);
var seq__46146__$1 = cljs.core.next.call(null,seq__46146);
var _ = first__46147;
var args = seq__46146__$1;
return re_frame.core.subscribe.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id], null),args));
});})(page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
,((function (page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn){
return (function (page){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(page,default$);
});})(page_id,meta_id,path,write_BANG_,clean_BANG_,extend_kw,query_fn__$1,cleanup,map__46123,map__46123__$1,default$,persistence,paging,url,url_fn,query_fn))
);
} else {
return wflow.services.re_frame.reg_sub_remote.call(null,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"query","query",-1288509510),query_fn__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),cleanup,new cljs.core.Keyword(null,"default","default",-1987822328),default$], null));
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),(function (p__46151){
var map__46152 = p__46151;
var map__46152__$1 = ((((!((map__46152 == null)))?((((map__46152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46152):map__46152);
var request = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var success = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var fail = cljs.core.get.call(null,map__46152__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [request,success,fail], null))){
} else {
throw (new Error("Assert failed: (every? vector? [request success fail])"));
}

return cljs.core.apply.call(null,wflow.services.server.ajax,request).then(((function (map__46152,map__46152__$1,request,success,fail){
return (function (p1__46149_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,success,p1__46149_SHARP_));
});})(map__46152,map__46152__$1,request,success,fail))
,((function (map__46152,map__46152__$1,request,success,fail){
return (function (p1__46150_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,fail,p1__46150_SHARP_));
});})(map__46152,map__46152__$1,request,success,fail))
);
}));
wflow.services.re_frame.rest_call = (function wflow$services$re_frame$rest_call(id,p__46154){
var map__46155 = p__46154;
var map__46155__$1 = ((((!((map__46155 == null)))?((((map__46155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46155):map__46155);
var method = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"method","method",55703592));
var path = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var success = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var fail = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
return re_frame.core.reg_event_fx.call(null,id,((function (map__46155,map__46155__$1,method,path,success,fail){
return (function (p__46157,p__46158){
var map__46159 = p__46157;
var map__46159__$1 = ((((!((map__46159 == null)))?((((map__46159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46159):map__46159);
var db = cljs.core.get.call(null,map__46159__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46160 = p__46158;
var _ = cljs.core.nth.call(null,vec__46160,(0),null);
var params = cljs.core.nth.call(null,vec__46160,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,path,params], null),new cljs.core.Keyword(null,"success","success",1890645906),success,new cljs.core.Keyword(null,"fail","fail",1706214930),fail], null)], null);
});})(map__46155,map__46155__$1,method,path,success,fail))
);
});
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
wflow.services.re_frame.check_and_throw = (function wflow$services$re_frame$check_and_throw(a_spec,db){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,a_spec,db))){
return null;
} else {
throw cljs.core.ex_info.call(null,["spec check failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.explain_str.call(null,a_spec,db))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
wflow.services.re_frame.spec_intc = (function wflow$services$re_frame$spec_intc(a_spec){
return re_frame.core.after.call(null,cljs.core.partial.call(null,wflow.services.re_frame.check_and_throw,a_spec));
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"local-store","local-store",1708979092),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"local-store","local-store",1708979092),wflow.utils.storage.local_store__GT_data.call(null));
}));
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"memory-store","memory-store",-871465600),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"memory-store","memory-store",-871465600),cljs.core.deref.call(null,wflow.utils.storage.memory_store));
}));
wflow.services.re_frame.__GT_local_store = re_frame.core.after.call(null,wflow.utils.storage.data__GT_local_store);
wflow.services.re_frame.fx__GT_event = (function wflow$services$re_frame$fx__GT_event(fx_id){
return re_frame.core.reg_event_fx.call(null,fx_id,(function (ctx,p__46164){
var vec__46165 = p__46164;
var _ = cljs.core.nth.call(null,vec__46165,(0),null);
var event = cljs.core.nth.call(null,vec__46165,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([fx_id,event]);
}));
});

//# sourceMappingURL=re_frame.js.map?rel=1526326059840
