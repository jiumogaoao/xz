// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"change",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"编号",type:"simple"},
					{title:"商品号",type:"simple"},
					{title:"买入价",type:"simple"},
					{title:"现价",type:"simple"},
					{title:"持有手数",type:"simple"},
					{title:"纯利",type:"simple"},
					{title:"买入时间",type:"simple"},
					{title:"手续费",type:"simple"},
					{title:"转让账号",type:""}
				],
				button:[{name:"修改",id:"change"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #change").unbind("click").bind("click",function(){
				window.location.hash="shopList";
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);