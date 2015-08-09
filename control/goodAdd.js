// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodAdd",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				input:[
					{title:"商品名",type:"",id:"title"},
					{title:"副标",type:"",id:"subhead"},
					{title:"金额",type:"number",id:"price"},
					{title:"份数",type:"number",id:"copy"},
					{title:"持有期限",type:"number",id:"maxTime"},
					{title:"税费预算",type:"number",id:"tax"},
					{title:"年收益率",type:"number",id:"yearReturn"},
					{title:"增值",type:"number",id:"more"},
					{title:"债权转移费用",type:"number",id:"change"},
					{title:"开始时间",type:"date",id:"stratTime"},
					{title:"类型",type:"dropdown",other:[
						{value:"0",label:"一手房"},
						{value:"1",label:"二手房"},
						{value:"2",label:"出租房"}
					],id:"type"},
					{title:"标签",type:"dropdown",other:[
						{value:"0",label:"公益"},
						{value:"1",label:"科技"},
						{value:"2",label:"艺术"},
						{value:"3",label:"娱乐"},
						{value:"4",label:"出版"},
						{value:"5",label:"农业"},
						{value:"6",label:"商铺"},
						{value:"7",label:"地方站"}
					],id:"tag"},
					{title:"图片",type:"mulipic",id:"pic"},
					{title:"综合介绍",type:"rich",id:"dsc"}
				],
				button:[{name:"提交",id:"addProduct"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #addProduct").unbind("click").bind("click",function(){
				var send={
					"id":uuid(),/*id*/
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
				obj.api.run("addProduct",send,function(returnData){
					window.location.hash="goodManage";
					},function(e){
					alert(JSON.stringify(e))
					});
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app,config);