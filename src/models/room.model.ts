import { db } from '../lib/database';

class RoomModel {
  id: number
  roomNumber: string;
  description: string;
  capacity: number;
}

export const Room = db.define('room', {
  roomNumber: {
    type: db.Sequelize.STRING
  },
  description: {
    type: db.Sequelize.STRING
  },
  capacity: {
    type: db.Sequelize.INTEGER
  }
});