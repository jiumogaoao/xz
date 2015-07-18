// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"index",
		par:"",
		tem:["template_head","template_foot"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);