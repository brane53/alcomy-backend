import { db } from '../lib/database';

export const MedicationInventoryItem = db.define('medicationInventoryItem', {
  container: {
    type: db.Sequelize.STRING
  },
  startQuantity: {
    type: db.Sequelize.INTEGER
  },
  quantity: {
    type: db.Sequelize.INTEGER
  },
  startAt: {
    type: db.Sequelize.DATE
  },
  endAt: {
    type: db.Sequelize.DATE
  },
  fillDate: {
    type: db.Sequelize.DATEONLY
  },
  expireDate: {
    type: db.Sequelize.DATEONLY
  },
  receivedAt: {
    type: db.Sequelize.DATE
  },
  // receivedBy
  rxNumber: {
    type: db.Sequelize.STRING
  }
});