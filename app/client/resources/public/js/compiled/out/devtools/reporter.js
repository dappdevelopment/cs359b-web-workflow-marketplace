// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46657 = arguments.length;
var i__33625__auto___46658 = (0);
while(true){
if((i__33625__auto___46658 < len__33624__auto___46657)){
args__33631__auto__.push((arguments[i__33625__auto___46658]));

var G__46659 = (i__33625__auto___46658 + (1));
i__33625__auto___46658 = G__46659;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__46652){
var vec__46653 = p__46652;
var context = cljs.core.nth.call(null,vec__46653,(0),null);
var footer = cljs.core.nth.call(null,vec__46653,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__32347__auto__ = e.message;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e46656){var e__$1 = e46656;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq46650){
var G__46651 = cljs.core.first.call(null,seq46650);
var seq46650__$1 = cljs.core.next.call(null,seq46650);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46651,seq46650__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1525108944208
