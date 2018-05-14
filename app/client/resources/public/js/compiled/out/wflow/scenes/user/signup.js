// Compiled by ClojureScript 1.9.908 {}
goog.provide('wflow.scenes.user.signup');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('goog.dom');
goog.require('wflow.services.re_frame');
goog.require('wflow.utils.forms');
goog.require('wflow.router');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.scenes.user.signup","signup","wflow.scenes.user.signup/signup",-719467862),(function (p__46264,p__46265){
var map__46266 = p__46264;
var map__46266__$1 = ((((!((map__46266 == null)))?((((map__46266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46266):map__46266);
var db = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46267 = p__46265;
var _ = cljs.core.nth.call(null,vec__46267,(0),null);
var data = cljs.core.nth.call(null,vec__46267,(1),null);
var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),"local");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST","signup",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.scenes.user.signup","signup-success","wflow.scenes.user.signup/signup-success",101659436)], null),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"error","Signup Failed"], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("wflow.scenes.user.signup","signup-success","wflow.scenes.user.signup/signup-success",101659436),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.services.re_frame.__GT_local_store], null),(function (p__46271,p__46272){
var map__46273 = p__46271;
var map__46273__$1 = ((((!((map__46273 == null)))?((((map__46273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46273):map__46273);
var db = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46274 = p__46272;
var _ = cljs.core.nth.call(null,vec__46274,(0),null);
var session = cljs.core.nth.call(null,vec__46274,(1),null);
var map__46278 = wflow.router.parse_url.call(null,location.hash.substr((1)));
var map__46278__$1 = ((((!((map__46278 == null)))?((((map__46278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46278):map__46278);
var query_params = cljs.core.get.call(null,map__46278__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"session","session",1008279103),session),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),"clear"], null)], null)], null);
}));
wflow.scenes.user.signup.signup = (function wflow$scenes$user$signup$signup(e){
e.preventDefault();

var data = wflow.utils.forms.serialize_form.call(null,goog.dom.getElement("signup"));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wflow.scenes.user.signup","signup","wflow.scenes.user.signup/signup",-719467862),data], null));
});
wflow.scenes.user.signup.signup_panel = (function wflow$scenes$user$signup$signup_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padded","padded",1434297910),true,new cljs.core.Keyword(null,"centered","centered",-515171141),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridRow,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.GridColumn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(450),new cljs.core.Keyword(null,"top","top",-1856271961),(50)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),"h3"], null),"Signup to your account"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"id","id",-1388402092),"signup"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Segment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raised","raised",1890794098),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormInput,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"user",new cljs.core.Keyword(null,"icon-position","icon-position",-1720359034),"left",new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Full Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormInput,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"user",new cljs.core.Keyword(null,"icon-position","icon-position",-1720359034),"left",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"E-mail address"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.FormInput,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"lock",new cljs.core.Keyword(null,"icon-position","icon-position",-1720359034),"left",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"on-click","on-click",1632826543),wflow.scenes.user.signup.signup], null),"Signup"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Message,"Already have an account? ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),wflow.router.url_for.call(null,new cljs.core.Keyword(null,"login","login",55217519))], null),"Login"], null)], null)], null)], null)], null);
});
cljs.core._add_method.call(null,wflow.router.panels,new cljs.core.Keyword(null,"signup","signup",1961016747),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wflow.scenes.user.signup.signup_panel], null);
}));

//# sourceMappingURL=signup.js.map?rel=1526326060167
