import { db } from '../lib/database';

export const MedicationTask = db.define('medicationTask', {
  // medication
  // resident
  state: {                      // ready, popped, passed, omitted
    type: db.Sequelize.STRING,
    defaultValue: 'ready'
  },
  giveAt: {
    type: db.Sequelize.DATE
  },
  medCartNumber: {
    type: db.Sequelize.TYPE
  }
});