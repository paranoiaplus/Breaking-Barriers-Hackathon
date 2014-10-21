module.exports = {
	send: function(mailOptions){
    	var nodemailer = require('nodemailer');

    	var smtpTransport = nodemailer.createTransport("SMTP",{
      		service: "Mandrill",
      		auth: {
        		user: sails.config.local.MANDRILL_EMAIL,
        		pass: sails.config.local.MANDRILL_KEY
      		}  
    	});

    	smtpTransport.sendMail(mailOptions, function(err, message){
      		err ? console.log("Message send error.") : console.log("Message sent!");
    	});
	}
}