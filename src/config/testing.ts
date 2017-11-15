export const CONFIG = {
  port: process.env.PORT || 3001,
  logger: true,
  database: {
    user: "brane",            // user for the database
    password: process.env.ALCOMY_DB_SECRET,   // password to access the database
    database: "alcomy-test",   // name of the database
    host: "localhost",        // Server hosting the postgres database
    port: 5433,               // port the database is running on
    max: 10,                  // max number of clients in the pool
    min: 1,                   // min number of clients in the pool
    idle: 30000               // how long a client is allowed to remain idle before being closed (in milliseconds)
  },
  authConfig: {
    jwtSecret: 'cuteLittleKittens',
    tokenExpiration: 60 * 5
  }
};

