/**
* Medication.js 
*/

module.exports = {

  attributes: {
  	medicationName: {
  		type: 'STRING',
  		required: true
  	},

  	medicationID: {
  		type: 'STRING',
  		required: true,
  		unique: true
  	},

  	prescribedBy: {
  		type: 'STRING', // doctorID 
  		required: true
  	},

  	prescribedTo: {
  		type: 'STRING', // patientID
  		required: true
  	},

  	timesPerDay: {
  		type: 'ARRAY' // length 4 array: morning, afternoon, evening, night
  	},

  	daysPerWeek: {
  		type: 'ARRAY' // length 7 array: SMTWTFS. Further doc in alertService.schedule
  	},

    notes: {
      type: 'STRING'
    }
  },

  afterCreate: function(newMed, cb){
    Patient.findOne({patientID: newMed.prescribedTo}, function(err, foundPatient){
      if (err) cb(err);
      Doctor.findOne({doctorID: newMed.prescribedBy}, function(err, founddoctor){
        if (err) cb(err);

        var mailOptions = {
          from: "Paul Vorobyev<hi@pauldoescode.com>",
          to: foundPatient.email,
          subject: "Medication prescription notification",
          text: "Hey there! \nYou received a new medication prescription of " + newMed.medicationName + "\nIf there's any issues, please contact your doctor at " + founddoctor.email
        };

        mailService.send(mailOptions);

      });
    });
  }
};

