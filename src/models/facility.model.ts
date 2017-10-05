import { sequelize } from '../lib/database';

export const Facility = sequelize.define('facility', {
  name: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  displayName: {
    type: sequelize.Sequelize.STRING
  },
  facilityNumber: {
    type: sequelize.Sequelize.INTEGER
  },
  capacity: {
    type: sequelize.Sequelize.INTEGER
  }
  
});