import { sequelize } from '../lib/database';

class RoomModel {
  id: number
  roomNumber: string;
  description: string;
  capacity: number;
}

export const Room = sequelize.define('room', {
  roomNumber: {
    type: sequelize.Sequelize.STRING
  },
  description: {
    type: sequelize.Sequelize.STRING
  },
  capacity: {
    type: sequelize.Sequelize.INTEGER
  }
});

// room hasMany resident
// resident belongsTo room

Room.associate = (models) => {
  Room.hasMany(models.Resident);
};