import { sequelize } from '../lib/database';

export const PhoneNumber = sequelize.define('phoneNumber', {
  description: {
    type: sequelize.Sequelize.STRING
  },
  number: {
    type: sequelize.Sequelize.INTEGER
  },
  type: {
    type: sequelize.Sequelize.STRING
  }
});