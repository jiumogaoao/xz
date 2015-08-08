// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"shopList",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"编号"},{name:"商品号"},{name:"买入价"},{name:"现价"},{name:"持有手数"},{name:"纯利"},{name:"买入时间"},{name:"卖出","tpye":"link"},{name:"债权转让","type":"link"},{name:"详情","type":"link"}],
				main:[
					[{value:"0"},{value:"1"},{value:"3232"},{value:"3232"},{value:"3232"},{value:"3232"},{value:"2015-10-01"},{value:"卖出"},{value:"债权转让"},{value:"详情"}]
				],
				button:[]
				};
			var main=_.template(data.tem[2])({type:0});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle [x='7']").unbind("click").bind("click",function(){
				var that=this;
				window.location.hash="sell/"+$("#middle [x='0'][y='"+$(that).attr("y")+"']").attr("value");
				});
			$("#middle [x='8']").unbind("click").bind("click",function(){
				var that=this;
				window.location.hash="change/"+$("#middle [x='0'][y='"+$(that).attr("y")+"']").attr("value");
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);