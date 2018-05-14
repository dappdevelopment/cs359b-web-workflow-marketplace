// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e43813){if((e43813 instanceof Error)){
var e = e43813;
return "Error: Unable to stringify";
} else {
throw e43813;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43816 = arguments.length;
switch (G__43816) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43814_SHARP_){
if(typeof p1__43814_SHARP_ === 'string'){
return p1__43814_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43814_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__33631__auto__ = [];
var len__33624__auto___43819 = arguments.length;
var i__33625__auto___43820 = (0);
while(true){
if((i__33625__auto___43820 < len__33624__auto___43819)){
args__33631__auto__.push((arguments[i__33625__auto___43820]));

var G__43821 = (i__33625__auto___43820 + (1));
i__33625__auto___43820 = G__43821;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43818){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43818));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__33631__auto__ = [];
var len__33624__auto___43823 = arguments.length;
var i__33625__auto___43824 = (0);
while(true){
if((i__33625__auto___43824 < len__33624__auto___43823)){
args__33631__auto__.push((arguments[i__33625__auto___43824]));

var G__43825 = (i__33625__auto___43824 + (1));
i__33625__auto___43824 = G__43825;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43822){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43822));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43826){
var map__43827 = p__43826;
var map__43827__$1 = ((((!((map__43827 == null)))?((((map__43827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43827):map__43827);
var message = cljs.core.get.call(null,map__43827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43827__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__32347__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__32335__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__32335__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__32335__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40814__auto___43906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___43906,ch){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___43906,ch){
return (function (state_43878){
var state_val_43879 = (state_43878[(1)]);
if((state_val_43879 === (7))){
var inst_43874 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43880_43907 = state_43878__$1;
(statearr_43880_43907[(2)] = inst_43874);

(statearr_43880_43907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (1))){
var state_43878__$1 = state_43878;
var statearr_43881_43908 = state_43878__$1;
(statearr_43881_43908[(2)] = null);

(statearr_43881_43908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (4))){
var inst_43831 = (state_43878[(7)]);
var inst_43831__$1 = (state_43878[(2)]);
var state_43878__$1 = (function (){var statearr_43882 = state_43878;
(statearr_43882[(7)] = inst_43831__$1);

return statearr_43882;
})();
if(cljs.core.truth_(inst_43831__$1)){
var statearr_43883_43909 = state_43878__$1;
(statearr_43883_43909[(1)] = (5));

} else {
var statearr_43884_43910 = state_43878__$1;
(statearr_43884_43910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (15))){
var inst_43838 = (state_43878[(8)]);
var inst_43853 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43838);
var inst_43854 = cljs.core.first.call(null,inst_43853);
var inst_43855 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43854);
var inst_43856 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43855)].join('');
var inst_43857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43856);
var state_43878__$1 = state_43878;
var statearr_43885_43911 = state_43878__$1;
(statearr_43885_43911[(2)] = inst_43857);

(statearr_43885_43911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (13))){
var inst_43862 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43886_43912 = state_43878__$1;
(statearr_43886_43912[(2)] = inst_43862);

(statearr_43886_43912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (6))){
var state_43878__$1 = state_43878;
var statearr_43887_43913 = state_43878__$1;
(statearr_43887_43913[(2)] = null);

(statearr_43887_43913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (17))){
var inst_43860 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43888_43914 = state_43878__$1;
(statearr_43888_43914[(2)] = inst_43860);

(statearr_43888_43914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (3))){
var inst_43876 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43878__$1,inst_43876);
} else {
if((state_val_43879 === (12))){
var inst_43837 = (state_43878[(9)]);
var inst_43851 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43837,opts);
var state_43878__$1 = state_43878;
if(cljs.core.truth_(inst_43851)){
var statearr_43889_43915 = state_43878__$1;
(statearr_43889_43915[(1)] = (15));

} else {
var statearr_43890_43916 = state_43878__$1;
(statearr_43890_43916[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (2))){
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43878__$1,(4),ch);
} else {
if((state_val_43879 === (11))){
var inst_43838 = (state_43878[(8)]);
var inst_43843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43844 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43838);
var inst_43845 = cljs.core.async.timeout.call(null,(1000));
var inst_43846 = [inst_43844,inst_43845];
var inst_43847 = (new cljs.core.PersistentVector(null,2,(5),inst_43843,inst_43846,null));
var state_43878__$1 = state_43878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43878__$1,(14),inst_43847);
} else {
if((state_val_43879 === (9))){
var inst_43838 = (state_43878[(8)]);
var inst_43864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43865 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43838);
var inst_43866 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43865);
var inst_43867 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43866)].join('');
var inst_43868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43867);
var state_43878__$1 = (function (){var statearr_43891 = state_43878;
(statearr_43891[(10)] = inst_43864);

return statearr_43891;
})();
var statearr_43892_43917 = state_43878__$1;
(statearr_43892_43917[(2)] = inst_43868);

(statearr_43892_43917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (5))){
var inst_43831 = (state_43878[(7)]);
var inst_43833 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43834 = (new cljs.core.PersistentArrayMap(null,2,inst_43833,null));
var inst_43835 = (new cljs.core.PersistentHashSet(null,inst_43834,null));
var inst_43836 = figwheel.client.focus_msgs.call(null,inst_43835,inst_43831);
var inst_43837 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43836);
var inst_43838 = cljs.core.first.call(null,inst_43836);
var inst_43839 = figwheel.client.autoload_QMARK_.call(null);
var state_43878__$1 = (function (){var statearr_43893 = state_43878;
(statearr_43893[(9)] = inst_43837);

(statearr_43893[(8)] = inst_43838);

return statearr_43893;
})();
if(cljs.core.truth_(inst_43839)){
var statearr_43894_43918 = state_43878__$1;
(statearr_43894_43918[(1)] = (8));

} else {
var statearr_43895_43919 = state_43878__$1;
(statearr_43895_43919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (14))){
var inst_43849 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43896_43920 = state_43878__$1;
(statearr_43896_43920[(2)] = inst_43849);

(statearr_43896_43920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (16))){
var state_43878__$1 = state_43878;
var statearr_43897_43921 = state_43878__$1;
(statearr_43897_43921[(2)] = null);

(statearr_43897_43921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (10))){
var inst_43870 = (state_43878[(2)]);
var state_43878__$1 = (function (){var statearr_43898 = state_43878;
(statearr_43898[(11)] = inst_43870);

return statearr_43898;
})();
var statearr_43899_43922 = state_43878__$1;
(statearr_43899_43922[(2)] = null);

(statearr_43899_43922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (8))){
var inst_43837 = (state_43878[(9)]);
var inst_43841 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43837,opts);
var state_43878__$1 = state_43878;
if(cljs.core.truth_(inst_43841)){
var statearr_43900_43923 = state_43878__$1;
(statearr_43900_43923[(1)] = (11));

} else {
var statearr_43901_43924 = state_43878__$1;
(statearr_43901_43924[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40814__auto___43906,ch))
;
return ((function (switch__40724__auto__,c__40814__auto___43906,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____0 = (function (){
var statearr_43902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43902[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__);

(statearr_43902[(1)] = (1));

return statearr_43902;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____1 = (function (state_43878){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_43878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e43903){if((e43903 instanceof Object)){
var ex__40728__auto__ = e43903;
var statearr_43904_43925 = state_43878;
(statearr_43904_43925[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43926 = state_43878;
state_43878 = G__43926;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__ = function(state_43878){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____1.call(this,state_43878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40725__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___43906,ch))
})();
var state__40816__auto__ = (function (){var statearr_43905 = f__40815__auto__.call(null);
(statearr_43905[(6)] = c__40814__auto___43906);

return statearr_43905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___43906,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43927_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43927_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43929 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43929){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e43928){if((e43928 instanceof Error)){
var e = e43928;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43929], null));
} else {
var e = e43928;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_43929))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43930){
var map__43931 = p__43930;
var map__43931__$1 = ((((!((map__43931 == null)))?((((map__43931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43931):map__43931);
var opts = map__43931__$1;
var build_id = cljs.core.get.call(null,map__43931__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43931,map__43931__$1,opts,build_id){
return (function (p__43933){
var vec__43934 = p__43933;
var seq__43935 = cljs.core.seq.call(null,vec__43934);
var first__43936 = cljs.core.first.call(null,seq__43935);
var seq__43935__$1 = cljs.core.next.call(null,seq__43935);
var map__43937 = first__43936;
var map__43937__$1 = ((((!((map__43937 == null)))?((((map__43937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43937):map__43937);
var msg = map__43937__$1;
var msg_name = cljs.core.get.call(null,map__43937__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43935__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43934,seq__43935,first__43936,seq__43935__$1,map__43937,map__43937__$1,msg,msg_name,_,map__43931,map__43931__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43934,seq__43935,first__43936,seq__43935__$1,map__43937,map__43937__$1,msg,msg_name,_,map__43931,map__43931__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43931,map__43931__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43939){
var vec__43940 = p__43939;
var seq__43941 = cljs.core.seq.call(null,vec__43940);
var first__43942 = cljs.core.first.call(null,seq__43941);
var seq__43941__$1 = cljs.core.next.call(null,seq__43941);
var map__43943 = first__43942;
var map__43943__$1 = ((((!((map__43943 == null)))?((((map__43943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43943):map__43943);
var msg = map__43943__$1;
var msg_name = cljs.core.get.call(null,map__43943__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43941__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43945){
var map__43946 = p__43945;
var map__43946__$1 = ((((!((map__43946 == null)))?((((map__43946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43946):map__43946);
var on_compile_warning = cljs.core.get.call(null,map__43946__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43946__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43946,map__43946__$1,on_compile_warning,on_compile_fail){
return (function (p__43948){
var vec__43949 = p__43948;
var seq__43950 = cljs.core.seq.call(null,vec__43949);
var first__43951 = cljs.core.first.call(null,seq__43950);
var seq__43950__$1 = cljs.core.next.call(null,seq__43950);
var map__43952 = first__43951;
var map__43952__$1 = ((((!((map__43952 == null)))?((((map__43952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43952):map__43952);
var msg = map__43952__$1;
var msg_name = cljs.core.get.call(null,map__43952__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43950__$1;
var pred__43954 = cljs.core._EQ_;
var expr__43955 = msg_name;
if(cljs.core.truth_(pred__43954.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43955))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43954.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43955))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43946,map__43946__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__,msg_hist,msg_names,msg){
return (function (state_44044){
var state_val_44045 = (state_44044[(1)]);
if((state_val_44045 === (7))){
var inst_43964 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_43964)){
var statearr_44046_44093 = state_44044__$1;
(statearr_44046_44093[(1)] = (8));

} else {
var statearr_44047_44094 = state_44044__$1;
(statearr_44047_44094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (20))){
var inst_44038 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44048_44095 = state_44044__$1;
(statearr_44048_44095[(2)] = inst_44038);

(statearr_44048_44095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (27))){
var inst_44034 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44049_44096 = state_44044__$1;
(statearr_44049_44096[(2)] = inst_44034);

(statearr_44049_44096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (1))){
var inst_43957 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_43957)){
var statearr_44050_44097 = state_44044__$1;
(statearr_44050_44097[(1)] = (2));

} else {
var statearr_44051_44098 = state_44044__$1;
(statearr_44051_44098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (24))){
var inst_44036 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44052_44099 = state_44044__$1;
(statearr_44052_44099[(2)] = inst_44036);

(statearr_44052_44099[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (4))){
var inst_44042 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44044__$1,inst_44042);
} else {
if((state_val_44045 === (15))){
var inst_44040 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44053_44100 = state_44044__$1;
(statearr_44053_44100[(2)] = inst_44040);

(statearr_44053_44100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (21))){
var inst_43993 = (state_44044[(2)]);
var inst_43994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43995 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43994);
var state_44044__$1 = (function (){var statearr_44054 = state_44044;
(statearr_44054[(7)] = inst_43993);

return statearr_44054;
})();
var statearr_44055_44101 = state_44044__$1;
(statearr_44055_44101[(2)] = inst_43995);

(statearr_44055_44101[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (31))){
var inst_44023 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_44023)){
var statearr_44056_44102 = state_44044__$1;
(statearr_44056_44102[(1)] = (34));

} else {
var statearr_44057_44103 = state_44044__$1;
(statearr_44057_44103[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (32))){
var inst_44032 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44058_44104 = state_44044__$1;
(statearr_44058_44104[(2)] = inst_44032);

(statearr_44058_44104[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (33))){
var inst_44019 = (state_44044[(2)]);
var inst_44020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44021 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44020);
var state_44044__$1 = (function (){var statearr_44059 = state_44044;
(statearr_44059[(8)] = inst_44019);

return statearr_44059;
})();
var statearr_44060_44105 = state_44044__$1;
(statearr_44060_44105[(2)] = inst_44021);

(statearr_44060_44105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (13))){
var inst_43978 = figwheel.client.heads_up.clear.call(null);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(16),inst_43978);
} else {
if((state_val_44045 === (22))){
var inst_43999 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44000 = figwheel.client.heads_up.append_warning_message.call(null,inst_43999);
var state_44044__$1 = state_44044;
var statearr_44061_44106 = state_44044__$1;
(statearr_44061_44106[(2)] = inst_44000);

(statearr_44061_44106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (36))){
var inst_44030 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44062_44107 = state_44044__$1;
(statearr_44062_44107[(2)] = inst_44030);

(statearr_44062_44107[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (29))){
var inst_44010 = (state_44044[(2)]);
var inst_44011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44012 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44011);
var state_44044__$1 = (function (){var statearr_44063 = state_44044;
(statearr_44063[(9)] = inst_44010);

return statearr_44063;
})();
var statearr_44064_44108 = state_44044__$1;
(statearr_44064_44108[(2)] = inst_44012);

(statearr_44064_44108[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (6))){
var inst_43959 = (state_44044[(10)]);
var state_44044__$1 = state_44044;
var statearr_44065_44109 = state_44044__$1;
(statearr_44065_44109[(2)] = inst_43959);

(statearr_44065_44109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (28))){
var inst_44006 = (state_44044[(2)]);
var inst_44007 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44008 = figwheel.client.heads_up.display_warning.call(null,inst_44007);
var state_44044__$1 = (function (){var statearr_44066 = state_44044;
(statearr_44066[(11)] = inst_44006);

return statearr_44066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(29),inst_44008);
} else {
if((state_val_44045 === (25))){
var inst_44004 = figwheel.client.heads_up.clear.call(null);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(28),inst_44004);
} else {
if((state_val_44045 === (34))){
var inst_44025 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(37),inst_44025);
} else {
if((state_val_44045 === (17))){
var inst_43984 = (state_44044[(2)]);
var inst_43985 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43986 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43985);
var state_44044__$1 = (function (){var statearr_44067 = state_44044;
(statearr_44067[(12)] = inst_43984);

return statearr_44067;
})();
var statearr_44068_44110 = state_44044__$1;
(statearr_44068_44110[(2)] = inst_43986);

(statearr_44068_44110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (3))){
var inst_43976 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_43976)){
var statearr_44069_44111 = state_44044__$1;
(statearr_44069_44111[(1)] = (13));

} else {
var statearr_44070_44112 = state_44044__$1;
(statearr_44070_44112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (12))){
var inst_43972 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44071_44113 = state_44044__$1;
(statearr_44071_44113[(2)] = inst_43972);

(statearr_44071_44113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (2))){
var inst_43959 = (state_44044[(10)]);
var inst_43959__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44044__$1 = (function (){var statearr_44072 = state_44044;
(statearr_44072[(10)] = inst_43959__$1);

return statearr_44072;
})();
if(cljs.core.truth_(inst_43959__$1)){
var statearr_44073_44114 = state_44044__$1;
(statearr_44073_44114[(1)] = (5));

} else {
var statearr_44074_44115 = state_44044__$1;
(statearr_44074_44115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (23))){
var inst_44002 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_44002)){
var statearr_44075_44116 = state_44044__$1;
(statearr_44075_44116[(1)] = (25));

} else {
var statearr_44076_44117 = state_44044__$1;
(statearr_44076_44117[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (35))){
var state_44044__$1 = state_44044;
var statearr_44077_44118 = state_44044__$1;
(statearr_44077_44118[(2)] = null);

(statearr_44077_44118[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (19))){
var inst_43997 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_43997)){
var statearr_44078_44119 = state_44044__$1;
(statearr_44078_44119[(1)] = (22));

} else {
var statearr_44079_44120 = state_44044__$1;
(statearr_44079_44120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (11))){
var inst_43968 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44080_44121 = state_44044__$1;
(statearr_44080_44121[(2)] = inst_43968);

(statearr_44080_44121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (9))){
var inst_43970 = figwheel.client.heads_up.clear.call(null);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(12),inst_43970);
} else {
if((state_val_44045 === (5))){
var inst_43961 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44044__$1 = state_44044;
var statearr_44081_44122 = state_44044__$1;
(statearr_44081_44122[(2)] = inst_43961);

(statearr_44081_44122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (14))){
var inst_43988 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_43988)){
var statearr_44082_44123 = state_44044__$1;
(statearr_44082_44123[(1)] = (18));

} else {
var statearr_44083_44124 = state_44044__$1;
(statearr_44083_44124[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (26))){
var inst_44014 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44044__$1 = state_44044;
if(cljs.core.truth_(inst_44014)){
var statearr_44084_44125 = state_44044__$1;
(statearr_44084_44125[(1)] = (30));

} else {
var statearr_44085_44126 = state_44044__$1;
(statearr_44085_44126[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (16))){
var inst_43980 = (state_44044[(2)]);
var inst_43981 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43982 = figwheel.client.heads_up.display_exception.call(null,inst_43981);
var state_44044__$1 = (function (){var statearr_44086 = state_44044;
(statearr_44086[(13)] = inst_43980);

return statearr_44086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(17),inst_43982);
} else {
if((state_val_44045 === (30))){
var inst_44016 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44017 = figwheel.client.heads_up.display_warning.call(null,inst_44016);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(33),inst_44017);
} else {
if((state_val_44045 === (10))){
var inst_43974 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44087_44127 = state_44044__$1;
(statearr_44087_44127[(2)] = inst_43974);

(statearr_44087_44127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (18))){
var inst_43990 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43991 = figwheel.client.heads_up.display_exception.call(null,inst_43990);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(21),inst_43991);
} else {
if((state_val_44045 === (37))){
var inst_44027 = (state_44044[(2)]);
var state_44044__$1 = state_44044;
var statearr_44088_44128 = state_44044__$1;
(statearr_44088_44128[(2)] = inst_44027);

(statearr_44088_44128[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44045 === (8))){
var inst_43966 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44044__$1 = state_44044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44044__$1,(11),inst_43966);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40814__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40724__auto__,c__40814__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____0 = (function (){
var statearr_44089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44089[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__);

(statearr_44089[(1)] = (1));

return statearr_44089;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____1 = (function (state_44044){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_44044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e44090){if((e44090 instanceof Object)){
var ex__40728__auto__ = e44090;
var statearr_44091_44129 = state_44044;
(statearr_44091_44129[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44130 = state_44044;
state_44044 = G__44130;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__ = function(state_44044){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____1.call(this,state_44044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__,msg_hist,msg_names,msg))
})();
var state__40816__auto__ = (function (){var statearr_44092 = f__40815__auto__.call(null);
(statearr_44092[(6)] = c__40814__auto__);

return statearr_44092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__,msg_hist,msg_names,msg))
);

return c__40814__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40814__auto___44159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___44159,ch){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___44159,ch){
return (function (state_44145){
var state_val_44146 = (state_44145[(1)]);
if((state_val_44146 === (1))){
var state_44145__$1 = state_44145;
var statearr_44147_44160 = state_44145__$1;
(statearr_44147_44160[(2)] = null);

(statearr_44147_44160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44146 === (2))){
var state_44145__$1 = state_44145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44145__$1,(4),ch);
} else {
if((state_val_44146 === (3))){
var inst_44143 = (state_44145[(2)]);
var state_44145__$1 = state_44145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44145__$1,inst_44143);
} else {
if((state_val_44146 === (4))){
var inst_44133 = (state_44145[(7)]);
var inst_44133__$1 = (state_44145[(2)]);
var state_44145__$1 = (function (){var statearr_44148 = state_44145;
(statearr_44148[(7)] = inst_44133__$1);

return statearr_44148;
})();
if(cljs.core.truth_(inst_44133__$1)){
var statearr_44149_44161 = state_44145__$1;
(statearr_44149_44161[(1)] = (5));

} else {
var statearr_44150_44162 = state_44145__$1;
(statearr_44150_44162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44146 === (5))){
var inst_44133 = (state_44145[(7)]);
var inst_44135 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44133);
var state_44145__$1 = state_44145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44145__$1,(8),inst_44135);
} else {
if((state_val_44146 === (6))){
var state_44145__$1 = state_44145;
var statearr_44151_44163 = state_44145__$1;
(statearr_44151_44163[(2)] = null);

(statearr_44151_44163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44146 === (7))){
var inst_44141 = (state_44145[(2)]);
var state_44145__$1 = state_44145;
var statearr_44152_44164 = state_44145__$1;
(statearr_44152_44164[(2)] = inst_44141);

(statearr_44152_44164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44146 === (8))){
var inst_44137 = (state_44145[(2)]);
var state_44145__$1 = (function (){var statearr_44153 = state_44145;
(statearr_44153[(8)] = inst_44137);

return statearr_44153;
})();
var statearr_44154_44165 = state_44145__$1;
(statearr_44154_44165[(2)] = null);

(statearr_44154_44165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__40814__auto___44159,ch))
;
return ((function (switch__40724__auto__,c__40814__auto___44159,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40725__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40725__auto____0 = (function (){
var statearr_44155 = [null,null,null,null,null,null,null,null,null];
(statearr_44155[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40725__auto__);

(statearr_44155[(1)] = (1));

return statearr_44155;
});
var figwheel$client$heads_up_plugin_$_state_machine__40725__auto____1 = (function (state_44145){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_44145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e44156){if((e44156 instanceof Object)){
var ex__40728__auto__ = e44156;
var statearr_44157_44166 = state_44145;
(statearr_44157_44166[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44167 = state_44145;
state_44145 = G__44167;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40725__auto__ = function(state_44145){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40725__auto____1.call(this,state_44145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40725__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40725__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___44159,ch))
})();
var state__40816__auto__ = (function (){var statearr_44158 = f__40815__auto__.call(null);
(statearr_44158[(6)] = c__40814__auto___44159);

return statearr_44158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___44159,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__){
return (function (state_44173){
var state_val_44174 = (state_44173[(1)]);
if((state_val_44174 === (1))){
var inst_44168 = cljs.core.async.timeout.call(null,(3000));
var state_44173__$1 = state_44173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44173__$1,(2),inst_44168);
} else {
if((state_val_44174 === (2))){
var inst_44170 = (state_44173[(2)]);
var inst_44171 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44173__$1 = (function (){var statearr_44175 = state_44173;
(statearr_44175[(7)] = inst_44170);

return statearr_44175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44173__$1,inst_44171);
} else {
return null;
}
}
});})(c__40814__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____0 = (function (){
var statearr_44176 = [null,null,null,null,null,null,null,null];
(statearr_44176[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__);

(statearr_44176[(1)] = (1));

return statearr_44176;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____1 = (function (state_44173){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_44173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e44177){if((e44177 instanceof Object)){
var ex__40728__auto__ = e44177;
var statearr_44178_44180 = state_44173;
(statearr_44178_44180[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44181 = state_44173;
state_44173 = G__44181;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__ = function(state_44173){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____1.call(this,state_44173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40725__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__))
})();
var state__40816__auto__ = (function (){var statearr_44179 = f__40815__auto__.call(null);
(statearr_44179[(6)] = c__40814__auto__);

return statearr_44179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__))
);

return c__40814__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6738__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__,figwheel_version,temp__6738__auto__){
return (function (state_44188){
var state_val_44189 = (state_44188[(1)]);
if((state_val_44189 === (1))){
var inst_44182 = cljs.core.async.timeout.call(null,(2000));
var state_44188__$1 = state_44188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44188__$1,(2),inst_44182);
} else {
if((state_val_44189 === (2))){
var inst_44184 = (state_44188[(2)]);
var inst_44185 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44186 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44185);
var state_44188__$1 = (function (){var statearr_44190 = state_44188;
(statearr_44190[(7)] = inst_44184);

return statearr_44190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44188__$1,inst_44186);
} else {
return null;
}
}
});})(c__40814__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____0 = (function (){
var statearr_44191 = [null,null,null,null,null,null,null,null];
(statearr_44191[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__);

(statearr_44191[(1)] = (1));

return statearr_44191;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____1 = (function (state_44188){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_44188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e44192){if((e44192 instanceof Object)){
var ex__40728__auto__ = e44192;
var statearr_44193_44195 = state_44188;
(statearr_44193_44195[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44196 = state_44188;
state_44188 = G__44196;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__ = function(state_44188){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____1.call(this,state_44188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__,figwheel_version,temp__6738__auto__))
})();
var state__40816__auto__ = (function (){var statearr_44194 = f__40815__auto__.call(null);
(statearr_44194[(6)] = c__40814__auto__);

return statearr_44194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__,figwheel_version,temp__6738__auto__))
);

return c__40814__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44197){
var map__44198 = p__44197;
var map__44198__$1 = ((((!((map__44198 == null)))?((((map__44198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44198):map__44198);
var file = cljs.core.get.call(null,map__44198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44198__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44198__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44200 = "";
var G__44200__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44200),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44200);
var G__44200__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44200__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44200__$1);
if(cljs.core.truth_((function (){var and__32335__auto__ = line;
if(cljs.core.truth_(and__32335__auto__)){
return column;
} else {
return and__32335__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44200__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44200__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44201){
var map__44202 = p__44201;
var map__44202__$1 = ((((!((map__44202 == null)))?((((map__44202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44202):map__44202);
var ed = map__44202__$1;
var formatted_exception = cljs.core.get.call(null,map__44202__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44202__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44202__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44204_44208 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44205_44209 = null;
var count__44206_44210 = (0);
var i__44207_44211 = (0);
while(true){
if((i__44207_44211 < count__44206_44210)){
var msg_44212 = cljs.core._nth.call(null,chunk__44205_44209,i__44207_44211);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44212);

var G__44213 = seq__44204_44208;
var G__44214 = chunk__44205_44209;
var G__44215 = count__44206_44210;
var G__44216 = (i__44207_44211 + (1));
seq__44204_44208 = G__44213;
chunk__44205_44209 = G__44214;
count__44206_44210 = G__44215;
i__44207_44211 = G__44216;
continue;
} else {
var temp__6738__auto___44217 = cljs.core.seq.call(null,seq__44204_44208);
if(temp__6738__auto___44217){
var seq__44204_44218__$1 = temp__6738__auto___44217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44204_44218__$1)){
var c__33278__auto___44219 = cljs.core.chunk_first.call(null,seq__44204_44218__$1);
var G__44220 = cljs.core.chunk_rest.call(null,seq__44204_44218__$1);
var G__44221 = c__33278__auto___44219;
var G__44222 = cljs.core.count.call(null,c__33278__auto___44219);
var G__44223 = (0);
seq__44204_44208 = G__44220;
chunk__44205_44209 = G__44221;
count__44206_44210 = G__44222;
i__44207_44211 = G__44223;
continue;
} else {
var msg_44224 = cljs.core.first.call(null,seq__44204_44218__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44224);

var G__44225 = cljs.core.next.call(null,seq__44204_44218__$1);
var G__44226 = null;
var G__44227 = (0);
var G__44228 = (0);
seq__44204_44208 = G__44225;
chunk__44205_44209 = G__44226;
count__44206_44210 = G__44227;
i__44207_44211 = G__44228;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44229){
var map__44230 = p__44229;
var map__44230__$1 = ((((!((map__44230 == null)))?((((map__44230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44230):map__44230);
var w = map__44230__$1;
var message = cljs.core.get.call(null,map__44230__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__32335__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__32335__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__32335__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44232 = cljs.core.seq.call(null,plugins);
var chunk__44233 = null;
var count__44234 = (0);
var i__44235 = (0);
while(true){
if((i__44235 < count__44234)){
var vec__44236 = cljs.core._nth.call(null,chunk__44233,i__44235);
var k = cljs.core.nth.call(null,vec__44236,(0),null);
var plugin = cljs.core.nth.call(null,vec__44236,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44242 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44232,chunk__44233,count__44234,i__44235,pl_44242,vec__44236,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44242.call(null,msg_hist);
});})(seq__44232,chunk__44233,count__44234,i__44235,pl_44242,vec__44236,k,plugin))
);
} else {
}

var G__44243 = seq__44232;
var G__44244 = chunk__44233;
var G__44245 = count__44234;
var G__44246 = (i__44235 + (1));
seq__44232 = G__44243;
chunk__44233 = G__44244;
count__44234 = G__44245;
i__44235 = G__44246;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__44232);
if(temp__6738__auto__){
var seq__44232__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44232__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__44232__$1);
var G__44247 = cljs.core.chunk_rest.call(null,seq__44232__$1);
var G__44248 = c__33278__auto__;
var G__44249 = cljs.core.count.call(null,c__33278__auto__);
var G__44250 = (0);
seq__44232 = G__44247;
chunk__44233 = G__44248;
count__44234 = G__44249;
i__44235 = G__44250;
continue;
} else {
var vec__44239 = cljs.core.first.call(null,seq__44232__$1);
var k = cljs.core.nth.call(null,vec__44239,(0),null);
var plugin = cljs.core.nth.call(null,vec__44239,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44251 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44232,chunk__44233,count__44234,i__44235,pl_44251,vec__44239,k,plugin,seq__44232__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44251.call(null,msg_hist);
});})(seq__44232,chunk__44233,count__44234,i__44235,pl_44251,vec__44239,k,plugin,seq__44232__$1,temp__6738__auto__))
);
} else {
}

var G__44252 = cljs.core.next.call(null,seq__44232__$1);
var G__44253 = null;
var G__44254 = (0);
var G__44255 = (0);
seq__44232 = G__44252;
chunk__44233 = G__44253;
count__44234 = G__44254;
i__44235 = G__44255;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44257 = arguments.length;
switch (G__44257) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44258_44263 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44259_44264 = null;
var count__44260_44265 = (0);
var i__44261_44266 = (0);
while(true){
if((i__44261_44266 < count__44260_44265)){
var msg_44267 = cljs.core._nth.call(null,chunk__44259_44264,i__44261_44266);
figwheel.client.socket.handle_incoming_message.call(null,msg_44267);

var G__44268 = seq__44258_44263;
var G__44269 = chunk__44259_44264;
var G__44270 = count__44260_44265;
var G__44271 = (i__44261_44266 + (1));
seq__44258_44263 = G__44268;
chunk__44259_44264 = G__44269;
count__44260_44265 = G__44270;
i__44261_44266 = G__44271;
continue;
} else {
var temp__6738__auto___44272 = cljs.core.seq.call(null,seq__44258_44263);
if(temp__6738__auto___44272){
var seq__44258_44273__$1 = temp__6738__auto___44272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44258_44273__$1)){
var c__33278__auto___44274 = cljs.core.chunk_first.call(null,seq__44258_44273__$1);
var G__44275 = cljs.core.chunk_rest.call(null,seq__44258_44273__$1);
var G__44276 = c__33278__auto___44274;
var G__44277 = cljs.core.count.call(null,c__33278__auto___44274);
var G__44278 = (0);
seq__44258_44263 = G__44275;
chunk__44259_44264 = G__44276;
count__44260_44265 = G__44277;
i__44261_44266 = G__44278;
continue;
} else {
var msg_44279 = cljs.core.first.call(null,seq__44258_44273__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44279);

var G__44280 = cljs.core.next.call(null,seq__44258_44273__$1);
var G__44281 = null;
var G__44282 = (0);
var G__44283 = (0);
seq__44258_44263 = G__44280;
chunk__44259_44264 = G__44281;
count__44260_44265 = G__44282;
i__44261_44266 = G__44283;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__33631__auto__ = [];
var len__33624__auto___44288 = arguments.length;
var i__33625__auto___44289 = (0);
while(true){
if((i__33625__auto___44289 < len__33624__auto___44288)){
args__33631__auto__.push((arguments[i__33625__auto___44289]));

var G__44290 = (i__33625__auto___44289 + (1));
i__33625__auto___44289 = G__44290;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44285){
var map__44286 = p__44285;
var map__44286__$1 = ((((!((map__44286 == null)))?((((map__44286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44286):map__44286);
var opts = map__44286__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44284){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44284));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44291){if((e44291 instanceof Error)){
var e = e44291;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44291;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44292){
var map__44293 = p__44292;
var map__44293__$1 = ((((!((map__44293 == null)))?((((map__44293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44293):map__44293);
var msg_name = cljs.core.get.call(null,map__44293__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525108940672
