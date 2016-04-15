handlers.HelloWorld = function(args){ 
	var result = {}; 
	result.message = "hello world"; 
	return JSON.stringify(result).replace(/"/g, '\\"');
}

handlers.Hello = function(args){ 
	var result = {}; 
	result.message = "hello"; 
	return JSON.stringify(result).replace(/"/g, '\\"');
}

handlers.GetTime = function(args){
	var d = new Date();
	var n = d.getTime();
	
	var result = {}; 
	result.timeInSeconds = n;
	return JSON.stringify(result).replace(/"/g, '\\"');
}
