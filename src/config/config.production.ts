export const PROD_CONFIG = {
  databaseConfig: {
    user: "brane",                    // user for the database
    password: "b468273915",           // password to access the database
    database: "alcomy",               // name of the database
    host: "https://www.alcomy.com",   // Server hosting the postgres database
    port: 8080,                       // port the database is running on
    max: 10,                          // max number of clients in the pool
    min: 1,                           // min number of clients in the pool
    idle: 30000                       // how long a client is allowed to remain idle before being closed (in milliseconds)
  },
  authConfig: {
    secret: 'cuteLittleKittens'
  }
};

