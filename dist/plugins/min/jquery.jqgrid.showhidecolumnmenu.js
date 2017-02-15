/*
 Copyright (c) 2014-2016, Oleg Kiriljuk, oleg.kiriljuk@ok-soft-gmbh.com
 Dual licensed under the MIT and GPL licenses
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl-2.0.html
 Date: 2014-11-13, 2015-04-06
 see https://github.com/tonytomov/jqGrid/issues/650 for more details
*/
var $jscomp={scope:{},findInternal:function(a,d,b){a instanceof String&&(a=String(a));for(var e=a.length,g=0;g<e;g++){var k=a[g];if(d.call(b,k,g,a))return{i:g,v:k}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,d,b,e){if(d){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var g=a[e];g in b||(b[g]={});b=b[g]}a=a[a.length-1];e=b[a];d=d(e);d!=e&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","./jquery.contextmenu-ui","free-jqgrid/grid.base"],a):"object"===typeof module&&module.exports?module.exports=function(d,b){void 0===b&&(b="undefined"!==typeof window?require("jquery"):require("jquery")(d||window));a(b);return b}:a(jQuery)})(function(a){a.jgrid=a.jgrid||{};a.extend(a.jgrid,{showHideColumnMenu:{adjustGridWidth:!0,viewHideDlgColumnsAsDisabled:!1,allowHideInernalColumns:!1,shrink:!1,menuStyle:{"float":"left"},modifyMenuItem:function(d,
b,e){0<=a.inArray(b.name,["rn","subgrid","cb"])?e.allowHideInernalColumns||d.hide():b.hidedlg&&(e.viewHideDlgColumnsAsDisabled?d.addClass("ui-state-disabled"):d.hide())}}});a.jgrid.extend({showHideColumnMenu:function(d){var b=a.extend(!0,{},a.jgrid.showHideColumnMenu,d);d=null!=a.ui&&"string"===typeof a.ui.version?/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(a.ui.version):[];var e=null!=d&&4===d.length&&"1"===d[1]&&11>d[2];return this.each(function(){var d=a(this),k=function(){a(this.grid.hDiv).find(".ui-jqgrid-labels").contextmenu(function(m){for(var c=
d.jqGrid("getGridParam"),g=c.colModel,h=c.colNames,k=g.length,f,p=c.groupHeader,u={},q={},r,t,v,n,l=a("<ul class='ui-jqgrid-showHideColumnMenu'></ul>"),c=0;c<k;c++)u[g[c].name]=c;if(null!=p&&null!=p.groupHeaders)for(r=0,v=p.groupHeaders.length;r<v;r++)for(n=p.groupHeaders[r],t=0;t<n.numberOfColumns;t++)c=u[n.startColumnName]+t,f=g[c],q[c]=a.isFunction(b.buildItemText)?b.buildItemText.call(d[0],{iCol:c,cm:f,cmName:f.name,colName:h[c],groupTitleText:n.titleText}):a.jgrid.stripHtml(n.titleText)+": "+
a.jgrid.stripHtml(""===h[c]?f.name:h[c]);for(c=0;c<k;c++)void 0===q[c]&&(f=g[c],q[c]=a.isFunction(b.buildItemText)?b.buildItemText.call(d[0],{iCol:c,cm:f,cmName:f.name,colName:h[c],groupTitleText:null}):a.jgrid.stripHtml(h[c]));for(c=0;c<k;c++)f=g[c],h=a("<li></li>").data("iCol",c).html(q[c]),b.modifyMenuItem.call(d[0],h,f,b),h.prepend(f.hidden?b.checkboxUnChecked:b.checkboxChecked),e&&h.wrapInner("<a></a>"),h.appendTo(l);l.css(b.menuStyle);a("ul.ui-jqgrid-showHideColumnMenu").menu("destroy").remove();
l.appendTo("body").menu({select:function(c,e){var m=parseInt(e.item.data("iCol"),10),h=e.item.find(b.checkboxSelector),f=g[m],k=b.isChecked.call(d[0],h,c,f);!isNaN(m)&&0<=m&&null!=f&&0<h.length&&(k?(b.toUnCheck.call(d[0],h,c,f),d.jqGrid("hideCol",f.name)):(b.toCheck.call(d[0],h,c,f),d.jqGrid("showCol",f.name)),a(this).parent().css("zoom",1),l.menu("focus",c,e.item))},create:function(){var a=l.height(),b=window.innerHeight||document.documentElement.clientHeight;a>b&&l.height(b).css("overflow-y","scroll")}}).mouseleave(function(){a(this).menu("destroy").remove()}).position({of:a(m.target),
my:"left top",at:"right center",collision:"flipfit flipfit"});return!1})};b=a.extend(!0,"fontAwesome"===this.p.iconSet||"fontAwesome"===b.iconSet?{checkboxChecked:'<i class="fa fa-check-square-o fa-fw fa-lg"></i>&nbsp;',checkboxUnChecked:'<i class="fa fa-square-o fa-fw fa-lg"></i>&nbsp;',checkboxSelector:"i.fa",isChecked:function(a){return a.hasClass("fa-check-square-o")},toCheck:function(a){a.removeClass("fa-square-o").addClass("fa-check-square-o")},toUnCheck:function(a){a.removeClass("fa-check-square-o").addClass("fa-square-o")}}:
{checkboxChecked:'<input disabled="disabled" checked="checked" type="checkbox"/>',checkboxUnChecked:'<input disabled="disabled" type="checkbox"/>',checkboxSelector:"input[type=checkbox]",isChecked:function(a){return a.is(":checked")},toCheck:function(a){a.prop("checked",!0)},toUnCheck:function(a){a.prop("checked",!1)}},b);k.call(this);d.bind("jqGridAfterSetGroupHeaders",function(){k.call(this)})})}})});
//# sourceMappingURL=jquery.jqgrid.showhidecolumnmenu.map