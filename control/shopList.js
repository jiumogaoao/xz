// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"shopList",
		par:"id",
		tem:["template_head","template_foot","template_center"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var main=_.template(data.tem[2])({type:0});
			$("#middle").html(main);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);