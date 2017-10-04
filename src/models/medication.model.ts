import { db } from '../lib/database';
import * as Sequelize from 'sequelize';

export const Medication = db.define('medication', {
  genericName: {
    type: db.Sequelize.STRING
  },
  brandName: {
    type: db.Sequelize.STRING
  },
  description: {
    type: db.Sequelize.TEXT
  },
  class: {                             // drug classifications
    type: db.Sequelize.STRING
  },
  strengthAmount: {
    type: db.Sequelize.INTEGER
  },
  strengthMeasurement: {
    type: db.Sequelize.STRING
  },
  form: {
    type: db.Sequelize.STRING
  },
  imageUrl: {
    type: db.Sequelize.STRING
  },
  instructions: {
    type: db.Sequelize.TEXT
  },
  status: {
    type: db.Sequelize.STRING
  },
  notes: {
    type: db.Sequelize.TEXT
  },
  startAt: {
    type: db.Sequelize.DATE
  },
  endAt: {
    type: db.Sequelize.DATE
  },
  route: {
    type: db.Sequelize.STRING
  },
  calculationType: {                // indicates whether calculations are based on measurement or form
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
  },
  refills: {
    type: db.Sequelize.INTEGER
  },
  isNarcotic: {
    type: db.Sequelize.BOOLEAN
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