import { sequelize } from '../lib/database';

export const Employee: any = sequelize.define('employee', {
  firstName: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: sequelize.Sequelize.STRING
  },
  lastName: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: sequelize.Sequelize.STRING
  },
  birthDate: {
    type: sequelize.Sequelize.DATEONLY
  },
  ssn: {
    type: sequelize.Sequelize.STRING
  },
  steetAddress: {
    type: sequelize.Sequelize.STRING
  },
  apartmentId: {
    type: sequelize.Sequelize.STRING
  },
  city: {
    type: sequelize.Sequelize.STRING
  },
  state: {
    type: sequelize.Sequelize.STRING
  },
  zipcode: {
    type: sequelize.Sequelize.INTEGER
  }
});

Employee.associate = (models) => {
  Employee.hasMany(models.Address);
  Employee.belongsToMany(models.Facility, {through: 'facilityEmployees'});
};