/**
 * MedicationController
 */

 var schedule = require('node-schedule');

module.exports = {
	create: function(req, res){
		var medObj = {
			medicationName: req.param('medicationName'),
			medicationID: require('crypto').randomBytes(6).toString('hex'),
			prescribedBy: req.session.user.fullName,
			prescribedTo: req.param('prescribedTo'),
			timesPerDay: req.param('timesPerDay') || [],
			daysPerWeek: req.param('daysPerWeek') || [],
			notes: req.param('notes') || ""
		};


		Medication.create(medObj, function(err, newMedication){
			if (err) res.json({"Error: " : err}, 400);
			res.json(newMedication);
		});
	},

	createAlert: function(req, res){
		Medication.findOne({medicationID: req.param('medicationID')}).exec(function findMeds(err, medication){
			if (err) res.json({error: "Database error, try again later"});

		});
	}
};

