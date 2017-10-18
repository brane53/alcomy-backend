import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { CONFIG } from '../../../lib/configLoader';

class AuthController {

  constructor(router: Router) {
    router.post('/login', this.login);
    router.post('/register', this.register);
  }
  
  login(req, res, next) {
    let userInfo = this.setUserInfo(req.user);
    
    // Respond with a success code and send the token
    // and user info back to the client
    res.status(200).json({
      token: `JWT ${this.generateToken(userInfo)}`,
      user: userInfo
    })
  }

  register(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    if(!email) {
      return res.status(422).send({error: 'You must enter an email address'});
    }

    if(!password) {
      return res.status(422).send({error: 'You must enter a password'});
    }

    // Search user by email and check if email exists. If it doesn't respond with a 422 error code
    // and send error object back to client with message "That email address already exists"

  }

  permissionAuthorization(permissions) {
    return function(req, res, next) {
      let user = req.user;
      
      // lookup the user's roles and check to see if any have the permissions needed.

    }
  }

  private generateToken(user) {
    return jwt.sign(user, CONFIG.authConfig.secret, {
      expiresIn: CONFIG.authConfig.tokenExpiration
    });
  }

  private setUserInfo(user) {
    return {
      id: user.id,
      email: user.email
    }
  }

}

module.exports = AuthController;