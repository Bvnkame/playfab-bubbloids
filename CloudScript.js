function FunkoiResponseFormat(result)
{
	return JSON.stringify(result).replace(/"/g, '\\"');
}

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

handlers.SendPushNotification = function(args)
{
	var request {
		Recipient : 7A2290C930139A65,
		Message : "Hello, nice to meet you",
	};

	server.SendPushNotification(request);

	var result = {}; 
	result.message = "sent";

	return FunkoiResponseFormat(result);
}