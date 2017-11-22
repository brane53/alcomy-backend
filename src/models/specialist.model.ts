import { sequelize } from '../lib/database';

export const Specialist: any = sequelize.define('specialist', {
  firstName: {
    type: sequelize.Sequelize.STRING
  },
  middleName: {
    type: sequelize.Sequelize.STRING
  },
  lastName: {
    type: sequelize.Sequelize.STRING
  },
  type: {
    type: sequelize.Sequelize.STRING
  },
  email: {
    type: sequelize.Sequelize.STRING
  }
});

Specialist.associate = (models) => {
  Specialist.hasMany(models.PhoneNumber);
  Specialist.hasMany(models.Address);
  Specialist.hasMany(models.Resident);
}