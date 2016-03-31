(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var B=a.jgrid,v=B.jqID,z=a.fn.jqGrid,E=z.getGuiStyles,U=z.getGridRes;B.extend({getColProp:function(a){var b=this[0];return null!=b&&b.grid&&(a=b.p.iColByName[a],void 0!==a)?b.p.colModel[a]:{}},setColProp:function(g,b){return this.each(function(){var d=this.p,c;this.grid&&null!=d&&b&&(c=d.iColByName[g],void 0!==
c&&a.extend(!0,d.colModel[c],b))})},sortGrid:function(a,b,d){return this.each(function(){var c=this.grid,f=this.p,k=f.colModel,m=k.length,n,h,p=!1;if(c)for(a||(a=f.sortname),"boolean"!==typeof b&&(b=!1),h=0;h<m;h++)if(n=k[h],n.index===a||n.name===a){!0===f.frozenColumns&&!0===n.frozen&&(p=c.fhDiv.find("#"+f.id+"_"+a));p&&0!==p.length||(p=c.headers[h].el);c=n.sortable;("boolean"!==typeof c||c)&&this.sortData("jqgh_"+f.id+"_"+a,h,b,d,p);break}})},clearBeforeUnload:function(){return this.each(function(){var g=
this.p,b=this.grid,d,c=B.clearArray,f=Object.prototype.hasOwnProperty;a.isFunction(b.emptyRows)&&b.emptyRows.call(this,!0,!0);a(document).unbind("mouseup.jqGrid"+g.id);a(b.hDiv).unbind("mousemove");a(this).unbind();var k,m=b.headers.length;for(k=0;k<m;k++)b.headers[k].el=null;for(d in b)b.hasOwnProperty(d)&&(b.propOrMethod=null);b="formatCol sortData updatepager refreshIndex setHeadCheckBox constructTr clearToolbar fixScrollOffsetAndhBoxPadding rebuildRowIndexes modalAlert toggleToolbar triggerToolbar formatter addXmlData addJSONData ftoolbar _inlinenav nav grid p".split(" ");
m=b.length;for(k=0;k<m;k++)f.call(this,b[k])&&(this[b[k]]=null);this._index={};c(g.data);c(g.lastSelectedData);c(g.selarrrow);c(g.savedRow)})},GridDestroy:function(){return this.each(function(){var g=this.p;if(this.grid&&null!=g){g.pager&&a(g.pager).remove();try{a("#alertmod_"+g.idSel).remove(),a(this).jqGrid("clearBeforeUnload"),a(g.gBox).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){var g=a(this),b=this.p,d=a.fn.jqGrid;this.grid&&(g.removeClass(d.getGuiStyles.call(g,
"grid","ui-jqgrid-btable")),b.pager&&a(b.pager).empty().removeClass(d.getGuiStyles.call(g,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),g.jqGrid("clearBeforeUnload"),g.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),g.empty(),g.insertBefore(b.gBox).show(),a(b.pager).insertBefore(b.gBox).show(),a(b.gBox).remove())})},setGridState:function(g){return this.each(function(){var b=this.p,d=this.grid,c=d.cDiv,f=a(d.uDiv),
k=a(d.ubDiv);if(d&&null!=b){var d=z.getIconRes.call(this,"gridMinimize.visible"),m=z.getIconRes.call(this,"gridMinimize.hidden");"hidden"===g?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",b.gView).slideUp("fast"),b.pager&&a(b.pager).slideUp("fast"),b.toppager&&a(b.toppager).slideUp("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&k.slideUp("fast"),f.slideUp("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",c).removeClass(d).addClass(m),b.gridstate="hidden"):
"visible"===g&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",b.gView).slideDown("fast"),b.pager&&a(b.pager).slideDown("fast"),b.toppager&&a(b.toppager).slideDown("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&k.slideDown("fast"),f.slideDown("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",c).removeClass(m).addClass(d),b.gridstate="visible")}})},filterToolbar:function(g){return this.each(function(){var b=this,d=b.grid,c=a(b),f=b.p,k=B.bindEv,m=B.info_dialog,
n=B.htmlEncode;if(!this.ftoolbar){var h=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",idMode:"new",searchOperators:!1,resetIcon:"&times;",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},B.search,f.searching||{},g||{}),p=f.colModel,
q=function(a){return U.call(c,a)},Q=q("errors.errcap"),R=q("edit.bClose"),F=q("edit.msg"),x=E.call(b,"states.hover"),H=E.call(b,"states.select"),K=E.call(b,"filterToolbar.dataField"),I,w=function(a){var b="gs_";switch(h.idMode){case "compatibility":b+=f.idPrefix;break;case "new":b+=f.id+"_"}return b+a},A=function(b){var c=f.postData.filters,d={},g,t=f.iColByName,l,k;if(b)for(b=0;b<p.length;b++)l=p[b],!1!==l.search&&(k=l.searchoptions||{},d[l.name]={op:k.sopt?k.sopt[0]:"select"===l.stype?"eq":h.defaultSearch,
data:void 0!==k.defaultValue?k.defaultValue:""});if(!c||!f.search)return d;if("string"===typeof c)try{c=a.parseJSON(c)}catch(e){c={}}g=(c||{}).rules;if(null==c||c.groupOp.toUpperCase()!==h.groupOp.toUpperCase()||null==g||0===g.length||null!=c.groups&&0<c.groups.length)return d;for(b=0;b<g.length;b++)if(c=g[b],l=p[t[c.field]],null!=l&&!1!==l.search){k=l.searchoptions||{};if(k.sopt){if(0>a.inArray(c.op,k.sopt))continue}else if("select"===l.stype){if("eq"!==c.op)continue}else if(c.op!==h.defaultSearch)continue;
d[l.name]={op:c.op,data:c.data}}return d},J=function(){var g={},T=0,t={};a.each(p,function(){var c=this,k=c.index||c.name,e,l;e=c.searchoptions||{};var L=a("#"+v(w(c.name)),!0===c.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),m=function(a,b){var d=c.formatoptions||{};return void 0!==d[a]?d[a]:q("formatter."+(b||c.formatter)+"."+a)},n=function(a){var b=m("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return a.replace(new RegExp(b,"g"),"")};l=h.searchOperators?L.parent().prev().children("a").data("soper")||
h.defaultSearch:e.sopt?e.sopt[0]:"select"===c.stype?"eq":h.defaultSearch;if("custom"===c.stype&&a.isFunction(e.custom_value)&&0<L.length&&"SPAN"===L[0].nodeName.toUpperCase())e=e.custom_value.call(b,L.children(".customelement").first(),"get");else if("select"===c.stype)e=L.val();else switch(e=a.trim(L.val()),c.formatter){case "integer":e=n(e).replace(m("decimalSeparator","number"),".");""!==e&&(e=String(parseInt(e,10)));break;case "number":e=n(e).replace(m("decimalSeparator"),".");""!==e&&"0"===String(e).charAt(0)&&
(e=String(parseFloat(e)));break;case "currency":var L=m("prefix"),D=m("suffix");L&&L.length&&(e=e.substr(L.length));D&&D.length&&(e=e.substr(0,e.length-D.length));e=n(e).replace(m("decimalSeparator"),".");""!==e&&(e=String(parseFloat(e)))}if(e||"nu"===l||"nn"===l)g[k]=e,t[k]=l,T++;else try{delete f.postData[k]}catch(p){}});var k=0<T?!0:!1;if(h.stringResult||h.searchOperators||"local"===f.datatype){var e='{"groupOp":"'+h.groupOp+'","rules":[',l=0;a.each(g,function(a,b){0<l&&(e+=",");e+='{"field":"'+
a+'",';e+='"op":"'+t[a]+'",';e+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';l++});e+="]}";a.extend(f.postData,{filters:e});a.each(["searchField","searchString","searchOper"],function(a,b){f.postData.hasOwnProperty(b)&&delete f.postData[b]})}else a.extend(f.postData,g);var m;f.searchurl&&(m=f.url,c.jqGrid("setGridParam",{url:f.searchurl}));var n="stop"===c.triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!n&&a.isFunction(h.beforeSearch)&&(n=h.beforeSearch.call(b));n||c.jqGrid("setGridParam",
{search:k}).trigger("reloadGrid",[a.extend({page:1},h.reloadGridSearchOptions||{})]);m&&c.jqGrid("setGridParam",{url:m});c.triggerHandler("jqGridToolbarAfterSearch");a.isFunction(h.afterSearch)&&h.afterSearch.call(b)},M=q("search.odata")||[],t=f.customSortOperations,e=function(d,e,g){a("#sopt_menu").remove();e=parseInt(e,10);g=parseInt(g,10)+18;var k,m=0,l=[],D=a(d).data("soper"),m=a(d).data("colname"),G=a(".ui-jqgrid-view").css("font-size")||"11px";e="<ul id='sopt_menu' class='"+E.call(b,"searchToolbar.menu",
"ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+G+";left:"+e+"px;top:"+g+"px;'>";m=f.iColByName[m];if(void 0!==m){m=p[m];g=a.extend({},m.searchoptions);var r,u;g.sopt||(g.sopt=[],g.sopt[0]="select"===m.stype?"eq":h.defaultSearch);a.each(M,function(){l.push(this.oper)});null!=t&&a.each(t,function(a){l.push(a)});for(m=0;m<g.sopt.length;m++)G=g.sopt[m],k=a.inArray(G,l),-1!==k&&(k=M[k],void 0!==k?(u=h.operands[G],r=k.text):null!=t&&(r=t[G],u=r.operand,r=r.text),
k=D===G?H:"",e+='<li class="ui-menu-item '+k+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+n(G)+'" data-oper="'+n(u)+'"><table><tr><td style="width:25px">'+n(u)+"</td><td>"+n(r)+"</td></tr></table></a></li>");e+="</ul>";a("body").append(e);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");a("#sopt_menu > li > a").hover(function(){a(this).addClass(x)},function(){a(this).removeClass(x)}).click(function(){var b=a(this).attr("value"),
e=a(this).data("oper");c.triggerHandler("jqGridToolbarSelectOper",[b,e,d]);a("#sopt_menu").hide();a(d).text(e).data("soper",b);!0===h.autosearch&&(e=a(d).parent().next().children()[0],(a(e).val()||"nu"===b||"nn"===b)&&J())})}},D,P=a("<tr></tr>",{"class":"ui-search-toolbar",role:"row"});h.loadFilterDefaults&&(I=A()||{});a.each(p,function(c){var d,e;e="";var g,n,l=this.searchoptions||{},p=this.editoptions||{},G=a("<th></th>",{"class":E.call(b,"colHeaders","ui-th-column ui-th-"+f.direction+" "+(h.applyLabelClasses?
this.labelClasses||"":""))}),r=a("<div></div>"),u=a("<table class='ui-search-table'><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></table>");!0===this.hidden&&a(G).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");d=a.extend({mode:"filter"},l);if(this.search){if(h.searchOperators){e=f.search&&null!=I[this.name]?I[this.name].op:d.sopt?d.sopt[0]:"select"===this.stype?"eq":h.defaultSearch;
for(n=0;n<M.length;n++)if(M[n].oper===e){g=h.operands[e]||"";break}if(void 0===g&&null!=t)for(var S in t)if(t.hasOwnProperty(S)&&S===e){g=t[S].operand;break}void 0===g&&(g="=");e="<a title='"+(null!=d.searchtitle?d.searchtitle:q("search.operandTitle"))+"' data-soper='"+e+"' class='"+E.call(b,"searchToolbar.operButton","soptclass")+"' data-colname='"+this.name+"'>"+g+"</a>"}a("td",u).first().data("colindex",c).append(e);null!=d.sopt&&1!==d.sopt.length||a("td.ui-search-oper",u).hide();f.search&&null!=
I[this.name]&&(d.defaultValue=I[this.name].data);void 0===d.clearSearch&&(d.clearSearch="text"===this.stype?!0:!1);d.clearSearch?(e=q("search.resetTitle")||"Clear Search Value",a("td",u).eq(2).append("<a title='"+e+"' class='"+E.call(b,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+h.resetIcon+"</span></a>")):a("td",u).eq(2).hide();switch(this.stype){case "select":if(e=this.surl||d.dataUrl)a(r).append(u),a.ajax(a.extend({url:e,context:{stbl:u,options:d,cm:this,iCol:c},dataType:"html",
success:function(a,c,e){c=this.cm;var g=this.iCol,f=this.options,t=this.stbl.find(">tbody>tr>td.ui-search-input");void 0!==f.buildSelect?(a=f.buildSelect.call(b,a,e,c,g))&&t.append(a):t.append(a);a=t.children("select");0===a.find("option[value='']").length&&"string"===typeof d.noFilterText&&(y=document.createElement("option"),y.value="",y.innerHTML=d.noFilterText,a.prepend(y));void 0!==f.defaultValue&&a.val(f.defaultValue);a.attr({name:c.index||c.name,id:w(c.name)});f.attr&&a.attr(f.attr);a.addClass(K);
a.css({width:"100%"});k.call(b,a[0],f);B.fullBoolFeedback.call(b,f.selectFilled,"jqGridSelectFilled",{elem:a[0],options:f,cm:c,cmName:c.name,iCol:g,mode:"filter"});!0===h.autosearch&&a.change(function(){J();return!1})}},B.ajaxOptions,f.ajaxSelectOptions||{}));else{var C,A,N;this.searchoptions?(C=void 0===l.value?p.value||"":l.value,A=void 0===l.separator?p.separator||":":l.separator,N=void 0===l.delimiter?p.delimiter||";":l.delimiter):this.editoptions&&(C=void 0===p.value?"":p.value,A=void 0===p.separator?
":":p.separator,N=void 0===p.delimiter?";":p.delimiter);if(C){l=document.createElement("select");l.style.width="100%";a(l).attr({name:this.index||this.name,id:w(this.name)});var y,v,H;if("string"===typeof C)for(e=C.split(N),N=0;N<e.length;N++)C=e[N].split(A),y=document.createElement("option"),y.value=C[0],""===C[0]&&(H=!0),y.innerHTML=C[1],l.appendChild(y);else if("object"===typeof C)for(v in C)C.hasOwnProperty(v)&&(y=document.createElement("option"),y.value=v,""===v&&(H=!0),y.innerHTML=C[v],l.appendChild(y));
H||"string"!==typeof d.noFilterText||(y=document.createElement("option"),y.value="",y.innerHTML=d.noFilterText,a(l).prepend(y));void 0!==d.defaultValue&&a(l).val(d.defaultValue);d.attr&&a(l).attr(d.attr);a(l).addClass(K);a(r).append(u);k.call(b,l,d);a("td",u).eq(1).append(l);B.fullBoolFeedback.call(b,d.selectFilled,"jqGridSelectFilled",{elem:l,options:this.searchoptions||p,cm:this,cmName:this.name,iCol:c,mode:"filter"});!0===h.autosearch&&a(l).change(function(){J();return!1})}}break;case "text":c=
void 0!==d.defaultValue?d.defaultValue:"";a("td",u).eq(1).append("<input type='text' class='"+K+"' name='"+(this.index||this.name)+"' id='"+w(this.name)+"' value='"+c+"'/>");a(r).append(u);d.attr&&a("input",r).attr(d.attr);k.call(b,a("input",r)[0],d);!0===h.autosearch&&(h.searchOnEnter?a("input",r).keypress(function(a){return 13===(a.charCode||a.keyCode||0)?(J(),!1):this}):a("input",r).keydown(function(a){switch(a.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;
default:D&&clearTimeout(D),D=setTimeout(function(){J()},h.autosearchDelay)}}));break;case "custom":a("td",u).eq(1).append("<span style='width:100%;padding:0;box-sizing:border-box;' class='"+K+"' name='"+(this.index||this.name)+"' id='"+w(this.name)+"'/>");a(r).append(u);try{if(a.isFunction(d.custom_element)){var z=d.custom_element.call(b,void 0!==d.defaultValue?d.defaultValue:"",d);if(z)z=a(z).addClass("customelement"),a(r).find("span[name='"+(this.index||this.name)+"']").append(z);else throw"e2";
}else throw"e1";}catch(O){"e1"===O&&m.call(b,Q,"function 'custom_element' "+F.nodefined,R),"e2"===O?m.call(b,Q,"function 'custom_element' "+F.novalue,R):m.call(b,Q,"string"===typeof O?O:O.message,R)}}}a(G).append(r);a(G).find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){a(this).addClass(x)},function(){a(this).removeClass(x)});a(P).append(G);h.searchOperators||a("td",u).eq(0).hide()});a(d.hDiv).find(">div>.ui-jqgrid-htable>thead").append(P);h.searchOperators&&(a(".soptclass",
P).click(function(b){var c=a(this).offset();e(this,c.left,c.top);b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",P).click(function(){var b=a(this).parents("tr").first(),c=parseInt(a("td.ui-search-oper",b).data("colindex"),10),d=a.extend({},p[c].searchoptions||{}).defaultValue||"";"select"===p[c].stype?d?a("td.ui-search-input select",b).val(d):a("td.ui-search-input select",b)[0].selectedIndex=0:a("td.ui-search-input input",
b).val(d);!0===h.autosearch&&J()});b.ftoolbar=!0;b.triggerToolbar=J;b.clearToolbar=function(e){var g={},k=0,t;e="boolean"!==typeof e?!0:e;a.each(p,function(){var c,e=a("#"+v(w(this.name)),!0===this.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),h,l=this.searchoptions||{};void 0!==l.defaultValue&&(c=l.defaultValue);t=this.index||this.name;switch(this.stype){case "select":h=0<e.length?!e[0].multiple:!0;e.find("option").each(function(b){this.selected=0===b&&h;if(a(this).val()===c)return this.selected=
!0,!1});if(void 0!==c)g[t]=c,k++;else try{delete f.postData[t]}catch(m){}break;case "text":e.val(c||"");if(void 0!==c)g[t]=c,k++;else try{delete f.postData[t]}catch(m){}break;case "custom":a.isFunction(l.custom_value)&&0<e.length&&"SPAN"===e[0].nodeName.toUpperCase()&&l.custom_value.call(b,e.children(".customelement").first(),"set",c||"")}});var m=0<k?!0:!1;f.resetsearch=!0;if(h.stringResult||h.searchOperators||"local"===f.datatype){var l='{"groupOp":"'+h.groupOp+'","rules":[',n=0;a.each(g,function(a,
b){0<n&&(l+=",");l+='{"field":"'+a+'",';l+='"op":"eq",';l+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';n++});l+="]}";a.extend(f.postData,{filters:l});a.each(["searchField","searchString","searchOper"],function(a,b){f.postData.hasOwnProperty(b)&&delete f.postData[b]})}else a.extend(f.postData,g);var D;f.searchurl&&(D=f.url,c.jqGrid("setGridParam",{url:f.searchurl}));var r="stop"===c.triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!r&&a.isFunction(h.beforeClear)&&(r=h.beforeClear.call(b));
r||e&&c.jqGrid("setGridParam",{search:m}).trigger("reloadGrid",[a.extend({page:1},h.reloadGridResetOptions||{})]);D&&c.jqGrid("setGridParam",{url:D});c.triggerHandler("jqGridToolbarAfterClear");a.isFunction(h.afterClear)&&h.afterClear()};b.toggleToolbar=function(){var b=a("tr.ui-search-toolbar",d.hDiv),e=!0===f.frozenColumns?a("tr.ui-search-toolbar",d.fhDiv):!1;"none"===b.css("display")?(b.show(),e&&e.show()):(b.hide(),e&&e.hide());!0===f.frozenColumns&&(c.jqGrid("destroyFrozenColumns"),c.jqGrid("setFrozenColumns"))};
!0===f.frozenColumns&&(c.jqGrid("destroyFrozenColumns"),c.jqGrid("setFrozenColumns"));c.bind("jqGridRefreshFilterValues.filterToolbar"+(h.loadFilterDefaults?" jqGridAfterLoadComplete.filterToolbar":""),function(){var b,c,d=A(!0)||{},e;for(b in d)d.hasOwnProperty(b)&&(c=d[b],e=a("#"+v(w(b))),a.trim(e.val())!==c.data&&e.val(c.data),e=e.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass"),e.data("soper",c.op),e.text(h.operands[c.op]));for(c=0;c<f.colModel.length;c++)b=f.colModel[c].name,
d.hasOwnProperty(b)||a("#"+v(w(b))).val("")})}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===this.p.frozenColumns&&a(this).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(g){void 0===g&&(g=!0);return this.each(function(){var b,d,c,f;b=this.grid;var k=this.p.colModel,m=a("table.ui-jqgrid-htable thead",
b.hDiv);if(b){a(this).unbind(".setGroupHeaders");var n=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),h=b.headers;b=0;for(d=h.length;b<d;b++){c=k[b].hidden?"none":"";c=a(h[b].el).width(h[b].width).css("display",c);try{c.removeAttr("rowSpan")}catch(p){c.attr("rowSpan",1)}n.append(c);f=c.children("span.ui-jqgrid-resize");0<f.length&&(f[0].style.height="");c.children("div")[0].style.top=""}a(m).children("tr.ui-jqgrid-labels").remove();a(m).prepend(n);!0===g&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},
setGroupHeaders:function(g){g=a.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},g||{});return this.each(function(){this.p.groupHeader=g;var b,d,c=0,f,k,m,n,h,p,q=this.p,v=q.colModel,z=v.length,F=this.grid.headers,x=a("table.ui-jqgrid-htable",this.grid.hDiv),H=B.isCellClassHidden,K=x.children("thead").children("tr.ui-jqgrid-labels"),I=K.last().addClass("jqg-second-row-header");f=x.children("thead");var w=x.find(".jqg-first-row-header");void 0===w[0]?w=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height",
"auto"):w.empty();var A=function(a,b){var c=b.length,d;for(d=0;d<c;d++)if(b[d].startColumnName===a)return d;return-1};a(this).prepend(f);f=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(b=0;b<z;b++)if(m=F[b].el,n=a(m),d=v[b],k={height:"0",width:F[b].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(k).addClass("ui-first-th-"+q.direction+(g.applyLabelClasses?" "+(d.labelClasses||""):"")).appendTo(w),m.style.width="",k=E.call(this,"colHeaders","ui-th-column-header ui-th-"+
q.direction+" "+(g.applyLabelClasses?d.labelClasses||"":"")),h=A(d.name,g.groupHeaders),0<=h){h=g.groupHeaders[h];c=h.numberOfColumns;p=h.titleText;for(h=d=0;h<c&&b+h<z;h++)v[b+h].hidden||H(v[b+h].classes)||a(F[b+h].el).is(":hidden")||d++;k=a("<th>").addClass(k).css({height:"22px","border-top":"0 none"}).html(p);0<d&&k.attr("colspan",String(d));q.headertitles&&k.attr("title",k.text());0===d&&k.hide();n.before(k);f.append(m);--c}else 0===c?g.useColSpanStyle?n.attr("rowspan",K.length+1):(a("<th>").addClass(k).css({display:d.hidden?
"none":"","border-top":"0 none"}).insertBefore(n),f.append(m)):(f.append(m),c--);q=a(this).children("thead");q.prepend(w);f.insertAfter(I);x.prepend(q);g.useColSpanStyle&&(x.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height:"+b.height()+"px !important;cursor:col-resize;")}),x.find(".ui-th-column>div").each(function(){var b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&!b.hasClass("ui-jqgrid-rotate")&&!b.hasClass("ui-jqgrid-rotateOldIE")&&
b.css("top",(c.height()-b.outerHeight(!0))/2+"px")}));a(this).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;var a=a[0],a=a.p.colModel,b=a.length,d=-1,c;for(c=0;c<b&&!0===a[c].frozen;c++)d=c;return d+1},setFrozenColumns:function(){return this.each(function(){var g=this,b=a(g),d=g.p,c=g.grid;if(c&&null!=d&&!0!==d.frozenColumns){var f=d.colModel,k,m=f.length,n=-1,h=!1,p=[],q=v(d.id),z=E.call(g,"states.hover"),B=E.call(g,"states.disabled");
if(!0!==d.subGrid&&!0!==d.treeGrid&&!d.scroll){for(k=0;k<m&&!0===f[k].frozen;k++)h=!0,n=k,p.push("#jqgh_"+q+"_"+v(f[k].name));d.sortable&&(f=a(c.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),f.sortable("destroy"),b.jqGrid("setGridParam",{sortable:{options:{items:0<p.length?">th:not(:has("+p.join(",")+"),:hidden)":">th:not(:hidden)"}}}),b.jqGrid("sortableColumns",f));if(0<=n&&h){h=d.caption?a(c.cDiv).outerHeight():0;p=a(".ui-jqgrid-htable",d.gView).height();d.toppager&&(h+=a(c.topDiv).outerHeight());
!0===d.toolbar[0]&&"bottom"!==d.toolbar[1]&&(h+=a(c.uDiv).outerHeight());c.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+h+"px;height:"+p+"px;' class='"+E.call(g,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>");c.fbDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(h,10)+parseInt(p,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>");
a(d.gView).append(c.fhDiv);f=a(".ui-jqgrid-htable",d.gView).clone(!0);m=f[0].tHead.rows;if(d.groupHeader){a(m[0].cells).filter(":gt("+n+")").remove();a(m).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var b=a(this).attr("id");b&&b.substr(0,g.id.length+1)===g.id+"_"&&(b=b.substr(g.id.length+1),d.iColByName[b]>n&&a(this).remove())})});var F=-1,x=-1,H,K;a(m).filter(".jqg-second-row-header").children("th").each(function(){H=parseInt(a(this).attr("colspan")||
1,10);K=parseInt(a(this).attr("rowspan")||1,10);1<K?(F++,x++):H&&(F+=H,x++);if(F===n)return!1});F!==n&&(x=n);a(m).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+x+")").remove()})}else a(m).each(function(){a(this).children(":gt("+n+")").remove()});a(f).width(1);a(c.fhDiv).append(f).mousemove(function(a){if(c.resizing)return c.dragMove(a),!1}).scroll(function(){this.scrollLeft=0});d.footerrow&&(f=a(".ui-jqgrid-bdiv",d.gView).height(),c.fsDiv=a("<div style='position:absolute;"+
("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(h,10)+parseInt(p,10)+parseInt(f,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(d.gView).append(c.fsDiv),h=a(".ui-jqgrid-ftable",d.gView).clone(!0),a("tr",h).each(function(){a("td:gt("+n+")",this).remove()}),a(h).width(1),a(c.fsDiv).append(h));b.bind("jqGridSortCol.setFrozenColumns",function(b,e,f){b=a("tr.ui-jqgrid-labels:last th:eq("+d.lastsort+")",c.fhDiv);e=a("tr.ui-jqgrid-labels:last th:eq("+f+")",c.fhDiv);a("span.ui-grid-ico-sort",
b).addClass(B);a(b).attr("aria-selected","false");a("span.ui-icon-"+d.sortorder,e).removeClass(B);a(e).attr("aria-selected","true");d.viewsortcols[0]||d.lastsort===f||(a("span.s-ico",b).hide(),a("span.s-ico",e).show())});a(d.gView).append(c.fbDiv);a(c.bDiv).scroll(function(){a(c.fbDiv).scrollTop(a(this).scrollTop())});!0===d.hoverrows&&a(d.idSel).unbind("mouseover").unbind("mouseout");var I=function(a,b){var c=a.height();1<=Math.abs(c-b)&&0<b&&(a.height(b),c=a.height(),1<=Math.abs(b-c)&&a.height(b+
Math.round(b-c)))},w=function(a,b){var c=a.width();1<=Math.abs(c-b)&&(a.width(b),c=a.width(),1<=Math.abs(b-c)&&a.width(b+Math.round(b-c)))},A=function(b,c,f,g){var h,m,n,p,v,l,q;q=a(c).position().top;var w,r,u;if(null!=b&&0<b.length){b[0].scrollTop=c.scrollTop;b.css("rtl"===d.direction?{top:q,right:0}:{top:q,left:0});m=b.children("table").children("thead").children("tr");n=a(c).children("div").children("table").children("thead").children("tr");0===n.length&&(m=a(b.children("table")[0].rows),n=a(a(c).children("div").children("table")[0].rows));
h=Math.min(m.length,n.length);w=0<h?a(m[0]).position().top:0;r=0<h?a(n[0]).position().top:0;if(0<=f)for(0<=g&&(h=Math.min(g+1,h));f<h;f++)if(p=a(n[f]),"none"!==p.css("display")&&p.is(":visible")){q=p.position().top;g=a(m[f]);v=g.position().top;l=p.height();if(null!=d.groupHeader&&d.groupHeader.useColSpanStyle)for(u=p[0].cells,k=0;k<u.length;k++)p=u[k],null!=p&&"TH"===p.nodeName.toUpperCase()&&(l=Math.max(l,a(p).height()));q=l+(q-r)+(w-v);I(g,q)}I(b,c.clientHeight)}},h={resizeDiv:!0,resizedRows:{iRowStart:0,
iRowEnd:-1}},J={header:h,resizeFooter:!0,body:h};b.bind("jqGridAfterGridComplete.setFrozenColumns",function(){a(d.idSel+"_frozen").remove();a(c.fbDiv).height(c.hDiv.clientHeight);var f=a(this).clone(!0),e=f[0].rows,g=b[0].rows;a(e).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+n+")").remove()});c.fbRows=e;f.width(1).attr("id",d.id+"_frozen");f.appendTo(c.fbDiv);if(!0===d.hoverrows){var h=function(b,c,d){a(b)[c](z);a(d[b.rowIndex])[c](z)};a(e).filter(".jqgrow").hover(function(){h(this,
"addClass",g)},function(){h(this,"removeClass",g)});a(g).filter(".jqgrow").hover(function(){h(this,"addClass",e)},function(){h(this,"removeClass",e)})}A(c.fhDiv,c.hDiv,0,-1);A(c.fbDiv,c.bDiv,0,-1);c.sDiv&&A(c.fsDiv,c.sDiv,0,-1)});var M=function(b){a(c.fbDiv).scrollTop(a(c.bDiv).scrollTop());b.header.resizeDiv&&A(c.fhDiv,c.hDiv,b.header.iRowStart,b.header.iRowEnd);b.body.resizeDiv&&A(c.fbDiv,c.bDiv,b.body.iRowStart,b.body.iRowEnd);b.resizeFooter&&c.sDiv&&b.resizeFooter&&A(c.fsDiv,c.sDiv,0,-1);var d=
c.fhDiv[0].clientWidth;b.header.resizeDiv&&null!=c.fhDiv&&1<=c.fhDiv.length&&I(a(c.fhDiv),c.hDiv.clientHeight);b.body.resizeDiv&&null!=c.fbDiv&&0<c.fbDiv.length&&w(a(c.fbDiv),d);b.resizeFooter&&null!=c.fsDiv&&0<=c.fsDiv.length&&w(a(c.fsDiv),d)};a(d.gBox).bind("resizestop.setFrozenColumns",function(){setTimeout(function(){M(J)},50)});b.bind("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",
function(a,c){var d=b.jqGrid("getInd",c);M({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:d,iRowEnd:d}}})});b.bind("jqGridResizeStop.setFrozenColumns",function(){M(J)});b.bind("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){M(b||J)});c.hDiv.loading||b.triggerHandler("jqGridAfterGridComplete");d.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var g=a(this),b=this.grid,d=this.p,c=v(d.id);
if(b&&!0===d.frozenColumns){a(b.fhDiv).remove();a(b.fbDiv).remove();b.fhDiv=null;b.fbDiv=null;b.fbRows=null;d.footerrow&&(a(b.fsDiv).remove(),b.fsDiv=null);g.unbind(".setFrozenColumns");if(!0===d.hoverrows){var f,k=E.call(this,"states.hover");g.bind("mouseover",function(b){f=a(b.target).closest("tr.jqgrow");"ui-subgrid"!==a(f).attr("class")&&a(f).addClass(k)}).bind("mouseout",function(b){f=a(b.target).closest("tr.jqgrow");a(f).removeClass(k)})}d.frozenColumns=!1;d.sortable&&(b=a(b.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),
b.sortable("destroy"),g.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+c+"_cb,#jqgh_"+c+"_rn,#jqgh_"+c+"_subgrid),:hidden)"}}}),g.jqGrid("sortableColumns",b))}})}})});
//# sourceMappingURL=grid.custom.map
