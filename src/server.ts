import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as errorhandler from 'errorhandler';
import * as csrf from 'csurf';
import * as morgan from 'morgan';
import {Request, Response, NextFunction, Express} from 'express'

import { Router } from './router';
import { Database } from "./lib/database";

let app: Express = express();
let port = 3000;

let router = new Router();
let database = new Database()


class Server {

  constructor() {
    this.initExpressMiddleWare();
    this.initRoutes();
    this.start();
  }

  start() {
    app.listen(port, (err) => {
      console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
    });
  }

  initExpressMiddleWare() {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(errorhandler());
    app.use(cookieParser());
    app.use(csrf({ cookie: true }));

    app.use((req: Request, res: Response, next: NextFunction) => {
      
      var csrfToken = req.csrfToken();
      res.locals._csrf = csrfToken;
      res.cookie('XSRF-TOKEN', csrfToken);
      next();
    });

    process.on('uncaughtException', (err) => {
      if (err) {
        console.log('Starting error log...')
        console.log(err, err.stack);
      }
    });
  }

  // initCustomMiddleware() {
  //   if (process.platform === "win32") {
  //     require("readline").createInterface({
  //       input: process.stdin,
  //       output: process.stdout
  //     }).on("SIGINT", () => {
  //       console.log('SIGINT: Closing MongoDB connection');
  //       database.close();
  //     });
  //   }

  //   process.on('SIGINT', () => {
  //     console.log('SIGINT: Closing MongoDB connection');
  //     database.close();
  //   });
  // }


  initRoutes() {
    router.load(app, './controllers');

    // redirect all others to the index (HTML5 history)
    app.all('/*', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
  }

}

var server = new Server();