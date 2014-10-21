/**
 * MedicationController
 *
 * @description :: Server-side logic for managing medications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

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
	}
};

