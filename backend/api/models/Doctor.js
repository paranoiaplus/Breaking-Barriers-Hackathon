/**
* Doctor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
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
  }
};

