// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:"",
		tem:["template_head","template_foot","banner","template_center_two","deal_list"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			function layout(){
			var pomoList=_.template(data.tem[3])({list:pomo});
			$("#middle").html(data.tem[2]+pomoList);
			var productGroup=_.template(data.tem[4])({group:product});
			$(".template_left").html(productGroup);	
				}
			
			$("#foot").html(data.tem[1]);
			var total=0;
			var tagArry=["公益","科技","艺术","娱乐","出版","农业","商铺","地方站"];
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
				$.each(returnData,function(i,n){
					if(!product[n.tag]){
						product[n.tag]={title:tagArry[n.tag],list:[]}
						}
					product[n.tag].list.push(n);
					})
				totalCount();
				},function(e){
				alert(JSON.stringify(e))
				})
			}
		});
	})($,app,config);