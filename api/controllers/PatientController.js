/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcryptjs');
module.exports = {
	new: function(req, res){
		res.render('patient/new');
	},

	create: function(req, res){
		var patientObj = {
			fullName: req.param('fullName'),
			email: req.param('email'),
			password: req.param('password'),
			phoneNumber: req.param('phoneNumber'),
			patientID: require('crypto').randomBytes(6).toString('hex'),
			medications: [],
			doctors: []
		};

		Patient.create(patientObj, function(err, newPatient){
			if (err) res.json({"Error": "Error creating user, please try again."}, 400);
			res.json(newPatient);
		});
	},

	login: function(req, res){
		Patient.findOne({email: req.param('email')}).exec(function findPatient(err, patient){
			if (err) res.json({error: "DB Error, try again later"});

			if(patient){
				bcrypt.compare(req.param('password'), patient.password, function(err, match){
					if (err) res.json({error: "Server error, try again later"});

					match ? res.json({success: "Password Correct!"}) : res.json({error: "Password Incorrect!"});
				});
			} else {
				res.json({error: "email not found"});
			}
		});
	}
};

