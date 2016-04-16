//===========================================
//Ultilities
//===========================================
function FunkoiResponseFormat(result)
{
	return JSON.stringify(result).replace(/"/g, '\"');
}

//Get server time
handlers.GetTime = function(args){
	var d = new Date();
	var n = d.getTime();
	
	var result = {}; 
	result.timeInSeconds = n;
	return FunkoiResponseFormat(result);
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

handlers.CheckEvents = function(args)
{
	var request = {
		Keys : [
			"EVENT_MYSTERY_BOX_DURATION",
			"EVENT_MYSTERY_BOX_START",
			"MYSTERY_BOX",
		],
	}

	//Request get title datas from server
	var result = server.GetTitleData(request);

	log.debug(result["Data"]);

	//Calculate the remain time
	var eventStart 		= result["EVENT_MYSTERY_BOX_START"];
	var eventDuration 	= result["EVENT_MYSTERY_BOX_DURATION"];

	var startTime = new Date(eventStart);
	var durationTime = Number(eventDuration) * 3600;
	var currentTime = new Date();

	log.debug("startTime:" + startTime);
	log.debug("durationTime:" + durationTime);
	log.debug("currentTime:" + currentTime);

	var remainTime = currentTime.getTime() - (startTime.getTime() + durationTime);
	log.debug("Remain time:" + remainTime);

	if(remainTime > 0)
	{
		//Return the json value of key data
		return FunkoiResponseFormat(result["Data"]);
	}
	else
	{
		return null;
	}
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