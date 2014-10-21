/**
* Patient.js
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

  	patientID: {
  		type: 'STRING',
  		required: true,
  		unique: true
  	},

    phoneNumber: {
      type: 'STRING',
      required: true,
      unique: true
    },

  	medications: {
  		type: 'Array' // Array of medicaiton IDs
  	},

  	doctors: {
  		type: 'Array' // Array of doctor IDs
  	}
  },

  beforeCreate: function(values, cb){
  	var bcrypt = require('bcryptjs');

  	bcrypt.genSalt(10, function(err, salt){
  		if (err) return cb(err);

  		bcrypt.hash(values.password, salt, function(err, hashedPass){
  			if (err) return cb(err);

  			values.password = hashedPass;
  			cb();
  		});
  	});
  },

  afterCreate: function(newPatient, cb){
    var mailOptions = {
      from: "Paul Vorobyev<hi@pauldoescode.com>",
      to: newPatient.email,
      subject: "Welcome to RxMinders!",
      text: "Hey there! \nThank you for joining RxMinders as a patient. Feel free to contact me with any bugs, complaints, suggestions, etc. at hi@pauldoescode.com \n- Paul Vorobyev"
    }

    mailService.send(mailOptions);
  }
};

