SETUP

1. clone the repository
2. install dependencies by running "npm install"
3. install postrgres and create a database with the configurations in src > config > development
4. run "npm start"



FOLDER STRUCTURE

        src    
            Contains all the source files of the project

        ----config

                Files in this folder are configuration files. Typically they consist of simple JS objects or JSON

        ----controllers

                Files in this folder contain the various routes and route handlers pertaining to a certain domain.

                The route handlers are responsible for interacting with the request and
                response objects and performing any business logic that needs to happen before interacting with
                the database. Route handlers are dependent on respositories for database interaction. i.e. they
                don't interact with the database directly rather they call methods from a respository class.

        ----lib

                Files in this folder contain code that is not specific to the application's domain. A good way of
                thinking about this is to ask yourself, "if I were to change my application to a social media app
                for cat lovers would I still use the code in this file?" If you say yes, the the code's domain is
                not specific to your app and should go in the lib folder. If you answer no, the the code is 
                specific to your app and should go in some other folder.

                More specifically the files in this folder are mainly setup files. i.e. setup the database, load
                the right configuration file, etc.

        ----models

                Files in this folder contain model objects that are created with the sequelize object mapper library
                for Postgres and MySQL. Essentially, each model represents a database table and can be used to perform
                CRUD operations and queries on database tables. They're also where validation rules are set. 
                
                Once a model is defined a number of methods are available for CRUD and query commands. These methods are explained in the Sequelize API docs. It's important to note the models will be used by repositories to interact with the
                database thus added another layer of separation. I could

        ----repos

                Files in this folder are responsible for interacting with database models.

                Each repository is made up of various methods that are specific to its domain. e.g. ResidentsRepository performs all resident operations in the database, i.e. getting all residents, creating residents, updating residents, etc. They can call on other repositories if needed

                Repositories are primarily used by controllers and are a way to foster separation of concerns
                between application business logic and database logic. By decoupling the the business logic from
                databse logic our code becomes reusable, is easier to refactor, and easier to test. The code is
                reusable because various parts of the application can now use a specific respository to interact with the database
                without having to worry about the logic behind it. It is easy to refactor because now if we want to
                change our database implimentation we only have to do that in one place. Lastly, it is easy to test
                because now our code is isolated, giving us a single unit to test.

