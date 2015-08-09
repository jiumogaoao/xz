// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoManage",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			function layout(list){
				var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(list);
			$("#middle .template_right").html(tableA);
			$("#middle [x='4']").unbind("click").bind("click",function(){
				window.location.hash="pomoEdit/"+$("#middle [x='0'][y='"+$(this).attr("y")+"']").attr("value");
				});
				}
			
			$("#foot").html(data.tem[1]);
			obj.api.run("getpromotion",null,function(returnData){
				var list={
				head:[{name:"编号"},{name:"展示位"},{name:"图片"},{name:"链接"},{name:"编辑","type":"link"}],
				main:[],
				button:[]
				}
				$.each(returnData,function(i,n){
					var addData=[{value:n.id},{value:n.name},{value:n.image},{value:n.link},{value:"编辑"}]
					list.main.push(addData);
					});
				layout(list);
				},function(e){
				alert(JSON.stringify(e))
				});
			}
		});
	})($,app,config);