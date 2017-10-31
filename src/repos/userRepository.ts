import { User, IUser } from '../models/user.model';
import * as bcrypt from 'bcrypt-nodejs';


class UserRepository {
  constructor() {};

  createUser(userInfo: IUser) {
    // Create a new user
    return User.findOrCreate({
      where: {email: userInfo.email},
      defaults: {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        password: userInfo.password
      }
    })
    .spread((user, created) => {
      if (!created) {
        throw new Error('Email already exists')
      }

      return user;
    });

  }

  getUserById(id: number) {
    return User.findById(id, {attributes: ['id', 'firstName', 'lastName', 'email']});
  }

  // Not finished
  checkUserPassword(id: number, password) {
    User.findById(id, {attributes: ['password'], raw: true})
      .then((user: IUser) => {
        let passwordHash;
        bcrypt.compare(password, passwordHash, (err, isSame) => {
          if(err) {
            throw new Error('Incorrect Password');
          }
          return isSame;
        });
      });
  }

}

export default new UserRepository();
