import { db } from '../lib/database';

// With the use of Sequelize this class may be useless
export class Resident {
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

export const ResidentModel = db.define('resident', {
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
  isAmbulatory: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: true
  },
  isVerbal: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  isDNR: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  religion: {
    type: db.Sequelize.STRING
  }
});