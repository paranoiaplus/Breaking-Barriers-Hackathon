var schedule = require('node-schedule');
var twilio = require('twilio')(sails.config.local.TWILIO_SID, sails.config.local.TWILIO_AUTH)

module.exports = {	
	send: function(options){
		twilio.messages.create(options, function(err, message){
			err ? console.log("Twilio Error: " + err.message) : console.log("Twilio Success: " + message.to);
		});
	},

	scheduleInit: function(medication){
		/*
		* Check if medication is supposed to be taken today
		* if none, check for next avail day and schedule. 
		* 
		* Format of daysPerWeek array attr on Medication model:
		* [0, 1, 0, 0, 0, 1, 0]  7 index array representing SMTWTFS
		*
		* 0 = medication not taken that day
		* 1 = medication taken that day
		*/
		var today = new Date();
		if (medication.daysPerWeek[today.getDay()] === 1){
		
		}

	}
}