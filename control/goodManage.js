// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"goodManage",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"商品号"},{name:"商品名"},{name:"现价"},{name:"最大购买"},{name:"份数"},{name:"已众筹"},{name:"开始时间"},{name:"类型"},{name:"标签"},{name:"编辑","type":"link"},{name:"删除","type":"link"}],
				main:[
					[{value:"0"},{value:"一个商品"},{value:"1"},{value:"3232"},{value:"3232"},{value:"3232"},{value:"2015-10-01"},{value:"一手房众筹"},{value:"公益"},{value:"编辑",href:"#"},{value:"删除",href:"#"}]
				],
				button:[{name:"添加产品",id:"add"}]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle #add").unbind("click").bind("click",function(){
				window.location.hash="goodEdit"
				});
			$("#middle [x='9']").unbind("click").bind("click",function(){
				console.log($("#middle [x='0'][y='"+$(this).attr("y")+"']").text())
				window.location.hash="goodEdit/"+$("#middle [x='0'][y='"+$(this).attr("y")+"']").attr("value");
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);