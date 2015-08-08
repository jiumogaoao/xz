// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"pomoEdit",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"编号",type:"simple",value:"0"},
					{title:"展示位",type:"simple",value:"右侧栏"},
					{title:"图片",type:"singlepic"},
					{title:"链接",type:""}
				],
				button:[{name:"提交",id:"edit"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #edit").unbind("click").bind("click",function(){
				window.location.hash="pomoManage";
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);