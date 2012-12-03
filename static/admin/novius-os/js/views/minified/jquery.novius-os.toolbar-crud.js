/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-toolbar-crud",["jquery-nos"],function(a){a.fn.extend({nosToolbarCrud:function(b){b=b||{actions:[],isNew:false,saveField:"",model:"",itemId:0,urlActions:"",dataset:{},ajaxData:{}};return this.each(function(){var e=a(this),d=e.nosToolbar("create"),c=[],f=function(g){a.each(g,function(){var i=this,j=false,h;if(i.action&&i.action.action==="share"){var k=a.extend(true,{},i.action);delete i.action;i.bind=i.bind||{};i.bind.click=function(){var l=d.nextAll(".nos-datacatchers");h.hover(function(){if(j){h.addClass("ui-state-active")}});var m=function(n){l[n?"show":"hide"]();d.find(".ui-button").not(h).each(function(){a(this).button(n?"disable":"enable")});h.blur()[n?"addClass":"removeClass"]("ui-state-active");j=n};if(l.size()){if(l!=="load"){m(!j)}}else{l="load";a.ajax({url:"admin/nos/datacatcher/form",data:a.nosDataReplace(k.data,b.dataset),success:function(n){l=a(n).insertAfter(e).bind("close",function(){m(false)}).addClass("fill-parent nos-fixed-content").css({top:e.css("top"),bottom:e.css("bottom")});m(true)}})}}}h=e.nosToolbar("add",a.nosUIElement(i,b.dataset),true).nosOnShow("show");c.push(h)})};e.nosToolbar("add",b.saveField).click(function(){if(e.is("form")){e.submit()}else{e.find("form:visible").submit()}});if(!b.isNew){e.nosListenEvent({name:b.model},function(g){if(!a.isArray(g.id)){g.id=[g.id]}if(a.inArray(b.itemId,g.id)!==-1&&g.action==="delete"){return false}e.nosAjax({url:b.urlActions,type:"GET",data:b.ajaxData,success:function(h){a.each(c,function(){a(this).remove()});c=[];f(h)}})})}f(b.actions)})}});return a});