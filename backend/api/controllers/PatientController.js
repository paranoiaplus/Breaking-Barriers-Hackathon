/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function(req, res){
		res.render('patient/new');
	},

	create: function(req, res){
		var patientObj = {
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
	}
};

