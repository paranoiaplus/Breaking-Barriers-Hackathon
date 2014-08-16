/**
* Patient.js
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

    phoneNumber: {
      type: "STRING",
      required: true
    },

    emailAddress: {
      type: "STRING",
      required: true
    },

    medications: {
      type: "ARRAY",
      required: true
    },

    uniqueCode: {
      type: "STRING",
      required: true,
      unique: true
    }
  }
};

