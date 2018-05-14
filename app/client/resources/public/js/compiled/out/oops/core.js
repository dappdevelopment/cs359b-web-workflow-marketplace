// Compiled by ClojureScript 1.9.908 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__36819 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36819)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__36566__auto__ = data;
var or__32347__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__6736__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var devtools__36567__auto__ = temp__6736__auto__;
var temp__6736__auto____$1 = (devtools__36567__auto__["toolbox"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var toolbox__36568__auto__ = temp__6736__auto____$1;
var temp__6736__auto____$2 = (toolbox__36568__auto__["envelope"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var envelope__36569__auto__ = temp__6736__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36569__auto__)){
return envelope__36569__auto__.call(null,data__36566__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return data__36566__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36819)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__36566__auto__ = data;
var or__32347__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__6736__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var devtools__36567__auto__ = temp__6736__auto__;
var temp__6736__auto____$1 = (devtools__36567__auto__["toolbox"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var toolbox__36568__auto__ = temp__6736__auto____$1;
var temp__6736__auto____$2 = (toolbox__36568__auto__["envelope"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var envelope__36569__auto__ = temp__6736__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36569__auto__)){
return envelope__36569__auto__.call(null,data__36566__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return data__36566__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__36819)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36819)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36820 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36820)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__36566__auto__ = data;
var or__32347__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__6736__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var devtools__36567__auto__ = temp__6736__auto__;
var temp__6736__auto____$1 = (devtools__36567__auto__["toolbox"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var toolbox__36568__auto__ = temp__6736__auto____$1;
var temp__6736__auto____$2 = (toolbox__36568__auto__["envelope"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var envelope__36569__auto__ = temp__6736__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36569__auto__)){
return envelope__36569__auto__.call(null,data__36566__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return data__36566__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36820)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__36566__auto__ = data;
var or__32347__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__6736__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var devtools__36567__auto__ = temp__6736__auto__;
var temp__6736__auto____$1 = (devtools__36567__auto__["toolbox"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var toolbox__36568__auto__ = temp__6736__auto____$1;
var temp__6736__auto____$2 = (toolbox__36568__auto__["envelope"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var envelope__36569__auto__ = temp__6736__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36569__auto__)){
return envelope__36569__auto__.call(null,data__36566__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return data__36566__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__36820)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36820)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__33631__auto__ = [];
var len__33624__auto___36828 = arguments.length;
var i__33625__auto___36829 = (0);
while(true){
if((i__33625__auto___36829 < len__33624__auto___36828)){
args__33631__auto__.push((arguments[i__33625__auto___36829]));

var G__36830 = (i__33625__auto___36829 + (1));
i__33625__auto___36829 = G__36830;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36823){
var vec__36824 = p__36823;
var info = cljs.core.nth.call(null,vec__36824,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__36827_36831 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__36827_36831)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__36827_36831)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__36827_36831)){
} else {
if(cljs.core._EQ_.call(null,null,G__36827_36831)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36827_36831)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36821){
var G__36822 = cljs.core.first.call(null,seq36821);
var seq36821__$1 = cljs.core.next.call(null,seq36821);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__36822,seq36821__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_36833 = oops.config.get_child_factory.call(null);
var child_factory_36833__$1 = (function (){var G__36834 = child_factory_36833;
var G__36834__$1 = (((G__36834 instanceof cljs.core.Keyword))?G__36834.fqn:null);
switch (G__36834__$1) {
case "js-obj":
return ((function (G__36834,G__36834__$1,child_factory_36833){
return (function (){
return {};
});
;})(G__36834,G__36834__$1,child_factory_36833))

break;
case "js-array":
return ((function (G__36834,G__36834__$1,child_factory_36833){
return (function (){
return [];
});
;})(G__36834,G__36834__$1,child_factory_36833))

break;
default:
return child_factory_36833;

}
})();

var child_obj_36832 = child_factory_36833__$1.call(null,obj,key);
(obj[key] = child_obj_36832);

return child_obj_36832;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_36838 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_36838);

return selector_path_36838;
} else {
var selector_path_36839 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_36839);

return selector_path_36839;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__6736__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__6736__auto__)){
var issue_36840 = temp__6736__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_36840);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_36849 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36849,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36842 = (function (){var path_36841 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36841,(0));

return path_36841;
})();
var len_36843 = path_36842.length;
var i_36844 = (0);
var obj_36845 = obj;
while(true){
if((i_36844 < len_36843)){
var mode_36846 = (path_36842[i_36844]);
var key_36847 = (path_36842[(i_36844 + (1))]);
var next_obj_36848 = oops.core.get_key_dynamically.call(null,obj_36845,key_36847,mode_36846);
var G__36850 = mode_36846;
switch (G__36850) {
case (0):
var G__36852 = (i_36844 + (2));
var G__36853 = next_obj_36848;
i_36844 = G__36852;
obj_36845 = G__36853;
continue;

break;
case (1):
if(!((next_obj_36848 == null))){
var G__36854 = (i_36844 + (2));
var G__36855 = next_obj_36848;
i_36844 = G__36854;
obj_36845 = G__36855;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36848 == null))){
var G__36856 = (i_36844 + (2));
var G__36857 = next_obj_36848;
i_36844 = G__36856;
obj_36845 = G__36857;
continue;
} else {
var G__36858 = (i_36844 + (2));
var G__36859 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36845,key_36847);
i_36844 = G__36858;
obj_36845 = G__36859;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36850)].join('')));

}
} else {
return obj_36845;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_36885 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36885,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36861 = (function (){var path_36860 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36860,(0));

return path_36860;
})();
var len_36862 = path_36861.length;
if((len_36862 < (4))){
return [obj,(function (){var path_36864 = path_36861;
var len_36865 = path_36864.length;
var i_36866 = (0);
var obj_36867 = obj;
while(true){
if((i_36866 < len_36865)){
var mode_36868 = (path_36864[i_36866]);
var key_36869 = (path_36864[(i_36866 + (1))]);
var next_obj_36870 = oops.core.get_key_dynamically.call(null,obj_36867,key_36869,mode_36868);
var G__36886 = mode_36868;
switch (G__36886) {
case (0):
var G__36890 = (i_36866 + (2));
var G__36891 = next_obj_36870;
i_36866 = G__36890;
obj_36867 = G__36891;
continue;

break;
case (1):
if(!((next_obj_36870 == null))){
var G__36892 = (i_36866 + (2));
var G__36893 = next_obj_36870;
i_36866 = G__36892;
obj_36867 = G__36893;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36870 == null))){
var G__36894 = (i_36866 + (2));
var G__36895 = next_obj_36870;
i_36866 = G__36894;
obj_36867 = G__36895;
continue;
} else {
var G__36896 = (i_36866 + (2));
var G__36897 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36867,key_36869);
i_36866 = G__36896;
obj_36867 = G__36897;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36886)].join('')));

}
} else {
return obj_36867;
}
break;
}
})()];
} else {
var target_obj_36863 = (function (){var path_36871 = path_36861.slice((0),(len_36862 - (2)));
var len_36872 = path_36871.length;
var i_36873 = (0);
var obj_36874 = obj;
while(true){
if((i_36873 < len_36872)){
var mode_36875 = (path_36871[i_36873]);
var key_36876 = (path_36871[(i_36873 + (1))]);
var next_obj_36877 = oops.core.get_key_dynamically.call(null,obj_36874,key_36876,mode_36875);
var G__36887 = mode_36875;
switch (G__36887) {
case (0):
var G__36899 = (i_36873 + (2));
var G__36900 = next_obj_36877;
i_36873 = G__36899;
obj_36874 = G__36900;
continue;

break;
case (1):
if(!((next_obj_36877 == null))){
var G__36901 = (i_36873 + (2));
var G__36902 = next_obj_36877;
i_36873 = G__36901;
obj_36874 = G__36902;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36877 == null))){
var G__36903 = (i_36873 + (2));
var G__36904 = next_obj_36877;
i_36873 = G__36903;
obj_36874 = G__36904;
continue;
} else {
var G__36905 = (i_36873 + (2));
var G__36906 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36874,key_36876);
i_36873 = G__36905;
obj_36874 = G__36906;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36887)].join('')));

}
} else {
return obj_36874;
}
break;
}
})();
return [target_obj_36863,(function (){var path_36878 = [(path_36861[(len_36862 - (2))]),(path_36861[(len_36862 - (1))])];
var len_36879 = path_36878.length;
var i_36880 = (0);
var obj_36881 = target_obj_36863;
while(true){
if((i_36880 < len_36879)){
var mode_36882 = (path_36878[i_36880]);
var key_36883 = (path_36878[(i_36880 + (1))]);
var next_obj_36884 = oops.core.get_key_dynamically.call(null,obj_36881,key_36883,mode_36882);
var G__36888 = mode_36882;
switch (G__36888) {
case (0):
var G__36908 = (i_36880 + (2));
var G__36909 = next_obj_36884;
i_36880 = G__36908;
obj_36881 = G__36909;
continue;

break;
case (1):
if(!((next_obj_36884 == null))){
var G__36910 = (i_36880 + (2));
var G__36911 = next_obj_36884;
i_36880 = G__36910;
obj_36881 = G__36911;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36884 == null))){
var G__36912 = (i_36880 + (2));
var G__36913 = next_obj_36884;
i_36880 = G__36912;
obj_36881 = G__36913;
continue;
} else {
var G__36914 = (i_36880 + (2));
var G__36915 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36881,key_36883);
i_36880 = G__36914;
obj_36881 = G__36915;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36888)].join('')));

}
} else {
return obj_36881;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_36930 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36930,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36917 = (function (){var path_36916 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36916,(1));

return path_36916;
})();
var len_36920 = path_36917.length;
var parent_obj_path_36921 = path_36917.slice((0),(len_36920 - (2)));
var key_36918 = (path_36917[(len_36920 - (1))]);
var mode_36919 = (path_36917[(len_36920 - (2))]);
var parent_obj_36922 = (function (){var path_36923 = parent_obj_path_36921;
var len_36924 = path_36923.length;
var i_36925 = (0);
var obj_36926 = obj;
while(true){
if((i_36925 < len_36924)){
var mode_36927 = (path_36923[i_36925]);
var key_36928 = (path_36923[(i_36925 + (1))]);
var next_obj_36929 = oops.core.get_key_dynamically.call(null,obj_36926,key_36928,mode_36927);
var G__36931 = mode_36927;
switch (G__36931) {
case (0):
var G__36933 = (i_36925 + (2));
var G__36934 = next_obj_36929;
i_36925 = G__36933;
obj_36926 = G__36934;
continue;

break;
case (1):
if(!((next_obj_36929 == null))){
var G__36935 = (i_36925 + (2));
var G__36936 = next_obj_36929;
i_36925 = G__36935;
obj_36926 = G__36936;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36929 == null))){
var G__36937 = (i_36925 + (2));
var G__36938 = next_obj_36929;
i_36925 = G__36937;
obj_36926 = G__36938;
continue;
} else {
var G__36939 = (i_36925 + (2));
var G__36940 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36926,key_36928);
i_36925 = G__36939;
obj_36926 = G__36940;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36931)].join('')));

}
} else {
return obj_36926;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_36922,key_36918,val,mode_36919);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1525108931502
