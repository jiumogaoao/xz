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
								app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
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
	})();