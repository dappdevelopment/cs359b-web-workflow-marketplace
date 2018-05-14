// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.workflow.marketplace');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('clojure.string');
goog.require('wflow.data.workflows');
goog.require('wflow.data.user');
goog.require('wflow.components.layout');
goog.require('wflow.router');
goog.require('wflow.services.workflow');
goog.require('wflow.utils.transit');
wflow.scenes.workflow.marketplace.content_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),((230) + (1)),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);
/**
 * A vector of abbreviations for the twelve months, in order.
 */
wflow.scenes.workflow.marketplace.month_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
/**
 * Returns the abbreviation for a month in the range [1..12].
 */
wflow.scenes.workflow.marketplace.month_name = (function wflow$scenes$workflow$marketplace$month_name(month){
return cljs.core.get.call(null,wflow.scenes.workflow.marketplace.month_names,(month - (1)));
});
/**
 * Returns a map with keys :year, :month, and :day from the given ISO 8601 date string.
 */
wflow.scenes.workflow.marketplace.parse_iso_date = (function wflow$scenes$workflow$marketplace$parse_iso_date(date){
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446)], null),cljs.core.map.call(null,parseInt,clojure.string.split.call(null,date,/-0?/)));
});
wflow.scenes.workflow.marketplace.format_date = (function wflow$scenes$workflow$marketplace$format_date(date){
var map__46239 = wflow.scenes.workflow.marketplace.parse_iso_date.call(null,date);
var map__46239__$1 = ((((!((map__46239 == null)))?((((map__46239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46239):map__46239);
var day = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.call(null,map__46239__$1,new cljs.core.Keyword(null,"year","year",335913393));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wflow.scenes.workflow.marketplace.month_name.call(null,month))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
wflow.scenes.workflow.marketplace.workflows = (function wflow$scenes$workflow$marketplace$workflows(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListSA,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divided","divided",727855229),true,new cljs.core.Keyword(null,"relaxed","relaxed",-939075907),true], null),(function (){var iter__33229__auto__ = (function wflow$scenes$workflow$marketplace$workflows_$_iter__46241(s__46242){
return (new cljs.core.LazySeq(null,(function (){
var s__46242__$1 = s__46242;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__46242__$1);
if(temp__6738__auto__){
var s__46242__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46242__$2)){
var c__33227__auto__ = cljs.core.chunk_first.call(null,s__46242__$2);
var size__33228__auto__ = cljs.core.count.call(null,c__33227__auto__);
var b__46244 = cljs.core.chunk_buffer.call(null,size__33228__auto__);
if((function (){var i__46243 = (0);
while(true){
if((i__46243 < size__33228__auto__)){
var map__46245 = cljs.core._nth.call(null,c__33227__auto__,i__46243);
var map__46245__$1 = ((((!((map__46245 == null)))?((((map__46245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46245):map__46245);
var item = map__46245__$1;
var _id = cljs.core.get.call(null,map__46245__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var name = cljs.core.get.call(null,map__46245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var updatedAt = cljs.core.get.call(null,map__46245__$1,new cljs.core.Keyword(null,"updatedAt","updatedAt",1796679523));
cljs.core.chunk_append.call(null,b__46244,(function (){var desc = updatedAt;
var price = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(5)))," WFT"].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"pencil",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"play",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ButtonGroup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null),new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,["Buy (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(price),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),wflow.scenes.workflow.marketplace.format_date.call(null,desc)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),_id], null));
})());

var G__46249 = (i__46243 + (1));
i__46243 = G__46249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46244),wflow$scenes$workflow$marketplace$workflows_$_iter__46241.call(null,cljs.core.chunk_rest.call(null,s__46242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46244),null);
}
} else {
var map__46247 = cljs.core.first.call(null,s__46242__$2);
var map__46247__$1 = ((((!((map__46247 == null)))?((((map__46247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46247):map__46247);
var item = map__46247__$1;
var _id = cljs.core.get.call(null,map__46247__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var name = cljs.core.get.call(null,map__46247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var updatedAt = cljs.core.get.call(null,map__46247__$1,new cljs.core.Keyword(null,"updatedAt","updatedAt",1796679523));
return cljs.core.cons.call(null,(function (){var desc = updatedAt;
var price = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(5)))," WFT"].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"pencil",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"play",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ButtonGroup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null),new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,["Buy (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(price),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),wflow.scenes.workflow.marketplace.format_date.call(null,desc)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),_id], null));
})(),wflow$scenes$workflow$marketplace$workflows_$_iter__46241.call(null,cljs.core.rest.call(null,s__46242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__33229__auto__.call(null,items);
})()], null);
});
wflow.scenes.workflow.marketplace.filters = (function wflow$scenes$workflow$marketplace$filters(var_args){
var args__33631__auto__ = [];
var len__33624__auto___46255 = arguments.length;
var i__33625__auto___46256 = (0);
while(true){
if((i__33625__auto___46256 < len__33624__auto___46255)){
args__33631__auto__.push((arguments[i__33625__auto___46256]));

var G__46257 = (i__33625__auto___46256 + (1));
i__33625__auto___46256 = G__46257;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return wflow.scenes.workflow.marketplace.filters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

wflow.scenes.workflow.marketplace.filters.cljs$core$IFn$_invoke$arity$variadic = (function (p__46252,children){
var map__46253 = p__46252;
var map__46253__$1 = ((((!((map__46253 == null)))?((((map__46253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46253):map__46253);
var handle_item_click = cljs.core.get.call(null,map__46253__$1,new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031));
var active_item = cljs.core.get.call(null,map__46253__$1,new cljs.core.Keyword(null,"active-item","active-item",-1265645988));
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.data.user","user","wflow.data.user/user",-1752819966)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointing","pointing",-1869969692),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"all",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"trending",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,active_item,"messages"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"top rated",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,active_item,"friends"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"mine",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,active_item,"friends"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuMenu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"teal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null)], null);
});

wflow.scenes.workflow.marketplace.filters.cljs$lang$maxFixedArity = (1);

wflow.scenes.workflow.marketplace.filters.cljs$lang$applyTo = (function (seq46250){
var G__46251 = cljs.core.first.call(null,seq46250);
var seq46250__$1 = cljs.core.next.call(null,seq46250);
return wflow.scenes.workflow.marketplace.filters.cljs$core$IFn$_invoke$arity$variadic(G__46251,seq46250__$1);
});

wflow.scenes.workflow.marketplace.home_panel = (function wflow$scenes$workflow$marketplace$home_panel(){
var active_item = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","route-page","wflow.router/route-page",-2068391064)], null));
var handle_item_click = ((function (active_item){
return (function (p1__46258_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46258_SHARP_], null)], null));
});})(active_item))
;
var workflow_data = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.data.workflows","workflows","wflow.data.workflows/workflows",687269240)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.components.layout.left_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),active_item,new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wflow.scenes.workflow.marketplace.content_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padded","padded",1434297910),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.marketplace.filters,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031),((function (active_item,handle_item_click,workflow_data){
return (function (){
return alert("TODO");
});})(active_item,handle_item_click,workflow_data))
,new cljs.core.Keyword(null,"active-item","active-item",-1265645988),active_item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.marketplace.workflows,workflow_data], null)], null)], null)], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"marketplace","marketplace",236355452),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.marketplace.home_panel], null);
}));

//# sourceMappingURL=marketplace.js.map?rel=1526326060119
