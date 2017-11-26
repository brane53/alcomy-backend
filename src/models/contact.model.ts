import { sequelize } from '../lib/database';

export const Contact: any = sequelize.define('contact', {
  firstName: {
    type: sequelize.Sequelize.STRING
  },
  middleName: {
    type: sequelize.Sequelize.STRING
  },
  lastName: {
    type: sequelize.Sequelize.STRING
  }
});

Contact.associate = (models) => {
  Contact.belongsToMany(models.Resident, {through: 'residentContacts'});
}