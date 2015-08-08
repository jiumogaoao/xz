// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"pomoManage",
		par:"id",
		tem:["template_head","template_foot","template_center","table"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			var table={
				head:[{name:"编号"},{name:"展示位"},{name:"图片"},{name:"链接"},{name:"编辑","type":"link"}],
				main:[
					[{value:"0"},{value:"右侧栏1"},{value:"http://"},{value:"http://"},{value:"编辑"}]
				],
				button:[]
				};
			var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(table);
			$("#middle .template_right").html(tableA);
			$("#middle [x='4']").unbind("click").bind("click",function(){
				window.location.hash="pomoEdit/"+$("#middle [x='0'][y='"+$(this).attr("y")+"']").attr("value");
				});
			$("#foot").html(data.tem[1]);
			}
		});
	})($,app.control,config);