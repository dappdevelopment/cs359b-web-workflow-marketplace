// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.workflow.mine');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('cljs.pprint');
goog.require('wflow.components.layout');
goog.require('wflow.router');
goog.require('wflow.services.workflow');
goog.require('wflow.utils.transit');
wflow.scenes.workflow.mine.content_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),((230) + (1)),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);
wflow.scenes.workflow.mine.workflows = (function wflow$scenes$workflow$mine$workflows(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListSA,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divided","divided",727855229),true,new cljs.core.Keyword(null,"relaxed","relaxed",-939075907),true], null),(function (){var iter__33229__auto__ = (function wflow$scenes$workflow$mine$workflows_$_iter__45530(s__45531){
return (new cljs.core.LazySeq(null,(function (){
var s__45531__$1 = s__45531;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__45531__$1);
if(temp__6738__auto__){
var s__45531__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45531__$2)){
var c__33227__auto__ = cljs.core.chunk_first.call(null,s__45531__$2);
var size__33228__auto__ = cljs.core.count.call(null,c__33227__auto__);
var b__45533 = cljs.core.chunk_buffer.call(null,size__33228__auto__);
if((function (){var i__45532 = (0);
while(true){
if((i__45532 < size__33228__auto__)){
var map__45534 = cljs.core._nth.call(null,c__33227__auto__,i__45532);
var map__45534__$1 = ((((!((map__45534 == null)))?((((map__45534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45534):map__45534);
var item = map__45534__$1;
var id = cljs.core.get.call(null,map__45534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var icon = cljs.core.get.call(null,map__45534__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var header = cljs.core.get.call(null,map__45534__$1,new cljs.core.Keyword(null,"header","header",119441134));
var desc = cljs.core.get.call(null,map__45534__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append.call(null,b__45533,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"pencil",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"play",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"like outline",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h4"], null),(93)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"dislike outline",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__45538 = (i__45532 + (1));
i__45532 = G__45538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45533),wflow$scenes$workflow$mine$workflows_$_iter__45530.call(null,cljs.core.chunk_rest.call(null,s__45531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45533),null);
}
} else {
var map__45536 = cljs.core.first.call(null,s__45531__$2);
var map__45536__$1 = ((((!((map__45536 == null)))?((((map__45536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45536):map__45536);
var item = map__45536__$1;
var id = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var icon = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var header = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"header","header",119441134));
var desc = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListItem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"pencil",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"name","name",1843675177),"play",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"like outline",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h4"], null),(93)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListIcon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"dislike outline",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListContent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListHeader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ListDescription,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"a"], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),wflow$scenes$workflow$mine$workflows_$_iter__45530.call(null,cljs.core.rest.call(null,s__45531__$2)));
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
wflow.scenes.workflow.mine.home_panel = (function wflow$scenes$workflow$mine$home_panel(){
var active_item = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","route-page","wflow.router/route-page",-2068391064)], null));
var handle_item_click = ((function (active_item){
return (function (p1__45539_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45539_SHARP_], null)], null));
});})(active_item))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.components.layout.left_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),active_item,new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wflow.scenes.workflow.mine.content_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padded","padded",1434297910),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointing","pointing",-1869969692),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"messages",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,active_item,"messages"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"friends",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,active_item,"friends"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuMenu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"teal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,"Allan Jiang"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Segment,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h2"], null),"Your Web Workflows"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.mine.workflows,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"icon","icon",1679606541),"github",new cljs.core.Keyword(null,"header","header",119441134),"Book Cheapest Flight",new cljs.core.Keyword(null,"desc","desc",2093485764),"Updated 10 minutes ago"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"icon","icon",1679606541),"github",new cljs.core.Keyword(null,"header","header",119441134),"Add courses from Axess to Google Calendar",new cljs.core.Keyword(null,"desc","desc",2093485764),"Updated 15 minutes ago"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"icon","icon",1679606541),"github",new cljs.core.Keyword(null,"header","header",119441134),"Random click on BuzzFeed quizzes",new cljs.core.Keyword(null,"desc","desc",2093485764),"Updated 22 minutes ago"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),"Add new workflow"], null)], null)], null)], null)], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workflow","mine","workflow/mine",-159959084)], null)], null));
}));
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword("workflow","mine","workflow/mine",-159959084),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.mine.home_panel], null);
}));

//# sourceMappingURL=mine.js.map?rel=1526321102349
