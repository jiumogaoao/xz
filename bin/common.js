// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.api={};
	app.pop={
		on:function(view,data,fn){
			if(view){
				config.loadingOn();
				$.ajax({ 
							url:"view/"+view+".html",
							dataType:"html",
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err))
								},
							success: function(html){
								config.loadingOff();								
							var popHtml=_.template(html)(data||null);
							$("#pop").html(popHtml);
							$("#pop").show();
							$("#pop").css("top",($(window).height()-$("#pop").height())/2+"px");
							$("#loadingBG").show();
							if(fn){fn();}
							}
						});
				}		
			},
		off:function(){
			$("#pop").hide();
			$("#pop").empty();
			$("#loadingBG").hide();
			}
		};
	app.cookies=function(name,value){
		if(value){
				Cookies.set('xz_'+name,JSON.stringify(value),{ expires: 60*60*24 })	
			}else{
				if(Cookies.get('xz_'+name)){
					return JSON.parse(Cookies.get('xz_'+name));
					}else{
						return false;
						};
				}
		}
	app.loginCheck=function(fn){
		if(app.cookies("user")){
			fn(app.cookies("user"));
			}else{
				alert("请先登录");
				window.location.hash="index";
				}
		}
	})();