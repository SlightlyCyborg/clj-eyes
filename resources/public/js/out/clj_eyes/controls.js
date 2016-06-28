// Compiled by ClojureScript 1.8.51 {}
goog.provide('clj_eyes.controls');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('clj_eyes.img_frame');
goog.require('clj_eyes.param_handling');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('jayq.core');
goog.require('taoensso.encore');
goog.require('clj_eyes.socket');
clj_eyes.controls.upload_file = (function clj_eyes$controls$upload_file(){
return cljs_http.client.post.call(null,"/upload-src",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),"data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src-file",document.getElementById("source-file").files.item((0))], null)], null)], null));
});
clj_eyes.controls.bind_on_file_select = (function clj_eyes$controls$bind_on_file_select(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.controls.upload_file);
});
clj_eyes.controls.init_upload_button = (function clj_eyes$controls$init_upload_button(){
return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-source-upload","#select-source-upload",-1593243413)),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return jayq.core.trigger.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#source-file","#source-file",-1314187081)),new cljs.core.Keyword(null,"click","click",1912301393));
}));
});
clj_eyes.controls.handle_select_transform = (function clj_eyes$controls$handle_select_transform(){
console.log("handling selection");

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","add-transformation","pipeline/add-transformation",1247270676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-selection","transformation-selection",-1276645577),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"parent-frame","parent-frame",624801715),jayq.core.attr.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),new cljs.core.Keyword(null,"img","img",1442687358)).first(),new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null));
});
jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#submit-new-filter-option","#submit-new-filter-option",404909333)),new cljs.core.Keyword(null,"click","click",1912301393),clj_eyes.controls.handle_select_transform);
clj_eyes.controls.jq_each = (function clj_eyes$controls$jq_each(selector,each_fn){
var elements = cljs.core.js__GT_clj.call(null,jayq.core.$.call(null,selector));
var n__22622__auto__ = cljs.core.count.call(null,elements);
var el_num = (0);
while(true){
if((el_num < n__22622__auto__)){
each_fn.call(null,el_num,cljs.core.nth.call(null,elements,el_num));

var G__29042 = (el_num + (1));
el_num = G__29042;
continue;
} else {
return null;
}
break;
}
});
clj_eyes.controls.handle_transform_param_change = (function clj_eyes$controls$handle_transform_param_change(){

var params = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
console.log("params changed");

clj_eyes.controls.jq_each.call(null,".transform-param",((function (params){
return (function (i,item){
return cljs.core.swap_BANG_.call(null,params,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),jayq.core.attr.call(null,jayq.core.$.call(null,item),"name"),new cljs.core.Keyword(null,"value","value",305978217),item.value], null));
});})(params))
);

return clj_eyes.socket.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opencv","load-transformation","opencv/load-transformation",1699533857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformation-name","transformation-name",-1059066008),jayq.core.val.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#select-transform","#select-transform",1569387196))),new cljs.core.Keyword(null,"transformation-params","transformation-params",-1372640963),cljs.core.deref.call(null,params)], null)], null));
});
clj_eyes.controls.other_transform = (function clj_eyes$controls$other_transform(){
return console.log("params changed");
});
clj_eyes.controls.load_transform_options = (function clj_eyes$controls$load_transform_options(html){
jayq.core.html.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#transform-options","#transform-options",-1212368927)),html);

return jayq.core.bind.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".transform-param",".transform-param",-1311235543)),new cljs.core.Keyword(null,"change","change",-1163046502),clj_eyes.controls.handle_transform_param_change);
});
clj_eyes.controls.add_transformation = (function clj_eyes$controls$add_transformation(html){
console.log(html);

return jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".pipeline-frame",".pipeline-frame",-1655973309)).last(),html);
});
if(typeof clj_eyes.controls._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
clj_eyes.controls._event_msg_handler = (function (){var method_table__22632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22636__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clj-eyes.controls","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22636__auto__,method_table__22632__auto__,prefer_table__22633__auto__,method_cache__22634__auto__,cached_hierarchy__22635__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
clj_eyes.controls.event_msg_handler = (function clj_eyes$controls$event_msg_handler(p__29043){
var map__29046 = p__29043;
var map__29046__$1 = ((((!((map__29046 == null)))?((((map__29046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29046):map__29046);
var ev_msg = map__29046__$1;
var id = cljs.core.get.call(null,map__29046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__29046__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__29046__$1,new cljs.core.Keyword(null,"event","event",301435442));
return clj_eyes.controls._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__29048){
var map__29049 = p__29048;
var map__29049__$1 = ((((!((map__29049 == null)))?((((map__29049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29049):map__29049);
var ev_msg = map__29049__$1;
var _QMARK_data = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return console.log("Channel socket successfully established!: %s",_QMARK_data);
} else {
return console.log("Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__29051){
var map__29052 = p__29051;
var map__29052__$1 = ((((!((map__29052 == null)))?((((map__29052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29052):map__29052);
var ev_msg = map__29052__$1;
var _QMARK_data = cljs.core.get.call(null,map__29052__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("opencv","reload","opencv/reload",-414791604),(function (p__29054){
var map__29055 = p__29054;
var map__29055__$1 = ((((!((map__29055 == null)))?((((map__29055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29055):map__29055);
var ev_msg = map__29055__$1;
var _QMARK_data = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log("Server notified client of img change. Reloading");

return clj_eyes.img_frame.reload_image_frame.call(null);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","reload-img","pipeline/reload-img",386896552),(function (p__29057){
var map__29058 = p__29057;
var map__29058__$1 = ((((!((map__29058 == null)))?((((map__29058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29058):map__29058);
var ev_msg = map__29058__$1;
var _QMARK_data = cljs.core.get.call(null,map__29058__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log("Reloading img");

console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.img_frame.reload_image.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(_QMARK_data)));
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","ws-error","chsk/ws-error",260168922),(function (p__29060){
var map__29061 = p__29060;
var map__29061__$1 = ((((!((map__29061 == null)))?((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);
var ev_msg = map__29061__$1;
var _QMARK_data = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log("Error event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__29063){
var map__29064 = p__29063;
var map__29064__$1 = ((((!((map__29064 == null)))?((((map__29064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29064):map__29064);
var ev_msg = map__29064__$1;
var _QMARK_data = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__29066 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__29066,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29066,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29066,(2),null);
return console.log("Handshake: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("opencv","load-transformation-options","opencv/load-transformation-options",-51269651),(function (p__29067){
var map__29068 = p__29067;
var map__29068__$1 = ((((!((map__29068 == null)))?((((map__29068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29068):map__29068);
var ev_msg = map__29068__$1;
var _QMARK_data = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return clj_eyes.controls.load_transform_options.call(null,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(_QMARK_data));
}));
cljs.core._add_method.call(null,clj_eyes.controls._event_msg_handler,new cljs.core.Keyword("pipeline","load-transformation-frame","pipeline/load-transformation-frame",1940846010),(function (p__29070){
var map__29071 = p__29070;
var map__29071__$1 = ((((!((map__29071 == null)))?((((map__29071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);
var ev_msg = map__29071__$1;
var _QMARK_data = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
clj_eyes.controls.add_transformation.call(null,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(_QMARK_data));

return clj_eyes.param_handling.bind_inputs_on_change.call(null,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(_QMARK_data));
}));
clj_eyes.controls.init_upload_button.call(null);
clj_eyes.controls.bind_on_file_select.call(null);
if(typeof clj_eyes.controls.router_ !== 'undefined'){
} else {
clj_eyes.controls.router_ = cljs.core.atom.call(null,null);
}
clj_eyes.controls.stop_router_BANG_ = (function clj_eyes$controls$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,clj_eyes.controls.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
clj_eyes.controls.start_router_BANG_ = (function clj_eyes$controls$start_router_BANG_(){
clj_eyes.controls.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,clj_eyes.controls.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,clj_eyes.socket.ch_chsk,clj_eyes.controls.event_msg_handler));
});
clj_eyes.controls.start_router_BANG_.call(null);

//# sourceMappingURL=controls.js.map?rel=1467093325799