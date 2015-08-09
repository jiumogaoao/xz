// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodEdit",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			function layout(list){
				var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(list);
			$("#middle .template_right").html(tableA);
			$("#middle #addProduct").unbind("click").bind("click",function(){
				var send={
					"id":data.id,/*id*/
					"title":$("#title").val(),/*标题*/
					"subhead":$("#subhead").val(),/*副标题*/
					"image":$("#pic").attr("value").split(","),/*图片*/
					"price":Number($("#price").val()),/*价格*/
					"payedCount":0,/*已众筹笔数*/
					"payedMoney":0,/*已众筹金额*/
					"copy":Number($("#copy").val()),/*份数*/
					"maxTime":Number($("#maxTime").val()),/*持有期限*/
					"tax":Number($("#tax").val()),/*税费预算*/
					"stratTime":moment($("#stratTime").val()).format('X'),/*开始时间*/
					"yearReturn":Number($("#yearReturn").val()),/*年收益率*/
					"more":Number($("#more").val()),/*增值*/
					"dsc":UE.getEditor($("[id^='dsc_']").attr("id")).getContent(),//简介
					"change":Number($("#change").val()),//债权转移费用
					"type":$("#type").val(),
					"tag":$("#tag").val()
					}
				obj.api.run("editProduct",send,function(returnData){
					window.location.hash="goodManage";
					},function(e){
					alert(JSON.stringify(e))
					});
				});
				};
			$("#foot").html(data.tem[1]);
			obj.api.run("getProduct",null,function(returnData){
				var returnData=_.indexBy(returnData,"id")[data.id];
				var list={
				input:[
					{title:"商品名",type:"",id:"title",value:returnData.title},
					{title:"副标",type:"",id:"subhead",value:returnData.subhead},
					{title:"金额",type:"number",id:"price",value:returnData.price},
					{title:"份数",type:"number",id:"copy",value:returnData.copy},
					{title:"持有期限",type:"number",id:"maxTime",value:returnData.maxTime},
					{title:"税费预算",type:"number",id:"tax",value:returnData.tax},
					{title:"年收益率",type:"number",id:"yearReturn",value:returnData.yearReturn},
					{title:"增值",type:"number",id:"more",value:returnData.more},
					{title:"债权转移费用",type:"number",id:"change",value:returnData.change},
					{title:"开始时间",type:"date",id:"stratTime",value:moment(returnData.stratTime,"X").format("YYYY/MM/DD")},
					{title:"类型",type:"dropdown",other:[
						{value:"0",label:"一手房"},
						{value:"1",label:"二手房"},
						{value:"2",label:"出租房"}
					],id:"type",value:returnData.type},
					{title:"标签",type:"dropdown",other:[
						{value:"0",label:"公益"},
						{value:"1",label:"科技"},
						{value:"2",label:"艺术"},
						{value:"3",label:"娱乐"},
						{value:"4",label:"出版"},
						{value:"5",label:"农业"},
						{value:"6",label:"商铺"},
						{value:"7",label:"地方站"}
					],id:"tag",value:returnData.tag},
					{title:"图片",type:"mulipic",id:"pic",value:returnData.image},
					{title:"综合介绍",type:"rich",id:"dsc",value:returnData.dsc}
				],
				button:[{name:"修改",id:"addProduct"}]
				};
				layout(list)
				},function(e){
				alert(JSON.stringify(e))
				});
			}
		});
	})($,app,config);