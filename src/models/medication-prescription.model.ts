import { sequelize } from '../lib/database';

export const Prescription = sequelize.define('prescription', {
  // prescriber
  // resident
  medicationName: {
    type: sequelize.Sequelize.STRING
  },
  dosageAmount: {
    type: sequelize.Sequelize.INTEGER
  },
  dosageMeasurement: {                // e.g. milliliters, milligrams. either this or dosage form will be filled out
    type: sequelize.Sequelize.STRING
  },
  dosageForm: {
    type: sequelize.Sequelize.STRING         // either this or dosage measurement will be filled in
  }
});