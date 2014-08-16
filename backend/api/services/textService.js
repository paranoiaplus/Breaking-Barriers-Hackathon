var twilio = require('twilio');

module.exports = {
  sendConfirmMessage: function(phoneNumber, uniqueCode, fullName){
    var client = new twilio.RestClient(sails.config.globals.twilioSID, sails.config.globals.twilioToken);

    client.sms.messages.create({
      to: phoneNumber,
      from: '2183894481',
      body: 'Hey, ' + fullName + '! Thanks for signing up! Your unique code is ' + uniqueCode

    }, function(error, message){
      if(!error){
        console.log("Success! Message sent to " + phoneNumber);
      } else {
        console.log("Error " + error)
      }
    });
  }
}