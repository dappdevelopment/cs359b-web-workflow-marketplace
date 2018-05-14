// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.services.toast');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('oops.core');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"toast","toast",68598129),(function (p__46045){
var vec__46046 = p__46045;
var method = cljs.core.nth.call(null,vec__46046,(0),null);
var message = cljs.core.nth.call(null,vec__46046,(1),null);
var target_obj_46049 = toastr;
var _STAR_runtime_state_STAR_46052 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_46049,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_46051 = oops.core.get_selector_call_info_dynamically.call(null,target_obj_46049,method);
var fn_46050 = (call_info_46051[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_46050,oops.state.get_last_access_modifier.call(null))){
if(!((fn_46050 == null))){
return fn_46050.call((call_info_46051[(0)]),message);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_46052;
}}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toast","toast",68598129),(function (ctx,p__46053){
var vec__46054 = p__46053;
var _ = cljs.core.nth.call(null,vec__46054,(0),null);
var method = cljs.core.nth.call(null,vec__46054,(1),null);
var message = cljs.core.nth.call(null,vec__46054,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,message], null)], null);
}));

//# sourceMappingURL=toast.js.map?rel=1526321164734
