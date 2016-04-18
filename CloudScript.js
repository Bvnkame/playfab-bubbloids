var Environments = {
	LEVELOPMENT : 0,
	PUBLISH : 1
};

var g_environment = Environments.PUBLISH;

//===========================================
//Ultilities
//===========================================
function FunkoiResponseFormat(result)
{
	return JSON.stringify(result).replace(/"/g, '\"');
}

function DebugLog(message)
{
	if(g_environment == Environments.LEVELOPMENT)
	{
		log.debug(message);
	}
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

	DebugLog(result["Data"]["EVENT_MYSTERY_BOX_DURATION"]);
	DebugLog(result["Data"]["EVENT_MYSTERY_BOX_START"]);
	DebugLog(result["Data"]["MYSTERY_BOX"]);

	//Calculate the remain time
	var eventStart 		= result["Data"]["EVENT_MYSTERY_BOX_START"];
	var eventDuration 	= result["Data"]["EVENT_MYSTERY_BOX_DURATION"];

	var startTime = new Date(eventStart);
	var durationTime = Number(eventDuration) * 3600000; //in miliseconds
	var currentTime = new Date();

	DebugLog("startTime:" + startTime + ", timestamp: " + startTime.getTime());
	DebugLog("durationTime:" + durationTime);
	DebugLog("currentTime:" + currentTime + ", timestamp: " + currentTime.getTime());

	var isAvailable = (currentTime.getTime() > startTime.getTime()) &&  (currentTime.getTime() <= startTime.getTime() + durationTime);
	DebugLog("Available: " + isAvailable);

	if(isAvailable)
	{
		var remainTime = (startTime.getTime() + durationTime) - currentTime.getTime(); //Miliseconds
		//Return the json value of key data
		
		var respond = {
			IsAvailable : true,
			MysteryBox : result["Data"]["MYSTERY_BOX"],
			RemainTime : remainTime,	
		};
		return FunkoiResponseFormat(respond);
	}
	else
	{
		var respond = {
			IsAvailable : false,
			MysteryBox : null,
			RemainTime : null,	
		};
		return FunkoiResponseFormat(respond);
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