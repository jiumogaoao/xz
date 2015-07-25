// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"double",
		par:"type/id",
		tem:["template_head","template_foot","banner","template_center_two","deal_list"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			$("#middle").html(data.tem[2]+data.tem[3]);
			$(".template_left").html(data.tem[4]);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);