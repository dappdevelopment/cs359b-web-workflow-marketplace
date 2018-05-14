// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.user.login');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('goog.dom');
goog.require('wflow.services.re_frame');
goog.require('wflow.utils.forms');
goog.require('wflow.router');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.scenes.user.login","login","wflow.scenes.user.login/login",1565776011),(function (p__46282,p__46283){
var map__46284 = p__46282;
var map__46284__$1 = ((((!((map__46284 == null)))?((((map__46284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46284):map__46284);
var db = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46285 = p__46283;
var _ = cljs.core.nth.call(null,vec__46285,(0),null);
var data = cljs.core.nth.call(null,vec__46285,(1),null);
var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),"local");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST","authentication",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.scenes.user.login","login-success","wflow.scenes.user.login/login-success",1726079677)], null),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"error","Login Failed"], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.scenes.user.login","login-success","wflow.scenes.user.login/login-success",1726079677),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.services.re_frame.__GT_local_store], null),(function (p__46289,p__46290){
var map__46291 = p__46289;
var map__46291__$1 = ((((!((map__46291 == null)))?((((map__46291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46291):map__46291);
var db = cljs.core.get.call(null,map__46291__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46292 = p__46290;
var _ = cljs.core.nth.call(null,vec__46292,(0),null);
var session = cljs.core.nth.call(null,vec__46292,(1),null);
var map__46296 = wflow.router.parse_url.call(null,location.hash.substr((1)));
var map__46296__$1 = ((((!((map__46296 == null)))?((((map__46296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46296):map__46296);
var query_params = cljs.core.get.call(null,map__46296__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var navigate_event = (function (){var temp__6736__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(temp__6736__auto__)){
var path = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-url","set-url",1253200812),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
}
})();
cljs.core.println.call(null,navigate_event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"session","session",1008279103),session),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [navigate_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"clear"], null)], null)], null);
}));
wflow.scenes.user.login.login = (function wflow$scenes$user$login$login(e){
e.preventDefault();

var data = wflow.utils.forms.serialize_form.call(null,goog.dom.getElement("login"));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.scenes.user.login","login","wflow.scenes.user.login/login",1565776011),data], null));
});
wflow.scenes.user.login.login_panel = (function wflow$scenes$user$login$login_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padded","padded",1434297910),true,new cljs.core.Keyword(null,"centered","centered",-515171141),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(450),new cljs.core.Keyword(null,"top","top",-1856271961),(50)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h3"], null),"Login to your account"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"id","id",-1388402092),"login"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Segment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raised","raised",1890794098),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormInput,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"user",new cljs.core.Keyword(null,"icon-position","icon-position",-1720359034),"left",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"E-mail address"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormInput,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"lock",new cljs.core.Keyword(null,"icon-position","icon-position",-1720359034),"left",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"on-click","on-click",1632826543),wflow.scenes.user.login.login], null),"Login"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Message,"New to us? ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),wflow.router.url_for.call(null,new cljs.core.Keyword(null,"signup","signup",1961016747))], null),"Sign Up"], null)], null)], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"login","login",55217519),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.user.login.login_panel], null);
}));

//# sourceMappingURL=login.js.map?rel=1526326060195
