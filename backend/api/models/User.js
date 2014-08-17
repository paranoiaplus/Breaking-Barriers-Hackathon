/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    fullName: {
      type: "STRING",
      required: true
    },

    email: {
      type: "STRING",
      required: true,
      unique: true
    },

    password: {
      type: "STRING",
      required: true,
      minLength: 6
    }

    phoneNumber: {
      type: "STRING",
      required: true
    },

    isDoctor: {
      type: "BOOLEAN",
      required: true,
      defaultsTo: false
    },

    doctors: "ARRAY", // These atributes are for
    medication: "ARRAY", // users who are Patients

    patients: "ARRAY" // This attribute is for users who are doctors
  }
};

