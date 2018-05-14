// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__33080__auto__ = (((value == null))?null:value);
var m__33081__auto__ = (devtools.format._header[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,value);
} else {
var m__33081__auto____$1 = (devtools.format._header["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__33080__auto__ = (((value == null))?null:value);
var m__33081__auto__ = (devtools.format._has_body[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,value);
} else {
var m__33081__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__33080__auto__ = (((value == null))?null:value);
var m__33081__auto__ = (devtools.format._body[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,value);
} else {
var m__33081__auto____$1 = (devtools.format._body["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44543 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44543["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44544 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44544["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44545 = temp__6736__auto____$2;
return (o44545["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44546 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44546["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44547 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44547["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44548 = temp__6736__auto____$2;
return (o44548["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44549 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44549["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44550 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44550["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44551 = temp__6736__auto____$2;
return (o44551["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44552 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44552["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44553 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44553["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44554 = temp__6736__auto____$2;
return (o44554["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44555 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44555["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44556 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44556["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44557 = temp__6736__auto____$2;
return (o44557["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44558 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44558["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44559 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44559["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44560 = temp__6736__auto____$2;
return (o44560["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o44561 = temp__6736__auto__;
var temp__6736__auto____$1 = (o44561["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o44562 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o44562["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o44563 = temp__6736__auto____$2;
return (o44563["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44565 = arguments.length;
var i__33625__auto___44566 = (0);
while(true){
if((i__33625__auto___44566 < len__33624__auto___44565)){
args__33631__auto__.push((arguments[i__33625__auto___44566]));

var G__44567 = (i__33625__auto___44566 + (1));
i__33625__auto___44566 = G__44567;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq44564){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44564));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44569 = arguments.length;
var i__33625__auto___44570 = (0);
while(true){
if((i__33625__auto___44570 < len__33624__auto___44569)){
args__33631__auto__.push((arguments[i__33625__auto___44570]));

var G__44571 = (i__33625__auto___44570 + (1));
i__33625__auto___44570 = G__44571;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq44568){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44568));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44573 = arguments.length;
var i__33625__auto___44574 = (0);
while(true){
if((i__33625__auto___44574 < len__33624__auto___44573)){
args__33631__auto__.push((arguments[i__33625__auto___44574]));

var G__44575 = (i__33625__auto___44574 + (1));
i__33625__auto___44574 = G__44575;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq44572){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44572));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44577 = arguments.length;
var i__33625__auto___44578 = (0);
while(true){
if((i__33625__auto___44578 < len__33624__auto___44577)){
args__33631__auto__.push((arguments[i__33625__auto___44578]));

var G__44579 = (i__33625__auto___44578 + (1));
i__33625__auto___44578 = G__44579;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq44576){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44576));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44581 = arguments.length;
var i__33625__auto___44582 = (0);
while(true){
if((i__33625__auto___44582 < len__33624__auto___44581)){
args__33631__auto__.push((arguments[i__33625__auto___44582]));

var G__44583 = (i__33625__auto___44582 + (1));
i__33625__auto___44582 = G__44583;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq44580){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44580));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44585 = arguments.length;
var i__33625__auto___44586 = (0);
while(true){
if((i__33625__auto___44586 < len__33624__auto___44585)){
args__33631__auto__.push((arguments[i__33625__auto___44586]));

var G__44587 = (i__33625__auto___44586 + (1));
i__33625__auto___44586 = G__44587;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq44584){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44584));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44589 = arguments.length;
var i__33625__auto___44590 = (0);
while(true){
if((i__33625__auto___44590 < len__33624__auto___44589)){
args__33631__auto__.push((arguments[i__33625__auto___44590]));

var G__44591 = (i__33625__auto___44590 + (1));
i__33625__auto___44590 = G__44591;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq44588){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44588));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44599 = arguments.length;
var i__33625__auto___44600 = (0);
while(true){
if((i__33625__auto___44600 < len__33624__auto___44599)){
args__33631__auto__.push((arguments[i__33625__auto___44600]));

var G__44601 = (i__33625__auto___44600 + (1));
i__33625__auto___44600 = G__44601;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44595){
var vec__44596 = p__44595;
var state_override = cljs.core.nth.call(null,vec__44596,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__44596,state_override){
return (function (p1__44592_SHARP_){
return cljs.core.merge.call(null,p1__44592_SHARP_,state_override);
});})(vec__44596,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq44593){
var G__44594 = cljs.core.first.call(null,seq44593);
var seq44593__$1 = cljs.core.next.call(null,seq44593);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__44594,seq44593__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44603 = arguments.length;
var i__33625__auto___44604 = (0);
while(true){
if((i__33625__auto___44604 < len__33624__auto___44603)){
args__33631__auto__.push((arguments[i__33625__auto___44604]));

var G__44605 = (i__33625__auto___44604 + (1));
i__33625__auto___44604 = G__44605;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq44602){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44602));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44608 = arguments.length;
var i__33625__auto___44609 = (0);
while(true){
if((i__33625__auto___44609 < len__33624__auto___44608)){
args__33631__auto__.push((arguments[i__33625__auto___44609]));

var G__44610 = (i__33625__auto___44609 + (1));
i__33625__auto___44609 = G__44610;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq44606){
var G__44607 = cljs.core.first.call(null,seq44606);
var seq44606__$1 = cljs.core.next.call(null,seq44606);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__44607,seq44606__$1);
});


//# sourceMappingURL=format.js.map?rel=1525108941274
