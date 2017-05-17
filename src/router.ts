import * as fs from 'fs';
import * as express from 'express';
import * as path from 'path';


export class Router {
  
  // The folder whose child folders will make up the route endpoint definitions
  // i.e. startFolder = controllers  --> ./controllers/api/contacts --> route endpoint: /api/residents
  startFolder: string; 

  constructor() {
    this.startFolder = null;
  }

  // Creates base routes and routers defined by the folder structure.  
  // Called once during initial server startup.
  load(app, folderName: string) {

    if (!this.startFolder) {
      this.startFolder = path.basename(folderName);
    }

    fs.readdirSync(folderName).forEach((file) => {
      

      const fullPath = path.join(folderName, file);
      const stat = fs.lstatSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively walk-through folders
        this.load(app, fullPath);
      }
      else if (file.toLowerCase().indexOf('.js') && path.extname(`${fullPath}${file.toLowerCase()}`) !== '.map') {
        // Grab path to JavaScript file and use it to construct the route
        let dirs = path.dirname(fullPath).split(path.sep);

        if (dirs[1].toLowerCase() === this.startFolder.toLowerCase()) {
          // Remove the first 2 folders from the array. They will not be part of the route
          dirs.splice(0, 2);
        }

        const router = express.Router();

        // Generate the route
        const baseRoute = '/' + dirs.join('/');
        console.log('Created route: ' + baseRoute + ' for ' + fullPath);

        // Load the JavaScript file ("controller") and pass the router to it
        const controllerClass = require('../' + fullPath);
        const controller = new controllerClass(router);
        
        // Associate the route with the router
        app.use(baseRoute, router);
      }
    });
  }

}

// module.exports = new Router();
