import { sequelize } from '../lib/database';
import { Model, SequelizeStaticAndInstance } from 'sequelize';
import * as Sequelize from "sequelize";

export interface FacilityAttribute {
  id: string;
  name: string;
  displayName: string;
}

export interface FacilityInstance extends Sequelize.Instance<FacilityAttribute>, FacilityAttribute {

}

export interface FacilityModel extends Sequelize.Model<FacilityInstance, FacilityAttribute> { 
}

export const Facility: FacilityModel = sequelize.define<FacilityInstance, FacilityAttribute>('Facility', {
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
},
// options:
{
  paranoid: true,
});

(Facility as any).associate = (models) => {
  Facility.hasMany(models.Resident);
  Facility.belongsToMany(models.Employee, {through: 'facilityEmployees'});
};