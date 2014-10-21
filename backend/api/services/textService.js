var twilio = require('twilio')(sails.config.local.TWILIO_SID, sails.config.local.TWILIO_AUTH)

module.exports = {	
	send: function(options){
		twilio.messages.create(options, function(err, message){
			err ? console.log("Twilio Error: " + err.message) : console.log("Twilio Success: " + message.to);
		});
	}
}