// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"userManage",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"编号"},{name:"账号"},{name:"名称"},{name:"编辑","type":"link"},{name:"重置密码","type":"link"},{name:"删除","type":"link"}],
				main:[
					[{value:"0"},{value:"1"},{value:"sdfsf"},{value:"编辑"},{value:"重置密码",href:"#"},{value:"删除",href:"#"}]
				],
				button:[]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#foot").html(data.tem[1]);
			$(".template_right [x='3']").unbind("click").bind("click",function(){
				var that=this;
				window.location.hash="clientEdit/"+$(".template_right [x='0'][y='"+$(that).attr("y")+"']").attr("value");
				});
			}
		});
	})($,app.control,config);