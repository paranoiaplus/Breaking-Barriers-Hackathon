/**
* Medication.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    medicationName: {
      type: "STRING",
      required: true
    },

    prescribedBy: { // Code of doctor who prescribed med
      type: "STRING"
    },

    prescribedTo: { // Code of Patient
      type: "STRING",
      required: true
    },

    uniqueCode: {
      type: "STRING",
      required: true
    }

    supposedToTakeToday: {
      type: "BOOLEAN",
      required: true
    },

    timesPerDay: {
      type: "ARRAY",
      required: true
    },

    allTakenToday: {
      type: "STRING",
      required: true
    }
  }
};

