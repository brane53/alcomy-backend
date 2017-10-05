import { sequelize } from '../lib/database';
import * as bcrypt from 'bcrypt-nodejs';

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const User = sequelize.define('user', {
  username: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
    set(val) {

      let SALT_ROUNDS = 10;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if(err) {
          throw new Error('There was an error when creating salt' + err)
        }

        bcrypt.hash(val, salt, null, (err, hash) => {
          if(err) {
            throw new Error('There was an error when hashing password' + err);
          }
          
          this.setDataValue('password', hash);


        })

      });
    }
  }

}, {
  defaultScope: {
    where: {
      status: 'active'
    }
  },
  scopes: {
    
  }
}

);