// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__32347__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__32347__auto__){
return or__32347__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__32347__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
var or__32347__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__32347__auto____$1)){
return or__32347__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42899_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42899_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42900 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42901 = null;
var count__42902 = (0);
var i__42903 = (0);
while(true){
if((i__42903 < count__42902)){
var n = cljs.core._nth.call(null,chunk__42901,i__42903);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42904 = seq__42900;
var G__42905 = chunk__42901;
var G__42906 = count__42902;
var G__42907 = (i__42903 + (1));
seq__42900 = G__42904;
chunk__42901 = G__42905;
count__42902 = G__42906;
i__42903 = G__42907;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__42900);
if(temp__6738__auto__){
var seq__42900__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42900__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__42900__$1);
var G__42908 = cljs.core.chunk_rest.call(null,seq__42900__$1);
var G__42909 = c__33278__auto__;
var G__42910 = cljs.core.count.call(null,c__33278__auto__);
var G__42911 = (0);
seq__42900 = G__42908;
chunk__42901 = G__42909;
count__42902 = G__42910;
i__42903 = G__42911;
continue;
} else {
var n = cljs.core.first.call(null,seq__42900__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42912 = cljs.core.next.call(null,seq__42900__$1);
var G__42913 = null;
var G__42914 = (0);
var G__42915 = (0);
seq__42900 = G__42912;
chunk__42901 = G__42913;
count__42902 = G__42914;
i__42903 = G__42915;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42925_42933 = cljs.core.seq.call(null,deps);
var chunk__42926_42934 = null;
var count__42927_42935 = (0);
var i__42928_42936 = (0);
while(true){
if((i__42928_42936 < count__42927_42935)){
var dep_42937 = cljs.core._nth.call(null,chunk__42926_42934,i__42928_42936);
topo_sort_helper_STAR_.call(null,dep_42937,(depth + (1)),state);

var G__42938 = seq__42925_42933;
var G__42939 = chunk__42926_42934;
var G__42940 = count__42927_42935;
var G__42941 = (i__42928_42936 + (1));
seq__42925_42933 = G__42938;
chunk__42926_42934 = G__42939;
count__42927_42935 = G__42940;
i__42928_42936 = G__42941;
continue;
} else {
var temp__6738__auto___42942 = cljs.core.seq.call(null,seq__42925_42933);
if(temp__6738__auto___42942){
var seq__42925_42943__$1 = temp__6738__auto___42942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42925_42943__$1)){
var c__33278__auto___42944 = cljs.core.chunk_first.call(null,seq__42925_42943__$1);
var G__42945 = cljs.core.chunk_rest.call(null,seq__42925_42943__$1);
var G__42946 = c__33278__auto___42944;
var G__42947 = cljs.core.count.call(null,c__33278__auto___42944);
var G__42948 = (0);
seq__42925_42933 = G__42945;
chunk__42926_42934 = G__42946;
count__42927_42935 = G__42947;
i__42928_42936 = G__42948;
continue;
} else {
var dep_42949 = cljs.core.first.call(null,seq__42925_42943__$1);
topo_sort_helper_STAR_.call(null,dep_42949,(depth + (1)),state);

var G__42950 = cljs.core.next.call(null,seq__42925_42943__$1);
var G__42951 = null;
var G__42952 = (0);
var G__42953 = (0);
seq__42925_42933 = G__42950;
chunk__42926_42934 = G__42951;
count__42927_42935 = G__42952;
i__42928_42936 = G__42953;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42929){
var vec__42930 = p__42929;
var seq__42931 = cljs.core.seq.call(null,vec__42930);
var first__42932 = cljs.core.first.call(null,seq__42931);
var seq__42931__$1 = cljs.core.next.call(null,seq__42931);
var x = first__42932;
var xs = seq__42931__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42930,seq__42931,first__42932,seq__42931__$1,x,xs,get_deps__$1){
return (function (p1__42916_SHARP_){
return clojure.set.difference.call(null,p1__42916_SHARP_,x);
});})(vec__42930,seq__42931,first__42932,seq__42931__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42954 = cljs.core.seq.call(null,provides);
var chunk__42955 = null;
var count__42956 = (0);
var i__42957 = (0);
while(true){
if((i__42957 < count__42956)){
var prov = cljs.core._nth.call(null,chunk__42955,i__42957);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42958_42966 = cljs.core.seq.call(null,requires);
var chunk__42959_42967 = null;
var count__42960_42968 = (0);
var i__42961_42969 = (0);
while(true){
if((i__42961_42969 < count__42960_42968)){
var req_42970 = cljs.core._nth.call(null,chunk__42959_42967,i__42961_42969);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42970,prov);

var G__42971 = seq__42958_42966;
var G__42972 = chunk__42959_42967;
var G__42973 = count__42960_42968;
var G__42974 = (i__42961_42969 + (1));
seq__42958_42966 = G__42971;
chunk__42959_42967 = G__42972;
count__42960_42968 = G__42973;
i__42961_42969 = G__42974;
continue;
} else {
var temp__6738__auto___42975 = cljs.core.seq.call(null,seq__42958_42966);
if(temp__6738__auto___42975){
var seq__42958_42976__$1 = temp__6738__auto___42975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42958_42976__$1)){
var c__33278__auto___42977 = cljs.core.chunk_first.call(null,seq__42958_42976__$1);
var G__42978 = cljs.core.chunk_rest.call(null,seq__42958_42976__$1);
var G__42979 = c__33278__auto___42977;
var G__42980 = cljs.core.count.call(null,c__33278__auto___42977);
var G__42981 = (0);
seq__42958_42966 = G__42978;
chunk__42959_42967 = G__42979;
count__42960_42968 = G__42980;
i__42961_42969 = G__42981;
continue;
} else {
var req_42982 = cljs.core.first.call(null,seq__42958_42976__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42982,prov);

var G__42983 = cljs.core.next.call(null,seq__42958_42976__$1);
var G__42984 = null;
var G__42985 = (0);
var G__42986 = (0);
seq__42958_42966 = G__42983;
chunk__42959_42967 = G__42984;
count__42960_42968 = G__42985;
i__42961_42969 = G__42986;
continue;
}
} else {
}
}
break;
}

var G__42987 = seq__42954;
var G__42988 = chunk__42955;
var G__42989 = count__42956;
var G__42990 = (i__42957 + (1));
seq__42954 = G__42987;
chunk__42955 = G__42988;
count__42956 = G__42989;
i__42957 = G__42990;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__42954);
if(temp__6738__auto__){
var seq__42954__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42954__$1)){
var c__33278__auto__ = cljs.core.chunk_first.call(null,seq__42954__$1);
var G__42991 = cljs.core.chunk_rest.call(null,seq__42954__$1);
var G__42992 = c__33278__auto__;
var G__42993 = cljs.core.count.call(null,c__33278__auto__);
var G__42994 = (0);
seq__42954 = G__42991;
chunk__42955 = G__42992;
count__42956 = G__42993;
i__42957 = G__42994;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42954__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42962_42995 = cljs.core.seq.call(null,requires);
var chunk__42963_42996 = null;
var count__42964_42997 = (0);
var i__42965_42998 = (0);
while(true){
if((i__42965_42998 < count__42964_42997)){
var req_42999 = cljs.core._nth.call(null,chunk__42963_42996,i__42965_42998);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42999,prov);

var G__43000 = seq__42962_42995;
var G__43001 = chunk__42963_42996;
var G__43002 = count__42964_42997;
var G__43003 = (i__42965_42998 + (1));
seq__42962_42995 = G__43000;
chunk__42963_42996 = G__43001;
count__42964_42997 = G__43002;
i__42965_42998 = G__43003;
continue;
} else {
var temp__6738__auto___43004__$1 = cljs.core.seq.call(null,seq__42962_42995);
if(temp__6738__auto___43004__$1){
var seq__42962_43005__$1 = temp__6738__auto___43004__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42962_43005__$1)){
var c__33278__auto___43006 = cljs.core.chunk_first.call(null,seq__42962_43005__$1);
var G__43007 = cljs.core.chunk_rest.call(null,seq__42962_43005__$1);
var G__43008 = c__33278__auto___43006;
var G__43009 = cljs.core.count.call(null,c__33278__auto___43006);
var G__43010 = (0);
seq__42962_42995 = G__43007;
chunk__42963_42996 = G__43008;
count__42964_42997 = G__43009;
i__42965_42998 = G__43010;
continue;
} else {
var req_43011 = cljs.core.first.call(null,seq__42962_43005__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43011,prov);

var G__43012 = cljs.core.next.call(null,seq__42962_43005__$1);
var G__43013 = null;
var G__43014 = (0);
var G__43015 = (0);
seq__42962_42995 = G__43012;
chunk__42963_42996 = G__43013;
count__42964_42997 = G__43014;
i__42965_42998 = G__43015;
continue;
}
} else {
}
}
break;
}

var G__43016 = cljs.core.next.call(null,seq__42954__$1);
var G__43017 = null;
var G__43018 = (0);
var G__43019 = (0);
seq__42954 = G__43016;
chunk__42955 = G__43017;
count__42956 = G__43018;
i__42957 = G__43019;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__43020_43024 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43021_43025 = null;
var count__43022_43026 = (0);
var i__43023_43027 = (0);
while(true){
if((i__43023_43027 < count__43022_43026)){
var ns_43028 = cljs.core._nth.call(null,chunk__43021_43025,i__43023_43027);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43028);

var G__43029 = seq__43020_43024;
var G__43030 = chunk__43021_43025;
var G__43031 = count__43022_43026;
var G__43032 = (i__43023_43027 + (1));
seq__43020_43024 = G__43029;
chunk__43021_43025 = G__43030;
count__43022_43026 = G__43031;
i__43023_43027 = G__43032;
continue;
} else {
var temp__6738__auto___43033 = cljs.core.seq.call(null,seq__43020_43024);
if(temp__6738__auto___43033){
var seq__43020_43034__$1 = temp__6738__auto___43033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43020_43034__$1)){
var c__33278__auto___43035 = cljs.core.chunk_first.call(null,seq__43020_43034__$1);
var G__43036 = cljs.core.chunk_rest.call(null,seq__43020_43034__$1);
var G__43037 = c__33278__auto___43035;
var G__43038 = cljs.core.count.call(null,c__33278__auto___43035);
var G__43039 = (0);
seq__43020_43024 = G__43036;
chunk__43021_43025 = G__43037;
count__43022_43026 = G__43038;
i__43023_43027 = G__43039;
continue;
} else {
var ns_43040 = cljs.core.first.call(null,seq__43020_43034__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43040);

var G__43041 = cljs.core.next.call(null,seq__43020_43034__$1);
var G__43042 = null;
var G__43043 = (0);
var G__43044 = (0);
seq__43020_43024 = G__43041;
chunk__43021_43025 = G__43042;
count__43022_43026 = G__43043;
i__43023_43027 = G__43044;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__32347__auto__ = goog.require__;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__43045__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43046__i = 0, G__43046__a = new Array(arguments.length -  0);
while (G__43046__i < G__43046__a.length) {G__43046__a[G__43046__i] = arguments[G__43046__i + 0]; ++G__43046__i;}
  args = new cljs.core.IndexedSeq(G__43046__a,0,null);
} 
return G__43045__delegate.call(this,args);};
G__43045.cljs$lang$maxFixedArity = 0;
G__43045.cljs$lang$applyTo = (function (arglist__43047){
var args = cljs.core.seq(arglist__43047);
return G__43045__delegate(args);
});
G__43045.cljs$core$IFn$_invoke$arity$variadic = G__43045__delegate;
return G__43045;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__43048_SHARP_,p2__43049_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43048_SHARP_)].join('')),p2__43049_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__43050_SHARP_,p2__43051_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43050_SHARP_)].join(''),p2__43051_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__43052 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__43052.addCallback(((function (G__43052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__43052))
);

G__43052.addErrback(((function (G__43052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__43052))
);

return G__43052;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43053 = cljs.core._EQ_;
var expr__43054 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43053.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43054))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__43053,expr__43054){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__43053,expr__43054))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__43053,expr__43054){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43056){if((e43056 instanceof Error)){
var e = e43056;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43056;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__43053,expr__43054))
} else {
if(cljs.core.truth_(pred__43053.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43054))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__43053.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__43054))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__43053.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__43054))){
return ((function (pred__43053,expr__43054){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e43057){if((e43057 instanceof Error)){
var e = e43057;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43057;

}
}})());
});
;})(pred__43053,expr__43054))
} else {
return ((function (pred__43053,expr__43054){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43053,expr__43054))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43058,callback){
var map__43059 = p__43058;
var map__43059__$1 = ((((!((map__43059 == null)))?((((map__43059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43059):map__43059);
var file_msg = map__43059__$1;
var request_url = cljs.core.get.call(null,map__43059__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43059,map__43059__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43059,map__43059__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__){
return (function (state_43083){
var state_val_43084 = (state_43083[(1)]);
if((state_val_43084 === (7))){
var inst_43079 = (state_43083[(2)]);
var state_43083__$1 = state_43083;
var statearr_43085_43102 = state_43083__$1;
(statearr_43085_43102[(2)] = inst_43079);

(statearr_43085_43102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (1))){
var state_43083__$1 = state_43083;
var statearr_43086_43103 = state_43083__$1;
(statearr_43086_43103[(2)] = null);

(statearr_43086_43103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (4))){
var inst_43063 = (state_43083[(7)]);
var inst_43063__$1 = (state_43083[(2)]);
var state_43083__$1 = (function (){var statearr_43087 = state_43083;
(statearr_43087[(7)] = inst_43063__$1);

return statearr_43087;
})();
if(cljs.core.truth_(inst_43063__$1)){
var statearr_43088_43104 = state_43083__$1;
(statearr_43088_43104[(1)] = (5));

} else {
var statearr_43089_43105 = state_43083__$1;
(statearr_43089_43105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (6))){
var state_43083__$1 = state_43083;
var statearr_43090_43106 = state_43083__$1;
(statearr_43090_43106[(2)] = null);

(statearr_43090_43106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (3))){
var inst_43081 = (state_43083[(2)]);
var state_43083__$1 = state_43083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43083__$1,inst_43081);
} else {
if((state_val_43084 === (2))){
var state_43083__$1 = state_43083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43083__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43084 === (11))){
var inst_43075 = (state_43083[(2)]);
var state_43083__$1 = (function (){var statearr_43091 = state_43083;
(statearr_43091[(8)] = inst_43075);

return statearr_43091;
})();
var statearr_43092_43107 = state_43083__$1;
(statearr_43092_43107[(2)] = null);

(statearr_43092_43107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (9))){
var inst_43069 = (state_43083[(9)]);
var inst_43067 = (state_43083[(10)]);
var inst_43071 = inst_43069.call(null,inst_43067);
var state_43083__$1 = state_43083;
var statearr_43093_43108 = state_43083__$1;
(statearr_43093_43108[(2)] = inst_43071);

(statearr_43093_43108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (5))){
var inst_43063 = (state_43083[(7)]);
var inst_43065 = figwheel.client.file_reloading.blocking_load.call(null,inst_43063);
var state_43083__$1 = state_43083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43083__$1,(8),inst_43065);
} else {
if((state_val_43084 === (10))){
var inst_43067 = (state_43083[(10)]);
var inst_43073 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43067);
var state_43083__$1 = state_43083;
var statearr_43094_43109 = state_43083__$1;
(statearr_43094_43109[(2)] = inst_43073);

(statearr_43094_43109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43084 === (8))){
var inst_43069 = (state_43083[(9)]);
var inst_43063 = (state_43083[(7)]);
var inst_43067 = (state_43083[(2)]);
var inst_43068 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43069__$1 = cljs.core.get.call(null,inst_43068,inst_43063);
var state_43083__$1 = (function (){var statearr_43095 = state_43083;
(statearr_43095[(9)] = inst_43069__$1);

(statearr_43095[(10)] = inst_43067);

return statearr_43095;
})();
if(cljs.core.truth_(inst_43069__$1)){
var statearr_43096_43110 = state_43083__$1;
(statearr_43096_43110[(1)] = (9));

} else {
var statearr_43097_43111 = state_43083__$1;
(statearr_43097_43111[(1)] = (10));

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
});})(c__40814__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40725__auto__ = null;
var figwheel$client$file_reloading$state_machine__40725__auto____0 = (function (){
var statearr_43098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43098[(0)] = figwheel$client$file_reloading$state_machine__40725__auto__);

(statearr_43098[(1)] = (1));

return statearr_43098;
});
var figwheel$client$file_reloading$state_machine__40725__auto____1 = (function (state_43083){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_43083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e43099){if((e43099 instanceof Object)){
var ex__40728__auto__ = e43099;
var statearr_43100_43112 = state_43083;
(statearr_43100_43112[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43113 = state_43083;
state_43083 = G__43113;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40725__auto__ = function(state_43083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40725__auto____1.call(this,state_43083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40725__auto____0;
figwheel$client$file_reloading$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40725__auto____1;
return figwheel$client$file_reloading$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__))
})();
var state__40816__auto__ = (function (){var statearr_43101 = f__40815__auto__.call(null);
(statearr_43101[(6)] = c__40814__auto__);

return statearr_43101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__))
);

return c__40814__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43114,callback){
var map__43115 = p__43114;
var map__43115__$1 = ((((!((map__43115 == null)))?((((map__43115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43115):map__43115);
var file_msg = map__43115__$1;
var namespace = cljs.core.get.call(null,map__43115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43115,map__43115__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43115,map__43115__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__43117){
var map__43118 = p__43117;
var map__43118__$1 = ((((!((map__43118 == null)))?((((map__43118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43118):map__43118);
var file_msg = map__43118__$1;
var namespace = cljs.core.get.call(null,map__43118__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43120){
var map__43121 = p__43120;
var map__43121__$1 = ((((!((map__43121 == null)))?((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43121):map__43121);
var file_msg = map__43121__$1;
var namespace = cljs.core.get.call(null,map__43121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__32335__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__32335__auto__){
var or__32347__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
var or__32347__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32347__auto____$1)){
return or__32347__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__32335__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43123,callback){
var map__43124 = p__43123;
var map__43124__$1 = ((((!((map__43124 == null)))?((((map__43124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43124):map__43124);
var file_msg = map__43124__$1;
var request_url = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__40814__auto___43174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___43174,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___43174,out){
return (function (state_43159){
var state_val_43160 = (state_43159[(1)]);
if((state_val_43160 === (1))){
var inst_43133 = cljs.core.seq.call(null,files);
var inst_43134 = cljs.core.first.call(null,inst_43133);
var inst_43135 = cljs.core.next.call(null,inst_43133);
var inst_43136 = files;
var state_43159__$1 = (function (){var statearr_43161 = state_43159;
(statearr_43161[(7)] = inst_43135);

(statearr_43161[(8)] = inst_43136);

(statearr_43161[(9)] = inst_43134);

return statearr_43161;
})();
var statearr_43162_43175 = state_43159__$1;
(statearr_43162_43175[(2)] = null);

(statearr_43162_43175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (2))){
var inst_43142 = (state_43159[(10)]);
var inst_43136 = (state_43159[(8)]);
var inst_43141 = cljs.core.seq.call(null,inst_43136);
var inst_43142__$1 = cljs.core.first.call(null,inst_43141);
var inst_43143 = cljs.core.next.call(null,inst_43141);
var inst_43144 = (inst_43142__$1 == null);
var inst_43145 = cljs.core.not.call(null,inst_43144);
var state_43159__$1 = (function (){var statearr_43163 = state_43159;
(statearr_43163[(11)] = inst_43143);

(statearr_43163[(10)] = inst_43142__$1);

return statearr_43163;
})();
if(inst_43145){
var statearr_43164_43176 = state_43159__$1;
(statearr_43164_43176[(1)] = (4));

} else {
var statearr_43165_43177 = state_43159__$1;
(statearr_43165_43177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (3))){
var inst_43157 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43159__$1,inst_43157);
} else {
if((state_val_43160 === (4))){
var inst_43142 = (state_43159[(10)]);
var inst_43147 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43142);
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43159__$1,(7),inst_43147);
} else {
if((state_val_43160 === (5))){
var inst_43153 = cljs.core.async.close_BANG_.call(null,out);
var state_43159__$1 = state_43159;
var statearr_43166_43178 = state_43159__$1;
(statearr_43166_43178[(2)] = inst_43153);

(statearr_43166_43178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (6))){
var inst_43155 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43167_43179 = state_43159__$1;
(statearr_43167_43179[(2)] = inst_43155);

(statearr_43167_43179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (7))){
var inst_43143 = (state_43159[(11)]);
var inst_43149 = (state_43159[(2)]);
var inst_43150 = cljs.core.async.put_BANG_.call(null,out,inst_43149);
var inst_43136 = inst_43143;
var state_43159__$1 = (function (){var statearr_43168 = state_43159;
(statearr_43168[(12)] = inst_43150);

(statearr_43168[(8)] = inst_43136);

return statearr_43168;
})();
var statearr_43169_43180 = state_43159__$1;
(statearr_43169_43180[(2)] = null);

(statearr_43169_43180[(1)] = (2));


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
});})(c__40814__auto___43174,out))
;
return ((function (switch__40724__auto__,c__40814__auto___43174,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____0 = (function (){
var statearr_43170 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43170[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__);

(statearr_43170[(1)] = (1));

return statearr_43170;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____1 = (function (state_43159){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_43159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e43171){if((e43171 instanceof Object)){
var ex__40728__auto__ = e43171;
var statearr_43172_43181 = state_43159;
(statearr_43172_43181[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43182 = state_43159;
state_43159 = G__43182;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__ = function(state_43159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____1.call(this,state_43159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___43174,out))
})();
var state__40816__auto__ = (function (){var statearr_43173 = f__40815__auto__.call(null);
(statearr_43173[(6)] = c__40814__auto___43174);

return statearr_43173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___43174,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43183,opts){
var map__43184 = p__43183;
var map__43184__$1 = ((((!((map__43184 == null)))?((((map__43184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43184):map__43184);
var eval_body = cljs.core.get.call(null,map__43184__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__32335__auto__ = eval_body;
if(cljs.core.truth_(and__32335__auto__)){
return typeof eval_body === 'string';
} else {
return and__32335__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43186){var e = e43186;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__43187_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43187_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__43188){
var vec__43189 = p__43188;
var k = cljs.core.nth.call(null,vec__43189,(0),null);
var v = cljs.core.nth.call(null,vec__43189,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43192){
var vec__43193 = p__43192;
var k = cljs.core.nth.call(null,vec__43193,(0),null);
var v = cljs.core.nth.call(null,vec__43193,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43199,p__43200){
var map__43201 = p__43199;
var map__43201__$1 = ((((!((map__43201 == null)))?((((map__43201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43201):map__43201);
var opts = map__43201__$1;
var before_jsload = cljs.core.get.call(null,map__43201__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43201__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43201__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43202 = p__43200;
var map__43202__$1 = ((((!((map__43202 == null)))?((((map__43202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43202):map__43202);
var msg = map__43202__$1;
var files = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43356){
var state_val_43357 = (state_43356[(1)]);
if((state_val_43357 === (7))){
var inst_43216 = (state_43356[(7)]);
var inst_43217 = (state_43356[(8)]);
var inst_43218 = (state_43356[(9)]);
var inst_43219 = (state_43356[(10)]);
var inst_43224 = cljs.core._nth.call(null,inst_43217,inst_43219);
var inst_43225 = figwheel.client.file_reloading.eval_body.call(null,inst_43224,opts);
var inst_43226 = (inst_43219 + (1));
var tmp43358 = inst_43216;
var tmp43359 = inst_43217;
var tmp43360 = inst_43218;
var inst_43216__$1 = tmp43358;
var inst_43217__$1 = tmp43359;
var inst_43218__$1 = tmp43360;
var inst_43219__$1 = inst_43226;
var state_43356__$1 = (function (){var statearr_43361 = state_43356;
(statearr_43361[(7)] = inst_43216__$1);

(statearr_43361[(8)] = inst_43217__$1);

(statearr_43361[(9)] = inst_43218__$1);

(statearr_43361[(10)] = inst_43219__$1);

(statearr_43361[(11)] = inst_43225);

return statearr_43361;
})();
var statearr_43362_43445 = state_43356__$1;
(statearr_43362_43445[(2)] = null);

(statearr_43362_43445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (20))){
var inst_43259 = (state_43356[(12)]);
var inst_43267 = figwheel.client.file_reloading.sort_files.call(null,inst_43259);
var state_43356__$1 = state_43356;
var statearr_43363_43446 = state_43356__$1;
(statearr_43363_43446[(2)] = inst_43267);

(statearr_43363_43446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (27))){
var state_43356__$1 = state_43356;
var statearr_43364_43447 = state_43356__$1;
(statearr_43364_43447[(2)] = null);

(statearr_43364_43447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (1))){
var inst_43208 = (state_43356[(13)]);
var inst_43205 = before_jsload.call(null,files);
var inst_43206 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43207 = (function (){return ((function (inst_43208,inst_43205,inst_43206,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43196_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43196_SHARP_);
});
;})(inst_43208,inst_43205,inst_43206,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43208__$1 = cljs.core.filter.call(null,inst_43207,files);
var inst_43209 = cljs.core.not_empty.call(null,inst_43208__$1);
var state_43356__$1 = (function (){var statearr_43365 = state_43356;
(statearr_43365[(13)] = inst_43208__$1);

(statearr_43365[(14)] = inst_43205);

(statearr_43365[(15)] = inst_43206);

return statearr_43365;
})();
if(cljs.core.truth_(inst_43209)){
var statearr_43366_43448 = state_43356__$1;
(statearr_43366_43448[(1)] = (2));

} else {
var statearr_43367_43449 = state_43356__$1;
(statearr_43367_43449[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (24))){
var state_43356__$1 = state_43356;
var statearr_43368_43450 = state_43356__$1;
(statearr_43368_43450[(2)] = null);

(statearr_43368_43450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (39))){
var inst_43309 = (state_43356[(16)]);
var state_43356__$1 = state_43356;
var statearr_43369_43451 = state_43356__$1;
(statearr_43369_43451[(2)] = inst_43309);

(statearr_43369_43451[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (46))){
var inst_43351 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43370_43452 = state_43356__$1;
(statearr_43370_43452[(2)] = inst_43351);

(statearr_43370_43452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (4))){
var inst_43253 = (state_43356[(2)]);
var inst_43254 = cljs.core.List.EMPTY;
var inst_43255 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43254);
var inst_43256 = (function (){return ((function (inst_43253,inst_43254,inst_43255,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43197_SHARP_){
var and__32335__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43197_SHARP_);
if(cljs.core.truth_(and__32335__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43197_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__43197_SHARP_)));
} else {
return and__32335__auto__;
}
});
;})(inst_43253,inst_43254,inst_43255,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43257 = cljs.core.filter.call(null,inst_43256,files);
var inst_43258 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43259 = cljs.core.concat.call(null,inst_43257,inst_43258);
var state_43356__$1 = (function (){var statearr_43371 = state_43356;
(statearr_43371[(12)] = inst_43259);

(statearr_43371[(17)] = inst_43253);

(statearr_43371[(18)] = inst_43255);

return statearr_43371;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43372_43453 = state_43356__$1;
(statearr_43372_43453[(1)] = (16));

} else {
var statearr_43373_43454 = state_43356__$1;
(statearr_43373_43454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (15))){
var inst_43243 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43374_43455 = state_43356__$1;
(statearr_43374_43455[(2)] = inst_43243);

(statearr_43374_43455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (21))){
var inst_43269 = (state_43356[(19)]);
var inst_43269__$1 = (state_43356[(2)]);
var inst_43270 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43269__$1);
var state_43356__$1 = (function (){var statearr_43375 = state_43356;
(statearr_43375[(19)] = inst_43269__$1);

return statearr_43375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43356__$1,(22),inst_43270);
} else {
if((state_val_43357 === (31))){
var inst_43354 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43356__$1,inst_43354);
} else {
if((state_val_43357 === (32))){
var inst_43309 = (state_43356[(16)]);
var inst_43314 = inst_43309.cljs$lang$protocol_mask$partition0$;
var inst_43315 = (inst_43314 & (64));
var inst_43316 = inst_43309.cljs$core$ISeq$;
var inst_43317 = (cljs.core.PROTOCOL_SENTINEL === inst_43316);
var inst_43318 = (inst_43315) || (inst_43317);
var state_43356__$1 = state_43356;
if(cljs.core.truth_(inst_43318)){
var statearr_43376_43456 = state_43356__$1;
(statearr_43376_43456[(1)] = (35));

} else {
var statearr_43377_43457 = state_43356__$1;
(statearr_43377_43457[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (40))){
var inst_43331 = (state_43356[(20)]);
var inst_43330 = (state_43356[(2)]);
var inst_43331__$1 = cljs.core.get.call(null,inst_43330,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43332 = cljs.core.get.call(null,inst_43330,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43333 = cljs.core.not_empty.call(null,inst_43331__$1);
var state_43356__$1 = (function (){var statearr_43378 = state_43356;
(statearr_43378[(21)] = inst_43332);

(statearr_43378[(20)] = inst_43331__$1);

return statearr_43378;
})();
if(cljs.core.truth_(inst_43333)){
var statearr_43379_43458 = state_43356__$1;
(statearr_43379_43458[(1)] = (41));

} else {
var statearr_43380_43459 = state_43356__$1;
(statearr_43380_43459[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (33))){
var state_43356__$1 = state_43356;
var statearr_43381_43460 = state_43356__$1;
(statearr_43381_43460[(2)] = false);

(statearr_43381_43460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (13))){
var inst_43229 = (state_43356[(22)]);
var inst_43233 = cljs.core.chunk_first.call(null,inst_43229);
var inst_43234 = cljs.core.chunk_rest.call(null,inst_43229);
var inst_43235 = cljs.core.count.call(null,inst_43233);
var inst_43216 = inst_43234;
var inst_43217 = inst_43233;
var inst_43218 = inst_43235;
var inst_43219 = (0);
var state_43356__$1 = (function (){var statearr_43382 = state_43356;
(statearr_43382[(7)] = inst_43216);

(statearr_43382[(8)] = inst_43217);

(statearr_43382[(9)] = inst_43218);

(statearr_43382[(10)] = inst_43219);

return statearr_43382;
})();
var statearr_43383_43461 = state_43356__$1;
(statearr_43383_43461[(2)] = null);

(statearr_43383_43461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (22))){
var inst_43269 = (state_43356[(19)]);
var inst_43272 = (state_43356[(23)]);
var inst_43277 = (state_43356[(24)]);
var inst_43273 = (state_43356[(25)]);
var inst_43272__$1 = (state_43356[(2)]);
var inst_43273__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43272__$1);
var inst_43274 = (function (){var all_files = inst_43269;
var res_SINGLEQUOTE_ = inst_43272__$1;
var res = inst_43273__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43269,inst_43272,inst_43277,inst_43273,inst_43272__$1,inst_43273__$1,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43198_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43198_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43269,inst_43272,inst_43277,inst_43273,inst_43272__$1,inst_43273__$1,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43275 = cljs.core.filter.call(null,inst_43274,inst_43272__$1);
var inst_43276 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43277__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43276);
var inst_43278 = cljs.core.not_empty.call(null,inst_43277__$1);
var state_43356__$1 = (function (){var statearr_43384 = state_43356;
(statearr_43384[(23)] = inst_43272__$1);

(statearr_43384[(26)] = inst_43275);

(statearr_43384[(24)] = inst_43277__$1);

(statearr_43384[(25)] = inst_43273__$1);

return statearr_43384;
})();
if(cljs.core.truth_(inst_43278)){
var statearr_43385_43462 = state_43356__$1;
(statearr_43385_43462[(1)] = (23));

} else {
var statearr_43386_43463 = state_43356__$1;
(statearr_43386_43463[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (36))){
var state_43356__$1 = state_43356;
var statearr_43387_43464 = state_43356__$1;
(statearr_43387_43464[(2)] = false);

(statearr_43387_43464[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (41))){
var inst_43331 = (state_43356[(20)]);
var inst_43335 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43336 = cljs.core.map.call(null,inst_43335,inst_43331);
var inst_43337 = cljs.core.pr_str.call(null,inst_43336);
var inst_43338 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43337)].join('');
var inst_43339 = figwheel.client.utils.log.call(null,inst_43338);
var state_43356__$1 = state_43356;
var statearr_43388_43465 = state_43356__$1;
(statearr_43388_43465[(2)] = inst_43339);

(statearr_43388_43465[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (43))){
var inst_43332 = (state_43356[(21)]);
var inst_43342 = (state_43356[(2)]);
var inst_43343 = cljs.core.not_empty.call(null,inst_43332);
var state_43356__$1 = (function (){var statearr_43389 = state_43356;
(statearr_43389[(27)] = inst_43342);

return statearr_43389;
})();
if(cljs.core.truth_(inst_43343)){
var statearr_43390_43466 = state_43356__$1;
(statearr_43390_43466[(1)] = (44));

} else {
var statearr_43391_43467 = state_43356__$1;
(statearr_43391_43467[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (29))){
var inst_43269 = (state_43356[(19)]);
var inst_43272 = (state_43356[(23)]);
var inst_43275 = (state_43356[(26)]);
var inst_43277 = (state_43356[(24)]);
var inst_43309 = (state_43356[(16)]);
var inst_43273 = (state_43356[(25)]);
var inst_43305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43308 = (function (){var all_files = inst_43269;
var res_SINGLEQUOTE_ = inst_43272;
var res = inst_43273;
var files_not_loaded = inst_43275;
var dependencies_that_loaded = inst_43277;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43309,inst_43273,inst_43305,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43307){
var map__43392 = p__43307;
var map__43392__$1 = ((((!((map__43392 == null)))?((((map__43392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43392):map__43392);
var namespace = cljs.core.get.call(null,map__43392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43309,inst_43273,inst_43305,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43309__$1 = cljs.core.group_by.call(null,inst_43308,inst_43275);
var inst_43311 = (inst_43309__$1 == null);
var inst_43312 = cljs.core.not.call(null,inst_43311);
var state_43356__$1 = (function (){var statearr_43394 = state_43356;
(statearr_43394[(28)] = inst_43305);

(statearr_43394[(16)] = inst_43309__$1);

return statearr_43394;
})();
if(inst_43312){
var statearr_43395_43468 = state_43356__$1;
(statearr_43395_43468[(1)] = (32));

} else {
var statearr_43396_43469 = state_43356__$1;
(statearr_43396_43469[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (44))){
var inst_43332 = (state_43356[(21)]);
var inst_43345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43332);
var inst_43346 = cljs.core.pr_str.call(null,inst_43345);
var inst_43347 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43346)].join('');
var inst_43348 = figwheel.client.utils.log.call(null,inst_43347);
var state_43356__$1 = state_43356;
var statearr_43397_43470 = state_43356__$1;
(statearr_43397_43470[(2)] = inst_43348);

(statearr_43397_43470[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (6))){
var inst_43250 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43398_43471 = state_43356__$1;
(statearr_43398_43471[(2)] = inst_43250);

(statearr_43398_43471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (28))){
var inst_43275 = (state_43356[(26)]);
var inst_43302 = (state_43356[(2)]);
var inst_43303 = cljs.core.not_empty.call(null,inst_43275);
var state_43356__$1 = (function (){var statearr_43399 = state_43356;
(statearr_43399[(29)] = inst_43302);

return statearr_43399;
})();
if(cljs.core.truth_(inst_43303)){
var statearr_43400_43472 = state_43356__$1;
(statearr_43400_43472[(1)] = (29));

} else {
var statearr_43401_43473 = state_43356__$1;
(statearr_43401_43473[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (25))){
var inst_43273 = (state_43356[(25)]);
var inst_43289 = (state_43356[(2)]);
var inst_43290 = cljs.core.not_empty.call(null,inst_43273);
var state_43356__$1 = (function (){var statearr_43402 = state_43356;
(statearr_43402[(30)] = inst_43289);

return statearr_43402;
})();
if(cljs.core.truth_(inst_43290)){
var statearr_43403_43474 = state_43356__$1;
(statearr_43403_43474[(1)] = (26));

} else {
var statearr_43404_43475 = state_43356__$1;
(statearr_43404_43475[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (34))){
var inst_43325 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
if(cljs.core.truth_(inst_43325)){
var statearr_43405_43476 = state_43356__$1;
(statearr_43405_43476[(1)] = (38));

} else {
var statearr_43406_43477 = state_43356__$1;
(statearr_43406_43477[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (17))){
var state_43356__$1 = state_43356;
var statearr_43407_43478 = state_43356__$1;
(statearr_43407_43478[(2)] = recompile_dependents);

(statearr_43407_43478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (3))){
var state_43356__$1 = state_43356;
var statearr_43408_43479 = state_43356__$1;
(statearr_43408_43479[(2)] = null);

(statearr_43408_43479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (12))){
var inst_43246 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43409_43480 = state_43356__$1;
(statearr_43409_43480[(2)] = inst_43246);

(statearr_43409_43480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (2))){
var inst_43208 = (state_43356[(13)]);
var inst_43215 = cljs.core.seq.call(null,inst_43208);
var inst_43216 = inst_43215;
var inst_43217 = null;
var inst_43218 = (0);
var inst_43219 = (0);
var state_43356__$1 = (function (){var statearr_43410 = state_43356;
(statearr_43410[(7)] = inst_43216);

(statearr_43410[(8)] = inst_43217);

(statearr_43410[(9)] = inst_43218);

(statearr_43410[(10)] = inst_43219);

return statearr_43410;
})();
var statearr_43411_43481 = state_43356__$1;
(statearr_43411_43481[(2)] = null);

(statearr_43411_43481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (23))){
var inst_43269 = (state_43356[(19)]);
var inst_43272 = (state_43356[(23)]);
var inst_43275 = (state_43356[(26)]);
var inst_43277 = (state_43356[(24)]);
var inst_43273 = (state_43356[(25)]);
var inst_43280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43282 = (function (){var all_files = inst_43269;
var res_SINGLEQUOTE_ = inst_43272;
var res = inst_43273;
var files_not_loaded = inst_43275;
var dependencies_that_loaded = inst_43277;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43280,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43281){
var map__43412 = p__43281;
var map__43412__$1 = ((((!((map__43412 == null)))?((((map__43412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43412):map__43412);
var request_url = cljs.core.get.call(null,map__43412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43280,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43283 = cljs.core.reverse.call(null,inst_43277);
var inst_43284 = cljs.core.map.call(null,inst_43282,inst_43283);
var inst_43285 = cljs.core.pr_str.call(null,inst_43284);
var inst_43286 = figwheel.client.utils.log.call(null,inst_43285);
var state_43356__$1 = (function (){var statearr_43414 = state_43356;
(statearr_43414[(31)] = inst_43280);

return statearr_43414;
})();
var statearr_43415_43482 = state_43356__$1;
(statearr_43415_43482[(2)] = inst_43286);

(statearr_43415_43482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (35))){
var state_43356__$1 = state_43356;
var statearr_43416_43483 = state_43356__$1;
(statearr_43416_43483[(2)] = true);

(statearr_43416_43483[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (19))){
var inst_43259 = (state_43356[(12)]);
var inst_43265 = figwheel.client.file_reloading.expand_files.call(null,inst_43259);
var state_43356__$1 = state_43356;
var statearr_43417_43484 = state_43356__$1;
(statearr_43417_43484[(2)] = inst_43265);

(statearr_43417_43484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (11))){
var state_43356__$1 = state_43356;
var statearr_43418_43485 = state_43356__$1;
(statearr_43418_43485[(2)] = null);

(statearr_43418_43485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (9))){
var inst_43248 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43419_43486 = state_43356__$1;
(statearr_43419_43486[(2)] = inst_43248);

(statearr_43419_43486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (5))){
var inst_43218 = (state_43356[(9)]);
var inst_43219 = (state_43356[(10)]);
var inst_43221 = (inst_43219 < inst_43218);
var inst_43222 = inst_43221;
var state_43356__$1 = state_43356;
if(cljs.core.truth_(inst_43222)){
var statearr_43420_43487 = state_43356__$1;
(statearr_43420_43487[(1)] = (7));

} else {
var statearr_43421_43488 = state_43356__$1;
(statearr_43421_43488[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (14))){
var inst_43229 = (state_43356[(22)]);
var inst_43238 = cljs.core.first.call(null,inst_43229);
var inst_43239 = figwheel.client.file_reloading.eval_body.call(null,inst_43238,opts);
var inst_43240 = cljs.core.next.call(null,inst_43229);
var inst_43216 = inst_43240;
var inst_43217 = null;
var inst_43218 = (0);
var inst_43219 = (0);
var state_43356__$1 = (function (){var statearr_43422 = state_43356;
(statearr_43422[(7)] = inst_43216);

(statearr_43422[(8)] = inst_43217);

(statearr_43422[(9)] = inst_43218);

(statearr_43422[(10)] = inst_43219);

(statearr_43422[(32)] = inst_43239);

return statearr_43422;
})();
var statearr_43423_43489 = state_43356__$1;
(statearr_43423_43489[(2)] = null);

(statearr_43423_43489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (45))){
var state_43356__$1 = state_43356;
var statearr_43424_43490 = state_43356__$1;
(statearr_43424_43490[(2)] = null);

(statearr_43424_43490[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (26))){
var inst_43269 = (state_43356[(19)]);
var inst_43272 = (state_43356[(23)]);
var inst_43275 = (state_43356[(26)]);
var inst_43277 = (state_43356[(24)]);
var inst_43273 = (state_43356[(25)]);
var inst_43292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43294 = (function (){var all_files = inst_43269;
var res_SINGLEQUOTE_ = inst_43272;
var res = inst_43273;
var files_not_loaded = inst_43275;
var dependencies_that_loaded = inst_43277;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43292,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43293){
var map__43425 = p__43293;
var map__43425__$1 = ((((!((map__43425 == null)))?((((map__43425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43425):map__43425);
var namespace = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43292,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43295 = cljs.core.map.call(null,inst_43294,inst_43273);
var inst_43296 = cljs.core.pr_str.call(null,inst_43295);
var inst_43297 = figwheel.client.utils.log.call(null,inst_43296);
var inst_43298 = (function (){var all_files = inst_43269;
var res_SINGLEQUOTE_ = inst_43272;
var res = inst_43273;
var files_not_loaded = inst_43275;
var dependencies_that_loaded = inst_43277;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43292,inst_43294,inst_43295,inst_43296,inst_43297,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43269,inst_43272,inst_43275,inst_43277,inst_43273,inst_43292,inst_43294,inst_43295,inst_43296,inst_43297,state_val_43357,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43299 = setTimeout(inst_43298,(10));
var state_43356__$1 = (function (){var statearr_43427 = state_43356;
(statearr_43427[(33)] = inst_43292);

(statearr_43427[(34)] = inst_43297);

return statearr_43427;
})();
var statearr_43428_43491 = state_43356__$1;
(statearr_43428_43491[(2)] = inst_43299);

(statearr_43428_43491[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (16))){
var state_43356__$1 = state_43356;
var statearr_43429_43492 = state_43356__$1;
(statearr_43429_43492[(2)] = reload_dependents);

(statearr_43429_43492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (38))){
var inst_43309 = (state_43356[(16)]);
var inst_43327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43309);
var state_43356__$1 = state_43356;
var statearr_43430_43493 = state_43356__$1;
(statearr_43430_43493[(2)] = inst_43327);

(statearr_43430_43493[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (30))){
var state_43356__$1 = state_43356;
var statearr_43431_43494 = state_43356__$1;
(statearr_43431_43494[(2)] = null);

(statearr_43431_43494[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (10))){
var inst_43229 = (state_43356[(22)]);
var inst_43231 = cljs.core.chunked_seq_QMARK_.call(null,inst_43229);
var state_43356__$1 = state_43356;
if(inst_43231){
var statearr_43432_43495 = state_43356__$1;
(statearr_43432_43495[(1)] = (13));

} else {
var statearr_43433_43496 = state_43356__$1;
(statearr_43433_43496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (18))){
var inst_43263 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
if(cljs.core.truth_(inst_43263)){
var statearr_43434_43497 = state_43356__$1;
(statearr_43434_43497[(1)] = (19));

} else {
var statearr_43435_43498 = state_43356__$1;
(statearr_43435_43498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (42))){
var state_43356__$1 = state_43356;
var statearr_43436_43499 = state_43356__$1;
(statearr_43436_43499[(2)] = null);

(statearr_43436_43499[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (37))){
var inst_43322 = (state_43356[(2)]);
var state_43356__$1 = state_43356;
var statearr_43437_43500 = state_43356__$1;
(statearr_43437_43500[(2)] = inst_43322);

(statearr_43437_43500[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43357 === (8))){
var inst_43216 = (state_43356[(7)]);
var inst_43229 = (state_43356[(22)]);
var inst_43229__$1 = cljs.core.seq.call(null,inst_43216);
var state_43356__$1 = (function (){var statearr_43438 = state_43356;
(statearr_43438[(22)] = inst_43229__$1);

return statearr_43438;
})();
if(inst_43229__$1){
var statearr_43439_43501 = state_43356__$1;
(statearr_43439_43501[(1)] = (10));

} else {
var statearr_43440_43502 = state_43356__$1;
(statearr_43440_43502[(1)] = (11));

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
});})(c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40724__auto__,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____0 = (function (){
var statearr_43441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43441[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__);

(statearr_43441[(1)] = (1));

return statearr_43441;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____1 = (function (state_43356){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_43356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e43442){if((e43442 instanceof Object)){
var ex__40728__auto__ = e43442;
var statearr_43443_43503 = state_43356;
(statearr_43443_43503[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43504 = state_43356;
state_43356 = G__43504;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__ = function(state_43356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____1.call(this,state_43356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40816__auto__ = (function (){var statearr_43444 = f__40815__auto__.call(null);
(statearr_43444[(6)] = c__40814__auto__);

return statearr_43444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__,map__43201,map__43201__$1,opts,before_jsload,on_jsload,reload_dependents,map__43202,map__43202__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40814__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43507,link){
var map__43508 = p__43507;
var map__43508__$1 = ((((!((map__43508 == null)))?((((map__43508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43508):map__43508);
var file = cljs.core.get.call(null,map__43508__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__43508,map__43508__$1,file){
return (function (p1__43505_SHARP_,p2__43506_SHARP_){
if(cljs.core._EQ_.call(null,p1__43505_SHARP_,p2__43506_SHARP_)){
return p1__43505_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__43508,map__43508__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43511){
var map__43512 = p__43511;
var map__43512__$1 = ((((!((map__43512 == null)))?((((map__43512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43512):map__43512);
var match_length = cljs.core.get.call(null,map__43512__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43512__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43510_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43510_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43514_SHARP_,p2__43515_SHARP_){
return cljs.core.assoc.call(null,p1__43514_SHARP_,cljs.core.get.call(null,p2__43515_SHARP_,key),p2__43515_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6736__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6736__auto__)){
var link = temp__6736__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6736__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6736__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_43516 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_43516);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_43516);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43517,p__43518){
var map__43519 = p__43517;
var map__43519__$1 = ((((!((map__43519 == null)))?((((map__43519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43519):map__43519);
var on_cssload = cljs.core.get.call(null,map__43519__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43520 = p__43518;
var map__43520__$1 = ((((!((map__43520 == null)))?((((map__43520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43520):map__43520);
var files_msg = map__43520__$1;
var files = cljs.core.get.call(null,map__43520__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6738__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6738__auto__)){
var f_datas = temp__6738__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1525108940000
