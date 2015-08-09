// JavaScript Document
;(function($,obj,config){
	var api={};
	var add=function(name,url,data,method,fn){
		if(!api[name]){
			api[name]={url:url||"",
						data:data||null,
						cache:null,
						method:method||"get",
						fn:fn||function(){},
						cacheTime:0
			};
			return api[name];
			}
		};
	var run=function(name,data,suc,err){
		function runApi(){
			if(!data){
				data=api[name].cacheTime;
				}
			if(data&&typeof(data) === "object"){
				data.time=api[name].cacheTime;
				data=JSON.stringify(data);
				}
				var sendData=$.extend({},api[name].data);
				sendData.data=data;
				config.loadingOn();
			$.ajax({ 
							url:api[name].url,
							dataType:"json",
							method:api[name].method,
							data:sendData,
							error:function(e){
								config.loadingOff();
								err(e);
								},
							success: function(returnData){
								config.loadingOff();
								if(returnData&&returnData.success){
									
									if(returnData.code === 1){
										api[name].cache=returnData.data;
										api[name].cacheTime=returnData.time;
										}
									if(typeof(api[name].cache) === "object"){
										if(api[name].fn){
											api[name].fn(api[name].cache);
											}
										suc($.extend({},api[name].cache));
										}else{
										if(api[name].fn){
											api[name].fn(api[name].cache);
											}
											suc(api[name].cache);
											}
									
								}else{
									err(returnData.message);
									}
								}
						});	
			}
		if(api[name]){
			runApi();
			}else{
				config.loadingOn();
				$.ajax({ 
							url:"api/"+name+".js",
							dataType:"script",
							cache:true,
							error:function(err){
								config.loadingOff();
								window.alert("错误"+JSON.stringify(err));
								return false;
								},
							success: function(){
								config.loadingOff();								
								runApi();
							}
						});
				}
		};
	obj.add=function(name,url,data,method,fn){
		add(name,url,data,method,fn);
		};
	obj.run=function(name,data,suc,err){
		run(name,data,suc,err);
		};
	})($,app.api,config);