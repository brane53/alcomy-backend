import { sequelize } from '../lib/database';
import * as Sequelize from "sequelize";

export interface ResidentAttribute {
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
  notes?: string
  status?: string;
  facilityId?: number;
}

export interface ResidentInstance extends Sequelize.Instance<ResidentAttribute>, ResidentAttribute {
}

export interface ResidentModel extends Sequelize.Model<ResidentInstance, ResidentAttribute> {
}

// Start Sequelize model for resident

export let Resident: ResidentModel = sequelize.define<ResidentInstance, ResidentAttribute>('resident', {
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
},
// options:
{
  paranoid: true,
});

(Resident as any).associate = (models) => {
  Resident.belongsTo(models.Facility)
  Resident.belongsToMany(models.Contact, {through: 'residentContacts'});
  Resident.belongsTo(models.Room);
};