import { db } from '../lib/database';

export const PhoneNumber = db.define('phoneNumber', {
  description: {
    type: db.Sequelize.STRING
  },
  number: {
    type: db.Sequelize.INTEGER
  },
  type: {
    type: db.Sequelize.STRING
  }
});