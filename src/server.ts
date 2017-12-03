import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as errorhandler from 'errorhandler';
import * as csrf from 'csurf';
import * as morgan from 'morgan';
import * as cors from 'cors';
import {Request, Response, NextFunction, Express} from 'express'
import { Router } from './router';

import db from './models';
import models from './models';
import { CONFIG } from './lib/configLoader';


// This is the main bootstrap file for the server

let app: Express = express();
let port = CONFIG.port;

let router = new Router();


class Server {

  constructor() {
    this.initExpressMiddleWare();
    this.initRoutes();
    this.start();
  }


  start() {
    db.sequelize.sync({force: true}).then(() => {
      console.log('Sequelize Synced');
      app.listen(port, (err) => {
        console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
      });

    });
  }

  initExpressMiddleWare() {
    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(errorhandler());
    app.use(cookieParser());
    //app.use(csrf({ cookie: true }));

    // app.use((req: Request, res: Response, next: NextFunction) => {
      
    //   var csrfToken = req.csrfToken();
    //   res.locals._csrf = csrfToken;
    //   res.cookie('XSRF-TOKEN', csrfToken);
    //   next();
    // });

    process.on('uncaughtException', (err) => {
      if (err) {
        console.log('Starting error log...')
        console.log(err, err.stack);
      }
    });
  }

  // uses the router.load to create routes from the file structure
  // of the controllers.
  initRoutes() {

    router.load(app, './dist/controllers');

    // redirect all others to the index (HTML5 history)
    app.all('/*', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
  }

}

var server = new Server();