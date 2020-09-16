/*
jQWidgets v10.1.3 (2020-Sep)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxButtonGroup","",{});a.extend(a.jqx._jqxButtonGroup.prototype,{defineInstance:function(){var b={mode:"default",roundedCorners:true,disabled:false,enableHover:false,orientation:"horizontal",width:null,height:null,_eventsMap:{mousedown:a.jqx.mobile.getTouchEventName("touchstart"),mouseup:a.jqx.mobile.getTouchEventName("touchend")},_events:["selected","unselected","buttonclick"],_buttonId:{},_selected:null,_pressed:null,rtl:false,template:"",_baseId:"group_button",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};if(this===a.jqx._jqxButtonGroup.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){var c=this;c._isTouchDevice=a.jqx.mobile.isTouchDevice();a.jqx.aria(c);c._baseId=c._baseId+c.element.id;c.addHandler(c.host,"selectstart",function(d){if(!c.disabled){d.preventDefault()}})},refresh:function(){var b=this;if(b.width){if(b.width.toString()&&b.width.toString().indexOf("%")>=0){b.element.style.width=b.width}else{b.host.width(b.width)}}if(b.height){b.host.height(b.height)}b._refreshButtons()},render:function(){this.refresh()},resize:function(){this.refresh()},_getEvent:function(c){var b=this;if(b._isTouchDevice){var d=b._eventsMap[c]||c;d+="."+b.element.id;return d}c+="."+b.element.id;return c},_refreshButtons:function(){var f=this;if(f.lastElement){f.lastElement.remove()}f.lastElement=a("<div style='clear: both;'></div>");var c=f.host.children(),e=c.length,g;switch(f.mode){case"radio":f.host.attr("role","radiogroup");break;case"checkbox":case"default":f.host.attr("role","group");break}var d=new Number(100/e).toFixed(2);for(var b=0;b<e;b+=1){g=a(c[b]);if(f.width){if(f.orientation==="horizontal"){g.css("width",d+"%");g.css("box-sizing","border-box");g.css("-moz-box-sizing","border-box");g.css("white-space","nowrap");g.css("text-overflow","ellipsis");g.css("overflow","hidden")}else{g.css("box-sizing","border-box");g.css("-moz-box-sizing","border-box");g.css("width","100%")}}f._refreshButton(g,b,e)}f.lastElement.appendTo(f.host)},_refreshButton:function(c,b,d){(function(e){var f=this;e=f._render(e);f._removeStyles(e);f._addStyles(e,b,d);f._performLayout(e);f._removeButtonListeners(e);f._addButtonListeners(e);f._handleButtonId(e,b);if(f.mode==="radio"){e.attr("role","radio")}else{e.attr("role","button")}e.attr("disabled",f.disabled);if(f.disabled){e.addClass(f.toThemeProperty("jqx-fill-state-disabled"))}else{e.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))}}).apply(this,[c])},destroy:function(b){var f=this;var d=f.host.children(),e=d.length,g;for(var c=0;c<e;c+=1){g=a(d[c]);f._removeStyles(g);f._removeButtonListeners(g)}if(b!==false){f.host.remove()}},_render:function(b){var c=this;if(b[0].tagName.toLowerCase()==="button"){return c._renderFromButton(b)}else{return c._renderButton(b)}},_renderButton:function(b){var c;b.wrapInner("<div/>");return b},_removeStyles:function(b){var c=this;var d=c.toThemeProperty;c.host.removeClass("jqx-widget");c.host.removeClass("jqx-rc-all");b.removeClass(d.call(this,"jqx-fill-state-normal"));b.removeClass(d.call(this,"jqx-group-button-normal"));b.removeClass(d.call(this,"jqx-rc-tl"));b.removeClass(d.call(this,"jqx-rc-bl"));b.removeClass(d.call(this,"jqx-rc-tr"));b.removeClass(d.call(this,"jqx-rc-br"));b.css("margin-left",0)},_addStyles:function(c,b,e){var d=this;var f=this.toThemeProperty;d.host.addClass(f.call(this,"jqx-widget"));d.host.addClass(f.call(this,"jqx-rc-all"));d.host.addClass(f.call(this,"jqx-buttongroup"));c.addClass(f.call(this,"jqx-button"));c.addClass(f.call(this,"jqx-group-button-normal"));c.addClass(f.call(this,"jqx-fill-state-normal"));if(d.template){c.addClass(f.call(this,"jqx-"+d.template))}if(d.roundedCorners){if(b===0){d._addRoundedCorners(c,true)}else{if(b===e-1){d._addRoundedCorners(c,false)}}}if(d.orientation==="horizontal"){c.css("margin-left",-parseInt(c.css("border-left-width"),10))}else{c.css("margin-top",-parseInt(c.css("border-left-width"),10))}},_addRoundedCorners:function(b,d){var c=this;var e=c.toThemeProperty;if(c.orientation==="horizontal"){if(d){b.addClass(e.call(this,"jqx-rc-tl"));b.addClass(e.call(this,"jqx-rc-bl"))}else{b.addClass(e.call(this,"jqx-rc-tr"));b.addClass(e.call(this,"jqx-rc-br"))}}else{if(d){b.addClass(e.call(this,"jqx-rc-tl"));b.addClass(e.call(this,"jqx-rc-tr"))}else{b.addClass(e.call(this,"jqx-rc-bl"));b.addClass(e.call(this,"jqx-rc-br"))}}},_centerContent:function(c,b){c.css({"margin-top":(b.height()-c.height())/2,"margin-left":(b.width()-c.width())/2});return c},_renderFromButton:function(b){var c=b.val();if(c===""){c=b.html()}var e;var d=b[0].id;b.wrap("<div/>");e=b.parent();e.attr("style",b.attr("style"));b.remove();a.jqx.utilities.html(e,c);e[0].id=d;return e},_performLayout:function(b){if(this.orientation==="horizontal"){if(this.rtl){b.css("float","right")}else{b.css("float","left")}}else{b.css("float","none")}this._centerContent(a(b.children()),b)},_mouseEnterHandler:function(d){var b=d.data.self,c=a(d.currentTarget);if(b._isDisabled(c)||!b.enableHover){return}var f=b.toThemeProperty;c.addClass(f.call(b,"jqx-group-button-hover"));c.addClass(f.call(b,"jqx-fill-state-hover"))},_mouseLeaveHandler:function(d){var b=d.data.self,c=a(d.currentTarget);if(b._isDisabled(c)||!b.enableHover){return}var f=b.toThemeProperty;c.removeClass(f.call(b,"jqx-group-button-hover"));c.removeClass(f.call(b,"jqx-fill-state-hover"))},_mouseDownHandler:function(d){var b=d.data.self,c=a(d.currentTarget);if(b._isDisabled(c)){return}b._pressed=c;var f=b.toThemeProperty;c.addClass(f.call(b,"jqx-group-button-pressed"));c.addClass(f.call(b,"jqx-fill-state-pressed"))},_mouseUpHandler:function(d){var b=d.data.self,c=a(d.currentTarget);if(b._isDisabled(c)){return}b._handleSelection(c);b._pressed=null;c=b._buttonId[c[0].id];b._raiseEvent(2,{index:c.num,button:c.btn})},_isDisabled:function(b){if(!b||!b[0]){return false}return this._buttonId[b[0].id].disabled},_documentUpHandler:function(d){var b=d.data.self,c=b._pressed;if(c&&!b._buttonId[c[0].id].selected){c.removeClass(b.toThemeProperty("jqx-fill-state-pressed"));b._pressed=null}},_addButtonListeners:function(c){var e=this;var b=e.addHandler;var d=e._getEvent;b(c,d.call(e,"mouseenter"),e._mouseEnterHandler,{self:e});b(c,d.call(e,"mouseleave"),e._mouseLeaveHandler,{self:e});b(c,d.call(e,"mousedown"),e._mouseDownHandler,{self:e});b(c,d.call(e,"mouseup"),e._mouseUpHandler,{self:e});b(a(document),d.call(e,"mouseup"),e._documentUpHandler,{self:e})},_removeButtonListeners:function(c){var e=this;var b=e.removeHandler;var d=e._getEvent;b(c,d.call(e,"mouseenter"),e._mouseEnterHandler);b(c,d.call(e,"mouseleave"),e._mouseLeaveHandler);b(c,d.call(e,"mousedown"),e._mouseDownHandler);b(c,d.call(e,"mouseup"),e._mouseUpHandler);b(a(document),d.call(e,"mouseup"),e._documentUpHandler)},_handleSelection:function(b){var c=this;if(c.mode==="radio"){c._handleRadio(b)}else{if(c.mode==="checkbox"){c._handleCheckbox(b)}else{c._handleDefault(b)}}},_handleRadio:function(b){var d=this;var c=d._getSelectedButton();if(c&&c.btn[0].id!==b[0].id){d._unselectButton(c.btn,true)}for(var e in d._buttonId){d._buttonId[e].selected=true;d._unselectButton(d._buttonId[e].btn,false)}d._selectButton(b,true)},_handleCheckbox:function(c){var d=this;var b=d._buttonId[c[0].id];if(b.selected){d._unselectButton(b.btn,true)}else{d._selectButton(c,true)}},_handleDefault:function(b){var c=this;c._selectButton(b,false);for(var d in c._buttonId){c._buttonId[d].selected=true;c._unselectButton(c._buttonId[d].btn,false)}},_getSelectedButton:function(){var b=this;for(var c in b._buttonId){if(b._buttonId[c].selected){return b._buttonId[c]}}return null},_getSelectedButtons:function(){var c=this;var b=[];for(var d in c._buttonId){if(c._buttonId[d].selected){b.push(c._buttonId[d].num)}}return b},_getButtonByIndex:function(b){var c=this;var e;for(var d in c._buttonId){if(c._buttonId[d].num===b){return c._buttonId[d]}}return null},_selectButton:function(c,e){var d=this;var b=d._buttonId[c[0].id];if(b.selected){return}var f=d.toThemeProperty;b.btn.addClass(f.call(this,"jqx-group-button-pressed"));b.btn.addClass(f.call(this,"jqx-fill-state-pressed"));b.selected=true;if(e){d._raiseEvent(0,{index:b.num,button:b.btn})}a.jqx.aria(b.btn,"aria-checked",true)},_unselectButton:function(c,e){var d=this;var b=d._buttonId[c[0].id];if(!b.selected){return}var f=d.toThemeProperty;b.btn.removeClass(f.call(this,"jqx-group-button-pressed"));b.btn.removeClass(f.call(this,"jqx-fill-state-pressed"));b.selected=false;if(e){d._raiseEvent(1,{index:b.num,button:b.btn})}a.jqx.aria(b.btn,"aria-checked",false)},setSelection:function(b){var d=this;if(b===-1){d.clearSelection();return}if(d.mode==="checkbox"){if(typeof b==="number"){d._setSelection(b)}else{for(var c=0;c<b.length;c+=1){d._setSelection(b[c])}}}else{if(typeof b==="number"&&d.mode==="radio"){d._setSelection(b)}}},_setSelection:function(b){var d=this;var c=d._getButtonByIndex(b);if(c){d._handleSelection(c.btn)}},getSelection:function(){var b=this;if(b.mode==="radio"){if(b._getSelectedButton()){return b._getSelectedButton().num}}else{if(b.mode==="checkbox"){return b._getSelectedButtons()}}return undefined},disable:function(){var c=this;c.disabled=true;var d;for(var b in c._buttonId){d=c._buttonId[b];c.disableAt(d.num)}a.jqx.aria(c,"aria-disabled",true)},enable:function(){var c=this;c.disabled=false;var d;for(var b in c._buttonId){d=c._buttonId[b];c.enableAt(d.num)}a.jqx.aria(c,"aria-disabled",false)},disableAt:function(b){var d=this;var c=d._getButtonByIndex(b);if(!c.disabled){c.disabled=true;c.btn.addClass(d.toThemeProperty("jqx-fill-state-disabled"))}},enableAt:function(b){var d=this;var c=d._getButtonByIndex(b);if(c.disabled){c.disabled=false;c.btn.removeClass(d.toThemeProperty("jqx-fill-state-disabled"))}},_handleButtonId:function(b,d){var f=b[0].id,e={btn:b,num:d,selected:false},c;if(!f){f=this._baseId+b.index()}b[0].id=f;this._buttonId[f]=e;return f},_raiseEvent:function(d,c){var b=a.Event(this._events[d]);b.args=c;return this.host.trigger(b)},_unselectAll:function(){for(var b in this._buttonId){this._unselectButton(this._buttonId[b].btn,false)}},clearSelection:function(){this._unselectAll()},propertyChangedHandler:function(b,c,e,d){if(c==="theme"&&d!==null){a.jqx.utilities.setTheme(e,d,b.host)}if(c==="rtl"){b.refresh()}if(c==="template"){b.refresh()}if(c==="mode"){b._unselectAll();b.refresh();return}else{if(c==="disabled"){if(d){b.disable()}else{b.enable()}}else{b.refresh()}}}})})(jqxBaseFramework);

