// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40874 = arguments.length;
switch (G__40874) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40875 = (function (f,blockable,meta40876){
this.f = f;
this.blockable = blockable;
this.meta40876 = meta40876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40877,meta40876__$1){
var self__ = this;
var _40877__$1 = this;
return (new cljs.core.async.t_cljs$core$async40875(self__.f,self__.blockable,meta40876__$1));
});

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40877){
var self__ = this;
var _40877__$1 = this;
return self__.meta40876;
});

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40876","meta40876",-2059064167,null)], null);
});

cljs.core.async.t_cljs$core$async40875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40875";

cljs.core.async.t_cljs$core$async40875.cljs$lang$ctorPrWriter = (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async40875");
});

cljs.core.async.__GT_t_cljs$core$async40875 = (function cljs$core$async$__GT_t_cljs$core$async40875(f__$1,blockable__$1,meta40876){
return (new cljs.core.async.t_cljs$core$async40875(f__$1,blockable__$1,meta40876));
});

}

return (new cljs.core.async.t_cljs$core$async40875(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40881 = arguments.length;
switch (G__40881) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40884 = arguments.length;
switch (G__40884) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40887 = arguments.length;
switch (G__40887) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40889 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40889);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40889,ret){
return (function (){
return fn1.call(null,val_40889);
});})(val_40889,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40891 = arguments.length;
switch (G__40891) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__33390__auto___40893 = n;
var x_40894 = (0);
while(true){
if((x_40894 < n__33390__auto___40893)){
(a[x_40894] = (0));

var G__40895 = (x_40894 + (1));
x_40894 = G__40895;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40896 = (i + (1));
i = G__40896;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40897 = (function (flag,meta40898){
this.flag = flag;
this.meta40898 = meta40898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40899,meta40898__$1){
var self__ = this;
var _40899__$1 = this;
return (new cljs.core.async.t_cljs$core$async40897(self__.flag,meta40898__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40899){
var self__ = this;
var _40899__$1 = this;
return self__.meta40898;
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40898","meta40898",1043657395,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40897";

cljs.core.async.t_cljs$core$async40897.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async40897");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40897 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40897(flag__$1,meta40898){
return (new cljs.core.async.t_cljs$core$async40897(flag__$1,meta40898));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40897(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40900 = (function (flag,cb,meta40901){
this.flag = flag;
this.cb = cb;
this.meta40901 = meta40901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40902,meta40901__$1){
var self__ = this;
var _40902__$1 = this;
return (new cljs.core.async.t_cljs$core$async40900(self__.flag,self__.cb,meta40901__$1));
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40902){
var self__ = this;
var _40902__$1 = this;
return self__.meta40901;
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40901","meta40901",-1125345347,null)], null);
});

cljs.core.async.t_cljs$core$async40900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40900";

cljs.core.async.t_cljs$core$async40900.cljs$lang$ctorPrWriter = (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async40900");
});

cljs.core.async.__GT_t_cljs$core$async40900 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40900(flag__$1,cb__$1,meta40901){
return (new cljs.core.async.t_cljs$core$async40900(flag__$1,cb__$1,meta40901));
});

}

return (new cljs.core.async.t_cljs$core$async40900(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40903_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40903_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40904_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40904_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__32347__auto__ = wport;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40905 = (i + (1));
i = G__40905;
continue;
}
} else {
return null;
}
break;
}
})();
var or__32347__auto__ = ret;
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__32335__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__32335__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__32335__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___40911 = arguments.length;
var i__33625__auto___40912 = (0);
while(true){
if((i__33625__auto___40912 < len__33624__auto___40911)){
args__33631__auto__.push((arguments[i__33625__auto___40912]));

var G__40913 = (i__33625__auto___40912 + (1));
i__33625__auto___40912 = G__40913;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((1) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33632__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40908){
var map__40909 = p__40908;
var map__40909__$1 = ((((!((map__40909 == null)))?((((map__40909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40909):map__40909);
var opts = map__40909__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40906){
var G__40907 = cljs.core.first.call(null,seq40906);
var seq40906__$1 = cljs.core.next.call(null,seq40906);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40907,seq40906__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40915 = arguments.length;
switch (G__40915) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40814__auto___40961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___40961){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___40961){
return (function (state_40939){
var state_val_40940 = (state_40939[(1)]);
if((state_val_40940 === (7))){
var inst_40935 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
var statearr_40941_40962 = state_40939__$1;
(statearr_40941_40962[(2)] = inst_40935);

(statearr_40941_40962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (1))){
var state_40939__$1 = state_40939;
var statearr_40942_40963 = state_40939__$1;
(statearr_40942_40963[(2)] = null);

(statearr_40942_40963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (4))){
var inst_40918 = (state_40939[(7)]);
var inst_40918__$1 = (state_40939[(2)]);
var inst_40919 = (inst_40918__$1 == null);
var state_40939__$1 = (function (){var statearr_40943 = state_40939;
(statearr_40943[(7)] = inst_40918__$1);

return statearr_40943;
})();
if(cljs.core.truth_(inst_40919)){
var statearr_40944_40964 = state_40939__$1;
(statearr_40944_40964[(1)] = (5));

} else {
var statearr_40945_40965 = state_40939__$1;
(statearr_40945_40965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (13))){
var state_40939__$1 = state_40939;
var statearr_40946_40966 = state_40939__$1;
(statearr_40946_40966[(2)] = null);

(statearr_40946_40966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (6))){
var inst_40918 = (state_40939[(7)]);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40939__$1,(11),to,inst_40918);
} else {
if((state_val_40940 === (3))){
var inst_40937 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40939__$1,inst_40937);
} else {
if((state_val_40940 === (12))){
var state_40939__$1 = state_40939;
var statearr_40947_40967 = state_40939__$1;
(statearr_40947_40967[(2)] = null);

(statearr_40947_40967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (2))){
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40939__$1,(4),from);
} else {
if((state_val_40940 === (11))){
var inst_40928 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
if(cljs.core.truth_(inst_40928)){
var statearr_40948_40968 = state_40939__$1;
(statearr_40948_40968[(1)] = (12));

} else {
var statearr_40949_40969 = state_40939__$1;
(statearr_40949_40969[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (9))){
var state_40939__$1 = state_40939;
var statearr_40950_40970 = state_40939__$1;
(statearr_40950_40970[(2)] = null);

(statearr_40950_40970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (5))){
var state_40939__$1 = state_40939;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40951_40971 = state_40939__$1;
(statearr_40951_40971[(1)] = (8));

} else {
var statearr_40952_40972 = state_40939__$1;
(statearr_40952_40972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (14))){
var inst_40933 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
var statearr_40953_40973 = state_40939__$1;
(statearr_40953_40973[(2)] = inst_40933);

(statearr_40953_40973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (10))){
var inst_40925 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
var statearr_40954_40974 = state_40939__$1;
(statearr_40954_40974[(2)] = inst_40925);

(statearr_40954_40974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (8))){
var inst_40922 = cljs.core.async.close_BANG_.call(null,to);
var state_40939__$1 = state_40939;
var statearr_40955_40975 = state_40939__$1;
(statearr_40955_40975[(2)] = inst_40922);

(statearr_40955_40975[(1)] = (10));


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
});})(c__40814__auto___40961))
;
return ((function (switch__40724__auto__,c__40814__auto___40961){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_40956 = [null,null,null,null,null,null,null,null];
(statearr_40956[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_40956[(1)] = (1));

return statearr_40956;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_40939){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_40939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e40957){if((e40957 instanceof Object)){
var ex__40728__auto__ = e40957;
var statearr_40958_40976 = state_40939;
(statearr_40958_40976[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40977 = state_40939;
state_40939 = G__40977;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_40939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_40939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___40961))
})();
var state__40816__auto__ = (function (){var statearr_40959 = f__40815__auto__.call(null);
(statearr_40959[(6)] = c__40814__auto___40961);

return statearr_40959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___40961))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40978){
var vec__40979 = p__40978;
var v = cljs.core.nth.call(null,vec__40979,(0),null);
var p = cljs.core.nth.call(null,vec__40979,(1),null);
var job = vec__40979;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40814__auto___41150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results){
return (function (state_40986){
var state_val_40987 = (state_40986[(1)]);
if((state_val_40987 === (1))){
var state_40986__$1 = state_40986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40986__$1,(2),res,v);
} else {
if((state_val_40987 === (2))){
var inst_40983 = (state_40986[(2)]);
var inst_40984 = cljs.core.async.close_BANG_.call(null,res);
var state_40986__$1 = (function (){var statearr_40988 = state_40986;
(statearr_40988[(7)] = inst_40983);

return statearr_40988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40986__$1,inst_40984);
} else {
return null;
}
}
});})(c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results))
;
return ((function (switch__40724__auto__,c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_40989 = [null,null,null,null,null,null,null,null];
(statearr_40989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__);

(statearr_40989[(1)] = (1));

return statearr_40989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1 = (function (state_40986){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_40986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e40990){if((e40990 instanceof Object)){
var ex__40728__auto__ = e40990;
var statearr_40991_41151 = state_40986;
(statearr_40991_41151[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41152 = state_40986;
state_40986 = G__41152;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = function(state_40986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1.call(this,state_40986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results))
})();
var state__40816__auto__ = (function (){var statearr_40992 = f__40815__auto__.call(null);
(statearr_40992[(6)] = c__40814__auto___41150);

return statearr_40992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___41150,res,vec__40979,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40993){
var vec__40994 = p__40993;
var v = cljs.core.nth.call(null,vec__40994,(0),null);
var p = cljs.core.nth.call(null,vec__40994,(1),null);
var job = vec__40994;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__33390__auto___41153 = n;
var __41154 = (0);
while(true){
if((__41154 < n__33390__auto___41153)){
var G__40997_41155 = type;
var G__40997_41156__$1 = (((G__40997_41155 instanceof cljs.core.Keyword))?G__40997_41155.fqn:null);
switch (G__40997_41156__$1) {
case "compute":
var c__40814__auto___41158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41154,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (__41154,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function (state_41010){
var state_val_41011 = (state_41010[(1)]);
if((state_val_41011 === (1))){
var state_41010__$1 = state_41010;
var statearr_41012_41159 = state_41010__$1;
(statearr_41012_41159[(2)] = null);

(statearr_41012_41159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41011 === (2))){
var state_41010__$1 = state_41010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41010__$1,(4),jobs);
} else {
if((state_val_41011 === (3))){
var inst_41008 = (state_41010[(2)]);
var state_41010__$1 = state_41010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41010__$1,inst_41008);
} else {
if((state_val_41011 === (4))){
var inst_41000 = (state_41010[(2)]);
var inst_41001 = process.call(null,inst_41000);
var state_41010__$1 = state_41010;
if(cljs.core.truth_(inst_41001)){
var statearr_41013_41160 = state_41010__$1;
(statearr_41013_41160[(1)] = (5));

} else {
var statearr_41014_41161 = state_41010__$1;
(statearr_41014_41161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41011 === (5))){
var state_41010__$1 = state_41010;
var statearr_41015_41162 = state_41010__$1;
(statearr_41015_41162[(2)] = null);

(statearr_41015_41162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41011 === (6))){
var state_41010__$1 = state_41010;
var statearr_41016_41163 = state_41010__$1;
(statearr_41016_41163[(2)] = null);

(statearr_41016_41163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41011 === (7))){
var inst_41006 = (state_41010[(2)]);
var state_41010__$1 = state_41010;
var statearr_41017_41164 = state_41010__$1;
(statearr_41017_41164[(2)] = inst_41006);

(statearr_41017_41164[(1)] = (3));


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
});})(__41154,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
;
return ((function (__41154,switch__40724__auto__,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_41018 = [null,null,null,null,null,null,null];
(statearr_41018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__);

(statearr_41018[(1)] = (1));

return statearr_41018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1 = (function (state_41010){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41019){if((e41019 instanceof Object)){
var ex__40728__auto__ = e41019;
var statearr_41020_41165 = state_41010;
(statearr_41020_41165[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41166 = state_41010;
state_41010 = G__41166;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = function(state_41010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1.call(this,state_41010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__;
})()
;})(__41154,switch__40724__auto__,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
})();
var state__40816__auto__ = (function (){var statearr_41021 = f__40815__auto__.call(null);
(statearr_41021[(6)] = c__40814__auto___41158);

return statearr_41021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(__41154,c__40814__auto___41158,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
);


break;
case "async":
var c__40814__auto___41167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41154,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (__41154,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function (state_41034){
var state_val_41035 = (state_41034[(1)]);
if((state_val_41035 === (1))){
var state_41034__$1 = state_41034;
var statearr_41036_41168 = state_41034__$1;
(statearr_41036_41168[(2)] = null);

(statearr_41036_41168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (2))){
var state_41034__$1 = state_41034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41034__$1,(4),jobs);
} else {
if((state_val_41035 === (3))){
var inst_41032 = (state_41034[(2)]);
var state_41034__$1 = state_41034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41034__$1,inst_41032);
} else {
if((state_val_41035 === (4))){
var inst_41024 = (state_41034[(2)]);
var inst_41025 = async.call(null,inst_41024);
var state_41034__$1 = state_41034;
if(cljs.core.truth_(inst_41025)){
var statearr_41037_41169 = state_41034__$1;
(statearr_41037_41169[(1)] = (5));

} else {
var statearr_41038_41170 = state_41034__$1;
(statearr_41038_41170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (5))){
var state_41034__$1 = state_41034;
var statearr_41039_41171 = state_41034__$1;
(statearr_41039_41171[(2)] = null);

(statearr_41039_41171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (6))){
var state_41034__$1 = state_41034;
var statearr_41040_41172 = state_41034__$1;
(statearr_41040_41172[(2)] = null);

(statearr_41040_41172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (7))){
var inst_41030 = (state_41034[(2)]);
var state_41034__$1 = state_41034;
var statearr_41041_41173 = state_41034__$1;
(statearr_41041_41173[(2)] = inst_41030);

(statearr_41041_41173[(1)] = (3));


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
});})(__41154,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
;
return ((function (__41154,switch__40724__auto__,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_41042 = [null,null,null,null,null,null,null];
(statearr_41042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__);

(statearr_41042[(1)] = (1));

return statearr_41042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1 = (function (state_41034){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41043){if((e41043 instanceof Object)){
var ex__40728__auto__ = e41043;
var statearr_41044_41174 = state_41034;
(statearr_41044_41174[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41175 = state_41034;
state_41034 = G__41175;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = function(state_41034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1.call(this,state_41034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__;
})()
;})(__41154,switch__40724__auto__,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
})();
var state__40816__auto__ = (function (){var statearr_41045 = f__40815__auto__.call(null);
(statearr_41045[(6)] = c__40814__auto___41167);

return statearr_41045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(__41154,c__40814__auto___41167,G__40997_41155,G__40997_41156__$1,n__33390__auto___41153,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40997_41156__$1)].join('')));

}

var G__41176 = (__41154 + (1));
__41154 = G__41176;
continue;
} else {
}
break;
}

var c__40814__auto___41177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___41177,jobs,results,process,async){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___41177,jobs,results,process,async){
return (function (state_41067){
var state_val_41068 = (state_41067[(1)]);
if((state_val_41068 === (1))){
var state_41067__$1 = state_41067;
var statearr_41069_41178 = state_41067__$1;
(statearr_41069_41178[(2)] = null);

(statearr_41069_41178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41068 === (2))){
var state_41067__$1 = state_41067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41067__$1,(4),from);
} else {
if((state_val_41068 === (3))){
var inst_41065 = (state_41067[(2)]);
var state_41067__$1 = state_41067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41067__$1,inst_41065);
} else {
if((state_val_41068 === (4))){
var inst_41048 = (state_41067[(7)]);
var inst_41048__$1 = (state_41067[(2)]);
var inst_41049 = (inst_41048__$1 == null);
var state_41067__$1 = (function (){var statearr_41070 = state_41067;
(statearr_41070[(7)] = inst_41048__$1);

return statearr_41070;
})();
if(cljs.core.truth_(inst_41049)){
var statearr_41071_41179 = state_41067__$1;
(statearr_41071_41179[(1)] = (5));

} else {
var statearr_41072_41180 = state_41067__$1;
(statearr_41072_41180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41068 === (5))){
var inst_41051 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41067__$1 = state_41067;
var statearr_41073_41181 = state_41067__$1;
(statearr_41073_41181[(2)] = inst_41051);

(statearr_41073_41181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41068 === (6))){
var inst_41048 = (state_41067[(7)]);
var inst_41053 = (state_41067[(8)]);
var inst_41053__$1 = cljs.core.async.chan.call(null,(1));
var inst_41054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41055 = [inst_41048,inst_41053__$1];
var inst_41056 = (new cljs.core.PersistentVector(null,2,(5),inst_41054,inst_41055,null));
var state_41067__$1 = (function (){var statearr_41074 = state_41067;
(statearr_41074[(8)] = inst_41053__$1);

return statearr_41074;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41067__$1,(8),jobs,inst_41056);
} else {
if((state_val_41068 === (7))){
var inst_41063 = (state_41067[(2)]);
var state_41067__$1 = state_41067;
var statearr_41075_41182 = state_41067__$1;
(statearr_41075_41182[(2)] = inst_41063);

(statearr_41075_41182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41068 === (8))){
var inst_41053 = (state_41067[(8)]);
var inst_41058 = (state_41067[(2)]);
var state_41067__$1 = (function (){var statearr_41076 = state_41067;
(statearr_41076[(9)] = inst_41058);

return statearr_41076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41067__$1,(9),results,inst_41053);
} else {
if((state_val_41068 === (9))){
var inst_41060 = (state_41067[(2)]);
var state_41067__$1 = (function (){var statearr_41077 = state_41067;
(statearr_41077[(10)] = inst_41060);

return statearr_41077;
})();
var statearr_41078_41183 = state_41067__$1;
(statearr_41078_41183[(2)] = null);

(statearr_41078_41183[(1)] = (2));


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
});})(c__40814__auto___41177,jobs,results,process,async))
;
return ((function (switch__40724__auto__,c__40814__auto___41177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_41079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__);

(statearr_41079[(1)] = (1));

return statearr_41079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1 = (function (state_41067){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41080){if((e41080 instanceof Object)){
var ex__40728__auto__ = e41080;
var statearr_41081_41184 = state_41067;
(statearr_41081_41184[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41185 = state_41067;
state_41067 = G__41185;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = function(state_41067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1.call(this,state_41067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___41177,jobs,results,process,async))
})();
var state__40816__auto__ = (function (){var statearr_41082 = f__40815__auto__.call(null);
(statearr_41082[(6)] = c__40814__auto___41177);

return statearr_41082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___41177,jobs,results,process,async))
);


var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__,jobs,results,process,async){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__,jobs,results,process,async){
return (function (state_41120){
var state_val_41121 = (state_41120[(1)]);
if((state_val_41121 === (7))){
var inst_41116 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41122_41186 = state_41120__$1;
(statearr_41122_41186[(2)] = inst_41116);

(statearr_41122_41186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (20))){
var state_41120__$1 = state_41120;
var statearr_41123_41187 = state_41120__$1;
(statearr_41123_41187[(2)] = null);

(statearr_41123_41187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (1))){
var state_41120__$1 = state_41120;
var statearr_41124_41188 = state_41120__$1;
(statearr_41124_41188[(2)] = null);

(statearr_41124_41188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (4))){
var inst_41085 = (state_41120[(7)]);
var inst_41085__$1 = (state_41120[(2)]);
var inst_41086 = (inst_41085__$1 == null);
var state_41120__$1 = (function (){var statearr_41125 = state_41120;
(statearr_41125[(7)] = inst_41085__$1);

return statearr_41125;
})();
if(cljs.core.truth_(inst_41086)){
var statearr_41126_41189 = state_41120__$1;
(statearr_41126_41189[(1)] = (5));

} else {
var statearr_41127_41190 = state_41120__$1;
(statearr_41127_41190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (15))){
var inst_41098 = (state_41120[(8)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41120__$1,(18),to,inst_41098);
} else {
if((state_val_41121 === (21))){
var inst_41111 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41128_41191 = state_41120__$1;
(statearr_41128_41191[(2)] = inst_41111);

(statearr_41128_41191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (13))){
var inst_41113 = (state_41120[(2)]);
var state_41120__$1 = (function (){var statearr_41129 = state_41120;
(statearr_41129[(9)] = inst_41113);

return statearr_41129;
})();
var statearr_41130_41192 = state_41120__$1;
(statearr_41130_41192[(2)] = null);

(statearr_41130_41192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (6))){
var inst_41085 = (state_41120[(7)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(11),inst_41085);
} else {
if((state_val_41121 === (17))){
var inst_41106 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
if(cljs.core.truth_(inst_41106)){
var statearr_41131_41193 = state_41120__$1;
(statearr_41131_41193[(1)] = (19));

} else {
var statearr_41132_41194 = state_41120__$1;
(statearr_41132_41194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (3))){
var inst_41118 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41120__$1,inst_41118);
} else {
if((state_val_41121 === (12))){
var inst_41095 = (state_41120[(10)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(14),inst_41095);
} else {
if((state_val_41121 === (2))){
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(4),results);
} else {
if((state_val_41121 === (19))){
var state_41120__$1 = state_41120;
var statearr_41133_41195 = state_41120__$1;
(statearr_41133_41195[(2)] = null);

(statearr_41133_41195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (11))){
var inst_41095 = (state_41120[(2)]);
var state_41120__$1 = (function (){var statearr_41134 = state_41120;
(statearr_41134[(10)] = inst_41095);

return statearr_41134;
})();
var statearr_41135_41196 = state_41120__$1;
(statearr_41135_41196[(2)] = null);

(statearr_41135_41196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (9))){
var state_41120__$1 = state_41120;
var statearr_41136_41197 = state_41120__$1;
(statearr_41136_41197[(2)] = null);

(statearr_41136_41197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (5))){
var state_41120__$1 = state_41120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41137_41198 = state_41120__$1;
(statearr_41137_41198[(1)] = (8));

} else {
var statearr_41138_41199 = state_41120__$1;
(statearr_41138_41199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (14))){
var inst_41098 = (state_41120[(8)]);
var inst_41100 = (state_41120[(11)]);
var inst_41098__$1 = (state_41120[(2)]);
var inst_41099 = (inst_41098__$1 == null);
var inst_41100__$1 = cljs.core.not.call(null,inst_41099);
var state_41120__$1 = (function (){var statearr_41139 = state_41120;
(statearr_41139[(8)] = inst_41098__$1);

(statearr_41139[(11)] = inst_41100__$1);

return statearr_41139;
})();
if(inst_41100__$1){
var statearr_41140_41200 = state_41120__$1;
(statearr_41140_41200[(1)] = (15));

} else {
var statearr_41141_41201 = state_41120__$1;
(statearr_41141_41201[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (16))){
var inst_41100 = (state_41120[(11)]);
var state_41120__$1 = state_41120;
var statearr_41142_41202 = state_41120__$1;
(statearr_41142_41202[(2)] = inst_41100);

(statearr_41142_41202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (10))){
var inst_41092 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41143_41203 = state_41120__$1;
(statearr_41143_41203[(2)] = inst_41092);

(statearr_41143_41203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (18))){
var inst_41103 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41144_41204 = state_41120__$1;
(statearr_41144_41204[(2)] = inst_41103);

(statearr_41144_41204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (8))){
var inst_41089 = cljs.core.async.close_BANG_.call(null,to);
var state_41120__$1 = state_41120;
var statearr_41145_41205 = state_41120__$1;
(statearr_41145_41205[(2)] = inst_41089);

(statearr_41145_41205[(1)] = (10));


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
});})(c__40814__auto__,jobs,results,process,async))
;
return ((function (switch__40724__auto__,c__40814__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_41146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__);

(statearr_41146[(1)] = (1));

return statearr_41146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1 = (function (state_41120){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41147){if((e41147 instanceof Object)){
var ex__40728__auto__ = e41147;
var statearr_41148_41206 = state_41120;
(statearr_41148_41206[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41207 = state_41120;
state_41120 = G__41207;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__ = function(state_41120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1.call(this,state_41120);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__,jobs,results,process,async))
})();
var state__40816__auto__ = (function (){var statearr_41149 = f__40815__auto__.call(null);
(statearr_41149[(6)] = c__40814__auto__);

return statearr_41149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__,jobs,results,process,async))
);

return c__40814__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41209 = arguments.length;
switch (G__41209) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41212 = arguments.length;
switch (G__41212) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41215 = arguments.length;
switch (G__41215) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40814__auto___41264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___41264,tc,fc){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___41264,tc,fc){
return (function (state_41241){
var state_val_41242 = (state_41241[(1)]);
if((state_val_41242 === (7))){
var inst_41237 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41243_41265 = state_41241__$1;
(statearr_41243_41265[(2)] = inst_41237);

(statearr_41243_41265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (1))){
var state_41241__$1 = state_41241;
var statearr_41244_41266 = state_41241__$1;
(statearr_41244_41266[(2)] = null);

(statearr_41244_41266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (4))){
var inst_41218 = (state_41241[(7)]);
var inst_41218__$1 = (state_41241[(2)]);
var inst_41219 = (inst_41218__$1 == null);
var state_41241__$1 = (function (){var statearr_41245 = state_41241;
(statearr_41245[(7)] = inst_41218__$1);

return statearr_41245;
})();
if(cljs.core.truth_(inst_41219)){
var statearr_41246_41267 = state_41241__$1;
(statearr_41246_41267[(1)] = (5));

} else {
var statearr_41247_41268 = state_41241__$1;
(statearr_41247_41268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (13))){
var state_41241__$1 = state_41241;
var statearr_41248_41269 = state_41241__$1;
(statearr_41248_41269[(2)] = null);

(statearr_41248_41269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (6))){
var inst_41218 = (state_41241[(7)]);
var inst_41224 = p.call(null,inst_41218);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41224)){
var statearr_41249_41270 = state_41241__$1;
(statearr_41249_41270[(1)] = (9));

} else {
var statearr_41250_41271 = state_41241__$1;
(statearr_41250_41271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (3))){
var inst_41239 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41241__$1,inst_41239);
} else {
if((state_val_41242 === (12))){
var state_41241__$1 = state_41241;
var statearr_41251_41272 = state_41241__$1;
(statearr_41251_41272[(2)] = null);

(statearr_41251_41272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (2))){
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41241__$1,(4),ch);
} else {
if((state_val_41242 === (11))){
var inst_41218 = (state_41241[(7)]);
var inst_41228 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41241__$1,(8),inst_41228,inst_41218);
} else {
if((state_val_41242 === (9))){
var state_41241__$1 = state_41241;
var statearr_41252_41273 = state_41241__$1;
(statearr_41252_41273[(2)] = tc);

(statearr_41252_41273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (5))){
var inst_41221 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41222 = cljs.core.async.close_BANG_.call(null,fc);
var state_41241__$1 = (function (){var statearr_41253 = state_41241;
(statearr_41253[(8)] = inst_41221);

return statearr_41253;
})();
var statearr_41254_41274 = state_41241__$1;
(statearr_41254_41274[(2)] = inst_41222);

(statearr_41254_41274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (14))){
var inst_41235 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41255_41275 = state_41241__$1;
(statearr_41255_41275[(2)] = inst_41235);

(statearr_41255_41275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (10))){
var state_41241__$1 = state_41241;
var statearr_41256_41276 = state_41241__$1;
(statearr_41256_41276[(2)] = fc);

(statearr_41256_41276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (8))){
var inst_41230 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41230)){
var statearr_41257_41277 = state_41241__$1;
(statearr_41257_41277[(1)] = (12));

} else {
var statearr_41258_41278 = state_41241__$1;
(statearr_41258_41278[(1)] = (13));

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
});})(c__40814__auto___41264,tc,fc))
;
return ((function (switch__40724__auto__,c__40814__auto___41264,tc,fc){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_41259 = [null,null,null,null,null,null,null,null,null];
(statearr_41259[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_41259[(1)] = (1));

return statearr_41259;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_41241){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41260){if((e41260 instanceof Object)){
var ex__40728__auto__ = e41260;
var statearr_41261_41279 = state_41241;
(statearr_41261_41279[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41280 = state_41241;
state_41241 = G__41280;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_41241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_41241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___41264,tc,fc))
})();
var state__40816__auto__ = (function (){var statearr_41262 = f__40815__auto__.call(null);
(statearr_41262[(6)] = c__40814__auto___41264);

return statearr_41262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___41264,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__){
return (function (state_41301){
var state_val_41302 = (state_41301[(1)]);
if((state_val_41302 === (7))){
var inst_41297 = (state_41301[(2)]);
var state_41301__$1 = state_41301;
var statearr_41303_41321 = state_41301__$1;
(statearr_41303_41321[(2)] = inst_41297);

(statearr_41303_41321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (1))){
var inst_41281 = init;
var state_41301__$1 = (function (){var statearr_41304 = state_41301;
(statearr_41304[(7)] = inst_41281);

return statearr_41304;
})();
var statearr_41305_41322 = state_41301__$1;
(statearr_41305_41322[(2)] = null);

(statearr_41305_41322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (4))){
var inst_41284 = (state_41301[(8)]);
var inst_41284__$1 = (state_41301[(2)]);
var inst_41285 = (inst_41284__$1 == null);
var state_41301__$1 = (function (){var statearr_41306 = state_41301;
(statearr_41306[(8)] = inst_41284__$1);

return statearr_41306;
})();
if(cljs.core.truth_(inst_41285)){
var statearr_41307_41323 = state_41301__$1;
(statearr_41307_41323[(1)] = (5));

} else {
var statearr_41308_41324 = state_41301__$1;
(statearr_41308_41324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (6))){
var inst_41281 = (state_41301[(7)]);
var inst_41284 = (state_41301[(8)]);
var inst_41288 = (state_41301[(9)]);
var inst_41288__$1 = f.call(null,inst_41281,inst_41284);
var inst_41289 = cljs.core.reduced_QMARK_.call(null,inst_41288__$1);
var state_41301__$1 = (function (){var statearr_41309 = state_41301;
(statearr_41309[(9)] = inst_41288__$1);

return statearr_41309;
})();
if(inst_41289){
var statearr_41310_41325 = state_41301__$1;
(statearr_41310_41325[(1)] = (8));

} else {
var statearr_41311_41326 = state_41301__$1;
(statearr_41311_41326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (3))){
var inst_41299 = (state_41301[(2)]);
var state_41301__$1 = state_41301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41301__$1,inst_41299);
} else {
if((state_val_41302 === (2))){
var state_41301__$1 = state_41301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41301__$1,(4),ch);
} else {
if((state_val_41302 === (9))){
var inst_41288 = (state_41301[(9)]);
var inst_41281 = inst_41288;
var state_41301__$1 = (function (){var statearr_41312 = state_41301;
(statearr_41312[(7)] = inst_41281);

return statearr_41312;
})();
var statearr_41313_41327 = state_41301__$1;
(statearr_41313_41327[(2)] = null);

(statearr_41313_41327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (5))){
var inst_41281 = (state_41301[(7)]);
var state_41301__$1 = state_41301;
var statearr_41314_41328 = state_41301__$1;
(statearr_41314_41328[(2)] = inst_41281);

(statearr_41314_41328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (10))){
var inst_41295 = (state_41301[(2)]);
var state_41301__$1 = state_41301;
var statearr_41315_41329 = state_41301__$1;
(statearr_41315_41329[(2)] = inst_41295);

(statearr_41315_41329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41302 === (8))){
var inst_41288 = (state_41301[(9)]);
var inst_41291 = cljs.core.deref.call(null,inst_41288);
var state_41301__$1 = state_41301;
var statearr_41316_41330 = state_41301__$1;
(statearr_41316_41330[(2)] = inst_41291);

(statearr_41316_41330[(1)] = (10));


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
});})(c__40814__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40725__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40725__auto____0 = (function (){
var statearr_41317 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41317[(0)] = cljs$core$async$reduce_$_state_machine__40725__auto__);

(statearr_41317[(1)] = (1));

return statearr_41317;
});
var cljs$core$async$reduce_$_state_machine__40725__auto____1 = (function (state_41301){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41318){if((e41318 instanceof Object)){
var ex__40728__auto__ = e41318;
var statearr_41319_41331 = state_41301;
(statearr_41319_41331[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41332 = state_41301;
state_41301 = G__41332;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40725__auto__ = function(state_41301){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40725__auto____1.call(this,state_41301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40725__auto____0;
cljs$core$async$reduce_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40725__auto____1;
return cljs$core$async$reduce_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__))
})();
var state__40816__auto__ = (function (){var statearr_41320 = f__40815__auto__.call(null);
(statearr_41320[(6)] = c__40814__auto__);

return statearr_41320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__))
);

return c__40814__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__,f__$1){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__,f__$1){
return (function (state_41338){
var state_val_41339 = (state_41338[(1)]);
if((state_val_41339 === (1))){
var inst_41333 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41338__$1 = state_41338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41338__$1,(2),inst_41333);
} else {
if((state_val_41339 === (2))){
var inst_41335 = (state_41338[(2)]);
var inst_41336 = f__$1.call(null,inst_41335);
var state_41338__$1 = state_41338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41338__$1,inst_41336);
} else {
return null;
}
}
});})(c__40814__auto__,f__$1))
;
return ((function (switch__40724__auto__,c__40814__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40725__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40725__auto____0 = (function (){
var statearr_41340 = [null,null,null,null,null,null,null];
(statearr_41340[(0)] = cljs$core$async$transduce_$_state_machine__40725__auto__);

(statearr_41340[(1)] = (1));

return statearr_41340;
});
var cljs$core$async$transduce_$_state_machine__40725__auto____1 = (function (state_41338){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41341){if((e41341 instanceof Object)){
var ex__40728__auto__ = e41341;
var statearr_41342_41344 = state_41338;
(statearr_41342_41344[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41345 = state_41338;
state_41338 = G__41345;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40725__auto__ = function(state_41338){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40725__auto____1.call(this,state_41338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40725__auto____0;
cljs$core$async$transduce_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40725__auto____1;
return cljs$core$async$transduce_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__,f__$1))
})();
var state__40816__auto__ = (function (){var statearr_41343 = f__40815__auto__.call(null);
(statearr_41343[(6)] = c__40814__auto__);

return statearr_41343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__,f__$1))
);

return c__40814__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41347 = arguments.length;
switch (G__41347) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__){
return (function (state_41372){
var state_val_41373 = (state_41372[(1)]);
if((state_val_41373 === (7))){
var inst_41354 = (state_41372[(2)]);
var state_41372__$1 = state_41372;
var statearr_41374_41395 = state_41372__$1;
(statearr_41374_41395[(2)] = inst_41354);

(statearr_41374_41395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (1))){
var inst_41348 = cljs.core.seq.call(null,coll);
var inst_41349 = inst_41348;
var state_41372__$1 = (function (){var statearr_41375 = state_41372;
(statearr_41375[(7)] = inst_41349);

return statearr_41375;
})();
var statearr_41376_41396 = state_41372__$1;
(statearr_41376_41396[(2)] = null);

(statearr_41376_41396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (4))){
var inst_41349 = (state_41372[(7)]);
var inst_41352 = cljs.core.first.call(null,inst_41349);
var state_41372__$1 = state_41372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41372__$1,(7),ch,inst_41352);
} else {
if((state_val_41373 === (13))){
var inst_41366 = (state_41372[(2)]);
var state_41372__$1 = state_41372;
var statearr_41377_41397 = state_41372__$1;
(statearr_41377_41397[(2)] = inst_41366);

(statearr_41377_41397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (6))){
var inst_41357 = (state_41372[(2)]);
var state_41372__$1 = state_41372;
if(cljs.core.truth_(inst_41357)){
var statearr_41378_41398 = state_41372__$1;
(statearr_41378_41398[(1)] = (8));

} else {
var statearr_41379_41399 = state_41372__$1;
(statearr_41379_41399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (3))){
var inst_41370 = (state_41372[(2)]);
var state_41372__$1 = state_41372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41372__$1,inst_41370);
} else {
if((state_val_41373 === (12))){
var state_41372__$1 = state_41372;
var statearr_41380_41400 = state_41372__$1;
(statearr_41380_41400[(2)] = null);

(statearr_41380_41400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (2))){
var inst_41349 = (state_41372[(7)]);
var state_41372__$1 = state_41372;
if(cljs.core.truth_(inst_41349)){
var statearr_41381_41401 = state_41372__$1;
(statearr_41381_41401[(1)] = (4));

} else {
var statearr_41382_41402 = state_41372__$1;
(statearr_41382_41402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (11))){
var inst_41363 = cljs.core.async.close_BANG_.call(null,ch);
var state_41372__$1 = state_41372;
var statearr_41383_41403 = state_41372__$1;
(statearr_41383_41403[(2)] = inst_41363);

(statearr_41383_41403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (9))){
var state_41372__$1 = state_41372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41384_41404 = state_41372__$1;
(statearr_41384_41404[(1)] = (11));

} else {
var statearr_41385_41405 = state_41372__$1;
(statearr_41385_41405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (5))){
var inst_41349 = (state_41372[(7)]);
var state_41372__$1 = state_41372;
var statearr_41386_41406 = state_41372__$1;
(statearr_41386_41406[(2)] = inst_41349);

(statearr_41386_41406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (10))){
var inst_41368 = (state_41372[(2)]);
var state_41372__$1 = state_41372;
var statearr_41387_41407 = state_41372__$1;
(statearr_41387_41407[(2)] = inst_41368);

(statearr_41387_41407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41373 === (8))){
var inst_41349 = (state_41372[(7)]);
var inst_41359 = cljs.core.next.call(null,inst_41349);
var inst_41349__$1 = inst_41359;
var state_41372__$1 = (function (){var statearr_41388 = state_41372;
(statearr_41388[(7)] = inst_41349__$1);

return statearr_41388;
})();
var statearr_41389_41408 = state_41372__$1;
(statearr_41389_41408[(2)] = null);

(statearr_41389_41408[(1)] = (2));


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
});})(c__40814__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_41390 = [null,null,null,null,null,null,null,null];
(statearr_41390[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_41390[(1)] = (1));

return statearr_41390;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_41372){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41391){if((e41391 instanceof Object)){
var ex__40728__auto__ = e41391;
var statearr_41392_41409 = state_41372;
(statearr_41392_41409[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41410 = state_41372;
state_41372 = G__41410;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_41372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_41372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__))
})();
var state__40816__auto__ = (function (){var statearr_41393 = f__40815__auto__.call(null);
(statearr_41393[(6)] = c__40814__auto__);

return statearr_41393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__))
);

return c__40814__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__33080__auto__ = (((_ == null))?null:_);
var m__33081__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,_);
} else {
var m__33081__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__33081__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,ch);
} else {
var m__33081__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m);
} else {
var m__33081__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41411 = (function (ch,cs,meta41412){
this.ch = ch;
this.cs = cs;
this.meta41412 = meta41412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41413,meta41412__$1){
var self__ = this;
var _41413__$1 = this;
return (new cljs.core.async.t_cljs$core$async41411(self__.ch,self__.cs,meta41412__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41413){
var self__ = this;
var _41413__$1 = this;
return self__.meta41412;
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41412","meta41412",-568154297,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41411";

cljs.core.async.t_cljs$core$async41411.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async41411");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41411 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41411(ch__$1,cs__$1,meta41412){
return (new cljs.core.async.t_cljs$core$async41411(ch__$1,cs__$1,meta41412));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41411(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40814__auto___41633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___41633,cs,m,dchan,dctr,done){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___41633,cs,m,dchan,dctr,done){
return (function (state_41548){
var state_val_41549 = (state_41548[(1)]);
if((state_val_41549 === (7))){
var inst_41544 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41550_41634 = state_41548__$1;
(statearr_41550_41634[(2)] = inst_41544);

(statearr_41550_41634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (20))){
var inst_41447 = (state_41548[(7)]);
var inst_41459 = cljs.core.first.call(null,inst_41447);
var inst_41460 = cljs.core.nth.call(null,inst_41459,(0),null);
var inst_41461 = cljs.core.nth.call(null,inst_41459,(1),null);
var state_41548__$1 = (function (){var statearr_41551 = state_41548;
(statearr_41551[(8)] = inst_41460);

return statearr_41551;
})();
if(cljs.core.truth_(inst_41461)){
var statearr_41552_41635 = state_41548__$1;
(statearr_41552_41635[(1)] = (22));

} else {
var statearr_41553_41636 = state_41548__$1;
(statearr_41553_41636[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (27))){
var inst_41496 = (state_41548[(9)]);
var inst_41491 = (state_41548[(10)]);
var inst_41416 = (state_41548[(11)]);
var inst_41489 = (state_41548[(12)]);
var inst_41496__$1 = cljs.core._nth.call(null,inst_41489,inst_41491);
var inst_41497 = cljs.core.async.put_BANG_.call(null,inst_41496__$1,inst_41416,done);
var state_41548__$1 = (function (){var statearr_41554 = state_41548;
(statearr_41554[(9)] = inst_41496__$1);

return statearr_41554;
})();
if(cljs.core.truth_(inst_41497)){
var statearr_41555_41637 = state_41548__$1;
(statearr_41555_41637[(1)] = (30));

} else {
var statearr_41556_41638 = state_41548__$1;
(statearr_41556_41638[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (1))){
var state_41548__$1 = state_41548;
var statearr_41557_41639 = state_41548__$1;
(statearr_41557_41639[(2)] = null);

(statearr_41557_41639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (24))){
var inst_41447 = (state_41548[(7)]);
var inst_41466 = (state_41548[(2)]);
var inst_41467 = cljs.core.next.call(null,inst_41447);
var inst_41425 = inst_41467;
var inst_41426 = null;
var inst_41427 = (0);
var inst_41428 = (0);
var state_41548__$1 = (function (){var statearr_41558 = state_41548;
(statearr_41558[(13)] = inst_41428);

(statearr_41558[(14)] = inst_41466);

(statearr_41558[(15)] = inst_41427);

(statearr_41558[(16)] = inst_41425);

(statearr_41558[(17)] = inst_41426);

return statearr_41558;
})();
var statearr_41559_41640 = state_41548__$1;
(statearr_41559_41640[(2)] = null);

(statearr_41559_41640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (39))){
var state_41548__$1 = state_41548;
var statearr_41563_41641 = state_41548__$1;
(statearr_41563_41641[(2)] = null);

(statearr_41563_41641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (4))){
var inst_41416 = (state_41548[(11)]);
var inst_41416__$1 = (state_41548[(2)]);
var inst_41417 = (inst_41416__$1 == null);
var state_41548__$1 = (function (){var statearr_41564 = state_41548;
(statearr_41564[(11)] = inst_41416__$1);

return statearr_41564;
})();
if(cljs.core.truth_(inst_41417)){
var statearr_41565_41642 = state_41548__$1;
(statearr_41565_41642[(1)] = (5));

} else {
var statearr_41566_41643 = state_41548__$1;
(statearr_41566_41643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (15))){
var inst_41428 = (state_41548[(13)]);
var inst_41427 = (state_41548[(15)]);
var inst_41425 = (state_41548[(16)]);
var inst_41426 = (state_41548[(17)]);
var inst_41443 = (state_41548[(2)]);
var inst_41444 = (inst_41428 + (1));
var tmp41560 = inst_41427;
var tmp41561 = inst_41425;
var tmp41562 = inst_41426;
var inst_41425__$1 = tmp41561;
var inst_41426__$1 = tmp41562;
var inst_41427__$1 = tmp41560;
var inst_41428__$1 = inst_41444;
var state_41548__$1 = (function (){var statearr_41567 = state_41548;
(statearr_41567[(13)] = inst_41428__$1);

(statearr_41567[(15)] = inst_41427__$1);

(statearr_41567[(16)] = inst_41425__$1);

(statearr_41567[(18)] = inst_41443);

(statearr_41567[(17)] = inst_41426__$1);

return statearr_41567;
})();
var statearr_41568_41644 = state_41548__$1;
(statearr_41568_41644[(2)] = null);

(statearr_41568_41644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (21))){
var inst_41470 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41572_41645 = state_41548__$1;
(statearr_41572_41645[(2)] = inst_41470);

(statearr_41572_41645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (31))){
var inst_41496 = (state_41548[(9)]);
var inst_41500 = done.call(null,null);
var inst_41501 = cljs.core.async.untap_STAR_.call(null,m,inst_41496);
var state_41548__$1 = (function (){var statearr_41573 = state_41548;
(statearr_41573[(19)] = inst_41500);

return statearr_41573;
})();
var statearr_41574_41646 = state_41548__$1;
(statearr_41574_41646[(2)] = inst_41501);

(statearr_41574_41646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (32))){
var inst_41488 = (state_41548[(20)]);
var inst_41491 = (state_41548[(10)]);
var inst_41489 = (state_41548[(12)]);
var inst_41490 = (state_41548[(21)]);
var inst_41503 = (state_41548[(2)]);
var inst_41504 = (inst_41491 + (1));
var tmp41569 = inst_41488;
var tmp41570 = inst_41489;
var tmp41571 = inst_41490;
var inst_41488__$1 = tmp41569;
var inst_41489__$1 = tmp41570;
var inst_41490__$1 = tmp41571;
var inst_41491__$1 = inst_41504;
var state_41548__$1 = (function (){var statearr_41575 = state_41548;
(statearr_41575[(20)] = inst_41488__$1);

(statearr_41575[(22)] = inst_41503);

(statearr_41575[(10)] = inst_41491__$1);

(statearr_41575[(12)] = inst_41489__$1);

(statearr_41575[(21)] = inst_41490__$1);

return statearr_41575;
})();
var statearr_41576_41647 = state_41548__$1;
(statearr_41576_41647[(2)] = null);

(statearr_41576_41647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (40))){
var inst_41516 = (state_41548[(23)]);
var inst_41520 = done.call(null,null);
var inst_41521 = cljs.core.async.untap_STAR_.call(null,m,inst_41516);
var state_41548__$1 = (function (){var statearr_41577 = state_41548;
(statearr_41577[(24)] = inst_41520);

return statearr_41577;
})();
var statearr_41578_41648 = state_41548__$1;
(statearr_41578_41648[(2)] = inst_41521);

(statearr_41578_41648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (33))){
var inst_41507 = (state_41548[(25)]);
var inst_41509 = cljs.core.chunked_seq_QMARK_.call(null,inst_41507);
var state_41548__$1 = state_41548;
if(inst_41509){
var statearr_41579_41649 = state_41548__$1;
(statearr_41579_41649[(1)] = (36));

} else {
var statearr_41580_41650 = state_41548__$1;
(statearr_41580_41650[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (13))){
var inst_41437 = (state_41548[(26)]);
var inst_41440 = cljs.core.async.close_BANG_.call(null,inst_41437);
var state_41548__$1 = state_41548;
var statearr_41581_41651 = state_41548__$1;
(statearr_41581_41651[(2)] = inst_41440);

(statearr_41581_41651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (22))){
var inst_41460 = (state_41548[(8)]);
var inst_41463 = cljs.core.async.close_BANG_.call(null,inst_41460);
var state_41548__$1 = state_41548;
var statearr_41582_41652 = state_41548__$1;
(statearr_41582_41652[(2)] = inst_41463);

(statearr_41582_41652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (36))){
var inst_41507 = (state_41548[(25)]);
var inst_41511 = cljs.core.chunk_first.call(null,inst_41507);
var inst_41512 = cljs.core.chunk_rest.call(null,inst_41507);
var inst_41513 = cljs.core.count.call(null,inst_41511);
var inst_41488 = inst_41512;
var inst_41489 = inst_41511;
var inst_41490 = inst_41513;
var inst_41491 = (0);
var state_41548__$1 = (function (){var statearr_41583 = state_41548;
(statearr_41583[(20)] = inst_41488);

(statearr_41583[(10)] = inst_41491);

(statearr_41583[(12)] = inst_41489);

(statearr_41583[(21)] = inst_41490);

return statearr_41583;
})();
var statearr_41584_41653 = state_41548__$1;
(statearr_41584_41653[(2)] = null);

(statearr_41584_41653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (41))){
var inst_41507 = (state_41548[(25)]);
var inst_41523 = (state_41548[(2)]);
var inst_41524 = cljs.core.next.call(null,inst_41507);
var inst_41488 = inst_41524;
var inst_41489 = null;
var inst_41490 = (0);
var inst_41491 = (0);
var state_41548__$1 = (function (){var statearr_41585 = state_41548;
(statearr_41585[(27)] = inst_41523);

(statearr_41585[(20)] = inst_41488);

(statearr_41585[(10)] = inst_41491);

(statearr_41585[(12)] = inst_41489);

(statearr_41585[(21)] = inst_41490);

return statearr_41585;
})();
var statearr_41586_41654 = state_41548__$1;
(statearr_41586_41654[(2)] = null);

(statearr_41586_41654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (43))){
var state_41548__$1 = state_41548;
var statearr_41587_41655 = state_41548__$1;
(statearr_41587_41655[(2)] = null);

(statearr_41587_41655[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (29))){
var inst_41532 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41588_41656 = state_41548__$1;
(statearr_41588_41656[(2)] = inst_41532);

(statearr_41588_41656[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (44))){
var inst_41541 = (state_41548[(2)]);
var state_41548__$1 = (function (){var statearr_41589 = state_41548;
(statearr_41589[(28)] = inst_41541);

return statearr_41589;
})();
var statearr_41590_41657 = state_41548__$1;
(statearr_41590_41657[(2)] = null);

(statearr_41590_41657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (6))){
var inst_41480 = (state_41548[(29)]);
var inst_41479 = cljs.core.deref.call(null,cs);
var inst_41480__$1 = cljs.core.keys.call(null,inst_41479);
var inst_41481 = cljs.core.count.call(null,inst_41480__$1);
var inst_41482 = cljs.core.reset_BANG_.call(null,dctr,inst_41481);
var inst_41487 = cljs.core.seq.call(null,inst_41480__$1);
var inst_41488 = inst_41487;
var inst_41489 = null;
var inst_41490 = (0);
var inst_41491 = (0);
var state_41548__$1 = (function (){var statearr_41591 = state_41548;
(statearr_41591[(29)] = inst_41480__$1);

(statearr_41591[(20)] = inst_41488);

(statearr_41591[(10)] = inst_41491);

(statearr_41591[(12)] = inst_41489);

(statearr_41591[(21)] = inst_41490);

(statearr_41591[(30)] = inst_41482);

return statearr_41591;
})();
var statearr_41592_41658 = state_41548__$1;
(statearr_41592_41658[(2)] = null);

(statearr_41592_41658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (28))){
var inst_41507 = (state_41548[(25)]);
var inst_41488 = (state_41548[(20)]);
var inst_41507__$1 = cljs.core.seq.call(null,inst_41488);
var state_41548__$1 = (function (){var statearr_41593 = state_41548;
(statearr_41593[(25)] = inst_41507__$1);

return statearr_41593;
})();
if(inst_41507__$1){
var statearr_41594_41659 = state_41548__$1;
(statearr_41594_41659[(1)] = (33));

} else {
var statearr_41595_41660 = state_41548__$1;
(statearr_41595_41660[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (25))){
var inst_41491 = (state_41548[(10)]);
var inst_41490 = (state_41548[(21)]);
var inst_41493 = (inst_41491 < inst_41490);
var inst_41494 = inst_41493;
var state_41548__$1 = state_41548;
if(cljs.core.truth_(inst_41494)){
var statearr_41596_41661 = state_41548__$1;
(statearr_41596_41661[(1)] = (27));

} else {
var statearr_41597_41662 = state_41548__$1;
(statearr_41597_41662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (34))){
var state_41548__$1 = state_41548;
var statearr_41598_41663 = state_41548__$1;
(statearr_41598_41663[(2)] = null);

(statearr_41598_41663[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (17))){
var state_41548__$1 = state_41548;
var statearr_41599_41664 = state_41548__$1;
(statearr_41599_41664[(2)] = null);

(statearr_41599_41664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (3))){
var inst_41546 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41548__$1,inst_41546);
} else {
if((state_val_41549 === (12))){
var inst_41475 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41600_41665 = state_41548__$1;
(statearr_41600_41665[(2)] = inst_41475);

(statearr_41600_41665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (2))){
var state_41548__$1 = state_41548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41548__$1,(4),ch);
} else {
if((state_val_41549 === (23))){
var state_41548__$1 = state_41548;
var statearr_41601_41666 = state_41548__$1;
(statearr_41601_41666[(2)] = null);

(statearr_41601_41666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (35))){
var inst_41530 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41602_41667 = state_41548__$1;
(statearr_41602_41667[(2)] = inst_41530);

(statearr_41602_41667[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (19))){
var inst_41447 = (state_41548[(7)]);
var inst_41451 = cljs.core.chunk_first.call(null,inst_41447);
var inst_41452 = cljs.core.chunk_rest.call(null,inst_41447);
var inst_41453 = cljs.core.count.call(null,inst_41451);
var inst_41425 = inst_41452;
var inst_41426 = inst_41451;
var inst_41427 = inst_41453;
var inst_41428 = (0);
var state_41548__$1 = (function (){var statearr_41603 = state_41548;
(statearr_41603[(13)] = inst_41428);

(statearr_41603[(15)] = inst_41427);

(statearr_41603[(16)] = inst_41425);

(statearr_41603[(17)] = inst_41426);

return statearr_41603;
})();
var statearr_41604_41668 = state_41548__$1;
(statearr_41604_41668[(2)] = null);

(statearr_41604_41668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (11))){
var inst_41447 = (state_41548[(7)]);
var inst_41425 = (state_41548[(16)]);
var inst_41447__$1 = cljs.core.seq.call(null,inst_41425);
var state_41548__$1 = (function (){var statearr_41605 = state_41548;
(statearr_41605[(7)] = inst_41447__$1);

return statearr_41605;
})();
if(inst_41447__$1){
var statearr_41606_41669 = state_41548__$1;
(statearr_41606_41669[(1)] = (16));

} else {
var statearr_41607_41670 = state_41548__$1;
(statearr_41607_41670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (9))){
var inst_41477 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41608_41671 = state_41548__$1;
(statearr_41608_41671[(2)] = inst_41477);

(statearr_41608_41671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (5))){
var inst_41423 = cljs.core.deref.call(null,cs);
var inst_41424 = cljs.core.seq.call(null,inst_41423);
var inst_41425 = inst_41424;
var inst_41426 = null;
var inst_41427 = (0);
var inst_41428 = (0);
var state_41548__$1 = (function (){var statearr_41609 = state_41548;
(statearr_41609[(13)] = inst_41428);

(statearr_41609[(15)] = inst_41427);

(statearr_41609[(16)] = inst_41425);

(statearr_41609[(17)] = inst_41426);

return statearr_41609;
})();
var statearr_41610_41672 = state_41548__$1;
(statearr_41610_41672[(2)] = null);

(statearr_41610_41672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (14))){
var state_41548__$1 = state_41548;
var statearr_41611_41673 = state_41548__$1;
(statearr_41611_41673[(2)] = null);

(statearr_41611_41673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (45))){
var inst_41538 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41612_41674 = state_41548__$1;
(statearr_41612_41674[(2)] = inst_41538);

(statearr_41612_41674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (26))){
var inst_41480 = (state_41548[(29)]);
var inst_41534 = (state_41548[(2)]);
var inst_41535 = cljs.core.seq.call(null,inst_41480);
var state_41548__$1 = (function (){var statearr_41613 = state_41548;
(statearr_41613[(31)] = inst_41534);

return statearr_41613;
})();
if(inst_41535){
var statearr_41614_41675 = state_41548__$1;
(statearr_41614_41675[(1)] = (42));

} else {
var statearr_41615_41676 = state_41548__$1;
(statearr_41615_41676[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (16))){
var inst_41447 = (state_41548[(7)]);
var inst_41449 = cljs.core.chunked_seq_QMARK_.call(null,inst_41447);
var state_41548__$1 = state_41548;
if(inst_41449){
var statearr_41616_41677 = state_41548__$1;
(statearr_41616_41677[(1)] = (19));

} else {
var statearr_41617_41678 = state_41548__$1;
(statearr_41617_41678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (38))){
var inst_41527 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41618_41679 = state_41548__$1;
(statearr_41618_41679[(2)] = inst_41527);

(statearr_41618_41679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (30))){
var state_41548__$1 = state_41548;
var statearr_41619_41680 = state_41548__$1;
(statearr_41619_41680[(2)] = null);

(statearr_41619_41680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (10))){
var inst_41428 = (state_41548[(13)]);
var inst_41426 = (state_41548[(17)]);
var inst_41436 = cljs.core._nth.call(null,inst_41426,inst_41428);
var inst_41437 = cljs.core.nth.call(null,inst_41436,(0),null);
var inst_41438 = cljs.core.nth.call(null,inst_41436,(1),null);
var state_41548__$1 = (function (){var statearr_41620 = state_41548;
(statearr_41620[(26)] = inst_41437);

return statearr_41620;
})();
if(cljs.core.truth_(inst_41438)){
var statearr_41621_41681 = state_41548__$1;
(statearr_41621_41681[(1)] = (13));

} else {
var statearr_41622_41682 = state_41548__$1;
(statearr_41622_41682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (18))){
var inst_41473 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41623_41683 = state_41548__$1;
(statearr_41623_41683[(2)] = inst_41473);

(statearr_41623_41683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (42))){
var state_41548__$1 = state_41548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41548__$1,(45),dchan);
} else {
if((state_val_41549 === (37))){
var inst_41507 = (state_41548[(25)]);
var inst_41416 = (state_41548[(11)]);
var inst_41516 = (state_41548[(23)]);
var inst_41516__$1 = cljs.core.first.call(null,inst_41507);
var inst_41517 = cljs.core.async.put_BANG_.call(null,inst_41516__$1,inst_41416,done);
var state_41548__$1 = (function (){var statearr_41624 = state_41548;
(statearr_41624[(23)] = inst_41516__$1);

return statearr_41624;
})();
if(cljs.core.truth_(inst_41517)){
var statearr_41625_41684 = state_41548__$1;
(statearr_41625_41684[(1)] = (39));

} else {
var statearr_41626_41685 = state_41548__$1;
(statearr_41626_41685[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (8))){
var inst_41428 = (state_41548[(13)]);
var inst_41427 = (state_41548[(15)]);
var inst_41430 = (inst_41428 < inst_41427);
var inst_41431 = inst_41430;
var state_41548__$1 = state_41548;
if(cljs.core.truth_(inst_41431)){
var statearr_41627_41686 = state_41548__$1;
(statearr_41627_41686[(1)] = (10));

} else {
var statearr_41628_41687 = state_41548__$1;
(statearr_41628_41687[(1)] = (11));

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
});})(c__40814__auto___41633,cs,m,dchan,dctr,done))
;
return ((function (switch__40724__auto__,c__40814__auto___41633,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40725__auto__ = null;
var cljs$core$async$mult_$_state_machine__40725__auto____0 = (function (){
var statearr_41629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41629[(0)] = cljs$core$async$mult_$_state_machine__40725__auto__);

(statearr_41629[(1)] = (1));

return statearr_41629;
});
var cljs$core$async$mult_$_state_machine__40725__auto____1 = (function (state_41548){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41630){if((e41630 instanceof Object)){
var ex__40728__auto__ = e41630;
var statearr_41631_41688 = state_41548;
(statearr_41631_41688[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41689 = state_41548;
state_41548 = G__41689;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40725__auto__ = function(state_41548){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40725__auto____1.call(this,state_41548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40725__auto____0;
cljs$core$async$mult_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40725__auto____1;
return cljs$core$async$mult_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___41633,cs,m,dchan,dctr,done))
})();
var state__40816__auto__ = (function (){var statearr_41632 = f__40815__auto__.call(null);
(statearr_41632[(6)] = c__40814__auto___41633);

return statearr_41632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___41633,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41691 = arguments.length;
switch (G__41691) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,ch);
} else {
var m__33081__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,ch);
} else {
var m__33081__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m);
} else {
var m__33081__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,state_map);
} else {
var m__33081__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__33080__auto__ = (((m == null))?null:m);
var m__33081__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,m,mode);
} else {
var m__33081__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__33631__auto__ = [];
var len__33624__auto___41703 = arguments.length;
var i__33625__auto___41704 = (0);
while(true){
if((i__33625__auto___41704 < len__33624__auto___41703)){
args__33631__auto__.push((arguments[i__33625__auto___41704]));

var G__41705 = (i__33625__auto___41704 + (1));
i__33625__auto___41704 = G__41705;
continue;
} else {
}
break;
}

var argseq__33632__auto__ = ((((3) < args__33631__auto__.length))?(new cljs.core.IndexedSeq(args__33631__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33632__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41697){
var map__41698 = p__41697;
var map__41698__$1 = ((((!((map__41698 == null)))?((((map__41698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41698):map__41698);
var opts = map__41698__$1;
var statearr_41700_41706 = state;
(statearr_41700_41706[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__41698,map__41698__$1,opts){
return (function (val){
var statearr_41701_41707 = state;
(statearr_41701_41707[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41698,map__41698__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_41702_41708 = state;
(statearr_41702_41708[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41693){
var G__41694 = cljs.core.first.call(null,seq41693);
var seq41693__$1 = cljs.core.next.call(null,seq41693);
var G__41695 = cljs.core.first.call(null,seq41693__$1);
var seq41693__$2 = cljs.core.next.call(null,seq41693__$1);
var G__41696 = cljs.core.first.call(null,seq41693__$2);
var seq41693__$3 = cljs.core.next.call(null,seq41693__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41694,G__41695,G__41696,seq41693__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41709 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41710){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41710 = meta41710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41711,meta41710__$1){
var self__ = this;
var _41711__$1 = this;
return (new cljs.core.async.t_cljs$core$async41709(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41710__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41711){
var self__ = this;
var _41711__$1 = this;
return self__.meta41710;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41710","meta41710",-1101037659,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41709";

cljs.core.async.t_cljs$core$async41709.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async41709");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41709 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41709(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41710){
return (new cljs.core.async.t_cljs$core$async41709(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41710));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41709(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40814__auto___41873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41813){
var state_val_41814 = (state_41813[(1)]);
if((state_val_41814 === (7))){
var inst_41728 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41815_41874 = state_41813__$1;
(statearr_41815_41874[(2)] = inst_41728);

(statearr_41815_41874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (20))){
var inst_41740 = (state_41813[(7)]);
var state_41813__$1 = state_41813;
var statearr_41816_41875 = state_41813__$1;
(statearr_41816_41875[(2)] = inst_41740);

(statearr_41816_41875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (27))){
var state_41813__$1 = state_41813;
var statearr_41817_41876 = state_41813__$1;
(statearr_41817_41876[(2)] = null);

(statearr_41817_41876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (1))){
var inst_41715 = (state_41813[(8)]);
var inst_41715__$1 = calc_state.call(null);
var inst_41717 = (inst_41715__$1 == null);
var inst_41718 = cljs.core.not.call(null,inst_41717);
var state_41813__$1 = (function (){var statearr_41818 = state_41813;
(statearr_41818[(8)] = inst_41715__$1);

return statearr_41818;
})();
if(inst_41718){
var statearr_41819_41877 = state_41813__$1;
(statearr_41819_41877[(1)] = (2));

} else {
var statearr_41820_41878 = state_41813__$1;
(statearr_41820_41878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (24))){
var inst_41787 = (state_41813[(9)]);
var inst_41773 = (state_41813[(10)]);
var inst_41764 = (state_41813[(11)]);
var inst_41787__$1 = inst_41764.call(null,inst_41773);
var state_41813__$1 = (function (){var statearr_41821 = state_41813;
(statearr_41821[(9)] = inst_41787__$1);

return statearr_41821;
})();
if(cljs.core.truth_(inst_41787__$1)){
var statearr_41822_41879 = state_41813__$1;
(statearr_41822_41879[(1)] = (29));

} else {
var statearr_41823_41880 = state_41813__$1;
(statearr_41823_41880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (4))){
var inst_41731 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41731)){
var statearr_41824_41881 = state_41813__$1;
(statearr_41824_41881[(1)] = (8));

} else {
var statearr_41825_41882 = state_41813__$1;
(statearr_41825_41882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (15))){
var inst_41758 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41758)){
var statearr_41826_41883 = state_41813__$1;
(statearr_41826_41883[(1)] = (19));

} else {
var statearr_41827_41884 = state_41813__$1;
(statearr_41827_41884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (21))){
var inst_41763 = (state_41813[(12)]);
var inst_41763__$1 = (state_41813[(2)]);
var inst_41764 = cljs.core.get.call(null,inst_41763__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41765 = cljs.core.get.call(null,inst_41763__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41766 = cljs.core.get.call(null,inst_41763__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41813__$1 = (function (){var statearr_41828 = state_41813;
(statearr_41828[(13)] = inst_41765);

(statearr_41828[(11)] = inst_41764);

(statearr_41828[(12)] = inst_41763__$1);

return statearr_41828;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41813__$1,(22),inst_41766);
} else {
if((state_val_41814 === (31))){
var inst_41795 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41795)){
var statearr_41829_41885 = state_41813__$1;
(statearr_41829_41885[(1)] = (32));

} else {
var statearr_41830_41886 = state_41813__$1;
(statearr_41830_41886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (32))){
var inst_41772 = (state_41813[(14)]);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41813__$1,(35),out,inst_41772);
} else {
if((state_val_41814 === (33))){
var inst_41763 = (state_41813[(12)]);
var inst_41740 = inst_41763;
var state_41813__$1 = (function (){var statearr_41831 = state_41813;
(statearr_41831[(7)] = inst_41740);

return statearr_41831;
})();
var statearr_41832_41887 = state_41813__$1;
(statearr_41832_41887[(2)] = null);

(statearr_41832_41887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (13))){
var inst_41740 = (state_41813[(7)]);
var inst_41747 = inst_41740.cljs$lang$protocol_mask$partition0$;
var inst_41748 = (inst_41747 & (64));
var inst_41749 = inst_41740.cljs$core$ISeq$;
var inst_41750 = (cljs.core.PROTOCOL_SENTINEL === inst_41749);
var inst_41751 = (inst_41748) || (inst_41750);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41751)){
var statearr_41833_41888 = state_41813__$1;
(statearr_41833_41888[(1)] = (16));

} else {
var statearr_41834_41889 = state_41813__$1;
(statearr_41834_41889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (22))){
var inst_41773 = (state_41813[(10)]);
var inst_41772 = (state_41813[(14)]);
var inst_41771 = (state_41813[(2)]);
var inst_41772__$1 = cljs.core.nth.call(null,inst_41771,(0),null);
var inst_41773__$1 = cljs.core.nth.call(null,inst_41771,(1),null);
var inst_41774 = (inst_41772__$1 == null);
var inst_41775 = cljs.core._EQ_.call(null,inst_41773__$1,change);
var inst_41776 = (inst_41774) || (inst_41775);
var state_41813__$1 = (function (){var statearr_41835 = state_41813;
(statearr_41835[(10)] = inst_41773__$1);

(statearr_41835[(14)] = inst_41772__$1);

return statearr_41835;
})();
if(cljs.core.truth_(inst_41776)){
var statearr_41836_41890 = state_41813__$1;
(statearr_41836_41890[(1)] = (23));

} else {
var statearr_41837_41891 = state_41813__$1;
(statearr_41837_41891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (36))){
var inst_41763 = (state_41813[(12)]);
var inst_41740 = inst_41763;
var state_41813__$1 = (function (){var statearr_41838 = state_41813;
(statearr_41838[(7)] = inst_41740);

return statearr_41838;
})();
var statearr_41839_41892 = state_41813__$1;
(statearr_41839_41892[(2)] = null);

(statearr_41839_41892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (29))){
var inst_41787 = (state_41813[(9)]);
var state_41813__$1 = state_41813;
var statearr_41840_41893 = state_41813__$1;
(statearr_41840_41893[(2)] = inst_41787);

(statearr_41840_41893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (6))){
var state_41813__$1 = state_41813;
var statearr_41841_41894 = state_41813__$1;
(statearr_41841_41894[(2)] = false);

(statearr_41841_41894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (28))){
var inst_41783 = (state_41813[(2)]);
var inst_41784 = calc_state.call(null);
var inst_41740 = inst_41784;
var state_41813__$1 = (function (){var statearr_41842 = state_41813;
(statearr_41842[(7)] = inst_41740);

(statearr_41842[(15)] = inst_41783);

return statearr_41842;
})();
var statearr_41843_41895 = state_41813__$1;
(statearr_41843_41895[(2)] = null);

(statearr_41843_41895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (25))){
var inst_41809 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41844_41896 = state_41813__$1;
(statearr_41844_41896[(2)] = inst_41809);

(statearr_41844_41896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (34))){
var inst_41807 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41845_41897 = state_41813__$1;
(statearr_41845_41897[(2)] = inst_41807);

(statearr_41845_41897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (17))){
var state_41813__$1 = state_41813;
var statearr_41846_41898 = state_41813__$1;
(statearr_41846_41898[(2)] = false);

(statearr_41846_41898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (3))){
var state_41813__$1 = state_41813;
var statearr_41847_41899 = state_41813__$1;
(statearr_41847_41899[(2)] = false);

(statearr_41847_41899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (12))){
var inst_41811 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41813__$1,inst_41811);
} else {
if((state_val_41814 === (2))){
var inst_41715 = (state_41813[(8)]);
var inst_41720 = inst_41715.cljs$lang$protocol_mask$partition0$;
var inst_41721 = (inst_41720 & (64));
var inst_41722 = inst_41715.cljs$core$ISeq$;
var inst_41723 = (cljs.core.PROTOCOL_SENTINEL === inst_41722);
var inst_41724 = (inst_41721) || (inst_41723);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41724)){
var statearr_41848_41900 = state_41813__$1;
(statearr_41848_41900[(1)] = (5));

} else {
var statearr_41849_41901 = state_41813__$1;
(statearr_41849_41901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (23))){
var inst_41772 = (state_41813[(14)]);
var inst_41778 = (inst_41772 == null);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41778)){
var statearr_41850_41902 = state_41813__$1;
(statearr_41850_41902[(1)] = (26));

} else {
var statearr_41851_41903 = state_41813__$1;
(statearr_41851_41903[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (35))){
var inst_41798 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41798)){
var statearr_41852_41904 = state_41813__$1;
(statearr_41852_41904[(1)] = (36));

} else {
var statearr_41853_41905 = state_41813__$1;
(statearr_41853_41905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (19))){
var inst_41740 = (state_41813[(7)]);
var inst_41760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41740);
var state_41813__$1 = state_41813;
var statearr_41854_41906 = state_41813__$1;
(statearr_41854_41906[(2)] = inst_41760);

(statearr_41854_41906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (11))){
var inst_41740 = (state_41813[(7)]);
var inst_41744 = (inst_41740 == null);
var inst_41745 = cljs.core.not.call(null,inst_41744);
var state_41813__$1 = state_41813;
if(inst_41745){
var statearr_41855_41907 = state_41813__$1;
(statearr_41855_41907[(1)] = (13));

} else {
var statearr_41856_41908 = state_41813__$1;
(statearr_41856_41908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (9))){
var inst_41715 = (state_41813[(8)]);
var state_41813__$1 = state_41813;
var statearr_41857_41909 = state_41813__$1;
(statearr_41857_41909[(2)] = inst_41715);

(statearr_41857_41909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (5))){
var state_41813__$1 = state_41813;
var statearr_41858_41910 = state_41813__$1;
(statearr_41858_41910[(2)] = true);

(statearr_41858_41910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (14))){
var state_41813__$1 = state_41813;
var statearr_41859_41911 = state_41813__$1;
(statearr_41859_41911[(2)] = false);

(statearr_41859_41911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (26))){
var inst_41773 = (state_41813[(10)]);
var inst_41780 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41773);
var state_41813__$1 = state_41813;
var statearr_41860_41912 = state_41813__$1;
(statearr_41860_41912[(2)] = inst_41780);

(statearr_41860_41912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (16))){
var state_41813__$1 = state_41813;
var statearr_41861_41913 = state_41813__$1;
(statearr_41861_41913[(2)] = true);

(statearr_41861_41913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (38))){
var inst_41803 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41862_41914 = state_41813__$1;
(statearr_41862_41914[(2)] = inst_41803);

(statearr_41862_41914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (30))){
var inst_41773 = (state_41813[(10)]);
var inst_41765 = (state_41813[(13)]);
var inst_41764 = (state_41813[(11)]);
var inst_41790 = cljs.core.empty_QMARK_.call(null,inst_41764);
var inst_41791 = inst_41765.call(null,inst_41773);
var inst_41792 = cljs.core.not.call(null,inst_41791);
var inst_41793 = (inst_41790) && (inst_41792);
var state_41813__$1 = state_41813;
var statearr_41863_41915 = state_41813__$1;
(statearr_41863_41915[(2)] = inst_41793);

(statearr_41863_41915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (10))){
var inst_41715 = (state_41813[(8)]);
var inst_41736 = (state_41813[(2)]);
var inst_41737 = cljs.core.get.call(null,inst_41736,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41738 = cljs.core.get.call(null,inst_41736,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41739 = cljs.core.get.call(null,inst_41736,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41740 = inst_41715;
var state_41813__$1 = (function (){var statearr_41864 = state_41813;
(statearr_41864[(16)] = inst_41737);

(statearr_41864[(17)] = inst_41739);

(statearr_41864[(7)] = inst_41740);

(statearr_41864[(18)] = inst_41738);

return statearr_41864;
})();
var statearr_41865_41916 = state_41813__$1;
(statearr_41865_41916[(2)] = null);

(statearr_41865_41916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (18))){
var inst_41755 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41866_41917 = state_41813__$1;
(statearr_41866_41917[(2)] = inst_41755);

(statearr_41866_41917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (37))){
var state_41813__$1 = state_41813;
var statearr_41867_41918 = state_41813__$1;
(statearr_41867_41918[(2)] = null);

(statearr_41867_41918[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (8))){
var inst_41715 = (state_41813[(8)]);
var inst_41733 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41715);
var state_41813__$1 = state_41813;
var statearr_41868_41919 = state_41813__$1;
(statearr_41868_41919[(2)] = inst_41733);

(statearr_41868_41919[(1)] = (10));


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
});})(c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40724__auto__,c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40725__auto__ = null;
var cljs$core$async$mix_$_state_machine__40725__auto____0 = (function (){
var statearr_41869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41869[(0)] = cljs$core$async$mix_$_state_machine__40725__auto__);

(statearr_41869[(1)] = (1));

return statearr_41869;
});
var cljs$core$async$mix_$_state_machine__40725__auto____1 = (function (state_41813){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_41813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e41870){if((e41870 instanceof Object)){
var ex__40728__auto__ = e41870;
var statearr_41871_41920 = state_41813;
(statearr_41871_41920[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41921 = state_41813;
state_41813 = G__41921;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40725__auto__ = function(state_41813){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40725__auto____1.call(this,state_41813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40725__auto____0;
cljs$core$async$mix_$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40725__auto____1;
return cljs$core$async$mix_$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40816__auto__ = (function (){var statearr_41872 = f__40815__auto__.call(null);
(statearr_41872[(6)] = c__40814__auto___41873);

return statearr_41872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___41873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__33080__auto__ = (((p == null))?null:p);
var m__33081__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__33081__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__33080__auto__ = (((p == null))?null:p);
var m__33081__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,p,v,ch);
} else {
var m__33081__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41923 = arguments.length;
switch (G__41923) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__33080__auto__ = (((p == null))?null:p);
var m__33081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,p);
} else {
var m__33081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__33080__auto__ = (((p == null))?null:p);
var m__33081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33080__auto__)]);
if(!((m__33081__auto__ == null))){
return m__33081__auto__.call(null,p,v);
} else {
var m__33081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33081__auto____$1 == null))){
return m__33081__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41927 = arguments.length;
switch (G__41927) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__32347__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__32347__auto__)){
return or__32347__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__32347__auto__,mults){
return (function (p1__41925_SHARP_){
if(cljs.core.truth_(p1__41925_SHARP_.call(null,topic))){
return p1__41925_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41925_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__32347__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41928 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41929){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41929 = meta41929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41930,meta41929__$1){
var self__ = this;
var _41930__$1 = this;
return (new cljs.core.async.t_cljs$core$async41928(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41929__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41930){
var self__ = this;
var _41930__$1 = this;
return self__.meta41929;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41929","meta41929",1383745887,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41928";

cljs.core.async.t_cljs$core$async41928.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async41928");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41928 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41928(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41929){
return (new cljs.core.async.t_cljs$core$async41928(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41929));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41928(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40814__auto___42048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42048,mults,ensure_mult,p){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42048,mults,ensure_mult,p){
return (function (state_42002){
var state_val_42003 = (state_42002[(1)]);
if((state_val_42003 === (7))){
var inst_41998 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42004_42049 = state_42002__$1;
(statearr_42004_42049[(2)] = inst_41998);

(statearr_42004_42049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (20))){
var state_42002__$1 = state_42002;
var statearr_42005_42050 = state_42002__$1;
(statearr_42005_42050[(2)] = null);

(statearr_42005_42050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (1))){
var state_42002__$1 = state_42002;
var statearr_42006_42051 = state_42002__$1;
(statearr_42006_42051[(2)] = null);

(statearr_42006_42051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (24))){
var inst_41981 = (state_42002[(7)]);
var inst_41990 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41981);
var state_42002__$1 = state_42002;
var statearr_42007_42052 = state_42002__$1;
(statearr_42007_42052[(2)] = inst_41990);

(statearr_42007_42052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (4))){
var inst_41933 = (state_42002[(8)]);
var inst_41933__$1 = (state_42002[(2)]);
var inst_41934 = (inst_41933__$1 == null);
var state_42002__$1 = (function (){var statearr_42008 = state_42002;
(statearr_42008[(8)] = inst_41933__$1);

return statearr_42008;
})();
if(cljs.core.truth_(inst_41934)){
var statearr_42009_42053 = state_42002__$1;
(statearr_42009_42053[(1)] = (5));

} else {
var statearr_42010_42054 = state_42002__$1;
(statearr_42010_42054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (15))){
var inst_41975 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42011_42055 = state_42002__$1;
(statearr_42011_42055[(2)] = inst_41975);

(statearr_42011_42055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (21))){
var inst_41995 = (state_42002[(2)]);
var state_42002__$1 = (function (){var statearr_42012 = state_42002;
(statearr_42012[(9)] = inst_41995);

return statearr_42012;
})();
var statearr_42013_42056 = state_42002__$1;
(statearr_42013_42056[(2)] = null);

(statearr_42013_42056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (13))){
var inst_41957 = (state_42002[(10)]);
var inst_41959 = cljs.core.chunked_seq_QMARK_.call(null,inst_41957);
var state_42002__$1 = state_42002;
if(inst_41959){
var statearr_42014_42057 = state_42002__$1;
(statearr_42014_42057[(1)] = (16));

} else {
var statearr_42015_42058 = state_42002__$1;
(statearr_42015_42058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (22))){
var inst_41987 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
if(cljs.core.truth_(inst_41987)){
var statearr_42016_42059 = state_42002__$1;
(statearr_42016_42059[(1)] = (23));

} else {
var statearr_42017_42060 = state_42002__$1;
(statearr_42017_42060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (6))){
var inst_41983 = (state_42002[(11)]);
var inst_41981 = (state_42002[(7)]);
var inst_41933 = (state_42002[(8)]);
var inst_41981__$1 = topic_fn.call(null,inst_41933);
var inst_41982 = cljs.core.deref.call(null,mults);
var inst_41983__$1 = cljs.core.get.call(null,inst_41982,inst_41981__$1);
var state_42002__$1 = (function (){var statearr_42018 = state_42002;
(statearr_42018[(11)] = inst_41983__$1);

(statearr_42018[(7)] = inst_41981__$1);

return statearr_42018;
})();
if(cljs.core.truth_(inst_41983__$1)){
var statearr_42019_42061 = state_42002__$1;
(statearr_42019_42061[(1)] = (19));

} else {
var statearr_42020_42062 = state_42002__$1;
(statearr_42020_42062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (25))){
var inst_41992 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42021_42063 = state_42002__$1;
(statearr_42021_42063[(2)] = inst_41992);

(statearr_42021_42063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (17))){
var inst_41957 = (state_42002[(10)]);
var inst_41966 = cljs.core.first.call(null,inst_41957);
var inst_41967 = cljs.core.async.muxch_STAR_.call(null,inst_41966);
var inst_41968 = cljs.core.async.close_BANG_.call(null,inst_41967);
var inst_41969 = cljs.core.next.call(null,inst_41957);
var inst_41943 = inst_41969;
var inst_41944 = null;
var inst_41945 = (0);
var inst_41946 = (0);
var state_42002__$1 = (function (){var statearr_42022 = state_42002;
(statearr_42022[(12)] = inst_41943);

(statearr_42022[(13)] = inst_41945);

(statearr_42022[(14)] = inst_41968);

(statearr_42022[(15)] = inst_41944);

(statearr_42022[(16)] = inst_41946);

return statearr_42022;
})();
var statearr_42023_42064 = state_42002__$1;
(statearr_42023_42064[(2)] = null);

(statearr_42023_42064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (3))){
var inst_42000 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42002__$1,inst_42000);
} else {
if((state_val_42003 === (12))){
var inst_41977 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42024_42065 = state_42002__$1;
(statearr_42024_42065[(2)] = inst_41977);

(statearr_42024_42065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (2))){
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42002__$1,(4),ch);
} else {
if((state_val_42003 === (23))){
var state_42002__$1 = state_42002;
var statearr_42025_42066 = state_42002__$1;
(statearr_42025_42066[(2)] = null);

(statearr_42025_42066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (19))){
var inst_41983 = (state_42002[(11)]);
var inst_41933 = (state_42002[(8)]);
var inst_41985 = cljs.core.async.muxch_STAR_.call(null,inst_41983);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42002__$1,(22),inst_41985,inst_41933);
} else {
if((state_val_42003 === (11))){
var inst_41943 = (state_42002[(12)]);
var inst_41957 = (state_42002[(10)]);
var inst_41957__$1 = cljs.core.seq.call(null,inst_41943);
var state_42002__$1 = (function (){var statearr_42026 = state_42002;
(statearr_42026[(10)] = inst_41957__$1);

return statearr_42026;
})();
if(inst_41957__$1){
var statearr_42027_42067 = state_42002__$1;
(statearr_42027_42067[(1)] = (13));

} else {
var statearr_42028_42068 = state_42002__$1;
(statearr_42028_42068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (9))){
var inst_41979 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42029_42069 = state_42002__$1;
(statearr_42029_42069[(2)] = inst_41979);

(statearr_42029_42069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (5))){
var inst_41940 = cljs.core.deref.call(null,mults);
var inst_41941 = cljs.core.vals.call(null,inst_41940);
var inst_41942 = cljs.core.seq.call(null,inst_41941);
var inst_41943 = inst_41942;
var inst_41944 = null;
var inst_41945 = (0);
var inst_41946 = (0);
var state_42002__$1 = (function (){var statearr_42030 = state_42002;
(statearr_42030[(12)] = inst_41943);

(statearr_42030[(13)] = inst_41945);

(statearr_42030[(15)] = inst_41944);

(statearr_42030[(16)] = inst_41946);

return statearr_42030;
})();
var statearr_42031_42070 = state_42002__$1;
(statearr_42031_42070[(2)] = null);

(statearr_42031_42070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (14))){
var state_42002__$1 = state_42002;
var statearr_42035_42071 = state_42002__$1;
(statearr_42035_42071[(2)] = null);

(statearr_42035_42071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (16))){
var inst_41957 = (state_42002[(10)]);
var inst_41961 = cljs.core.chunk_first.call(null,inst_41957);
var inst_41962 = cljs.core.chunk_rest.call(null,inst_41957);
var inst_41963 = cljs.core.count.call(null,inst_41961);
var inst_41943 = inst_41962;
var inst_41944 = inst_41961;
var inst_41945 = inst_41963;
var inst_41946 = (0);
var state_42002__$1 = (function (){var statearr_42036 = state_42002;
(statearr_42036[(12)] = inst_41943);

(statearr_42036[(13)] = inst_41945);

(statearr_42036[(15)] = inst_41944);

(statearr_42036[(16)] = inst_41946);

return statearr_42036;
})();
var statearr_42037_42072 = state_42002__$1;
(statearr_42037_42072[(2)] = null);

(statearr_42037_42072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (10))){
var inst_41943 = (state_42002[(12)]);
var inst_41945 = (state_42002[(13)]);
var inst_41944 = (state_42002[(15)]);
var inst_41946 = (state_42002[(16)]);
var inst_41951 = cljs.core._nth.call(null,inst_41944,inst_41946);
var inst_41952 = cljs.core.async.muxch_STAR_.call(null,inst_41951);
var inst_41953 = cljs.core.async.close_BANG_.call(null,inst_41952);
var inst_41954 = (inst_41946 + (1));
var tmp42032 = inst_41943;
var tmp42033 = inst_41945;
var tmp42034 = inst_41944;
var inst_41943__$1 = tmp42032;
var inst_41944__$1 = tmp42034;
var inst_41945__$1 = tmp42033;
var inst_41946__$1 = inst_41954;
var state_42002__$1 = (function (){var statearr_42038 = state_42002;
(statearr_42038[(12)] = inst_41943__$1);

(statearr_42038[(13)] = inst_41945__$1);

(statearr_42038[(15)] = inst_41944__$1);

(statearr_42038[(16)] = inst_41946__$1);

(statearr_42038[(17)] = inst_41953);

return statearr_42038;
})();
var statearr_42039_42073 = state_42002__$1;
(statearr_42039_42073[(2)] = null);

(statearr_42039_42073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (18))){
var inst_41972 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42040_42074 = state_42002__$1;
(statearr_42040_42074[(2)] = inst_41972);

(statearr_42040_42074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (8))){
var inst_41945 = (state_42002[(13)]);
var inst_41946 = (state_42002[(16)]);
var inst_41948 = (inst_41946 < inst_41945);
var inst_41949 = inst_41948;
var state_42002__$1 = state_42002;
if(cljs.core.truth_(inst_41949)){
var statearr_42041_42075 = state_42002__$1;
(statearr_42041_42075[(1)] = (10));

} else {
var statearr_42042_42076 = state_42002__$1;
(statearr_42042_42076[(1)] = (11));

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
});})(c__40814__auto___42048,mults,ensure_mult,p))
;
return ((function (switch__40724__auto__,c__40814__auto___42048,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42043[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42043[(1)] = (1));

return statearr_42043;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42002){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42044){if((e42044 instanceof Object)){
var ex__40728__auto__ = e42044;
var statearr_42045_42077 = state_42002;
(statearr_42045_42077[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42078 = state_42002;
state_42002 = G__42078;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42048,mults,ensure_mult,p))
})();
var state__40816__auto__ = (function (){var statearr_42046 = f__40815__auto__.call(null);
(statearr_42046[(6)] = c__40814__auto___42048);

return statearr_42046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42048,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42080 = arguments.length;
switch (G__42080) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42083 = arguments.length;
switch (G__42083) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42086 = arguments.length;
switch (G__42086) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__40814__auto___42153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42125){
var state_val_42126 = (state_42125[(1)]);
if((state_val_42126 === (7))){
var state_42125__$1 = state_42125;
var statearr_42127_42154 = state_42125__$1;
(statearr_42127_42154[(2)] = null);

(statearr_42127_42154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (1))){
var state_42125__$1 = state_42125;
var statearr_42128_42155 = state_42125__$1;
(statearr_42128_42155[(2)] = null);

(statearr_42128_42155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (4))){
var inst_42089 = (state_42125[(7)]);
var inst_42091 = (inst_42089 < cnt);
var state_42125__$1 = state_42125;
if(cljs.core.truth_(inst_42091)){
var statearr_42129_42156 = state_42125__$1;
(statearr_42129_42156[(1)] = (6));

} else {
var statearr_42130_42157 = state_42125__$1;
(statearr_42130_42157[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (15))){
var inst_42121 = (state_42125[(2)]);
var state_42125__$1 = state_42125;
var statearr_42131_42158 = state_42125__$1;
(statearr_42131_42158[(2)] = inst_42121);

(statearr_42131_42158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (13))){
var inst_42114 = cljs.core.async.close_BANG_.call(null,out);
var state_42125__$1 = state_42125;
var statearr_42132_42159 = state_42125__$1;
(statearr_42132_42159[(2)] = inst_42114);

(statearr_42132_42159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (6))){
var state_42125__$1 = state_42125;
var statearr_42133_42160 = state_42125__$1;
(statearr_42133_42160[(2)] = null);

(statearr_42133_42160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (3))){
var inst_42123 = (state_42125[(2)]);
var state_42125__$1 = state_42125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42125__$1,inst_42123);
} else {
if((state_val_42126 === (12))){
var inst_42111 = (state_42125[(8)]);
var inst_42111__$1 = (state_42125[(2)]);
var inst_42112 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42111__$1);
var state_42125__$1 = (function (){var statearr_42134 = state_42125;
(statearr_42134[(8)] = inst_42111__$1);

return statearr_42134;
})();
if(cljs.core.truth_(inst_42112)){
var statearr_42135_42161 = state_42125__$1;
(statearr_42135_42161[(1)] = (13));

} else {
var statearr_42136_42162 = state_42125__$1;
(statearr_42136_42162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (2))){
var inst_42088 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42089 = (0);
var state_42125__$1 = (function (){var statearr_42137 = state_42125;
(statearr_42137[(7)] = inst_42089);

(statearr_42137[(9)] = inst_42088);

return statearr_42137;
})();
var statearr_42138_42163 = state_42125__$1;
(statearr_42138_42163[(2)] = null);

(statearr_42138_42163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (11))){
var inst_42089 = (state_42125[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42125,(10),Object,null,(9));
var inst_42098 = chs__$1.call(null,inst_42089);
var inst_42099 = done.call(null,inst_42089);
var inst_42100 = cljs.core.async.take_BANG_.call(null,inst_42098,inst_42099);
var state_42125__$1 = state_42125;
var statearr_42139_42164 = state_42125__$1;
(statearr_42139_42164[(2)] = inst_42100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (9))){
var inst_42089 = (state_42125[(7)]);
var inst_42102 = (state_42125[(2)]);
var inst_42103 = (inst_42089 + (1));
var inst_42089__$1 = inst_42103;
var state_42125__$1 = (function (){var statearr_42140 = state_42125;
(statearr_42140[(7)] = inst_42089__$1);

(statearr_42140[(10)] = inst_42102);

return statearr_42140;
})();
var statearr_42141_42165 = state_42125__$1;
(statearr_42141_42165[(2)] = null);

(statearr_42141_42165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (5))){
var inst_42109 = (state_42125[(2)]);
var state_42125__$1 = (function (){var statearr_42142 = state_42125;
(statearr_42142[(11)] = inst_42109);

return statearr_42142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42125__$1,(12),dchan);
} else {
if((state_val_42126 === (14))){
var inst_42111 = (state_42125[(8)]);
var inst_42116 = cljs.core.apply.call(null,f,inst_42111);
var state_42125__$1 = state_42125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42125__$1,(16),out,inst_42116);
} else {
if((state_val_42126 === (16))){
var inst_42118 = (state_42125[(2)]);
var state_42125__$1 = (function (){var statearr_42143 = state_42125;
(statearr_42143[(12)] = inst_42118);

return statearr_42143;
})();
var statearr_42144_42166 = state_42125__$1;
(statearr_42144_42166[(2)] = null);

(statearr_42144_42166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (10))){
var inst_42093 = (state_42125[(2)]);
var inst_42094 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42125__$1 = (function (){var statearr_42145 = state_42125;
(statearr_42145[(13)] = inst_42093);

return statearr_42145;
})();
var statearr_42146_42167 = state_42125__$1;
(statearr_42146_42167[(2)] = inst_42094);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42126 === (8))){
var inst_42107 = (state_42125[(2)]);
var state_42125__$1 = state_42125;
var statearr_42147_42168 = state_42125__$1;
(statearr_42147_42168[(2)] = inst_42107);

(statearr_42147_42168[(1)] = (5));


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
});})(c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40724__auto__,c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42148[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42148[(1)] = (1));

return statearr_42148;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42125){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42149){if((e42149 instanceof Object)){
var ex__40728__auto__ = e42149;
var statearr_42150_42169 = state_42125;
(statearr_42150_42169[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42170 = state_42125;
state_42125 = G__42170;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40816__auto__ = (function (){var statearr_42151 = f__40815__auto__.call(null);
(statearr_42151[(6)] = c__40814__auto___42153);

return statearr_42151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42153,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42173 = arguments.length;
switch (G__42173) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42227,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42227,out){
return (function (state_42205){
var state_val_42206 = (state_42205[(1)]);
if((state_val_42206 === (7))){
var inst_42184 = (state_42205[(7)]);
var inst_42185 = (state_42205[(8)]);
var inst_42184__$1 = (state_42205[(2)]);
var inst_42185__$1 = cljs.core.nth.call(null,inst_42184__$1,(0),null);
var inst_42186 = cljs.core.nth.call(null,inst_42184__$1,(1),null);
var inst_42187 = (inst_42185__$1 == null);
var state_42205__$1 = (function (){var statearr_42207 = state_42205;
(statearr_42207[(7)] = inst_42184__$1);

(statearr_42207[(8)] = inst_42185__$1);

(statearr_42207[(9)] = inst_42186);

return statearr_42207;
})();
if(cljs.core.truth_(inst_42187)){
var statearr_42208_42228 = state_42205__$1;
(statearr_42208_42228[(1)] = (8));

} else {
var statearr_42209_42229 = state_42205__$1;
(statearr_42209_42229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (1))){
var inst_42174 = cljs.core.vec.call(null,chs);
var inst_42175 = inst_42174;
var state_42205__$1 = (function (){var statearr_42210 = state_42205;
(statearr_42210[(10)] = inst_42175);

return statearr_42210;
})();
var statearr_42211_42230 = state_42205__$1;
(statearr_42211_42230[(2)] = null);

(statearr_42211_42230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (4))){
var inst_42175 = (state_42205[(10)]);
var state_42205__$1 = state_42205;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42205__$1,(7),inst_42175);
} else {
if((state_val_42206 === (6))){
var inst_42201 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42212_42231 = state_42205__$1;
(statearr_42212_42231[(2)] = inst_42201);

(statearr_42212_42231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (3))){
var inst_42203 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42205__$1,inst_42203);
} else {
if((state_val_42206 === (2))){
var inst_42175 = (state_42205[(10)]);
var inst_42177 = cljs.core.count.call(null,inst_42175);
var inst_42178 = (inst_42177 > (0));
var state_42205__$1 = state_42205;
if(cljs.core.truth_(inst_42178)){
var statearr_42214_42232 = state_42205__$1;
(statearr_42214_42232[(1)] = (4));

} else {
var statearr_42215_42233 = state_42205__$1;
(statearr_42215_42233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (11))){
var inst_42175 = (state_42205[(10)]);
var inst_42194 = (state_42205[(2)]);
var tmp42213 = inst_42175;
var inst_42175__$1 = tmp42213;
var state_42205__$1 = (function (){var statearr_42216 = state_42205;
(statearr_42216[(10)] = inst_42175__$1);

(statearr_42216[(11)] = inst_42194);

return statearr_42216;
})();
var statearr_42217_42234 = state_42205__$1;
(statearr_42217_42234[(2)] = null);

(statearr_42217_42234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (9))){
var inst_42185 = (state_42205[(8)]);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42205__$1,(11),out,inst_42185);
} else {
if((state_val_42206 === (5))){
var inst_42199 = cljs.core.async.close_BANG_.call(null,out);
var state_42205__$1 = state_42205;
var statearr_42218_42235 = state_42205__$1;
(statearr_42218_42235[(2)] = inst_42199);

(statearr_42218_42235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (10))){
var inst_42197 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42219_42236 = state_42205__$1;
(statearr_42219_42236[(2)] = inst_42197);

(statearr_42219_42236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (8))){
var inst_42184 = (state_42205[(7)]);
var inst_42185 = (state_42205[(8)]);
var inst_42175 = (state_42205[(10)]);
var inst_42186 = (state_42205[(9)]);
var inst_42189 = (function (){var cs = inst_42175;
var vec__42180 = inst_42184;
var v = inst_42185;
var c = inst_42186;
return ((function (cs,vec__42180,v,c,inst_42184,inst_42185,inst_42175,inst_42186,state_val_42206,c__40814__auto___42227,out){
return (function (p1__42171_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42171_SHARP_);
});
;})(cs,vec__42180,v,c,inst_42184,inst_42185,inst_42175,inst_42186,state_val_42206,c__40814__auto___42227,out))
})();
var inst_42190 = cljs.core.filterv.call(null,inst_42189,inst_42175);
var inst_42175__$1 = inst_42190;
var state_42205__$1 = (function (){var statearr_42220 = state_42205;
(statearr_42220[(10)] = inst_42175__$1);

return statearr_42220;
})();
var statearr_42221_42237 = state_42205__$1;
(statearr_42221_42237[(2)] = null);

(statearr_42221_42237[(1)] = (2));


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
});})(c__40814__auto___42227,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42227,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42222[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42222[(1)] = (1));

return statearr_42222;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42205){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42223){if((e42223 instanceof Object)){
var ex__40728__auto__ = e42223;
var statearr_42224_42238 = state_42205;
(statearr_42224_42238[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42239 = state_42205;
state_42205 = G__42239;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42227,out))
})();
var state__40816__auto__ = (function (){var statearr_42225 = f__40815__auto__.call(null);
(statearr_42225[(6)] = c__40814__auto___42227);

return statearr_42225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42227,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42241 = arguments.length;
switch (G__42241) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42286,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42286,out){
return (function (state_42265){
var state_val_42266 = (state_42265[(1)]);
if((state_val_42266 === (7))){
var inst_42247 = (state_42265[(7)]);
var inst_42247__$1 = (state_42265[(2)]);
var inst_42248 = (inst_42247__$1 == null);
var inst_42249 = cljs.core.not.call(null,inst_42248);
var state_42265__$1 = (function (){var statearr_42267 = state_42265;
(statearr_42267[(7)] = inst_42247__$1);

return statearr_42267;
})();
if(inst_42249){
var statearr_42268_42287 = state_42265__$1;
(statearr_42268_42287[(1)] = (8));

} else {
var statearr_42269_42288 = state_42265__$1;
(statearr_42269_42288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (1))){
var inst_42242 = (0);
var state_42265__$1 = (function (){var statearr_42270 = state_42265;
(statearr_42270[(8)] = inst_42242);

return statearr_42270;
})();
var statearr_42271_42289 = state_42265__$1;
(statearr_42271_42289[(2)] = null);

(statearr_42271_42289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (4))){
var state_42265__$1 = state_42265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42265__$1,(7),ch);
} else {
if((state_val_42266 === (6))){
var inst_42260 = (state_42265[(2)]);
var state_42265__$1 = state_42265;
var statearr_42272_42290 = state_42265__$1;
(statearr_42272_42290[(2)] = inst_42260);

(statearr_42272_42290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (3))){
var inst_42262 = (state_42265[(2)]);
var inst_42263 = cljs.core.async.close_BANG_.call(null,out);
var state_42265__$1 = (function (){var statearr_42273 = state_42265;
(statearr_42273[(9)] = inst_42262);

return statearr_42273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42265__$1,inst_42263);
} else {
if((state_val_42266 === (2))){
var inst_42242 = (state_42265[(8)]);
var inst_42244 = (inst_42242 < n);
var state_42265__$1 = state_42265;
if(cljs.core.truth_(inst_42244)){
var statearr_42274_42291 = state_42265__$1;
(statearr_42274_42291[(1)] = (4));

} else {
var statearr_42275_42292 = state_42265__$1;
(statearr_42275_42292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (11))){
var inst_42242 = (state_42265[(8)]);
var inst_42252 = (state_42265[(2)]);
var inst_42253 = (inst_42242 + (1));
var inst_42242__$1 = inst_42253;
var state_42265__$1 = (function (){var statearr_42276 = state_42265;
(statearr_42276[(8)] = inst_42242__$1);

(statearr_42276[(10)] = inst_42252);

return statearr_42276;
})();
var statearr_42277_42293 = state_42265__$1;
(statearr_42277_42293[(2)] = null);

(statearr_42277_42293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (9))){
var state_42265__$1 = state_42265;
var statearr_42278_42294 = state_42265__$1;
(statearr_42278_42294[(2)] = null);

(statearr_42278_42294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (5))){
var state_42265__$1 = state_42265;
var statearr_42279_42295 = state_42265__$1;
(statearr_42279_42295[(2)] = null);

(statearr_42279_42295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (10))){
var inst_42257 = (state_42265[(2)]);
var state_42265__$1 = state_42265;
var statearr_42280_42296 = state_42265__$1;
(statearr_42280_42296[(2)] = inst_42257);

(statearr_42280_42296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42266 === (8))){
var inst_42247 = (state_42265[(7)]);
var state_42265__$1 = state_42265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42265__$1,(11),out,inst_42247);
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
});})(c__40814__auto___42286,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42286,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42281[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42281[(1)] = (1));

return statearr_42281;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42265){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42282){if((e42282 instanceof Object)){
var ex__40728__auto__ = e42282;
var statearr_42283_42297 = state_42265;
(statearr_42283_42297[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42298 = state_42265;
state_42265 = G__42298;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42286,out))
})();
var state__40816__auto__ = (function (){var statearr_42284 = f__40815__auto__.call(null);
(statearr_42284[(6)] = c__40814__auto___42286);

return statearr_42284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42286,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42300 = (function (f,ch,meta42301){
this.f = f;
this.ch = ch;
this.meta42301 = meta42301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42302,meta42301__$1){
var self__ = this;
var _42302__$1 = this;
return (new cljs.core.async.t_cljs$core$async42300(self__.f,self__.ch,meta42301__$1));
});

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42302){
var self__ = this;
var _42302__$1 = this;
return self__.meta42301;
});

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42303 = (function (f,ch,meta42301,_,fn1,meta42304){
this.f = f;
this.ch = ch;
this.meta42301 = meta42301;
this._ = _;
this.fn1 = fn1;
this.meta42304 = meta42304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42305,meta42304__$1){
var self__ = this;
var _42305__$1 = this;
return (new cljs.core.async.t_cljs$core$async42303(self__.f,self__.ch,self__.meta42301,self__._,self__.fn1,meta42304__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42305){
var self__ = this;
var _42305__$1 = this;
return self__.meta42304;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42299_SHARP_){
return f1.call(null,(((p1__42299_SHARP_ == null))?null:self__.f.call(null,p1__42299_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42301","meta42301",-1015369756,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42300","cljs.core.async/t_cljs$core$async42300",1728681082,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42304","meta42304",538078109,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42303";

cljs.core.async.t_cljs$core$async42303.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async42303");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42303 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42303(f__$1,ch__$1,meta42301__$1,___$2,fn1__$1,meta42304){
return (new cljs.core.async.t_cljs$core$async42303(f__$1,ch__$1,meta42301__$1,___$2,fn1__$1,meta42304));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42303(self__.f,self__.ch,self__.meta42301,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__32335__auto__ = ret;
if(cljs.core.truth_(and__32335__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__32335__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42301","meta42301",-1015369756,null)], null);
});

cljs.core.async.t_cljs$core$async42300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42300";

cljs.core.async.t_cljs$core$async42300.cljs$lang$ctorPrWriter = (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async42300");
});

cljs.core.async.__GT_t_cljs$core$async42300 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42300(f__$1,ch__$1,meta42301){
return (new cljs.core.async.t_cljs$core$async42300(f__$1,ch__$1,meta42301));
});

}

return (new cljs.core.async.t_cljs$core$async42300(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42306 = (function (f,ch,meta42307){
this.f = f;
this.ch = ch;
this.meta42307 = meta42307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42308,meta42307__$1){
var self__ = this;
var _42308__$1 = this;
return (new cljs.core.async.t_cljs$core$async42306(self__.f,self__.ch,meta42307__$1));
});

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42308){
var self__ = this;
var _42308__$1 = this;
return self__.meta42307;
});

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42307","meta42307",1331820192,null)], null);
});

cljs.core.async.t_cljs$core$async42306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42306";

cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorPrWriter = (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async42306");
});

cljs.core.async.__GT_t_cljs$core$async42306 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42306(f__$1,ch__$1,meta42307){
return (new cljs.core.async.t_cljs$core$async42306(f__$1,ch__$1,meta42307));
});

}

return (new cljs.core.async.t_cljs$core$async42306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42309 = (function (p,ch,meta42310){
this.p = p;
this.ch = ch;
this.meta42310 = meta42310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42311,meta42310__$1){
var self__ = this;
var _42311__$1 = this;
return (new cljs.core.async.t_cljs$core$async42309(self__.p,self__.ch,meta42310__$1));
});

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42311){
var self__ = this;
var _42311__$1 = this;
return self__.meta42310;
});

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42310","meta42310",44135116,null)], null);
});

cljs.core.async.t_cljs$core$async42309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42309";

cljs.core.async.t_cljs$core$async42309.cljs$lang$ctorPrWriter = (function (this__33018__auto__,writer__33019__auto__,opt__33020__auto__){
return cljs.core._write.call(null,writer__33019__auto__,"cljs.core.async/t_cljs$core$async42309");
});

cljs.core.async.__GT_t_cljs$core$async42309 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42309(p__$1,ch__$1,meta42310){
return (new cljs.core.async.t_cljs$core$async42309(p__$1,ch__$1,meta42310));
});

}

return (new cljs.core.async.t_cljs$core$async42309(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42313 = arguments.length;
switch (G__42313) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42353,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42353,out){
return (function (state_42334){
var state_val_42335 = (state_42334[(1)]);
if((state_val_42335 === (7))){
var inst_42330 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42336_42354 = state_42334__$1;
(statearr_42336_42354[(2)] = inst_42330);

(statearr_42336_42354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (1))){
var state_42334__$1 = state_42334;
var statearr_42337_42355 = state_42334__$1;
(statearr_42337_42355[(2)] = null);

(statearr_42337_42355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (4))){
var inst_42316 = (state_42334[(7)]);
var inst_42316__$1 = (state_42334[(2)]);
var inst_42317 = (inst_42316__$1 == null);
var state_42334__$1 = (function (){var statearr_42338 = state_42334;
(statearr_42338[(7)] = inst_42316__$1);

return statearr_42338;
})();
if(cljs.core.truth_(inst_42317)){
var statearr_42339_42356 = state_42334__$1;
(statearr_42339_42356[(1)] = (5));

} else {
var statearr_42340_42357 = state_42334__$1;
(statearr_42340_42357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (6))){
var inst_42316 = (state_42334[(7)]);
var inst_42321 = p.call(null,inst_42316);
var state_42334__$1 = state_42334;
if(cljs.core.truth_(inst_42321)){
var statearr_42341_42358 = state_42334__$1;
(statearr_42341_42358[(1)] = (8));

} else {
var statearr_42342_42359 = state_42334__$1;
(statearr_42342_42359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (3))){
var inst_42332 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42334__$1,inst_42332);
} else {
if((state_val_42335 === (2))){
var state_42334__$1 = state_42334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42334__$1,(4),ch);
} else {
if((state_val_42335 === (11))){
var inst_42324 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42343_42360 = state_42334__$1;
(statearr_42343_42360[(2)] = inst_42324);

(statearr_42343_42360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (9))){
var state_42334__$1 = state_42334;
var statearr_42344_42361 = state_42334__$1;
(statearr_42344_42361[(2)] = null);

(statearr_42344_42361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (5))){
var inst_42319 = cljs.core.async.close_BANG_.call(null,out);
var state_42334__$1 = state_42334;
var statearr_42345_42362 = state_42334__$1;
(statearr_42345_42362[(2)] = inst_42319);

(statearr_42345_42362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (10))){
var inst_42327 = (state_42334[(2)]);
var state_42334__$1 = (function (){var statearr_42346 = state_42334;
(statearr_42346[(8)] = inst_42327);

return statearr_42346;
})();
var statearr_42347_42363 = state_42334__$1;
(statearr_42347_42363[(2)] = null);

(statearr_42347_42363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (8))){
var inst_42316 = (state_42334[(7)]);
var state_42334__$1 = state_42334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42334__$1,(11),out,inst_42316);
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
});})(c__40814__auto___42353,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42353,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42348 = [null,null,null,null,null,null,null,null,null];
(statearr_42348[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42348[(1)] = (1));

return statearr_42348;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42334){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42349){if((e42349 instanceof Object)){
var ex__40728__auto__ = e42349;
var statearr_42350_42364 = state_42334;
(statearr_42350_42364[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42365 = state_42334;
state_42334 = G__42365;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42353,out))
})();
var state__40816__auto__ = (function (){var statearr_42351 = f__40815__auto__.call(null);
(statearr_42351[(6)] = c__40814__auto___42353);

return statearr_42351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42353,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42367 = arguments.length;
switch (G__42367) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto__){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto__){
return (function (state_42430){
var state_val_42431 = (state_42430[(1)]);
if((state_val_42431 === (7))){
var inst_42426 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42432_42470 = state_42430__$1;
(statearr_42432_42470[(2)] = inst_42426);

(statearr_42432_42470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (20))){
var inst_42396 = (state_42430[(7)]);
var inst_42407 = (state_42430[(2)]);
var inst_42408 = cljs.core.next.call(null,inst_42396);
var inst_42382 = inst_42408;
var inst_42383 = null;
var inst_42384 = (0);
var inst_42385 = (0);
var state_42430__$1 = (function (){var statearr_42433 = state_42430;
(statearr_42433[(8)] = inst_42385);

(statearr_42433[(9)] = inst_42384);

(statearr_42433[(10)] = inst_42382);

(statearr_42433[(11)] = inst_42383);

(statearr_42433[(12)] = inst_42407);

return statearr_42433;
})();
var statearr_42434_42471 = state_42430__$1;
(statearr_42434_42471[(2)] = null);

(statearr_42434_42471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (1))){
var state_42430__$1 = state_42430;
var statearr_42435_42472 = state_42430__$1;
(statearr_42435_42472[(2)] = null);

(statearr_42435_42472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (4))){
var inst_42371 = (state_42430[(13)]);
var inst_42371__$1 = (state_42430[(2)]);
var inst_42372 = (inst_42371__$1 == null);
var state_42430__$1 = (function (){var statearr_42436 = state_42430;
(statearr_42436[(13)] = inst_42371__$1);

return statearr_42436;
})();
if(cljs.core.truth_(inst_42372)){
var statearr_42437_42473 = state_42430__$1;
(statearr_42437_42473[(1)] = (5));

} else {
var statearr_42438_42474 = state_42430__$1;
(statearr_42438_42474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (15))){
var state_42430__$1 = state_42430;
var statearr_42442_42475 = state_42430__$1;
(statearr_42442_42475[(2)] = null);

(statearr_42442_42475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (21))){
var state_42430__$1 = state_42430;
var statearr_42443_42476 = state_42430__$1;
(statearr_42443_42476[(2)] = null);

(statearr_42443_42476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (13))){
var inst_42385 = (state_42430[(8)]);
var inst_42384 = (state_42430[(9)]);
var inst_42382 = (state_42430[(10)]);
var inst_42383 = (state_42430[(11)]);
var inst_42392 = (state_42430[(2)]);
var inst_42393 = (inst_42385 + (1));
var tmp42439 = inst_42384;
var tmp42440 = inst_42382;
var tmp42441 = inst_42383;
var inst_42382__$1 = tmp42440;
var inst_42383__$1 = tmp42441;
var inst_42384__$1 = tmp42439;
var inst_42385__$1 = inst_42393;
var state_42430__$1 = (function (){var statearr_42444 = state_42430;
(statearr_42444[(8)] = inst_42385__$1);

(statearr_42444[(9)] = inst_42384__$1);

(statearr_42444[(10)] = inst_42382__$1);

(statearr_42444[(11)] = inst_42383__$1);

(statearr_42444[(14)] = inst_42392);

return statearr_42444;
})();
var statearr_42445_42477 = state_42430__$1;
(statearr_42445_42477[(2)] = null);

(statearr_42445_42477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (22))){
var state_42430__$1 = state_42430;
var statearr_42446_42478 = state_42430__$1;
(statearr_42446_42478[(2)] = null);

(statearr_42446_42478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (6))){
var inst_42371 = (state_42430[(13)]);
var inst_42380 = f.call(null,inst_42371);
var inst_42381 = cljs.core.seq.call(null,inst_42380);
var inst_42382 = inst_42381;
var inst_42383 = null;
var inst_42384 = (0);
var inst_42385 = (0);
var state_42430__$1 = (function (){var statearr_42447 = state_42430;
(statearr_42447[(8)] = inst_42385);

(statearr_42447[(9)] = inst_42384);

(statearr_42447[(10)] = inst_42382);

(statearr_42447[(11)] = inst_42383);

return statearr_42447;
})();
var statearr_42448_42479 = state_42430__$1;
(statearr_42448_42479[(2)] = null);

(statearr_42448_42479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (17))){
var inst_42396 = (state_42430[(7)]);
var inst_42400 = cljs.core.chunk_first.call(null,inst_42396);
var inst_42401 = cljs.core.chunk_rest.call(null,inst_42396);
var inst_42402 = cljs.core.count.call(null,inst_42400);
var inst_42382 = inst_42401;
var inst_42383 = inst_42400;
var inst_42384 = inst_42402;
var inst_42385 = (0);
var state_42430__$1 = (function (){var statearr_42449 = state_42430;
(statearr_42449[(8)] = inst_42385);

(statearr_42449[(9)] = inst_42384);

(statearr_42449[(10)] = inst_42382);

(statearr_42449[(11)] = inst_42383);

return statearr_42449;
})();
var statearr_42450_42480 = state_42430__$1;
(statearr_42450_42480[(2)] = null);

(statearr_42450_42480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (3))){
var inst_42428 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42430__$1,inst_42428);
} else {
if((state_val_42431 === (12))){
var inst_42416 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42451_42481 = state_42430__$1;
(statearr_42451_42481[(2)] = inst_42416);

(statearr_42451_42481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (2))){
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42430__$1,(4),in$);
} else {
if((state_val_42431 === (23))){
var inst_42424 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42452_42482 = state_42430__$1;
(statearr_42452_42482[(2)] = inst_42424);

(statearr_42452_42482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (19))){
var inst_42411 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42453_42483 = state_42430__$1;
(statearr_42453_42483[(2)] = inst_42411);

(statearr_42453_42483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (11))){
var inst_42382 = (state_42430[(10)]);
var inst_42396 = (state_42430[(7)]);
var inst_42396__$1 = cljs.core.seq.call(null,inst_42382);
var state_42430__$1 = (function (){var statearr_42454 = state_42430;
(statearr_42454[(7)] = inst_42396__$1);

return statearr_42454;
})();
if(inst_42396__$1){
var statearr_42455_42484 = state_42430__$1;
(statearr_42455_42484[(1)] = (14));

} else {
var statearr_42456_42485 = state_42430__$1;
(statearr_42456_42485[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (9))){
var inst_42418 = (state_42430[(2)]);
var inst_42419 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42430__$1 = (function (){var statearr_42457 = state_42430;
(statearr_42457[(15)] = inst_42418);

return statearr_42457;
})();
if(cljs.core.truth_(inst_42419)){
var statearr_42458_42486 = state_42430__$1;
(statearr_42458_42486[(1)] = (21));

} else {
var statearr_42459_42487 = state_42430__$1;
(statearr_42459_42487[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (5))){
var inst_42374 = cljs.core.async.close_BANG_.call(null,out);
var state_42430__$1 = state_42430;
var statearr_42460_42488 = state_42430__$1;
(statearr_42460_42488[(2)] = inst_42374);

(statearr_42460_42488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (14))){
var inst_42396 = (state_42430[(7)]);
var inst_42398 = cljs.core.chunked_seq_QMARK_.call(null,inst_42396);
var state_42430__$1 = state_42430;
if(inst_42398){
var statearr_42461_42489 = state_42430__$1;
(statearr_42461_42489[(1)] = (17));

} else {
var statearr_42462_42490 = state_42430__$1;
(statearr_42462_42490[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (16))){
var inst_42414 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42463_42491 = state_42430__$1;
(statearr_42463_42491[(2)] = inst_42414);

(statearr_42463_42491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (10))){
var inst_42385 = (state_42430[(8)]);
var inst_42383 = (state_42430[(11)]);
var inst_42390 = cljs.core._nth.call(null,inst_42383,inst_42385);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42430__$1,(13),out,inst_42390);
} else {
if((state_val_42431 === (18))){
var inst_42396 = (state_42430[(7)]);
var inst_42405 = cljs.core.first.call(null,inst_42396);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42430__$1,(20),out,inst_42405);
} else {
if((state_val_42431 === (8))){
var inst_42385 = (state_42430[(8)]);
var inst_42384 = (state_42430[(9)]);
var inst_42387 = (inst_42385 < inst_42384);
var inst_42388 = inst_42387;
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42388)){
var statearr_42464_42492 = state_42430__$1;
(statearr_42464_42492[(1)] = (10));

} else {
var statearr_42465_42493 = state_42430__$1;
(statearr_42465_42493[(1)] = (11));

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
});})(c__40814__auto__))
;
return ((function (switch__40724__auto__,c__40814__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____0 = (function (){
var statearr_42466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42466[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__);

(statearr_42466[(1)] = (1));

return statearr_42466;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____1 = (function (state_42430){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42467){if((e42467 instanceof Object)){
var ex__40728__auto__ = e42467;
var statearr_42468_42494 = state_42430;
(statearr_42468_42494[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42495 = state_42430;
state_42430 = G__42495;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__ = function(state_42430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____1.call(this,state_42430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto__))
})();
var state__40816__auto__ = (function (){var statearr_42469 = f__40815__auto__.call(null);
(statearr_42469[(6)] = c__40814__auto__);

return statearr_42469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto__))
);

return c__40814__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42497 = arguments.length;
switch (G__42497) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42500 = arguments.length;
switch (G__42500) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42503 = arguments.length;
switch (G__42503) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42550,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42550,out){
return (function (state_42527){
var state_val_42528 = (state_42527[(1)]);
if((state_val_42528 === (7))){
var inst_42522 = (state_42527[(2)]);
var state_42527__$1 = state_42527;
var statearr_42529_42551 = state_42527__$1;
(statearr_42529_42551[(2)] = inst_42522);

(statearr_42529_42551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (1))){
var inst_42504 = null;
var state_42527__$1 = (function (){var statearr_42530 = state_42527;
(statearr_42530[(7)] = inst_42504);

return statearr_42530;
})();
var statearr_42531_42552 = state_42527__$1;
(statearr_42531_42552[(2)] = null);

(statearr_42531_42552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (4))){
var inst_42507 = (state_42527[(8)]);
var inst_42507__$1 = (state_42527[(2)]);
var inst_42508 = (inst_42507__$1 == null);
var inst_42509 = cljs.core.not.call(null,inst_42508);
var state_42527__$1 = (function (){var statearr_42532 = state_42527;
(statearr_42532[(8)] = inst_42507__$1);

return statearr_42532;
})();
if(inst_42509){
var statearr_42533_42553 = state_42527__$1;
(statearr_42533_42553[(1)] = (5));

} else {
var statearr_42534_42554 = state_42527__$1;
(statearr_42534_42554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (6))){
var state_42527__$1 = state_42527;
var statearr_42535_42555 = state_42527__$1;
(statearr_42535_42555[(2)] = null);

(statearr_42535_42555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (3))){
var inst_42524 = (state_42527[(2)]);
var inst_42525 = cljs.core.async.close_BANG_.call(null,out);
var state_42527__$1 = (function (){var statearr_42536 = state_42527;
(statearr_42536[(9)] = inst_42524);

return statearr_42536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42527__$1,inst_42525);
} else {
if((state_val_42528 === (2))){
var state_42527__$1 = state_42527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42527__$1,(4),ch);
} else {
if((state_val_42528 === (11))){
var inst_42507 = (state_42527[(8)]);
var inst_42516 = (state_42527[(2)]);
var inst_42504 = inst_42507;
var state_42527__$1 = (function (){var statearr_42537 = state_42527;
(statearr_42537[(10)] = inst_42516);

(statearr_42537[(7)] = inst_42504);

return statearr_42537;
})();
var statearr_42538_42556 = state_42527__$1;
(statearr_42538_42556[(2)] = null);

(statearr_42538_42556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (9))){
var inst_42507 = (state_42527[(8)]);
var state_42527__$1 = state_42527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42527__$1,(11),out,inst_42507);
} else {
if((state_val_42528 === (5))){
var inst_42507 = (state_42527[(8)]);
var inst_42504 = (state_42527[(7)]);
var inst_42511 = cljs.core._EQ_.call(null,inst_42507,inst_42504);
var state_42527__$1 = state_42527;
if(inst_42511){
var statearr_42540_42557 = state_42527__$1;
(statearr_42540_42557[(1)] = (8));

} else {
var statearr_42541_42558 = state_42527__$1;
(statearr_42541_42558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (10))){
var inst_42519 = (state_42527[(2)]);
var state_42527__$1 = state_42527;
var statearr_42542_42559 = state_42527__$1;
(statearr_42542_42559[(2)] = inst_42519);

(statearr_42542_42559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42528 === (8))){
var inst_42504 = (state_42527[(7)]);
var tmp42539 = inst_42504;
var inst_42504__$1 = tmp42539;
var state_42527__$1 = (function (){var statearr_42543 = state_42527;
(statearr_42543[(7)] = inst_42504__$1);

return statearr_42543;
})();
var statearr_42544_42560 = state_42527__$1;
(statearr_42544_42560[(2)] = null);

(statearr_42544_42560[(1)] = (2));


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
});})(c__40814__auto___42550,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42550,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42545[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42545[(1)] = (1));

return statearr_42545;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42527){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42546){if((e42546 instanceof Object)){
var ex__40728__auto__ = e42546;
var statearr_42547_42561 = state_42527;
(statearr_42547_42561[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42562 = state_42527;
state_42527 = G__42562;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42550,out))
})();
var state__40816__auto__ = (function (){var statearr_42548 = f__40815__auto__.call(null);
(statearr_42548[(6)] = c__40814__auto___42550);

return statearr_42548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42550,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42564 = arguments.length;
switch (G__42564) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42630,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42630,out){
return (function (state_42602){
var state_val_42603 = (state_42602[(1)]);
if((state_val_42603 === (7))){
var inst_42598 = (state_42602[(2)]);
var state_42602__$1 = state_42602;
var statearr_42604_42631 = state_42602__$1;
(statearr_42604_42631[(2)] = inst_42598);

(statearr_42604_42631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (1))){
var inst_42565 = (new Array(n));
var inst_42566 = inst_42565;
var inst_42567 = (0);
var state_42602__$1 = (function (){var statearr_42605 = state_42602;
(statearr_42605[(7)] = inst_42567);

(statearr_42605[(8)] = inst_42566);

return statearr_42605;
})();
var statearr_42606_42632 = state_42602__$1;
(statearr_42606_42632[(2)] = null);

(statearr_42606_42632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (4))){
var inst_42570 = (state_42602[(9)]);
var inst_42570__$1 = (state_42602[(2)]);
var inst_42571 = (inst_42570__$1 == null);
var inst_42572 = cljs.core.not.call(null,inst_42571);
var state_42602__$1 = (function (){var statearr_42607 = state_42602;
(statearr_42607[(9)] = inst_42570__$1);

return statearr_42607;
})();
if(inst_42572){
var statearr_42608_42633 = state_42602__$1;
(statearr_42608_42633[(1)] = (5));

} else {
var statearr_42609_42634 = state_42602__$1;
(statearr_42609_42634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (15))){
var inst_42592 = (state_42602[(2)]);
var state_42602__$1 = state_42602;
var statearr_42610_42635 = state_42602__$1;
(statearr_42610_42635[(2)] = inst_42592);

(statearr_42610_42635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (13))){
var state_42602__$1 = state_42602;
var statearr_42611_42636 = state_42602__$1;
(statearr_42611_42636[(2)] = null);

(statearr_42611_42636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (6))){
var inst_42567 = (state_42602[(7)]);
var inst_42588 = (inst_42567 > (0));
var state_42602__$1 = state_42602;
if(cljs.core.truth_(inst_42588)){
var statearr_42612_42637 = state_42602__$1;
(statearr_42612_42637[(1)] = (12));

} else {
var statearr_42613_42638 = state_42602__$1;
(statearr_42613_42638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (3))){
var inst_42600 = (state_42602[(2)]);
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42602__$1,inst_42600);
} else {
if((state_val_42603 === (12))){
var inst_42566 = (state_42602[(8)]);
var inst_42590 = cljs.core.vec.call(null,inst_42566);
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42602__$1,(15),out,inst_42590);
} else {
if((state_val_42603 === (2))){
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42602__$1,(4),ch);
} else {
if((state_val_42603 === (11))){
var inst_42582 = (state_42602[(2)]);
var inst_42583 = (new Array(n));
var inst_42566 = inst_42583;
var inst_42567 = (0);
var state_42602__$1 = (function (){var statearr_42614 = state_42602;
(statearr_42614[(7)] = inst_42567);

(statearr_42614[(8)] = inst_42566);

(statearr_42614[(10)] = inst_42582);

return statearr_42614;
})();
var statearr_42615_42639 = state_42602__$1;
(statearr_42615_42639[(2)] = null);

(statearr_42615_42639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (9))){
var inst_42566 = (state_42602[(8)]);
var inst_42580 = cljs.core.vec.call(null,inst_42566);
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42602__$1,(11),out,inst_42580);
} else {
if((state_val_42603 === (5))){
var inst_42575 = (state_42602[(11)]);
var inst_42570 = (state_42602[(9)]);
var inst_42567 = (state_42602[(7)]);
var inst_42566 = (state_42602[(8)]);
var inst_42574 = (inst_42566[inst_42567] = inst_42570);
var inst_42575__$1 = (inst_42567 + (1));
var inst_42576 = (inst_42575__$1 < n);
var state_42602__$1 = (function (){var statearr_42616 = state_42602;
(statearr_42616[(11)] = inst_42575__$1);

(statearr_42616[(12)] = inst_42574);

return statearr_42616;
})();
if(cljs.core.truth_(inst_42576)){
var statearr_42617_42640 = state_42602__$1;
(statearr_42617_42640[(1)] = (8));

} else {
var statearr_42618_42641 = state_42602__$1;
(statearr_42618_42641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (14))){
var inst_42595 = (state_42602[(2)]);
var inst_42596 = cljs.core.async.close_BANG_.call(null,out);
var state_42602__$1 = (function (){var statearr_42620 = state_42602;
(statearr_42620[(13)] = inst_42595);

return statearr_42620;
})();
var statearr_42621_42642 = state_42602__$1;
(statearr_42621_42642[(2)] = inst_42596);

(statearr_42621_42642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (10))){
var inst_42586 = (state_42602[(2)]);
var state_42602__$1 = state_42602;
var statearr_42622_42643 = state_42602__$1;
(statearr_42622_42643[(2)] = inst_42586);

(statearr_42622_42643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42603 === (8))){
var inst_42575 = (state_42602[(11)]);
var inst_42566 = (state_42602[(8)]);
var tmp42619 = inst_42566;
var inst_42566__$1 = tmp42619;
var inst_42567 = inst_42575;
var state_42602__$1 = (function (){var statearr_42623 = state_42602;
(statearr_42623[(7)] = inst_42567);

(statearr_42623[(8)] = inst_42566__$1);

return statearr_42623;
})();
var statearr_42624_42644 = state_42602__$1;
(statearr_42624_42644[(2)] = null);

(statearr_42624_42644[(1)] = (2));


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
});})(c__40814__auto___42630,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42630,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42625[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42625[(1)] = (1));

return statearr_42625;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42602){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42626){if((e42626 instanceof Object)){
var ex__40728__auto__ = e42626;
var statearr_42627_42645 = state_42602;
(statearr_42627_42645[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42646 = state_42602;
state_42602 = G__42646;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42630,out))
})();
var state__40816__auto__ = (function (){var statearr_42628 = f__40815__auto__.call(null);
(statearr_42628[(6)] = c__40814__auto___42630);

return statearr_42628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42630,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42648 = arguments.length;
switch (G__42648) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40814__auto___42718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40814__auto___42718,out){
return (function (){
var f__40815__auto__ = (function (){var switch__40724__auto__ = ((function (c__40814__auto___42718,out){
return (function (state_42690){
var state_val_42691 = (state_42690[(1)]);
if((state_val_42691 === (7))){
var inst_42686 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42692_42719 = state_42690__$1;
(statearr_42692_42719[(2)] = inst_42686);

(statearr_42692_42719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (1))){
var inst_42649 = [];
var inst_42650 = inst_42649;
var inst_42651 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42690__$1 = (function (){var statearr_42693 = state_42690;
(statearr_42693[(7)] = inst_42651);

(statearr_42693[(8)] = inst_42650);

return statearr_42693;
})();
var statearr_42694_42720 = state_42690__$1;
(statearr_42694_42720[(2)] = null);

(statearr_42694_42720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (4))){
var inst_42654 = (state_42690[(9)]);
var inst_42654__$1 = (state_42690[(2)]);
var inst_42655 = (inst_42654__$1 == null);
var inst_42656 = cljs.core.not.call(null,inst_42655);
var state_42690__$1 = (function (){var statearr_42695 = state_42690;
(statearr_42695[(9)] = inst_42654__$1);

return statearr_42695;
})();
if(inst_42656){
var statearr_42696_42721 = state_42690__$1;
(statearr_42696_42721[(1)] = (5));

} else {
var statearr_42697_42722 = state_42690__$1;
(statearr_42697_42722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (15))){
var inst_42680 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42698_42723 = state_42690__$1;
(statearr_42698_42723[(2)] = inst_42680);

(statearr_42698_42723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (13))){
var state_42690__$1 = state_42690;
var statearr_42699_42724 = state_42690__$1;
(statearr_42699_42724[(2)] = null);

(statearr_42699_42724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (6))){
var inst_42650 = (state_42690[(8)]);
var inst_42675 = inst_42650.length;
var inst_42676 = (inst_42675 > (0));
var state_42690__$1 = state_42690;
if(cljs.core.truth_(inst_42676)){
var statearr_42700_42725 = state_42690__$1;
(statearr_42700_42725[(1)] = (12));

} else {
var statearr_42701_42726 = state_42690__$1;
(statearr_42701_42726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (3))){
var inst_42688 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42690__$1,inst_42688);
} else {
if((state_val_42691 === (12))){
var inst_42650 = (state_42690[(8)]);
var inst_42678 = cljs.core.vec.call(null,inst_42650);
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42690__$1,(15),out,inst_42678);
} else {
if((state_val_42691 === (2))){
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42690__$1,(4),ch);
} else {
if((state_val_42691 === (11))){
var inst_42654 = (state_42690[(9)]);
var inst_42658 = (state_42690[(10)]);
var inst_42668 = (state_42690[(2)]);
var inst_42669 = [];
var inst_42670 = inst_42669.push(inst_42654);
var inst_42650 = inst_42669;
var inst_42651 = inst_42658;
var state_42690__$1 = (function (){var statearr_42702 = state_42690;
(statearr_42702[(11)] = inst_42668);

(statearr_42702[(7)] = inst_42651);

(statearr_42702[(12)] = inst_42670);

(statearr_42702[(8)] = inst_42650);

return statearr_42702;
})();
var statearr_42703_42727 = state_42690__$1;
(statearr_42703_42727[(2)] = null);

(statearr_42703_42727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (9))){
var inst_42650 = (state_42690[(8)]);
var inst_42666 = cljs.core.vec.call(null,inst_42650);
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42690__$1,(11),out,inst_42666);
} else {
if((state_val_42691 === (5))){
var inst_42651 = (state_42690[(7)]);
var inst_42654 = (state_42690[(9)]);
var inst_42658 = (state_42690[(10)]);
var inst_42658__$1 = f.call(null,inst_42654);
var inst_42659 = cljs.core._EQ_.call(null,inst_42658__$1,inst_42651);
var inst_42660 = cljs.core.keyword_identical_QMARK_.call(null,inst_42651,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42661 = (inst_42659) || (inst_42660);
var state_42690__$1 = (function (){var statearr_42704 = state_42690;
(statearr_42704[(10)] = inst_42658__$1);

return statearr_42704;
})();
if(cljs.core.truth_(inst_42661)){
var statearr_42705_42728 = state_42690__$1;
(statearr_42705_42728[(1)] = (8));

} else {
var statearr_42706_42729 = state_42690__$1;
(statearr_42706_42729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (14))){
var inst_42683 = (state_42690[(2)]);
var inst_42684 = cljs.core.async.close_BANG_.call(null,out);
var state_42690__$1 = (function (){var statearr_42708 = state_42690;
(statearr_42708[(13)] = inst_42683);

return statearr_42708;
})();
var statearr_42709_42730 = state_42690__$1;
(statearr_42709_42730[(2)] = inst_42684);

(statearr_42709_42730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (10))){
var inst_42673 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42710_42731 = state_42690__$1;
(statearr_42710_42731[(2)] = inst_42673);

(statearr_42710_42731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (8))){
var inst_42654 = (state_42690[(9)]);
var inst_42650 = (state_42690[(8)]);
var inst_42658 = (state_42690[(10)]);
var inst_42663 = inst_42650.push(inst_42654);
var tmp42707 = inst_42650;
var inst_42650__$1 = tmp42707;
var inst_42651 = inst_42658;
var state_42690__$1 = (function (){var statearr_42711 = state_42690;
(statearr_42711[(7)] = inst_42651);

(statearr_42711[(8)] = inst_42650__$1);

(statearr_42711[(14)] = inst_42663);

return statearr_42711;
})();
var statearr_42712_42732 = state_42690__$1;
(statearr_42712_42732[(2)] = null);

(statearr_42712_42732[(1)] = (2));


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
});})(c__40814__auto___42718,out))
;
return ((function (switch__40724__auto__,c__40814__auto___42718,out){
return (function() {
var cljs$core$async$state_machine__40725__auto__ = null;
var cljs$core$async$state_machine__40725__auto____0 = (function (){
var statearr_42713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42713[(0)] = cljs$core$async$state_machine__40725__auto__);

(statearr_42713[(1)] = (1));

return statearr_42713;
});
var cljs$core$async$state_machine__40725__auto____1 = (function (state_42690){
while(true){
var ret_value__40726__auto__ = (function (){try{while(true){
var result__40727__auto__ = switch__40724__auto__.call(null,state_42690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40727__auto__;
}
break;
}
}catch (e42714){if((e42714 instanceof Object)){
var ex__40728__auto__ = e42714;
var statearr_42715_42733 = state_42690;
(statearr_42715_42733[(5)] = ex__40728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42734 = state_42690;
state_42690 = G__42734;
continue;
} else {
return ret_value__40726__auto__;
}
break;
}
});
cljs$core$async$state_machine__40725__auto__ = function(state_42690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40725__auto____1.call(this,state_42690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40725__auto____0;
cljs$core$async$state_machine__40725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40725__auto____1;
return cljs$core$async$state_machine__40725__auto__;
})()
;})(switch__40724__auto__,c__40814__auto___42718,out))
})();
var state__40816__auto__ = (function (){var statearr_42716 = f__40815__auto__.call(null);
(statearr_42716[(6)] = c__40814__auto___42718);

return statearr_42716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40816__auto__);
});})(c__40814__auto___42718,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525108939286
