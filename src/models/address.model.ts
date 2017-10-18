import { sequelize } from '../lib/database';

export const Address = sequelize.define('address', {
  addressLine1: {
    type: sequelize.Sequelize.STRING
  },
  addressLine2: {
    type: sequelize.Sequelize.STRING
  },
  city: {
    type: sequelize.Sequelize.STRING
  },
  stateOrProvince: {
    type: sequelize.Sequelize.STRING
  },
  postalCode: {
    type: sequelize.Sequelize.STRING
  }
  
});