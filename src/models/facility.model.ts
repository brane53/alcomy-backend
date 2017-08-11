import { db } from '../lib/database';

export const Facility = db.define('facility', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  displayName: {
    type: db.Sequelize.STRING
  },
  facilityNumber: {
    type: db.Sequelize.INTEGER
  },
  
});