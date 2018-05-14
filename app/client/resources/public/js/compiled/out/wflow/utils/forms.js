// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.utils.forms');
goog.require('cljs.core');
goog.require('oops.core');
/**
 * serializes form using jquery serializeArray
 */
wflow.utils.forms.serialize_form = (function wflow$utils$forms$serialize_form(form_el){
var f = (function (form,kvo){
return cljs.core.assoc.call(null,form,cljs.core.keyword.call(null,(function (){var target_obj_45783 = kvo;
var _STAR_runtime_state_STAR_45785 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45783,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_45784 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45783,(0),"name",true))?(target_obj_45783["name"]):null);
return next_obj_45784;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45785;
}})()),(function (){var target_obj_45786 = kvo;
var _STAR_runtime_state_STAR_45788 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45786,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_45787 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45786,(0),"value",true))?(target_obj_45786["value"]):null);
return next_obj_45787;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45788;
}})());
});
return cljs.core.reduce.call(null,f,cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq.call(null,(function (){var target_obj_45789 = $(form_el);
var _STAR_runtime_state_STAR_45793 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_45789,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_45791 = [target_obj_45789,(function (){var next_obj_45792 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_45789,(0),"serializeArray",true))?(target_obj_45789["serializeArray"]):null);
return next_obj_45792;
})()];
var fn_45790 = (call_info_45791[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_45790,oops.state.get_last_access_modifier.call(null))){
if(!((fn_45790 == null))){
return fn_45790.call((call_info_45791[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_45793;
}})()));
});

//# sourceMappingURL=forms.js.map?rel=1526321164169
