import { sequelize } from '../lib/database';

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

export let Resident: any = sequelize.define('resident', {
  firstName: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: sequelize.Sequelize.STRING
  },
  gender: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  birthDate: {
    type: sequelize.Sequelize.DATEONLY
  },
  ssn: {
    type: sequelize.Sequelize.STRING
  },
  isAmbulatory: {
    type: sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  isVerbal: {
    type: sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  isDNR: {
    type: sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  religion: {
    type: sequelize.Sequelize.STRING
  },
  status: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  notes: {
    type: sequelize.Sequelize.TEXT
  }
});

Resident.associate = (models) => {
  Resident.belongsTo(models.Facility)
  Resident.belongsToMany(models.Contact, {through: 'residentContacts'});
  Resident.belongsTo(models.Room);
};