// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.services.server');
goog.require('cljs.core');
goog.require('oops.core');
goog.require('wflow.utils.transit');
goog.require('clojure.walk');
goog.require('goog.Uri.QueryData');
wflow.services.server.$ = jQuery;
wflow.services.server.text__GT_clj = cljs.core.comp.call(null,clojure.walk.keywordize_keys,wflow.utils.transit.read);
wflow.services.server.ajax = (function wflow$services$server$ajax(var_args){
var G__45804 = arguments.length;
switch (G__45804) {
case 2:
return wflow.services.server.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wflow.services.server.ajax.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wflow.services.server.ajax.cljs$core$IFn$_invoke$arity$2 = (function (method,path){
return wflow.services.server.ajax.call(null,method,path,cljs.core.PersistentArrayMap.EMPTY);
});

wflow.services.server.ajax.cljs$core$IFn$_invoke$arity$3 = (function (method,path,p__45805){
var map__45806 = p__45805;
var map__45806__$1 = ((((!((map__45806 == null)))?((((map__45806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45806):map__45806);
var options = map__45806__$1;
var query = cljs.core.get.call(null,map__45806__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var data = cljs.core.get.call(null,map__45806__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return (new Promise(((function (map__45806,map__45806__$1,options,query,data){
return (function (success,fail){
var success_fn = ((function (map__45806,map__45806__$1,options,query,data){
return (function (data__$1,status,$xhr){
return success.call(null,data__$1);
});})(map__45806,map__45806__$1,options,query,data))
;
var error_fn = ((function (success_fn,map__45806,map__45806__$1,options,query,data){
return (function ($xhr,status,error){
return fail.call(null,cljs.core.ex_info.call(null,(function (){var target_obj_45808 = $xhr;
var _STAR_runtime_state_STAR_45810 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45808,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_45809 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45808,(0),"status",true))?(target_obj_45808["status"]):null);
return next_obj_45809;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45810;
}})(),wflow.services.server.text__GT_clj.call(null,(function (){var target_obj_45811 = $xhr;
var _STAR_runtime_state_STAR_45813 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45811,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_45812 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45811,(0),"responseText",true))?(target_obj_45811["responseText"]):null);
return next_obj_45812;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45813;
}})())));
});})(success_fn,map__45806,map__45806__$1,options,query,data))
;
var headers = ({"Authorization": new cljs.core.Keyword(null,"authorization","authorization",-166302136).cljs$core$IFn$_invoke$arity$1(options)});
var converters = ({"text json": wflow.services.server.text__GT_clj});
var target_obj_45814 = wflow.services.server.$;
var _STAR_runtime_state_STAR_45818 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45814,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_45816 = [target_obj_45814,(function (){var next_obj_45817 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45814,(0),"ajax",true))?(target_obj_45814["ajax"]):null);
return next_obj_45817;
})()];
var fn_45815 = (call_info_45816[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_45815,oops.state.get_last_access_modifier.call(null))){
if(!((fn_45815 == null))){
return fn_45815.call((call_info_45816[(0)]),({"url": (function (){var G__45819 = path;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45819),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_45820 = wflow.services.server.$;
var _STAR_runtime_state_STAR_45824 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45820,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_45822 = [target_obj_45820,(function (){var next_obj_45823 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45820,(0),"param",true))?(target_obj_45820["param"]):null);
return next_obj_45823;
})()];
var fn_45821 = (call_info_45822[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_45821,oops.state.get_last_access_modifier.call(null))){
if(!((fn_45821 == null))){
return fn_45821.call((call_info_45822[(0)]),cljs.core.clj__GT_js.call(null,query));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45824;
}})())].join('');
} else {
return G__45819;
}
})(), "method": method, "data": cljs.core.clj__GT_js.call(null,data), "headers": headers, "converters": converters, "success": success_fn, "error": error_fn}));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45818;
}});})(map__45806,map__45806__$1,options,query,data))
));
});

wflow.services.server.ajax.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=server.js.map?rel=1526321164241
