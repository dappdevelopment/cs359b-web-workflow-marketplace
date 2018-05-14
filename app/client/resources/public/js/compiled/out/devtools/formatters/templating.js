// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x46338_46339 = value;
x46338_46339.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x46341_46342 = value;
x46341_46342.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x46344_46345 = value;
x46344_46345.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__32335__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__32335__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__32335__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46352 = arguments.length;
var i__33625__auto___46353 = (0);
while(true){
if((i__33625__auto___46353 < len__33624__auto___46352)){
args__33631__auto__.push((arguments[i__33625__auto___46353]));

var G__46354 = (i__33625__auto___46353 + (1));
i__33625__auto___46353 = G__46354;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__46348_46355 = cljs.core.seq.call(null,items);
var chunk__46349_46356 = null;
var count__46350_46357 = (0);
var i__46351_46358 = (0);
while(true){
if((i__46351_46358 < count__46350_46357)){
var item_46359 = cljs.core._nth.call(null,chunk__46349_46356,i__46351_46358);
if(!((item_46359 == null))){
if(cljs.core.coll_QMARK_.call(null,item_46359)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46359)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46359));
}
} else {
}

var G__46360 = seq__46348_46355;
var G__46361 = chunk__46349_46356;
var G__46362 = count__46350_46357;
var G__46363 = (i__46351_46358 + (1));
seq__46348_46355 = G__46360;
chunk__46349_46356 = G__46361;
count__46350_46357 = G__46362;
i__46351_46358 = G__46363;
continue;
} else {
var temp__6738__auto___46364 = cljs.core.seq.call(null,seq__46348_46355);
if(temp__6738__auto___46364){
var seq__46348_46365__$1 = temp__6738__auto___46364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46348_46365__$1)){
var c__33278__auto___46366 = cljs.core.chunk_first.call(null,seq__46348_46365__$1);
var G__46367 = cljs.core.chunk_rest.call(null,seq__46348_46365__$1);
var G__46368 = c__33278__auto___46366;
var G__46369 = cljs.core.count.call(null,c__33278__auto___46366);
var G__46370 = (0);
seq__46348_46355 = G__46367;
chunk__46349_46356 = G__46368;
count__46350_46357 = G__46369;
i__46351_46358 = G__46370;
continue;
} else {
var item_46371 = cljs.core.first.call(null,seq__46348_46365__$1);
if(!((item_46371 == null))){
if(cljs.core.coll_QMARK_.call(null,item_46371)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46371)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46371));
}
} else {
}

var G__46372 = cljs.core.next.call(null,seq__46348_46365__$1);
var G__46373 = null;
var G__46374 = (0);
var G__46375 = (0);
seq__46348_46355 = G__46372;
chunk__46349_46356 = G__46373;
count__46350_46357 = G__46374;
i__46351_46358 = G__46375;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq46347){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46347));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46383 = arguments.length;
var i__33625__auto___46384 = (0);
while(true){
if((i__33625__auto___46384 < len__33624__auto___46383)){
args__33631__auto__.push((arguments[i__33625__auto___46384]));

var G__46385 = (i__33625__auto___46384 + (1));
i__33625__auto___46384 = G__46385;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((2) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33632__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__46379_46386 = cljs.core.seq.call(null,children);
var chunk__46380_46387 = null;
var count__46381_46388 = (0);
var i__46382_46389 = (0);
while(true){
if((i__46382_46389 < count__46381_46388)){
var child_46390 = cljs.core._nth.call(null,chunk__46380_46387,i__46382_46389);
if(!((child_46390 == null))){
if(cljs.core.coll_QMARK_.call(null,child_46390)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46390))));
} else {
var temp__6736__auto___46391 = devtools.formatters.helpers.pref.call(null,child_46390);
if(cljs.core.truth_(temp__6736__auto___46391)){
var child_value_46392 = temp__6736__auto___46391;
template.push(child_value_46392);
} else {
}
}
} else {
}

var G__46393 = seq__46379_46386;
var G__46394 = chunk__46380_46387;
var G__46395 = count__46381_46388;
var G__46396 = (i__46382_46389 + (1));
seq__46379_46386 = G__46393;
chunk__46380_46387 = G__46394;
count__46381_46388 = G__46395;
i__46382_46389 = G__46396;
continue;
} else {
var temp__6738__auto___46397 = cljs.core.seq.call(null,seq__46379_46386);
if(temp__6738__auto___46397){
var seq__46379_46398__$1 = temp__6738__auto___46397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46379_46398__$1)){
var c__33278__auto___46399 = cljs.core.chunk_first.call(null,seq__46379_46398__$1);
var G__46400 = cljs.core.chunk_rest.call(null,seq__46379_46398__$1);
var G__46401 = c__33278__auto___46399;
var G__46402 = cljs.core.count.call(null,c__33278__auto___46399);
var G__46403 = (0);
seq__46379_46386 = G__46400;
chunk__46380_46387 = G__46401;
count__46381_46388 = G__46402;
i__46382_46389 = G__46403;
continue;
} else {
var child_46404 = cljs.core.first.call(null,seq__46379_46398__$1);
if(!((child_46404 == null))){
if(cljs.core.coll_QMARK_.call(null,child_46404)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46404))));
} else {
var temp__6736__auto___46405 = devtools.formatters.helpers.pref.call(null,child_46404);
if(cljs.core.truth_(temp__6736__auto___46405)){
var child_value_46406 = temp__6736__auto___46405;
template.push(child_value_46406);
} else {
}
}
} else {
}

var G__46407 = cljs.core.next.call(null,seq__46379_46398__$1);
var G__46408 = null;
var G__46409 = (0);
var G__46410 = (0);
seq__46379_46386 = G__46407;
chunk__46380_46387 = G__46408;
count__46381_46388 = G__46409;
i__46382_46389 = G__46410;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq46376){
var G__46377 = cljs.core.first.call(null,seq46376);
var seq46376__$1 = cljs.core.next.call(null,seq46376);
var G__46378 = cljs.core.first.call(null,seq46376__$1);
var seq46376__$2 = cljs.core.next.call(null,seq46376__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__46377,G__46378,seq46376__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46413 = arguments.length;
var i__33625__auto___46414 = (0);
while(true){
if((i__33625__auto___46414 < len__33624__auto___46413)){
args__33631__auto__.push((arguments[i__33625__auto___46414]));

var G__46415 = (i__33625__auto___46414 + (1));
i__33625__auto___46414 = G__46415;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq46411){
var G__46412 = cljs.core.first.call(null,seq46411);
var seq46411__$1 = cljs.core.next.call(null,seq46411);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46412,seq46411__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46418 = arguments.length;
var i__33625__auto___46419 = (0);
while(true){
if((i__33625__auto___46419 < len__33624__auto___46418)){
args__33631__auto__.push((arguments[i__33625__auto___46419]));

var G__46420 = (i__33625__auto___46419 + (1));
i__33625__auto___46419 = G__46420;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq46416){
var G__46417 = cljs.core.first.call(null,seq46416);
var seq46416__$1 = cljs.core.next.call(null,seq46416);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46417,seq46416__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__46422 = arguments.length;
switch (G__46422) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj46424 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__32347__auto__ = start_index;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return (0);
}
})()};
return obj46424;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46432 = arguments.length;
var i__33625__auto___46433 = (0);
while(true){
if((i__33625__auto___46433 < len__33624__auto___46432)){
args__33631__auto__.push((arguments[i__33625__auto___46433]));

var G__46434 = (i__33625__auto___46433 + (1));
i__33625__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__46428){
var vec__46429 = p__46428;
var state_override_fn = cljs.core.nth.call(null,vec__46429,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq46426){
var G__46427 = cljs.core.first.call(null,seq46426);
var seq46426__$1 = cljs.core.next.call(null,seq46426);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__46427,seq46426__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_46435 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46435;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__46436 = name;
switch (G__46436) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__46438 = tag;
var html_tag = cljs.core.nth.call(null,vec__46438,(0),null);
var style = cljs.core.nth.call(null,vec__46438,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_46441 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46441;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_46442 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_46443 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46443;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_46442;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__46444 = initial_value;
var G__46445 = value.call(null);
initial_value = G__46444;
value = G__46445;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__46446 = initial_value;
var G__46447 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__46446;
value = G__46447;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__46448 = initial_value;
var G__46449 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__46448;
value = G__46449;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1525108943874
