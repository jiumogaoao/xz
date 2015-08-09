// JavaScript Document
app.api.add("login","http://"+config.sour+":8888/",{model:"client",action:"login"},"get",function(data){
	app.cookies("user",data);
	});