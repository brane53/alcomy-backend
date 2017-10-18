import { sequelize } from '../lib/database';

export const MedicationTask = sequelize.define('medicationTask', {
  // medication
  // resident
  state: {                      // ready, popped, passed, omitted
    type: sequelize.Sequelize.STRING,
    defaultValue: 'ready'
  },
  giveAt: {
    type: sequelize.Sequelize.DATE
  },
  medCartNumber: {
    type: sequelize.Sequelize.STRING
  }
});

MedicationTask.associate = (models) => {

};