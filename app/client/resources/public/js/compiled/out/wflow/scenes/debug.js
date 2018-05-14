// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.debug');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('cljs.pprint');
goog.require('wflow.components.layout');
goog.require('wflow.router');
goog.require('wflow.services.workflow');
goog.require('wflow.utils.transit');
wflow.scenes.debug.content_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),((230) + (1)),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);
wflow.scenes.debug.dbg_info = (function wflow$scenes$debug$dbg_info(state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h3"], null),"State"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre>code","pre>code",-884552492),cljs.core.PersistentArrayMap.EMPTY,(function (){var sb__33472__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46034_46036 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_46035_46037 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46034_46036,_STAR_print_fn_STAR_46035_46037,sb__33472__auto__){
return (function (x__33473__auto__){
return sb__33472__auto__.append(x__33473__auto__);
});})(_STAR_print_newline_STAR_46034_46036,_STAR_print_fn_STAR_46035_46037,sb__33472__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"logs","logs",1068148008)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46035_46037;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46034_46036;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__33472__auto__)].join('');
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h3"], null),"Logs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre>code","pre>code",-884552492),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.call(null,(function (s,l){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"\n"].join('');
}),"",cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"logs","logs",1068148008)))], null)], null)], null);
});
});
wflow.scenes.debug.commands = (function wflow$scenes$debug$commands(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.TextArea,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"commands"], null)], null);
});
wflow.scenes.debug.get_actions = (function wflow$scenes$debug$get_actions(){
return wflow.utils.transit.read.call(null,document.getElementById("commands").value);
});
wflow.scenes.debug.workflows = (function wflow$scenes$debug$workflows(){
var with_let46038 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let46038","with-let46038",-1603790974));
var temp__6742__auto___46040 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__6742__auto___46040 == null)){
} else {
var c__34146__auto___46041 = temp__6742__auto___46040;
if((with_let46038.generation === c__34146__auto___46041.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let46038.generation = c__34146__auto___46041.ratomGeneration;
}


var init46039 = (with_let46038.length === (0));
var state = ((init46039)?(with_let46038[(0)] = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.PersistentVector.EMPTY], null))):(with_let46038[(0)]));
var res__34147__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),"equal",new cljs.core.Keyword(null,"relaxed","relaxed",-939075907),"very",new cljs.core.Keyword(null,"divided","divided",727855229),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,wflow.services.workflow.init_PLUS_start,state)], null),"init+start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,wflow.services.workflow.stop,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),"stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,wflow.services.workflow.navigate,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),"navigate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,wflow.services.workflow.click,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),"click"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,wflow.services.workflow.type_keys,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),"type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init46039,state,with_let46038){
return (function (){
return wflow.services.workflow.do_actions.call(null,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),wflow.scenes.debug.get_actions.call(null));
});})(init46039,state,with_let46038))
], null),"do"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.debug.commands], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.debug.dbg_info,state], null)], null);

return res__34147__auto__;
});
wflow.scenes.debug.home_panel = (function wflow$scenes$debug$home_panel(){
var active_item = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","route-page","wflow.router/route-page",-2068391064)], null));
var handle_item_click = ((function (active_item){
return (function (p1__46042_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46042_SHARP_], null)], null));
});})(active_item))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.components.layout.left_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),active_item,new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wflow.scenes.debug.content_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.debug.workflows], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"debug","debug",-1608172596),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.debug.home_panel], null);
}));

//# sourceMappingURL=debug.js.map?rel=1526321164721
