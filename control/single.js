// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"single",
		par:"type/id",
		tem:["template_head","template_foot","banner","deal_list","form_one","form_two"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			$("#middle").html(data.tem[2]+data.tem[3]+data.tem[4]+data.tem[3]+data.tem[5]+data.tem[3]);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);