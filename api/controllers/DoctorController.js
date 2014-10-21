/**
 * DoctorController
 *
 * @description :: Server-side logic for managing doctors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcryptjs');
module.exports = {
	new: function(req, res){
		res.render('doctor/new');
	},

	create: function(req, res){
		var doctorObj = {
			fullName: req.param('fullName'),
			email: req.param('email'),
			password: req.param('password'),
			doctorID: require('crypto').randomBytes(6).toString('hex'),
			medications: [],
			patients: []
		};

		Doctor.create(doctorObj, function(err, newDoctor){
			if (err) res.json({"Error": "Error creating user, please tyry again."}, 400);
			res.json(newDoctor);
		});
	},

	login: function(req, res){
		Doctor.findOne({email: req.param('email')}).exec(function findDoctor(err, doctor){
			if (err) res.json({error: "DB Error ,try again later"})

			if(doctor){
				bcrypt.compare(req.param('password'), doctor.password, function(err, match){
					if(err) res.json({error: "Server error, try again later"});

					match ? res.json({success: "Password Correct!"}) : res.json({error: "Password Incorrect!"})
				});
			} else {
				res.json({error: "email not found"});
			}
		});
	}
};

