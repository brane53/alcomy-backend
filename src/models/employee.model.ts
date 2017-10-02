import { db } from '../lib/database';

export const Empoyee = db.define('employee', {
  firstName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: db.Sequelize.STRING
  },
  lastName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: db.Sequelize.STRING
  },
  birthDate: {
    type: db.Sequelize.DATEONLY
  },
  ssn: {
    type: db.Sequelize.STRING
  },
  steetAddress: {
    type: db.Sequelize.STRING
  },
  apartmentId: {
    type: db.Sequelize.STRING
  },
  city: {
    type: db.Sequelize.STRING
  },
  state: {
    type: db.Sequelize.STRING
  },
  zipcode: {
    type: db.Sequelize.INTEGER
  }
});