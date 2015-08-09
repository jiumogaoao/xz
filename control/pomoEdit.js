// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoEdit",
		par:"id",
		tem:["template_head","template_foot","template_center","input"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			function layout(list,old){
				var main=_.template(data.tem[2])({type:1});
			$("#middle").html(main);
			var tableA=_.template(data.tem[3])(list);
			$("#middle .template_right").html(tableA);
			$("#middle #editPomo").unbind("click").bind("click",function(){
				old.image=$("#middle #pic").attr("value");
				old.link=$("#middle #link").val();
				obj.api.run("editpromotion",old,function(){
					window.location.hash="pomoManage";
					},function(e){
					alert(JSON.stringify(e))
					});
				
				});
				}
			
			$("#foot").html(data.tem[1]);
			obj.api.run("getpromotion",null,function(returnData){
				returnData=_.indexBy(returnData,"id")[data.id];
				var list={
				input:[
					{title:"编号",type:"simple",value:returnData.id},
					{title:"展示位",type:"simple",value:returnData.name},
					{title:"图片",type:"singlepic",value:returnData.image,id:"pic"},
					{title:"链接",type:"",value:returnData.link,id:"link"}
				],
				button:[{name:"提交",id:"editPomo"}]
				};
				layout(list,returnData)
				},function(e){
				alert(JSON.stringify(e))
				})
			}
		});
	})($,app,config);