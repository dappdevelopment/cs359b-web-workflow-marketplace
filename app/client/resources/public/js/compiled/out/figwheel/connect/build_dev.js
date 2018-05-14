// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('wflow.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__46097__delegate = function (x){
if(cljs.core.truth_(wflow.core.mount_root)){
return cljs.core.apply.call(null,wflow.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wflow.core/mount-root' is missing");
}
};
var G__46097 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__46098__i = 0, G__46098__a = new Array(arguments.length -  0);
while (G__46098__i < G__46098__a.length) {G__46098__a[G__46098__i] = arguments[G__46098__i + 0]; ++G__46098__i;}
  x = new cljs.core.IndexedSeq(G__46098__a,0,null);
} 
return G__46097__delegate.call(this,x);};
G__46097.cljs$lang$maxFixedArity = 0;
G__46097.cljs$lang$applyTo = (function (arglist__46099){
var x = cljs.core.seq(arglist__46099);
return G__46097__delegate(x);
});
G__46097.cljs$core$IFn$_invoke$arity$variadic = G__46097__delegate;
return G__46097;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3233/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1526321449857
