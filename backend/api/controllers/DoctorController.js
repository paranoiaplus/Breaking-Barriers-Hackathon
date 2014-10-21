/**
 * DoctorController
 *
 * @description :: Server-side logic for managing doctors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function(req, res){
		res.render('doctor/new');
	},

	create: function(req, res){
		var doctorObj = {
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
	}
};

