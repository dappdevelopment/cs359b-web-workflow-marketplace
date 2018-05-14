// Compiled by ClojureScript 1.9.908 {}
goog.provide('oops.helpers');
goog.require('cljs.core');
oops.helpers.is_prototype_QMARK_ = (function oops$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
oops.helpers.get_constructor = (function oops$helpers$get_constructor(o){
return (o["constructor"]);
});
oops.helpers.cljs_type_QMARK_ = (function oops$helpers$cljs_type_QMARK_(f){
var and__32335__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__32335__auto__)){
var and__32335__auto____$1 = cljs.core.not.call(null,oops.helpers.is_prototype_QMARK_.call(null,f));
if(and__32335__auto____$1){
return (f["cljs$lang$type"]);
} else {
return and__32335__auto____$1;
}
} else {
return and__32335__auto__;
}
});
oops.helpers.cljs_instance_QMARK_ = (function oops$helpers$cljs_instance_QMARK_(value){
var and__32335__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__32335__auto__)){
return oops.helpers.cljs_type_QMARK_.call(null,oops.helpers.get_constructor.call(null,value));
} else {
return and__32335__auto__;
}
});
oops.helpers.to_native_array = (function oops$helpers$to_native_array(coll){
if(cljs.core.array_QMARK_.call(null,coll)){
return coll;
} else {
var arr = [];
var items = cljs.core.seq.call(null,coll);
while(true){
if(!((items == null))){
var item = cljs.core._first.call(null,items);
arr.push(item);

var G__36282 = cljs.core.next.call(null,items);
items = G__36282;
continue;
} else {
return arr;
}
break;
}
}
});
oops.helpers.repurpose_error = (function oops$helpers$repurpose_error(error,msg,info){


error.message = msg;

var x36283 = error;
x36283.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x36283.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x36283){
return (function (_obj,writer,opts){
var _obj__$1 = this;
cljs.core._write.call(null,writer,msg);

if(!((info == null))){
cljs.core._write.call(null,writer," ");

return cljs.core.pr_writer.call(null,info,writer,opts);
} else {
return null;
}
});})(x36283))
;

return x36283;
});

//# sourceMappingURL=helpers.js.map?rel=1525108930816
