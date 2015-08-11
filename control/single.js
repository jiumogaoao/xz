// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"single",
		par:"type/id",
		tem:["template_head","template_foot","banner","deal_list","form_one","form_two"],
		fn:function(data){
			$("#head").html(data.tem[0]);
			function layout(){
				var pomo1=_.template(data.tem[4])({list:pomoA});
				var pomo2=_.template(data.tem[5])({list:pomoB});
				var product1="";
				var product2="";
				var product3="";
				if(!isNullObj(productA)){
					product1=_.template(data.tem[3])({group:productA})
					}
				if(!isNullObj(productB)){
					product2=_.template(data.tem[3])({group:productB})
					}
				if(!isNullObj(productC)){
					product3=_.template(data.tem[3])({group:productC})
					}
				$("#middle").html(data.tem[2]+product1+pomo1+product2+pomo2+product3);
				}
			
			
			$("#foot").html(data.tem[1]);
			var total=0;
			var tagArry=["公益","科技","艺术","娱乐","出版","农业","商铺","地方站"];
			var typeArry=["一手房","二手房","出租房"];
			var productA={};
			var productB={};
			var productC={};
			var pomoA=[];
			var pomoB=[];
			function totalCount(){
				total++;
				if(total==2){
					layout();
					}
				}
			obj.api.run("getpromotion",null,function(returnData){
				returnData=_.indexBy(returnData,"id");
				pomoA=[returnData["004"].image,returnData["005"].image,returnData["006"].image,returnData["007"].image,returnData["008"].image];
				pomoB=[returnData["009"].image,returnData["010"].image,returnData["011"].image,returnData["012"].image,returnData["013"].image];
				totalCount();
				},function(e){
				alert(JSON.stringify(e))
				});
			obj.api.run("getProduct",null,function(returnData){
				$.each(returnData,function(i,n){
					if((data.type==="0"&&n.type==data.id)||(data.type==="1"&&n.tag==data.id)){
						function addPoint(obj){
							if(data.type==="0"){
								if(!obj[n.tag]){
								obj[n.tag]={title:tagArry[n.tag],list:[]}
								}
							obj[n.tag].list.push(n);
							}else{
								if(!obj[n.type]){
								obj[n.type]={title:typeArry[n.type],list:[]}
								}
							obj[n.type].list.push(n);
								}
							}
						if(isNullObj(productA)){
							addPoint(productA);
							}else if(isNullObj(productB)){
								addPoint(productB);
								}else{
									addPoint(productC);
									}
						}
					
					
					})
				totalCount();
				},function(e){
				alert(JSON.stringify(e))
				})
			}
		});
	})($,app,config);