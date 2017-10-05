import { sequelize } from '../lib/database';

export const MedicationInventoryItem = sequelize.define('medicationInventoryItem', {
  container: {
    type: sequelize.Sequelize.STRING
  },
  startQuantity: {
    type: sequelize.Sequelize.INTEGER
  },
  quantity: {
    type: sequelize.Sequelize.INTEGER
  },
  startAt: {
    type: sequelize.Sequelize.DATE
  },
  endAt: {
    type: sequelize.Sequelize.DATE
  },
  fillDate: {
    type: sequelize.Sequelize.DATEONLY
  },
  expireDate: {
    type: sequelize.Sequelize.DATEONLY
  },
  receivedAt: {
    type: sequelize.Sequelize.DATE
  },
  // receivedBy
  rxNumber: {
    type: sequelize.Sequelize.STRING
  }
});