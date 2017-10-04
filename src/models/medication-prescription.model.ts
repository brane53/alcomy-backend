import { db } from '../lib/database';

export const Prescription = db.define('prescription', {
  // prescriber
  // resident
  medicationName: {
    type: db.Sequelize.STRING
  },
  dosageAmount: {
    type: db.Sequelize.INTEGER
  },
  dosageMeasurement: {                // e.g. milliliters, milligrams. either this or dosage form will be filled out
    type: db.Sequelize.STRING
  },
  dosageForm: {
    type: db.Sequelize.STRING         // either this or dosage measurement will be filled in
  }
});