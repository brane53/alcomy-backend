import { db } from '../lib/database';
import * as bcrypt from 'bcrypt';

export const User = db.define('user', {
  firstName: {
    type: db.Sequelize.STRING
  },
  lastName: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: db.Sequelize.STRING
  }

}, 
{
  setterMethods: {
    password(val) {
      this.setDataValue('password', ()=>{
        return
      })()
    }
  }
}

);