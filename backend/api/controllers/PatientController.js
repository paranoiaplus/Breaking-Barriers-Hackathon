/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  new: function(req, res, cb){
    res.render("patient/new.ejs")
  }
};

