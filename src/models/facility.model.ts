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
  },
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

Facility.associate = (models) => {
  Facility.hasMany(models.Resident);
  Facility.belongsToMany(models.Employee, {through: 'facilityEmployees'});
};