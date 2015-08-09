// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"goodManage",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			var typeArry=["一手房","二手房","出租房"];
			var tagArry=["公益","科技","艺术","娱乐","出版","农业","商铺","地方站"]
			$("#head").html(data.tem[0]);
			function layout(list){
				var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(list);
			$("#middle .template_right").html(tableA);
			$("#middle #add").unbind("click").bind("click",function(){
				window.location.hash="goodAdd"
				});
			$("#middle [x='9']").unbind("click").bind("click",function(){
				console.log($("#middle [x='0'][y='"+$(this).attr("y")+"']").text())
				window.location.hash="goodEdit/"+$("#middle [x='0'][y='"+$(this).attr("y")+"']").attr("value");
				});
			$("#middle [x='10']").unbind("click").bind("click",function(){
				obj.api.run("removeProduct",$("#middle [x='0'][y='"+$(this).attr("y")+"']").attr("value"),function(){
					window.location.reload();
					},function(e){
					alert(JSON.stringify(e))
					})
				});
				}
			
			obj.api.run("getProduct",null,function(returnData){
				var list={
				head:[
				{name:"商品号"},
				{name:"商品名"},
				{name:"金额"},
				{name:"份数"},
				{name:"已众筹份数"},
				{name:"已众筹金额"},
				{name:"开始时间"},
				{name:"类型"},
				{name:"标签"},
				{name:"编辑","type":"link"},
				{name:"删除","type":"link"}],
				main:[],
				button:[{name:"添加产品",id:"add"}]
				};
				$.each(returnData,function(i,n){
					var addData=[{value:n.id},{value:n.title+"-"+n.subhead},{value:n.price},{value:n.copy},{value:n.payedCount},{value:n.payedMoney},{value:moment(n.stratTime,"X").format("YYYY/MM/DD")},{value:typeArry[n.type]},{value:tagArry[n.tag]},{value:"编辑",href:"#"},{value:"删除",href:"#"}]
					list.main.push(addData);
					})
				layout(list);
				},function(e){alert(JSON.stringify(e))});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app,config);