// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"goodEdit",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"商品名",type:""},
					{title:"副标",type:""},
					{title:"现价",type:"number"},
					{title:"份数",type:"number"},
					{title:"开始时间",type:"date"},
					{title:"类型",type:"dropdown"},
					{title:"标签",type:"dropdown"},
					{title:"图片",type:"mulipic"},
					{title:"综合介绍",type:"rich"}
				],
				button:[{name:"提交",id:"add"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #add").unbind("click").bind("click",function(){
				window.location.hash="goodManage";
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);