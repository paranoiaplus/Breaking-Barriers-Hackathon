

module.exports = {
  create: function(req, res, next){
    var medicationObj = {
      medicationName: req.param('medicationName'),
      prescribedto: req.param('prescribedTo'),
      uniqueCode: Math.random().toString(36).substring(10),
      takenToday: false,
      eveningOrMorning: false
    }

    Medication.create(medicationObj, function(err, medication){
      if(err){
        console.log(err);
        cb(err);
      }


    });
  }
};

