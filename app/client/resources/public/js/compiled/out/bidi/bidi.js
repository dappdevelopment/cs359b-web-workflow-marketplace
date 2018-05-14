// Compiled by ClojureScript 1.9.908 {}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__37371 = string;
var G__37371__$1 = (((G__37371 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37371)].join(''));
var G__37371__$2 = (((G__37371__$1 == null))?null:encodeURIComponent(G__37371__$1));
if((G__37371__$2 == null)){
return null;
} else {
return G__37371__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__37372 = string;
var G__37372__$1 = (((G__37372 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37372)].join(''));
if((G__37372__$1 == null)){
return null;
} else {
return decodeURIComponent(G__37372__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

goog.object.set(bidi.bidi.encode_parameter,"string",(function (s){
return s;
}));

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

goog.object.set(bidi.bidi.encode_parameter,"number",(function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,k__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.param_key[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,params);
} else {
var m__33081__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,params);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,s);
} else {
var m__33081__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

goog.object.set(bidi.bidi.segment_regex_group,"string",(function (this$){
return this$;
}));

goog.object.set(bidi.bidi.param_key,"string",(function (_){
return null;
}));

goog.object.set(bidi.bidi.transform_param,"string",(function (_){
return cljs.core.identity;
}));

goog.object.set(bidi.bidi.unmatch_segment,"string",(function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches.call(null,this$__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.call(null,["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__6736__auto__ = cljs.core.get.call(null,params,k);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v))){
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__6736__auto__ = this$__$1.call(null,params);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

goog.object.set(bidi.bidi.segment_regex_group,"function",(function (this$){
var pred__37376 = cljs.core._EQ_;
var expr__37377 = this$;
if(cljs.core.truth_(pred__37376.call(null,cljs.core.keyword,expr__37377))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_(pred__37376.call(null,cljs.core.long$,expr__37377))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_(pred__37376.call(null,bidi.bidi.uuid,expr__37377))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_(pred__37376.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__37377))){
throw cljs.core.ex_info.call(null,["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37377)].join('')));
}
}
}
}
}));

goog.object.set(bidi.bidi.transform_param,"function",(function (this$){
var pred__37379 = cljs.core._EQ_;
var expr__37380 = this$;
if(cljs.core.truth_(pred__37379.call(null,cljs.core.keyword,expr__37380))){
return cljs.core.comp.call(null,cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_(pred__37379.call(null,cljs.core.long$,expr__37380))){
return ((function (pred__37379,expr__37380){
return (function (p1__37374_SHARP_){
return Number(p1__37374_SHARP_);
});
;})(pred__37379,expr__37380))
} else {
if(cljs.core.truth_(pred__37379.call(null,bidi.bidi.uuid,expr__37380))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.call(null,["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

goog.object.set(bidi.bidi.matches_QMARK_,"function",(function (this$,s){
var pred__37382 = cljs.core._EQ_;
var expr__37383 = this$;
if(cljs.core.truth_(pred__37382.call(null,cljs.core.keyword,expr__37383))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_(pred__37382.call(null,cljs.core.long$,expr__37383))){
return cljs.core.not.call(null,isNaN(s));
} else {
if(cljs.core.truth_(pred__37382.call(null,bidi.bidi.uuid,expr__37383))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37383)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,env);
} else {
var m__33081__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,env);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,m);
} else {
var m__33081__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,m);
} else {
var m__33081__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,m);
} else {
var m__33081__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["http://bidi.bidi/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.call(null,(new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__37385,orig_env){
var vec__37386 = p__37385;
var pattern = cljs.core.nth.call(null,vec__37386,(0),null);
var matched = cljs.core.nth.call(null,vec__37386,(1),null);
var env = cljs.core.update.call(null,orig_env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),bidi.bidi.just_path);
var temp__6738__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);
if(cljs.core.truth_(temp__6738__auto__)){
var match_result = temp__6738__auto__;
return bidi.bidi.resolve_handler.call(null,matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__6738__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__6738__auto__)){
var path = temp__6738__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else {
return null;
}
});
goog.object.set(bidi.bidi.Pattern,"string",true);

goog.object.set(bidi.bidi.match_pattern,"string",(function (this$,env){
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$)),")"].join(''),env);
}));

goog.object.set(bidi.bidi.unmatch_pattern,"string",(function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$__$1)),")"].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern.call(null,clojure.string.replace.call(null,p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

goog.object.set(bidi.bidi.match_pattern,"boolean",(function (this$,env){
if(this$){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

goog.object.set(bidi.bidi.unmatch_pattern,"boolean",(function (this$,_){
if(this$){
return "";
} else {
return null;
}
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__6738__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next.call(null,_PERCENT___$6);
})();
if(temp__6738__auto__){
var groups = temp__6738__auto__;
var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__37389_SHARP_){
return bidi.bidi.unmatch_segment.call(null,p1__37389_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__37392){
var vec__37393 = p__37392;
var k = cljs.core.nth.call(null,vec__37393,(0),null);
var v = cljs.core.nth.call(null,vec__37393,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__37396){
var vec__37397 = p__37396;
var k = cljs.core.nth.call(null,vec__37397,(0),null);
var v = cljs.core.nth.call(null,vec__37397,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37390_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__37390_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37391_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__37391_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__6738__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);
if(cljs.core.truth_(temp__6738__auto__)){
var r = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

goog.object.set(bidi.bidi.resolve_handler,"null",(function (this$,m){
return null;
}));

goog.object.set(bidi.bidi.unresolve_handler,"null",(function (this$,m){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37400_SHARP_){
return bidi.bidi.match_pair.call(null,p1__37400_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37401_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__37401_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler.call(null,cljs.core.deref.call(null,this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37404_SHARP_){
return bidi.bidi.match_pair.call(null,p1__37404_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37405_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__37405_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37402_SHARP_){
return bidi.bidi.match_pair.call(null,p1__37402_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37403_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__37403_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

goog.object.set(bidi.bidi.unresolve_handler,"string",(function (_,___$1){
return null;
}));

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

goog.object.set(bidi.bidi.resolve_handler,"function",(function (this$,m){
return bidi.bidi.succeed.call(null,this$,m);
}));

goog.object.set(bidi.bidi.unresolve_handler,"function",(function (this$,m){
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37406_SHARP_){
return bidi.bidi.match_pair.call(null,p1__37406_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37407_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__37407_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37408_SHARP_){
return bidi.bidi.match_pair.call(null,p1__37408_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37409_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__37409_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route)),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__33631__auto__ = [];
var len__33624__auto___37416 = arguments.length;
var i__33625__auto___37417 = (0);
while(true){
if((i__33625__auto___37417 < len__33624__auto___37416)){
args__33631__auto__.push((arguments[i__33625__auto___37417]));

var G__37418 = (i__33625__auto___37417 + (1));
i__33625__auto___37417 = G__37418;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((2) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33632__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__37413){
var map__37414 = p__37413;
var map__37414__$1 = ((((!((map__37414 == null)))?((((map__37414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37414):map__37414);
var options = map__37414__$1;
return bidi.bidi.match_route_STAR_.call(null,route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq37410){
var G__37411 = cljs.core.first.call(null,seq37410);
var seq37410__$1 = cljs.core.next.call(null,seq37410);
var G__37412 = cljs.core.first.call(null,seq37410__$1);
var seq37410__$2 = cljs.core.next.call(null,seq37410__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__37411,G__37412,seq37410__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__33631__auto__ = [];
var len__33624__auto___37425 = arguments.length;
var i__33625__auto___37426 = (0);
while(true){
if((i__33625__auto___37426 < len__33624__auto___37425)){
args__33631__auto__.push((arguments[i__33625__auto___37426]));

var G__37427 = (i__33625__auto___37426 + (1));
i__33625__auto___37426 = G__37427;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((2) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33632__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__37422){
var map__37423 = p__37422;
var map__37423__$1 = ((((!((map__37423 == null)))?((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37423):map__37423);
var params = map__37423__$1;
if((handler == null)){
throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq37419){
var G__37420 = cljs.core.first.call(null,seq37419);
var seq37419__$1 = cljs.core.next.call(null,seq37419);
var G__37421 = cljs.core.first.call(null,seq37419__$1);
var seq37419__$2 = cljs.core.next.call(null,seq37419__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__37420,G__37421,seq37419__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null)))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.matches[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

goog.object.set(bidi.bidi.matches,"_",(function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
}));

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33035__auto__,k__33036__auto__){
var self__ = this;
var this__33035__auto____$1 = this;
return this__33035__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__33036__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33037__auto__,k37429,else__33038__auto__){
var self__ = this;
var this__33037__auto____$1 = this;
var G__37433 = k37429;
var G__37433__$1 = (((G__37433 instanceof cljs.core.Keyword))?G__37433.fqn:null);
switch (G__37433__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37429,else__33038__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33049__auto__,writer__33050__auto__,opts__33051__auto__){
var self__ = this;
var this__33049__auto____$1 = this;
var pr_pair__33052__auto__ = ((function (this__33049__auto____$1){
return (function (keyval__33053__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,cljs.core.pr_writer,""," ","",opts__33051__auto__,keyval__33053__auto__);
});})(this__33049__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,pr_pair__33052__auto__,"#bidi.bidi.Route{",", ","}",opts__33051__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37428){
var self__ = this;
var G__37428__$1 = this;
return (new cljs.core.RecordIter((0),G__37428__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33033__auto__){
var self__ = this;
var this__33033__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33030__auto__){
var self__ = this;
var this__33030__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33039__auto__){
var self__ = this;
var this__33039__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33031__auto__){
var self__ = this;
var this__33031__auto____$1 = this;
var h__32803__auto__ = self__.__hash;
if(!((h__32803__auto__ == null))){
return h__32803__auto__;
} else {
var h__32803__auto____$1 = ((function (h__32803__auto__,this__33031__auto____$1){
return (function (coll__33032__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll.call(null,coll__33032__auto__));
});})(h__32803__auto__,this__33031__auto____$1))
.call(null,this__33031__auto____$1);
self__.__hash = h__32803__auto____$1;

return h__32803__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37430,other37431){
var self__ = this;
var this37430__$1 = this;
return (!((other37431 == null))) && ((this37430__$1.constructor === other37431.constructor)) && (cljs.core._EQ_.call(null,this37430__$1.handler,other37431.handler)) && (cljs.core._EQ_.call(null,this37430__$1.path,other37431.path)) && (cljs.core._EQ_.call(null,this37430__$1.__extmap,other37431.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33044__auto__,k__33045__auto__){
var self__ = this;
var this__33044__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__33045__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33044__auto____$1),self__.__meta),k__33045__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33045__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33042__auto__,k__33043__auto__,G__37428){
var self__ = this;
var this__33042__auto____$1 = this;
var pred__37434 = cljs.core.keyword_identical_QMARK_;
var expr__37435 = k__33043__auto__;
if(cljs.core.truth_(pred__37434.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__37435))){
return (new bidi.bidi.Route(G__37428,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37434.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__37435))){
return (new bidi.bidi.Route(self__.handler,G__37428,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33043__auto__,G__37428),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33047__auto__){
var self__ = this;
var this__33047__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33034__auto__,G__37428){
var self__ = this;
var this__33034__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__37428,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33040__auto__,entry__33041__auto__){
var self__ = this;
var this__33040__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33041__auto__)){
return this__33040__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__33041__auto__,(0)),cljs.core._nth.call(null,entry__33041__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33040__auto____$1,entry__33041__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__33073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__33073__auto__,writer__33074__auto__){
return cljs.core._write.call(null,writer__33074__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__37432){
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__37432),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__37432),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37432,new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168))),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.gather[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_,context);
} else {
var m__33081__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_,context);
} else {
throw cljs.core.missing_protocol.call(null,"RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__37439 = arguments.length;
switch (G__37439) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__37440,ctx){
var vec__37441 = p__37440;
var pattern = cljs.core.nth.call(null,vec__37441,(0),null);
var matched = cljs.core.nth.call(null,vec__37441,(1),null);
return cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__33229__auto__ = ((function (vec__37441,pattern,matched){
return (function bidi$bidi$iter__37444(s__37445){
return (new cljs.core.LazySeq(null,((function (vec__37441,pattern,matched){
return (function (){
var s__37445__$1 = s__37445;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__37445__$1);
if(temp__6738__auto__){
var s__37445__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37445__$2)){
var c__33227__auto__ = cljs.core.chunk_first.call(null,s__37445__$2);
var size__33228__auto__ = cljs.core.count.call(null,c__33227__auto__);
var b__37447 = cljs.core.chunk_buffer.call(null,size__33228__auto__);
if((function (){var i__37446 = (0);
while(true){
if((i__37446 < size__33228__auto__)){
var p = cljs.core._nth.call(null,c__33227__auto__,i__37446);
cljs.core.chunk_append.call(null,b__37447,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__37449 = (i__37446 + (1));
i__37446 = G__37449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37447),bidi$bidi$iter__37444.call(null,cljs.core.chunk_rest.call(null,s__37445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37447),null);
}
} else {
var p = cljs.core.first.call(null,s__37445__$2);
return cljs.core.cons.call(null,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__37444.call(null,cljs.core.rest.call(null,s__37445__$2)));
}
} else {
return null;
}
break;
}
});})(vec__37441,pattern,matched))
,null,null));
});})(vec__37441,pattern,matched))
;
return iter__33229__auto__.call(null,bidi.bidi.matches.call(null,pattern));
})());
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__37450_SHARP_){
return bidi.bidi.route_seq.call(null,p1__37450_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__37451_SHARP_){
return bidi.bidi.route_seq.call(null,p1__37451_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__37452_SHARP_){
return bidi.bidi.route_seq.call(null,p1__37452_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__37453_SHARP_){
return bidi.bidi.route_seq.call(null,p1__37453_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__37454_SHARP_){
return bidi.bidi.route_seq.call(null,p1__37454_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

goog.object.set(bidi.bidi.gather,"_",(function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (bidi.bidi.routes[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33035__auto__,k__33036__auto__){
var self__ = this;
var this__33035__auto____$1 = this;
return this__33035__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__33036__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33037__auto__,k37457,else__33038__auto__){
var self__ = this;
var this__33037__auto____$1 = this;
var G__37461 = k37457;
var G__37461__$1 = (((G__37461 instanceof cljs.core.Keyword))?G__37461.fqn:null);
switch (G__37461__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37457,else__33038__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33049__auto__,writer__33050__auto__,opts__33051__auto__){
var self__ = this;
var this__33049__auto____$1 = this;
var pr_pair__33052__auto__ = ((function (this__33049__auto____$1){
return (function (keyval__33053__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,cljs.core.pr_writer,""," ","",opts__33051__auto__,keyval__33053__auto__);
});})(this__33049__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,pr_pair__33052__auto__,"#bidi.bidi.Alternates{",", ","}",opts__33051__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37456){
var self__ = this;
var G__37456__$1 = this;
return (new cljs.core.RecordIter((0),G__37456__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33033__auto__){
var self__ = this;
var this__33033__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33030__auto__){
var self__ = this;
var this__33030__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33039__auto__){
var self__ = this;
var this__33039__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33031__auto__){
var self__ = this;
var this__33031__auto____$1 = this;
var h__32803__auto__ = self__.__hash;
if(!((h__32803__auto__ == null))){
return h__32803__auto__;
} else {
var h__32803__auto____$1 = ((function (h__32803__auto__,this__33031__auto____$1){
return (function (coll__33032__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll.call(null,coll__33032__auto__));
});})(h__32803__auto__,this__33031__auto____$1))
.call(null,this__33031__auto____$1);
self__.__hash = h__32803__auto____$1;

return h__32803__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37458,other37459){
var self__ = this;
var this37458__$1 = this;
return (!((other37459 == null))) && ((this37458__$1.constructor === other37459.constructor)) && (cljs.core._EQ_.call(null,this37458__$1.alts,other37459.alts)) && (cljs.core._EQ_.call(null,this37458__$1.__extmap,other37459.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33044__auto__,k__33045__auto__){
var self__ = this;
var this__33044__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__33045__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33044__auto____$1),self__.__meta),k__33045__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33045__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33042__auto__,k__33043__auto__,G__37456){
var self__ = this;
var this__33042__auto____$1 = this;
var pred__37462 = cljs.core.keyword_identical_QMARK_;
var expr__37463 = k__33043__auto__;
if(cljs.core.truth_(pred__37462.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__37463))){
return (new bidi.bidi.Alternates(G__37456,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33043__auto__,G__37456),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33047__auto__){
var self__ = this;
var this__33047__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33034__auto__,G__37456){
var self__ = this;
var this__33034__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__37456,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33040__auto__,entry__33041__auto__){
var self__ = this;
var this__33040__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33041__auto__)){
return this__33040__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__33041__auto__,(0)),cljs.core._nth.call(null,entry__33041__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33040__auto____$1,entry__33041__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__37455_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__37455_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",-2006883353,null)], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__33073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__33073__auto__,writer__33074__auto__){
return cljs.core._write.call(null,writer__33074__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__37460){
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__37460),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37460,new cljs.core.Keyword(null,"alts","alts",647552416))),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__33631__auto__ = [];
var len__33624__auto___37467 = arguments.length;
var i__33625__auto___37468 = (0);
while(true){
if((i__33625__auto___37468 < len__33624__auto___37467)){
args__33631__auto__.push((arguments[i__33625__auto___37468]));

var G__37469 = (i__33625__auto___37468 + (1));
i__33625__auto___37468 = G__37469;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((0) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__33632__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates.call(null,alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq37466){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37466));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33035__auto__,k__33036__auto__){
var self__ = this;
var this__33035__auto____$1 = this;
return this__33035__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__33036__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33037__auto__,k37471,else__33038__auto__){
var self__ = this;
var this__33037__auto____$1 = this;
var G__37475 = k37471;
var G__37475__$1 = (((G__37475 instanceof cljs.core.Keyword))?G__37475.fqn:null);
switch (G__37475__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37471,else__33038__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),self__.matched,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33049__auto__,writer__33050__auto__,opts__33051__auto__){
var self__ = this;
var this__33049__auto____$1 = this;
var pr_pair__33052__auto__ = ((function (this__33049__auto____$1){
return (function (keyval__33053__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,cljs.core.pr_writer,""," ","",opts__33051__auto__,keyval__33053__auto__);
});})(this__33049__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,pr_pair__33052__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__33051__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37470){
var self__ = this;
var G__37470__$1 = this;
return (new cljs.core.RecordIter((0),G__37470__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.matched,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33033__auto__){
var self__ = this;
var this__33033__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33030__auto__){
var self__ = this;
var this__33030__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33039__auto__){
var self__ = this;
var this__33039__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33031__auto__){
var self__ = this;
var this__33031__auto____$1 = this;
var h__32803__auto__ = self__.__hash;
if(!((h__32803__auto__ == null))){
return h__32803__auto__;
} else {
var h__32803__auto____$1 = ((function (h__32803__auto__,this__33031__auto____$1){
return (function (coll__33032__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll.call(null,coll__33032__auto__));
});})(h__32803__auto__,this__33031__auto____$1))
.call(null,this__33031__auto____$1);
self__.__hash = h__32803__auto____$1;

return h__32803__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37472,other37473){
var self__ = this;
var this37472__$1 = this;
return (!((other37473 == null))) && ((this37472__$1.constructor === other37473.constructor)) && (cljs.core._EQ_.call(null,this37472__$1.matched,other37473.matched)) && (cljs.core._EQ_.call(null,this37472__$1.tag,other37473.tag)) && (cljs.core._EQ_.call(null,this37472__$1.__extmap,other37473.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33044__auto__,k__33045__auto__){
var self__ = this;
var this__33044__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__33045__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33044__auto____$1),self__.__meta),k__33045__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33045__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33042__auto__,k__33043__auto__,G__37470){
var self__ = this;
var this__33042__auto____$1 = this;
var pred__37476 = cljs.core.keyword_identical_QMARK_;
var expr__37477 = k__33043__auto__;
if(cljs.core.truth_(pred__37476.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__37477))){
return (new bidi.bidi.TaggedMatch(G__37470,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37476.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__37477))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__37470,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33043__auto__,G__37470),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33047__auto__){
var self__ = this;
var this__33047__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33034__auto__,G__37470){
var self__ = this;
var this__33034__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__37470,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33040__auto__,entry__33041__auto__){
var self__ = this;
var this__33040__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33041__auto__)){
return this__33040__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__33041__auto__,(0)),cljs.core._nth.call(null,entry__33041__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33040__auto____$1,entry__33041__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matched","matched",665324363,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__33073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__33073__auto__,writer__33074__auto__){
return cljs.core._write.call(null,writer__33074__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__37474){
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__37474),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__37474),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37474,new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223))),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch.call(null,matched,tag);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33035__auto__,k__33036__auto__){
var self__ = this;
var this__33035__auto____$1 = this;
return this__33035__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__33036__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33037__auto__,k37481,else__33038__auto__){
var self__ = this;
var this__33037__auto____$1 = this;
var G__37485 = k37481;
var G__37485__$1 = (((G__37485 instanceof cljs.core.Keyword))?G__37485.fqn:null);
switch (G__37485__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37481,else__33038__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33049__auto__,writer__33050__auto__,opts__33051__auto__){
var self__ = this;
var this__33049__auto____$1 = this;
var pr_pair__33052__auto__ = ((function (this__33049__auto____$1){
return (function (keyval__33053__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,cljs.core.pr_writer,""," ","",opts__33051__auto__,keyval__33053__auto__);
});})(this__33049__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,pr_pair__33052__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__33051__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37480){
var self__ = this;
var G__37480__$1 = this;
return (new cljs.core.RecordIter((0),G__37480__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.handler,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.call(null,self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33033__auto__){
var self__ = this;
var this__33033__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33030__auto__){
var self__ = this;
var this__33030__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33039__auto__){
var self__ = this;
var this__33039__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33031__auto__){
var self__ = this;
var this__33031__auto____$1 = this;
var h__32803__auto__ = self__.__hash;
if(!((h__32803__auto__ == null))){
return h__32803__auto__;
} else {
var h__32803__auto____$1 = ((function (h__32803__auto__,this__33031__auto____$1){
return (function (coll__33032__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll.call(null,coll__33032__auto__));
});})(h__32803__auto__,this__33031__auto____$1))
.call(null,this__33031__auto____$1);
self__.__hash = h__32803__auto____$1;

return h__32803__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37482,other37483){
var self__ = this;
var this37482__$1 = this;
return (!((other37483 == null))) && ((this37482__$1.constructor === other37483.constructor)) && (cljs.core._EQ_.call(null,this37482__$1.id,other37483.id)) && (cljs.core._EQ_.call(null,this37482__$1.handler,other37483.handler)) && (cljs.core._EQ_.call(null,this37482__$1.__extmap,other37483.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33044__auto__,k__33045__auto__){
var self__ = this;
var this__33044__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__33045__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33044__auto____$1),self__.__meta),k__33045__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33045__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33042__auto__,k__33043__auto__,G__37480){
var self__ = this;
var this__33042__auto____$1 = this;
var pred__37486 = cljs.core.keyword_identical_QMARK_;
var expr__37487 = k__33043__auto__;
if(cljs.core.truth_(pred__37486.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__37487))){
return (new bidi.bidi.IdentifiableHandler(G__37480,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37486.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__37487))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__37480,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33043__auto__,G__37480),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33047__auto__){
var self__ = this;
var this__33047__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33034__auto__,G__37480){
var self__ = this;
var this__33034__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__37480,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33040__auto__,entry__33041__auto__){
var self__ = this;
var this__33040__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33041__auto__)){
return this__33040__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__33041__auto__,(0)),cljs.core._nth.call(null,entry__33041__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33040__auto____$1,entry__33041__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__33073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__33073__auto__,writer__33074__auto__){
return cljs.core._write.call(null,writer__33074__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__37484){
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__37484),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__37484),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37484,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612))),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__37491 = arguments.length;
switch (G__37491) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__33035__auto__,k__33036__auto__){
var self__ = this;
var this__33035__auto____$1 = this;
return this__33035__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__33036__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__33037__auto__,k37494,else__33038__auto__){
var self__ = this;
var this__33037__auto____$1 = this;
var G__37498 = k37494;
var G__37498__$1 = (((G__37498 instanceof cljs.core.Keyword))?G__37498.fqn:null);
switch (G__37498__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37494,else__33038__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather.call(null,self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__33049__auto__,writer__33050__auto__,opts__33051__auto__){
var self__ = this;
var this__33049__auto____$1 = this;
var pr_pair__33052__auto__ = ((function (this__33049__auto____$1){
return (function (keyval__33053__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,cljs.core.pr_writer,""," ","",opts__33051__auto__,keyval__33053__auto__);
});})(this__33049__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__33050__auto__,pr_pair__33052__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__33051__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37493){
var self__ = this;
var G__37493__$1 = this;
return (new cljs.core.RecordIter((0),G__37493__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__6738__auto__ = bidi.bidi.resolve_handler.call(null,self__.routes,m);
if(cljs.core.truth_(temp__6738__auto__)){
var m__$1 = temp__6738__auto__;
return cljs.core.merge.call(null,self__.context,m__$1);
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler.call(null,self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__33033__auto__){
var self__ = this;
var this__33033__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__33030__auto__){
var self__ = this;
var this__33030__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__33039__auto__){
var self__ = this;
var this__33039__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__33031__auto__){
var self__ = this;
var this__33031__auto____$1 = this;
var h__32803__auto__ = self__.__hash;
if(!((h__32803__auto__ == null))){
return h__32803__auto__;
} else {
var h__32803__auto____$1 = ((function (h__32803__auto__,this__33031__auto____$1){
return (function (coll__33032__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll.call(null,coll__33032__auto__));
});})(h__32803__auto__,this__33031__auto____$1))
.call(null,this__33031__auto____$1);
self__.__hash = h__32803__auto____$1;

return h__32803__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37495,other37496){
var self__ = this;
var this37495__$1 = this;
return (!((other37496 == null))) && ((this37495__$1.constructor === other37496.constructor)) && (cljs.core._EQ_.call(null,this37495__$1.routes,other37496.routes)) && (cljs.core._EQ_.call(null,this37495__$1.context,other37496.context)) && (cljs.core._EQ_.call(null,this37495__$1.__extmap,other37496.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__33044__auto__,k__33045__auto__){
var self__ = this;
var this__33044__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__33045__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__33044__auto____$1),self__.__meta),k__33045__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__33045__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__33042__auto__,k__33043__auto__,G__37493){
var self__ = this;
var this__33042__auto____$1 = this;
var pred__37499 = cljs.core.keyword_identical_QMARK_;
var expr__37500 = k__33043__auto__;
if(cljs.core.truth_(pred__37499.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__37500))){
return (new bidi.bidi.RoutesContext(G__37493,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37499.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__37500))){
return (new bidi.bidi.RoutesContext(self__.routes,G__37493,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__33043__auto__,G__37493),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__33047__auto__){
var self__ = this;
var this__33047__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__33034__auto__,G__37493){
var self__ = this;
var this__33034__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__37493,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__33040__auto__,entry__33041__auto__){
var self__ = this;
var this__33040__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__33041__auto__)){
return this__33040__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__33041__auto__,(0)),cljs.core._nth.call(null,entry__33041__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__33040__auto____$1,entry__33041__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__33073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__33073__auto__,writer__33074__auto__){
return cljs.core._write.call(null,writer__33074__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__37497){
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__37497),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__37497),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__37497,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113))),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext.call(null,routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});

//# sourceMappingURL=bidi.js.map?rel=1525108933165
