import { sequelize } from '../lib/database';
import * as Sequelize from 'sequelize';

export const Medication = sequelize.define('medication', {
  genericName: {
    type: sequelize.Sequelize.STRING
  },
  brandName: {
    type: sequelize.Sequelize.STRING
  },
  description: {
    type: sequelize.Sequelize.TEXT
  },
  class: {                             // drug classifications
    type: sequelize.Sequelize.STRING
  },
  strengthAmount: {
    type: sequelize.Sequelize.INTEGER
  },
  strengthMeasurement: {
    type: sequelize.Sequelize.STRING
  },
  form: {
    type: sequelize.Sequelize.STRING
  },
  imageUrl: {
    type: sequelize.Sequelize.STRING
  },
  instructions: {
    type: sequelize.Sequelize.TEXT
  },
  status: {
    type: sequelize.Sequelize.STRING
  },
  notes: {
    type: sequelize.Sequelize.TEXT
  },
  startAt: {
    type: sequelize.Sequelize.DATE
  },
  endAt: {
    type: sequelize.Sequelize.DATE
  },
  route: {
    type: sequelize.Sequelize.STRING
  },
  calculationType: {                // indicates whether calculations are based on measurement or form
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
  },
  refills: {
    type: sequelize.Sequelize.INTEGER
  },
  isNarcotic: {
    type: sequelize.Sequelize.BOOLEAN
  },
  // schedule
  // createdBy
  // script
  // comments
});

/* Are their any special conditions that would prevent a medication from being given.
   e.g. if the resident hasn't had a bowl movement, don't give to them. If so, we
   could make it so medications don't show up under certain conditions. Or we could
   display messages to the user conditionally. e.g. Display a message
   saying, "Resident hasn't had a bowl movement in 3 days. Do not give." We could
   display a little warning icon on the medication task */


   Medication.associate = (models) => {

   };