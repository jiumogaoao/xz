// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"adminManage",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"旧密码",type:"password"},
					{title:"新密码",type:"password"},
					{title:"再次输入",type:"password"}
				],
				button:[{name:"保存",id:"send"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);