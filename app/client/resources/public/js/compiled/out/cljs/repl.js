// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43525){
var map__43526 = p__43525;
var map__43526__$1 = ((((!((map__43526 == null)))?((((map__43526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43526):map__43526);
var m = map__43526__$1;
var n = cljs.core.get.call(null,map__43526__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43528_43550 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43529_43551 = null;
var count__43530_43552 = (0);
var i__43531_43553 = (0);
while(true){
if((i__43531_43553 < count__43530_43552)){
var f_43554 = cljs.core._nth.call(null,chunk__43529_43551,i__43531_43553);
cljs.core.println.call(null,"  ",f_43554);

var G__43555 = seq__43528_43550;
var G__43556 = chunk__43529_43551;
var G__43557 = count__43530_43552;
var G__43558 = (i__43531_43553 + (1));
seq__43528_43550 = G__43555;
chunk__43529_43551 = G__43556;
count__43530_43552 = G__43557;
i__43531_43553 = G__43558;
continue;
} else {
var temp__6738__auto___43559 = cljs.core.seq.call(null,seq__43528_43550);
if(temp__6738__auto___43559){
var seq__43528_43560__$1 = temp__6738__auto___43559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43528_43560__$1)){
var c__33278__auto___43561 = cljs.core.chunk_first.call(null,seq__43528_43560__$1);
var G__43562 = cljs.core.chunk_rest.call(null,seq__43528_43560__$1);
var G__43563 = c__33278__auto___43561;
var G__43564 = cljs.core.count.call(null,c__33278__auto___43561);
var G__43565 = (0);
seq__43528_43550 = G__43562;
chunk__43529_43551 = G__43563;
count__43530_43552 = G__43564;
i__43531_43553 = G__43565;
continue;
} else {
var f_43566 = cljs.core.first.call(null,seq__43528_43560__$1);
cljs.core.println.call(null,"  ",f_43566);

var G__43567 = cljs.core.next.call(null,seq__43528_43560__$1);
var G__43568 = null;
var G__43569 = (0);
var G__43570 = (0);
seq__43528_43550 = G__43567;
chunk__43529_43551 = G__43568;
count__43530_43552 = G__43569;
i__43531_43553 = G__43570;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43571 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32347__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43571);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43571)))?cljs.core.second.call(null,arglists_43571):arglists_43571));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43532_43572 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43533_43573 = null;
var count__43534_43574 = (0);
var i__43535_43575 = (0);
while(true){
if((i__43535_43575 < count__43534_43574)){
var vec__43536_43576 = cljs.core._nth.call(null,chunk__43533_43573,i__43535_43575);
var name_43577 = cljs.core.nth.call(null,vec__43536_43576,(0),null);
var map__43539_43578 = cljs.core.nth.call(null,vec__43536_43576,(1),null);
var map__43539_43579__$1 = ((((!((map__43539_43578 == null)))?((((map__43539_43578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43539_43578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43539_43578):map__43539_43578);
var doc_43580 = cljs.core.get.call(null,map__43539_43579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43581 = cljs.core.get.call(null,map__43539_43579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43577);

cljs.core.println.call(null," ",arglists_43581);

if(cljs.core.truth_(doc_43580)){
cljs.core.println.call(null," ",doc_43580);
} else {
}

var G__43582 = seq__43532_43572;
var G__43583 = chunk__43533_43573;
var G__43584 = count__43534_43574;
var G__43585 = (i__43535_43575 + (1));
seq__43532_43572 = G__43582;
chunk__43533_43573 = G__43583;
count__43534_43574 = G__43584;
i__43535_43575 = G__43585;
continue;
} else {
var temp__6738__auto___43586 = cljs.core.seq.call(null,seq__43532_43572);
if(temp__6738__auto___43586){
var seq__43532_43587__$1 = temp__6738__auto___43586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43532_43587__$1)){
var c__33278__auto___43588 = cljs.core.chunk_first.call(null,seq__43532_43587__$1);
var G__43589 = cljs.core.chunk_rest.call(null,seq__43532_43587__$1);
var G__43590 = c__33278__auto___43588;
var G__43591 = cljs.core.count.call(null,c__33278__auto___43588);
var G__43592 = (0);
seq__43532_43572 = G__43589;
chunk__43533_43573 = G__43590;
count__43534_43574 = G__43591;
i__43535_43575 = G__43592;
continue;
} else {
var vec__43541_43593 = cljs.core.first.call(null,seq__43532_43587__$1);
var name_43594 = cljs.core.nth.call(null,vec__43541_43593,(0),null);
var map__43544_43595 = cljs.core.nth.call(null,vec__43541_43593,(1),null);
var map__43544_43596__$1 = ((((!((map__43544_43595 == null)))?((((map__43544_43595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43544_43595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43544_43595):map__43544_43595);
var doc_43597 = cljs.core.get.call(null,map__43544_43596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43598 = cljs.core.get.call(null,map__43544_43596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43594);

cljs.core.println.call(null," ",arglists_43598);

if(cljs.core.truth_(doc_43597)){
cljs.core.println.call(null," ",doc_43597);
} else {
}

var G__43599 = cljs.core.next.call(null,seq__43532_43587__$1);
var G__43600 = null;
var G__43601 = (0);
var G__43602 = (0);
seq__43532_43572 = G__43599;
chunk__43533_43573 = G__43600;
count__43534_43574 = G__43601;
i__43535_43575 = G__43602;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6738__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__43546 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43547 = null;
var count__43548 = (0);
var i__43549 = (0);
while(true){
if((i__43549 < count__43548)){
var role = cljs.core._nth.call(null,chunk__43547,i__43549);
var temp__6738__auto___43603__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___43603__$1)){
var spec_43604 = temp__6738__auto___43603__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43604));
} else {
}

var G__43605 = seq__43546;
var G__43606 = chunk__43547;
var G__43607 = count__43548;
var G__43608 = (i__43549 + (1));
seq__43546 = G__43605;
chunk__43547 = G__43606;
count__43548 = G__43607;
i__43549 = G__43608;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__43546);
if(temp__6738__auto____$1){
var seq__43546__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43546__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__43546__$1);
var G__43609 = cljs.core.chunk_rest.call(null,seq__43546__$1);
var G__43610 = c__33278__auto__;
var G__43611 = cljs.core.count.call(null,c__33278__auto__);
var G__43612 = (0);
seq__43546 = G__43609;
chunk__43547 = G__43610;
count__43548 = G__43611;
i__43549 = G__43612;
continue;
} else {
var role = cljs.core.first.call(null,seq__43546__$1);
var temp__6738__auto___43613__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___43613__$2)){
var spec_43614 = temp__6738__auto___43613__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43614));
} else {
}

var G__43615 = cljs.core.next.call(null,seq__43546__$1);
var G__43616 = null;
var G__43617 = (0);
var G__43618 = (0);
seq__43546 = G__43615;
chunk__43547 = G__43616;
count__43548 = G__43617;
i__43549 = G__43618;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1525108940083
