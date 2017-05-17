import * as fs from 'fs';
import * as express from 'express';
import * as path from 'path';


export class Router {

  startFolder;

  constructor() {
    this.startFolder = null;
    console.log('CWD: ', process.cwd());
  }

  //Called once during initial server startup
  load(app, folderName: string) {

    if (!this.startFolder) {
      console.log('BASENAME: ', path.basename(folderName));
      console.log('FOLDERNAME: ', folderName);
      this.startFolder = path.basename(folderName);
      console.log(`STARTFOLDER: ${this.startFolder}`);
      
    }

    fs.readdirSync(folderName).forEach((file) => {
      

      const fullName = path.join(folderName, file);
      console.log('FULLNAME: ', fullName);
      const stat = fs.lstatSync(fullName);

      if (stat.isDirectory()) {
        //Recursively walk-through folders
        this.load(app, fullName);
      } else if (file.toLowerCase().indexOf('.js') && path.extname(`${fullName}${file.toLowerCase()}`) !== '.map') {
        //Grab path to JavaScript file and use it to construct the route
        let dirs = path.dirname(fullName).split(path.sep);
        console.log(`DIRS: ${dirs}`);

        if (dirs[1].toLowerCase() === this.startFolder.toLowerCase()) {
          dirs.splice(0, 2);
        }

        const router = express.Router();
        //Generate the route
        const baseRoute = '/' + dirs.join('/');
        console.log('Created route: ' + baseRoute + ' for ' + fullName);

        //Load the JavaScript file ("controller") and pass the router to it
        
        const controllerClass = require('../' + fullName);
        const controller = new controllerClass(router);
        //Associate the route with the router
        app.use(baseRoute, router);
      }
    });
  }

}

// module.exports = new Router();
