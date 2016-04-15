//===========================================
//Ultilities
//===========================================
function FunkoiResponseFormat(result)
{
	return JSON.stringify(result).replace(/"/g, '\\"');
}


//===========================================
//Functions
//===========================================
//Hello world
handlers.HelloWorld = function(args){ 
	var result = {}; 
	result.message = "Funkoi: hello world!"; 
	return FunkoiResponseFormat(result);
}

//Get server time
handlers.GetTime = function(args){
	var d = new Date();
	var n = d.getTime();
	
	var result = {}; 
	result.timeInSeconds = n;
	return FunkoiResponseFormat(result);
}

//Send notification
handlers.SendNotification = function(args)
{
	var request = {
		Recipient : currentPlayerId,
		Message : "Bubbloids says Hello to you!",
	};

	//var request = {};
	//request.Recipient = args.Id == undefined || args.Id == null ? currentPlayerId : args.Id;
	//request.Message = args.Msg == undefined || args.Msg == null ? "" : args.Msg;
	//request.Subject = args.Subject == undefined || args.Subject == null ? "" : args.Subject;
	//server.SendPushNotification(request);

	var result = server.SendPushNotification(request); 

	return FunkoiResponseFormat(result);
}

//Get user account info
handlers.GetUserAccountInfo = function(args)
{
	var request = {
		PlayFabId : currentPlayerId,
	};

	var result = server.GetUserAccountInfo(request);

	return FunkoiResponseFormat(result);
}

//Get user data
handlers.GetData = function(args)
{
	var request = {
		PlayFabId : currentPlayerId,
		Keys : args.key,
	};

	var result = server.GetUserData(request);

	//var result = {}; 
	//result.message = "sent";

	return FunkoiResponseFormat(result);
}