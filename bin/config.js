// JavaScript Document
var sourArry=[location.hostname];
var config={
	sour:sourArry[0],
	loadingOn:function(){
		$("#loading").show();
		$("#loadingBG").show();
		$("#loading").css({"top":($(window).height()-155)/2});
		},
	loadingOff:function(){
		$("#loading").hide();
		$("#loadingBG").hide();
		},
	template:["single","double"]
	};
var uuid=function(){
		return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	        return (v.toString(16)).toUpperCase();
    	});
	};
var isNullObj=function(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            return false;
        }
    }
    return true;
}