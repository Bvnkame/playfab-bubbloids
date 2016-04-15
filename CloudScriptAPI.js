/**
* CloudScript
*
* @module CloudScript
*/

/**
* User-extensible object that holds your Cloud Script handlers
*
* @class handlers
* @static
*/
var handlers = {};

/**
* PlayFabId of the player that invoked this script
*
* @property currentPlayerId
* @type String
*/
var currentPlayerId = '435454';

/**
* Contains APIs for logging debug information about your Cloud Script execution
*
* @class log
* @static
*/
var log = {};

/**
* Logs a debug message to the title's Cloud Script log.
*
* @method debug
* @static
* @param {String} message Message to log to the debug log
* @param {Error} [exc] Optional exception object to log along with your message
*/
log.debug = function(message, exc) { };

/**
* Logs an informational message to the title's Cloud Script log.
*
* @method info
* @static
* @param {String} message Message to log to the debug log
* @param {Error} [exc] Optional exception object to log along with your message
*/
log.info = function(message, exc) { };

/**
* Logs an error message to the title's Cloud Script log.
*
* @method error
* @static
* @param {String} message Message to log to the debug log
* @param {Error} [exc] Optional exception object to log along with your message
*/
log.error = function(message, exc) { };

/**
* contains HTTP APIs
*
* @class http
* @static
*/
var http = {};

/**
* Makes an http request to an external URL, and returns the results synchronously. 
*
* @method request
* @static
* @param {String} url URL to request
* @param {String} [method=get] HTTP request method to use. May be 'get', 'post', 'put', or 'delete'. Defaults to 'get' if left out.
* @param {String} [content] Body to post to the webserver. Ignored for 'get' and 'delete' commands.
* @param {String} [contentType] MIME type of the content. Defaults to 'text/plain' if left out.
* @return {String} The content returned by the remote websever.
*/
http.request = function(url, method, content, contentType) {};

/**
* contains properties related to the currently running script
*
* @class script
* @static
*/
var script = {};

/**
* Major version of the currently running script
*
* @property version
* @static
* @type Number
*/
script.version = 1;

/**
* Revision of the currently running script
*
* @property revision
* @static
* @type Number
*/
script.revision = 1;

/**
* Combined major.minor version of the currently running script
*
* @property versionString
* @static
* @type String
*/
script.versionString = '1.1';

/**
* TitleId of he currently running script
*
* @property titleId
* @static
* @type String
*/
script.titleId = 'F00';


/**
* Enumeration UserOrigination
*
* @class UserOrigination
* @static
*/
function UserOrigination () {
/**
* Organic
*
* @property Organic
* @static
* @type String
*/
var Organic = "Organic";

/**
* Steam
*
* @property Steam
* @static
* @type String
*/
var Steam = "Steam";

/**
* Google
*
* @property Google
* @static
* @type String
*/
var Google = "Google";

/**
* Amazon
*
* @property Amazon
* @static
* @type String
*/
var Amazon = "Amazon";

/**
* Facebook
*
* @property Facebook
* @static
* @type String
*/
var Facebook = "Facebook";

/**
* Kongregate
*
* @property Kongregate
* @static
* @type String
*/
var Kongregate = "Kongregate";

/**
* GamersFirst
*
* @property GamersFirst
* @static
* @type String
*/
var GamersFirst = "GamersFirst";

/**
* Unknown
*
* @property Unknown
* @static
* @type String
*/
var Unknown = "Unknown";

/**
* IOS
*
* @property IOS
* @static
* @type String
*/
var IOS = "IOS";

/**
* LoadTest
*
* @property LoadTest
* @static
* @type String
*/
var LoadTest = "LoadTest";

/**
* Android
*
* @property Android
* @static
* @type String
*/
var Android = "Android";

/**
* PSN
*
* @property PSN
* @static
* @type String
*/
var PSN = "PSN";

/**
* GameCenter
*
* @property GameCenter
* @static
* @type String
*/
var GameCenter = "GameCenter";

}

/**
* Enumeration Currency
*
* @class Currency
* @static
*/
function Currency () {
/**
* USD
*
* @property USD
* @static
* @type String
*/
var USD = "USD";

/**
* GBP
*
* @property GBP
* @static
* @type String
*/
var GBP = "GBP";

/**
* EUR
*
* @property EUR
* @static
* @type String
*/
var EUR = "EUR";

/**
* RUB
*
* @property RUB
* @static
* @type String
*/
var RUB = "RUB";

/**
* BRL
*
* @property BRL
* @static
* @type String
*/
var BRL = "BRL";

/**
* CIS
*
* @property CIS
* @static
* @type String
*/
var CIS = "CIS";

/**
* CAD
*
* @property CAD
* @static
* @type String
*/
var CAD = "CAD";

}

/**
* Enumeration TitleActivationStatus
*
* @class TitleActivationStatus
* @static
*/
function TitleActivationStatus () {
/**
* None
*
* @property None
* @static
* @type String
*/
var None = "None";

/**
* ActivatedTitleKey
*
* @property ActivatedTitleKey
* @static
* @type String
*/
var ActivatedTitleKey = "ActivatedTitleKey";

/**
* PendingSteam
*
* @property PendingSteam
* @static
* @type String
*/
var PendingSteam = "PendingSteam";

/**
* ActivatedSteam
*
* @property ActivatedSteam
* @static
* @type String
*/
var ActivatedSteam = "ActivatedSteam";

/**
* RevokedSteam
*
* @property RevokedSteam
* @static
* @type String
*/
var RevokedSteam = "RevokedSteam";

}

/**
* Enumeration PlayerConnectionState
*
* @class PlayerConnectionState
* @static
*/
function PlayerConnectionState () {
/**
* Unassigned
*
* @property Unassigned
* @static
* @type String
*/
var Unassigned = "Unassigned";

/**
* Connecting
*
* @property Connecting
* @static
* @type String
*/
var Connecting = "Connecting";

/**
* Participating
*
* @property Participating
* @static
* @type String
*/
var Participating = "Participating";

/**
* Participated
*
* @property Participated
* @static
* @type String
*/
var Participated = "Participated";

/**
* Reconnecting
*
* @property Reconnecting
* @static
* @type String
*/
var Reconnecting = "Reconnecting";

}

/**
* Enumeration UserDataPermission
*
* @class UserDataPermission
* @static
*/
function UserDataPermission () {
/**
* Private
*
* @property Private
* @static
* @type String
*/
var Private = "Private";

/**
* Public
*
* @property Public
* @static
* @type String
*/
var Public = "Public";

}

/**
* Contains APIs for interacting with the PlayFab server
*
* @class server
* @static
*/
var server = { };

/**
* PlayFab server API version
*
* @property version
* @type String
* @static
*/
server.version = "1.2.0";

/**
* Validated a client's session ticket, and if successful, returns details for that user
*
* @method AuthenticateSessionTicket
* @static
* @param {Object} request Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally.
* @param {String} request.SessionTicket Session ticket as issued by a PlayFab client login API
* @return {Object} 
*/
server.AuthenticateSessionTicket = function(request) {  }

/**
* Retrieves the relevant details for a specified user
*
* @method GetUserAccountInfo
* @static
* @param {Object} request This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally.
* @param {String} [request.PlayFabId]
* @return {Object} 
*/
server.GetUserAccountInfo = function(request) {  }

/**
* Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
*
* @method SendPushNotification
* @static
* @param {Object} request 
* @param {String} request.Recipient PlayFabId of the recipient of the push notification
* @param {String} [request.Message] text of message to send
* @return {Object} 
*/
server.SendPushNotification = function(request) {  }

/**
* Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
*
* @method GetLeaderboard
* @static
* @param {Object} request 
* @param {String} request.StatisticName unique identifier for the title-specific statistic for the leaderboard
* @param {Number} request.StartPosition first entry in the leaderboard to be retrieved
* @param {Number} request.MaxResultsCount maximum number of entries to retrieve
* @return {Object} Note that the Position of the user in the results is for the overall leaderboard.
*/
server.GetLeaderboard = function(request) {  }

/**
* Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
*
* @method GetLeaderboardAroundUser
* @static
* @param {Object} request 
* @param {String} request.StatisticName unique identifier for the title-specific statistic for the leaderboard
* @param {String} request.PlayFabId 
* @param {Number} request.MaxResultsCount maximum number of entries to retrieve
* @return {Object} Note that the Position of the user in the results is for the overall leaderboard.
*/
server.GetLeaderboardAroundUser = function(request) {  }

/**
* Retrieves the title-specific custom data for the user which is readable and writable by the client
*
* @method GetUserData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {[String]} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserData = function(request) {  }

/**
* Retrieves the title-specific custom data for the user which cannot be accessed by the client
*
* @method GetUserInternalData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {String} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserInternalData = function(request) {  }

/**
* Retrieves the publisher-specific custom data for the user which is readable and writable by the client
*
* @method GetUserPublisherData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {String} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserPublisherData = function(request) {  }

/**
* Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
*
* @method GetUserPublisherInternalData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {String} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserPublisherInternalData = function(request) {  }

/**
* Retrieves the publisher-specific custom data for the user which can only be read by the client
*
* @method GetUserPublisherReadOnlyData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {String} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserPublisherReadOnlyData = function(request) {  }

/**
* Retrieves the title-specific custom data for the user which can only be read by the client
*
* @method GetUserReadOnlyData
* @static
* @param {Object} request Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being requested
* @param {String} request.Keys specific keys to search for in the custom user data
* @return {Object} 
*/
server.GetUserReadOnlyData = function(request) {  }

/**
* Retrieves the details of all title-specific statistics for the user
*
* @method GetUserStatistics
* @static
* @param {Object} request 
* @param {String} request.PlayFabId user for whom statistics are being requested
* @return {Object} User statistics are numeric values which may only be updated by a server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab.
*/
server.GetUserStatistics = function(request) {  }

/**
* Updates the title-specific custom data for the user which is readable and writable by the client
*
* @method UpdateUserData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data. Keys are trimmed of whitespace. Keys may not begin with a '!' character.
* @param {String} request.Permission Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
* @return {Object} 
*/
server.UpdateUserData = function(request) {  }

/**
* Updates the title-specific custom data for the user which cannot be accessed by the client
*
* @method UpdateUserInternalData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data
* @return {Object} 
*/
server.UpdateUserInternalData = function(request) {  }

/**
* Updates the publisher-specific custom data for the user which is readable and writable by the client
*
* @method UpdateUserPublisherData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data. Keys are trimmed of whitespace. Keys may not begin with a '!' character.
* @param {String} request.Permission Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
* @return {Object} 
*/
server.UpdateUserPublisherData = function(request) {  }

/**
* Updates the publisher-specific custom data for the user which cannot be accessed by the client
*
* @method UpdateUserPublisherInternalData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data
* @return {Object} 
*/
server.UpdateUserPublisherInternalData = function(request) {  }

/**
* Updates the publisher-specific custom data for the user which can only be read by the client
*
* @method UpdateUserPublisherReadOnlyData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data. Keys are trimmed of whitespace. Keys may not begin with a '!' character.
* @param {String} request.Permission Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
* @return {Object} 
*/
server.UpdateUserPublisherReadOnlyData = function(request) {  }

/**
* Updates the title-specific custom data for the user which can only be read by the client
*
* @method UpdateUserReadOnlyData
* @static
* @param {Object} request This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose custom data is being updated
* @param {String} request.Data data to be written to the user's custom data. Keys are trimmed of whitespace. Keys may not begin with a '!' character.
* @param {String} request.Permission Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
* @return {Object} 
*/
server.UpdateUserReadOnlyData = function(request) {  }

/**
* Updates the values of the specified title-specific statistics for the user
*
* @method UpdateUserStatistics
* @static
* @param {Object} request This operation is additive. Statistics not currently defined will be added, while those already defined will be updated with the given values. All other user statistics will remain unchanged.
* @param {String} request.PlayFabId user whose statistics are to be updated
* @param {Number} request.UserStatistics statistics to be updated with the provided values
* @return {Object} User statistics are numeric values which may only be updated by a server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab.
*/
server.UpdateUserStatistics = function(request) {  }

/**
* Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
*
* @method GetCatalogItems
* @static
* @param {Object} request 
* @param {String} request.CatalogVersion which catalog is being requested
* @return {Object} 
*/
server.GetCatalogItems = function(request) {  }

/**
* Retrieves the key-value store of custom title settings
*
* @method GetTitleData
* @static
* @param {Object} request This API is designed to return title specific values which can be read, but not written to, by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build.
* @param {String} request.Keys  array of keys to get back data from the TitleData data blob, set by the admin tools
* @return {Object} 
*/
server.GetTitleData = function(request) {  }

/**
* Updates the key-value store of custom title settings
*
* @method SetTitleData
* @static
* @param {Object} request This API is designed to store title specific values which can be read, but not written to, by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value.
* @param {String} request.Key key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
* @param {String} request.Value new value to set. Set to null to remove a value
* @return {Object} 
*/
server.SetTitleData = function(request) {  }

/**
* Increments  the user's balance of the specified virtual currency by the stated amount
*
* @method AddUserVirtualCurrency
* @static
* @param {Object} request 
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose virtual currency balance is to be incremented
* @param {String} request.VirtualCurrency name of the virtual currency which is to be incremented
* @param {Number} request.Amount amount to be added to the user balance of the specified virtual currency
* @return {Object} 
*/
server.AddUserVirtualCurrency = function(request) {  }

/**
* Retrieves the specified user's current inventory of virtual goods
*
* @method GetUserInventory
* @static
* @param {Object} request All items currently in the user inventory will be returned, irrespective of how they were acquired (via purchasing, grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the user's current inventory, and so will not be not included.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose inventory is being requested
* @param {String} request.CatalogVersion used to limit results to only those from a specific catalog version
* @return {Object} 
*/
server.GetUserInventory = function(request) {  }

/**
* Adds the specified items to the specified user's inventory
*
* @method GrantItemsToUser
* @static
* @param {Object} request This function directly adds inventory items to the user's inventories. As a result of this operations, the user will not be charged any transaction fee, regardless of the inventory item catalog definition.
* @param {String} request.CatalogVersion catalog version from which items are to be granted
* @param {String} request.PlayFabId PlayFab unique identifier of the user to whom the catalog items are to be granted
* @param {String} request.Annotation string detailing any additional information concerning this operation
* @param {String} request.ItemIds array of itemIds to grant to the user
* @return {Object} 
*/
server.GrantItemsToUser = function(request) {  }

/**
* Adds the specified items to the specified user inventories
*
* @method GrantItemsToUsers
* @static
* @param {Object} request This function directly adds inventory items to user inventories. As a result of this operations, the user will not be charged any transaction fee, regardless of the inventory item catalog definition.
* @param {String} request.CatalogVersion catalog version from which items are to be granted
* @param {Object} request.ItemGrants array of items to grant and the users to whom the items are to be granted
* @param {String} request.ItemGrants.PlayFabId PlayFab unique identifier of the user to whom the catalog item is to be granted
* @param {String} request.ItemGrants.ItemId unique identifier of the catalog item to be granted to the user
* @param {String} request.ItemGrants.Annotation string detailing any additional information concerning this operation
* @return {Object} 
*/
server.GrantItemsToUsers = function(request) {  }

/**
* Modifies the number of remaining uses of a player's inventory item
*
* @method ModifyItemUses
* @static
* @param {Object} request This function can both add and remove uses of an inventory item. If the number of uses drops below zero, the item will be removed from active inventory.
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose item is being modified
* @param {String} request.ItemInstanceId unique instance identifier of the item to be modified
* @param {Number} request.UsesToAdd number of uses to add to the item. Can be negative to remove uses.
* @return {Object} 
*/
server.ModifyItemUses = function(request) {  }

/**
* Report a player on behalf of another player
*
* @method ReportPlayer
* @static
* @param {Object} request 
* @param {String} request.ReporterId PlayFabId of the reporting player
* @param {String} request.ReporteeId PlayFabId of the reported player
* @param {String} request.TitleId title player was reported in, optional if report not for specific title
* @param {String} request.Comment Optional additional comment by reporting player
* @return {Object} 
*/
server.ReportPlayer = function(request) {  }

/**
* Decrements the user's balance of the specified virtual currency by the stated amount
*
* @method SubtractUserVirtualCurrency
* @static
* @param {Object} request 
* @param {String} request.PlayFabId PlayFab unique identifier of the user whose virtual currency balance is to be decremented
* @param {String} request.VirtualCurrency name of the virtual currency which is to be decremented
* @param {Number} request.Amount amount to be subtracted from the user balance of the specified virtual currency
* @return {Object} 
*/
server.SubtractUserVirtualCurrency = function(request) {  }

/**
* Informs the PlayFab match-making service that the user specified has left the Game Server Instance
*
* @method NotifyMatchmakerPlayerLeft
* @static
* @param {Object} request 
* @param {String} request.LobbyId unique identifier of the Game Instance the user is leaving
* @param {String} request.PlayFabId 
* @return {Object} 
*/
server.NotifyMatchmakerPlayerLeft = function(request) {  }

/**
* Validates a Game Server session ticket and returns details about the user
*
* @method RedeemMatchmakerTicket
* @static
* @param {Object} request This function is used by a Game Server Instance to validate with the PlayFab service that a user has been registered as connected to the server. The Ticket is provided to the client either as a result of a call to StartGame or Matchmake, each of which return a Ticket specific to the Game Server Instance. This function will fail in any case where the Ticket presented is not valid for the specific Game Server Instance making the call. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally.
* @param {String} request.Ticket server authorization ticket passed back from a call to Matchmake or StartGame
* @param {String} request.LobbyId unique identifier of the Game Server Instance that is asking for validation of the authorization ticket
* @return {Object} 
*/
server.RedeemMatchmakerTicket = function(request) {  }

/**
* Awards the specified users the specified Steam achievements
*
* @method AwardSteamAchievement
* @static
* @param {Object} request 
* @param {Object} request.Achievements array of achievements to grant and the users to whom they are to be granted
* @param {String} request.Achievements.PlayFabId 
* @param {String} request.Achievements.AchievementName unique Steam achievement name
* @param {Boolean} request.Achievements.Result result of the award attempt (only valid on response, not on request)
* @return {Object} 
*/
server.AwardSteamAchievement = function(request) {  }

/**
* Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users in the group (and the server) can add new members.
*
* @method AddSharedGroupMembers
* @static
* @param {Object} request 
* @param {String} request.SharedGroupId unique identifier for the shared group
* @param {String} request.PlayFabIds list of PlayFabId identifiers of users to add as members of the shared group
* @return {Object} 
*/
server.AddSharedGroupMembers = function(request) {  }

/**
* Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the group. When created by a server, the group will initially have no members.
*
* @method CreateSharedGroup
* @static
* @param {Object} request If SharedGroupId is specified, the service will attempt to create a group with that identifier, and will return an error if it is already in use. If no SharedGroupId is specified, a random identifier will be assigned.
* @param {String} request.SharedGroupId unique identifier for the shared group (a random identifier will be assigned, if one is not specified)
* @return {Object} 
*/
server.CreateSharedGroup = function(request) {  }

/**
* Deletes a shared group, freeing up the shared group ID to be reused for a new group
*
* @method DeleteSharedGroup
* @static
* @param {Object} request 
* @param {String} request.SharedGroupId unique identifier for the shared group
* @return {Object} 
*/
server.DeleteSharedGroup = function(request) {  }

/**
* Retrieves the key-value store of custom publisher settings
*
* @method GetPublisherData
* @static
* @param {Object} request This API is designed to return publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. For more information email devrel@playfab.com
* @param {String} request.Keys  array of keys to get back data from the Publisher data blob, set by the admin tools
* @return {Object} 
*/
server.GetPublisherData = function(request) {  }

/**
* Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all public and private group data.
*
* @method GetSharedGroupData
* @static
* @param {Object} request 
* @param {String} request.SharedGroupId unique identifier for the shared group
* @param {String} request.Keys specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array indicates that no keys should be returned)
* @param {Boolean} request.GetMembers if true, return the list of all members of the shared group
* @return {Object} 
*/
server.GetSharedGroupData = function(request) {  }

/**
* Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the group can remove members. If as a result of the call, zero users remain with access, the group and its associated data will be deleted.
*
* @method RemoveSharedGroupMembers
* @static
* @param {Object} request 
* @param {String} request.SharedGroupId unique identifier for the shared group
* @param {String} request.PlayFabIds list of PlayFabId identifiers of users to remove from the shared group
* @return {Object} 
*/
server.RemoveSharedGroupMembers = function(request) {  }

/**
* Updates the key-value store of custom publisher settings
*
* @method SetPublisherData
* @static
* @param {Object} request This API is designed to store publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. This operation is additive.  If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value. For more information email devrel@playfab.com
* @param {String} request.Key key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
* @param {String} request.Value new value to set. Set to null to remove a value
* @return {Object} 
*/
server.SetPublisherData = function(request) {  }

/**
* Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated or added in this call will be readable by users not in the group. By default, data permissions are set to Private. Regardless of the permission setting, only members of the group (and the server) can update the data.
*
* @method UpdateSharedGroupData
* @static
* @param {Object} request Note that in the case of multiple calls to write to the same shared group data keys, the last write received by the PlayFab service will determine the value available to subsequent read operations. For scenarios requiring coordination of data updates, it is recommended that titles make use of user data with read permission set to public, or a combination of user data and shared group data.
* @param {String} request.SharedGroupId unique identifier for the shared group
* @param {String} request.Data key value pairs to be stored in the shared group - note that keys will be trimmed of whitespace, must not begin with a '!' character, and that null values will result in the removal of the key from the data set
* @param {String} request.Permission permission to be applied to all user data keys in this request
* @return {Object} 
*/
server.UpdateSharedGroupData = function(request) {  }