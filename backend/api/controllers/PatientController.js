module.exports = {
  new: function(req, res, cb){
    res.render("register.ejs")
  },

  create: function(req, res, cb){
    var patientObj = {
      fullName: req.param('fullName'),
      phoneNumber: req.param('phoneNumber'),
      emailAddress: req.param('emailAddress'),
      medication: [0],
      uniqueCode: Math.random().toString(36).substring(7)
    }

    Patient.create(patientObj, function(err, newPatient){
      if(err){
        console.log(err);
        cb(err);
      } else if(!err){
        console.log(newPatient.uniqueCode)
        textService.sendConfirmMessage(newPatient.phoneNumber, newPatient.uniqueCode, newPatient.fullName)
        // req.session.Patient = user.uniqueCode;
        // res.send('localhost:1337/patient/' + newPatient.uniqueCode)
      }


    });
  },

  view: function(req, res, cb){
    Patient.find({uniqueCode: req.param('uniqueCode')}, function(err, patient){
      if(err){
        console.log(err);
        cb(err);
      } else if(!err){
        res.render('patient/view.ejs', {
          fullName: patient.fullName,
          phoneNumber: patient.phoneNumber,
          emailAddress: patient.emailAddress,
          medication: patient.medication
        });
      }
    });
  }

  // update: function(req, res, cb){
  //   Patient.find({uniqueCode: req.uniqueCode}, function(err, patient){
  //     if(err){
  //       console.log(err);
  //       cb(err);
  //     } else if(!err){
  //       var patientObj = {
  //         fullName: req.param('fullName'),
  //         phoneNumber: req.param('phoneNumber'),
  //         emailAddress: req.param('emailAddress'),
  //         medication: req.param('medication'),
  //       }

  //       Patient.update(patient, patientObj, function(err, updatedPatient){
  //         res.redirect('http://localhost:1337/patient/' + updatedPatient.uniqueCode)
  //       });
  //   });
  // }
};

