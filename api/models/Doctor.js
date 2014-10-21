/**
* Doctor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    
    fullName: {
      type: 'STRING',
      required: true
    },
    
  	email: {
  		type: 'STRING',
  		unique: true,
  		required: true
  	},

  	password: {
  		type: 'STRING',
  		required: true,
  		minLength: 6
  	},

  	doctorID: {
  		type: 'STRING',
  		required: true,
  		unique: true
  	},

  	medications: {
  		type: 'Array' // Array of med IDs
  	},

  	patients: {
  		type: 'Array' // Array of patient IDs
  	}
  },


  beforeCreate: function(values, cb){
  	var bcrypt = require('bcryptjs');

  	bcrypt.genSalt(10, function(err, salt){
  		if (err) return cb(err);

  		bcrypt.hash(values.password, salt, function(err, hashedPass){
  			if (err) return cb(err);

  			values.password = hashedPass;
  			console.log('Completed!');
  			cb();
  		});
  	});
  },
  
  afterCreate: function(newPatient, cb){
    var nodemailer = require('nodemailer');

    var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Mandrill",
      auth: {
        user: sails.config.local.MANDRILL_EMAIL,
        pass: sails.config.local.MANDRILL_KEY
      }  
    });

    var mailOptions = {
      from: "Paul Vorobyev<hi@pauldoescode.com>",
      to: newPatient.email,
      subject: "Welcome to RxMinders!",
      text: "Hey there! \nThank you for joining RxMinders as a doctor. Feel free to contact me with any bugs, complaints, suggestions, etc. at hi@pauldoescode.com \n- Paul Vorobyev"
    }

    smtpTransport.sendMail(mailOptions, function(err, message){
      err ? console.log("Message send error: " + err) : console.log("Message sent: " + message.to);
    });
  }
};

