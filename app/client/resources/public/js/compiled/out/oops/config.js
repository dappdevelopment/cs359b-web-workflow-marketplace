// Compiled by ClojureScript 1.9.908 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35638 = arguments.length;
var i__33625__auto___35639 = (0);
while(true){
if((i__33625__auto___35639 < len__33624__auto___35638)){
args__33631__auto__.push((arguments[i__33625__auto___35639]));

var G__35640 = (i__33625__auto___35639 + (1));
i__33625__auto___35639 = G__35640;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq35636){
var G__35637 = cljs.core.first.call(null,seq35636);
var seq35636__$1 = cljs.core.next.call(null,seq35636);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35637,seq35636__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35647 = arguments.length;
var i__33625__auto___35648 = (0);
while(true){
if((i__33625__auto___35648 < len__33624__auto___35647)){
args__33631__auto__.push((arguments[i__33625__auto___35648]));

var G__35649 = (i__33625__auto___35648 + (1));
i__33625__auto___35648 = G__35649;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__35643){
var vec__35644 = p__35643;
var config = cljs.core.nth.call(null,vec__35644,(0),null);
return key.call(null,(function (){var or__32347__auto__ = config;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq35641){
var G__35642 = cljs.core.first.call(null,seq35641);
var seq35641__$1 = cljs.core.next.call(null,seq35641);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__35642,seq35641__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35656 = arguments.length;
var i__33625__auto___35657 = (0);
while(true){
if((i__33625__auto___35657 < len__33624__auto___35656)){
args__33631__auto__.push((arguments[i__33625__auto___35657]));

var G__35658 = (i__33625__auto___35657 + (1));
i__33625__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__35652){
var vec__35653 = p__35652;
var config = cljs.core.nth.call(null,vec__35653,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__32347__auto__ = config;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq35650){
var G__35651 = cljs.core.first.call(null,seq35650);
var seq35650__$1 = cljs.core.next.call(null,seq35650);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__35651,seq35650__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35664 = arguments.length;
var i__33625__auto___35665 = (0);
while(true){
if((i__33625__auto___35665 < len__33624__auto___35664)){
args__33631__auto__.push((arguments[i__33625__auto___35665]));

var G__35666 = (i__33625__auto___35665 + (1));
i__33625__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__35660){
var vec__35661 = p__35660;
var config = cljs.core.nth.call(null,vec__35661,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq35659){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35659));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35672 = arguments.length;
var i__33625__auto___35673 = (0);
while(true){
if((i__33625__auto___35673 < len__33624__auto___35672)){
args__33631__auto__.push((arguments[i__33625__auto___35673]));

var G__35674 = (i__33625__auto___35673 + (1));
i__33625__auto___35673 = G__35674;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__35668){
var vec__35669 = p__35668;
var config = cljs.core.nth.call(null,vec__35669,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq35667){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35667));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35680 = arguments.length;
var i__33625__auto___35681 = (0);
while(true){
if((i__33625__auto___35681 < len__33624__auto___35680)){
args__33631__auto__.push((arguments[i__33625__auto___35681]));

var G__35682 = (i__33625__auto___35681 + (1));
i__33625__auto___35681 = G__35682;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__35676){
var vec__35677 = p__35676;
var config = cljs.core.nth.call(null,vec__35677,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq35675){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35675));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35688 = arguments.length;
var i__33625__auto___35689 = (0);
while(true){
if((i__33625__auto___35689 < len__33624__auto___35688)){
args__33631__auto__.push((arguments[i__33625__auto___35689]));

var G__35690 = (i__33625__auto___35689 + (1));
i__33625__auto___35689 = G__35690;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__35684){
var vec__35685 = p__35684;
var config = cljs.core.nth.call(null,vec__35685,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq35683){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35683));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35696 = arguments.length;
var i__33625__auto___35697 = (0);
while(true){
if((i__33625__auto___35697 < len__33624__auto___35696)){
args__33631__auto__.push((arguments[i__33625__auto___35697]));

var G__35698 = (i__33625__auto___35697 + (1));
i__33625__auto___35697 = G__35698;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35692){
var vec__35693 = p__35692;
var config = cljs.core.nth.call(null,vec__35693,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq35691){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35691));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___35704 = arguments.length;
var i__33625__auto___35705 = (0);
while(true){
if((i__33625__auto___35705 < len__33624__auto___35704)){
args__33631__auto__.push((arguments[i__33625__auto___35705]));

var G__35706 = (i__33625__auto___35705 + (1));
i__33625__auto___35705 = G__35706;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35700){
var vec__35701 = p__35700;
var config = cljs.core.nth.call(null,vec__35701,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq35699){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35699));
});


//# sourceMappingURL=config.js.map?rel=1525108929389
