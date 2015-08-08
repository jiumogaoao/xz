// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"clientEdit",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"账号",type:""},
					{title:"姓名",type:""},
					{title:"地址",type:""},
					{title:"邮编",type:""},
					{title:"电子邮箱",type:""}
				],
				button:[{name:"修改",id:"edit"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #edit").unbind("click").bind("click",function(){
				window.location.hash="userManage";
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);