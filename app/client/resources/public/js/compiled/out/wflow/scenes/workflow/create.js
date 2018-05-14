// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.workflow.create');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('cljs.pprint');
goog.require('goog.dom');
goog.require('wflow.components.layout');
goog.require('wflow.router');
goog.require('wflow.utils.forms');
goog.require('wflow.services.workflow');
goog.require('wflow.utils.transit');
wflow.scenes.workflow.create.content_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),((230) + (1)),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.scenes.workflow.create","create-workflow","wflow.scenes.workflow.create/create-workflow",1448901093),(function (p__46227,p__46228){
var map__46229 = p__46227;
var map__46229__$1 = ((((!((map__46229 == null)))?((((map__46229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46229):map__46229);
var db = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46230 = p__46228;
var _ = cljs.core.nth.call(null,vec__46230,(0),null);
var data = cljs.core.nth.call(null,vec__46230,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST","/workflows",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"authorization","authorization",-166302136),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"accessToken","accessToken",1833707055)], null))], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"success","workflow created!"], null),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"error","failed to save workflow"], null)], null)], null);
}));
wflow.scenes.workflow.create.create_workflow = (function wflow$scenes$workflow$create$create_workflow(e){
var form_element = goog.dom.getElement("create-workflow");
var data = wflow.utils.forms.serialize_form.call(null,form_element);
form_element.reset();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.scenes.workflow.create","create-workflow","wflow.scenes.workflow.create/create-workflow",1448901093),data], null));
});
wflow.scenes.workflow.create.workflows = (function wflow$scenes$workflow$create$workflows(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"centered","centered",-515171141),true,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(550),new cljs.core.Keyword(null,"top","top",-1856271961),(25)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Segment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raised","raised",1890794098),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h3"], null),"Create Workflow"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"create-workflow",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),wflow.scenes.workflow.create.create_workflow], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormField,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Workflow name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Workflow name",new cljs.core.Keyword(null,"name","name",1843675177),"name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormField,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Unique Identifier"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ID",new cljs.core.Keyword(null,"name","name",1843675177),"slug"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"TODO TAGS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormField,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Checkbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"I agree to the Terms and Conditions"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null)], null)], null)], null);
});
wflow.scenes.workflow.create.home_panel = (function wflow$scenes$workflow$create$home_panel(){
var active_item = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.router","route-page","wflow.router/route-page",-2068391064)], null));
var handle_item_click = ((function (active_item){
return (function (p1__46234_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46234_SHARP_], null)], null));
});})(active_item))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.components.layout.left_menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),active_item,new cljs.core.Keyword(null,"handle-item-click","handle-item-click",-937867031),handle_item_click], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wflow.scenes.workflow.create.content_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.create.workflows], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword("workflow","create","workflow/create",-1269794359),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.workflow.create.home_panel], null);
}));

//# sourceMappingURL=create.js.map?rel=1526326060045
