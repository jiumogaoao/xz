// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"produceDetail",
		par:"id",
		tem:["template_head","template_foot","produce_detail"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"编号"},{name:"订单号"},{name:"用户号"},{name:"商品号"},{name:"交易类型"},{name:"交易金额"},{name:"交易时间"}],
				main:[
					[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"买"},{value:"-3232"},{value:"2015-10-01"}]
				],
				button:[]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#foot").html(data.tem[1]);
			var total=0;
			var product={};
			var pomo=[];
			function totalCount(){
				total++;
				if(total==2){
					layout();
					}
				}
			obj.api.run("getpromotion",null,function(returnData){
				returnData=_.indexBy(returnData,"id");
				pomo=[returnData["001"].image,returnData["002"].image,returnData["003"].image];
				totalCount();
				},function(e){
				alert(JSON.stringify(e))
				});
			obj.api.run("getProduct",null,function(returnData){
				product=_.indexBy(returnData,"id")[data.id];
				totalCount();
				},function(e){
				alert(JSON.stringify(e))
				})
			}
		});
	})($,app.control,config);