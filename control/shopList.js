// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"shopList",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"编号"},{name:"商品号"},{name:"买入价"},{name:"现价"},{name:"持有手数"},{name:"纯利"},{name:"买入时间"},{name:"卖出","tpye":"link"},{name:"债权转让","type":"link"}],
				main:[
					[{value:"0"},{value:"1"},{value:"3232"},{value:"3232"},{value:"3232"},{value:"3232"},{value:"2015-10-01"},{value:"卖出",href:"#"},{value:"债权转让",href:"#"}]
				],
				button:[]
				};
			var main=_.template(data.tem[2])({type:0});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);