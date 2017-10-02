import { db } from '../lib/database';

// With the use of Sequelize this class may be useless
export class ResidentModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  gender?: string;
  ssn?: string;
  isDnr?: boolean;
  isAmbulatory?: boolean;
  isVerbal?: boolean;
  diet?: string;
}


// Start Sequelize model for resident

export const Resident = db.define('resident', {
  firstName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: db.Sequelize.STRING
  },
  gender: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  birthDate: {
    type: db.Sequelize.DATEONLY
  },
  ssn: {
    type: db.Sequelize.STRING
  },
  isAmbulatory: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  isVerbal: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  isDNR: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  religion: {
    type: db.Sequelize.STRING
  },
  status: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  notes: {
    type: db.Sequelize.TEXT
  }
});