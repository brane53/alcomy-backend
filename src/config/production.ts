export const PROD_CONFIG = {
  port: process.env.PORT,
  database: {
    user: "brane",                    // user for the database
    password: process.env.ALCOMY_DB_SECRET,           // password to access the database
    database: "alcomy",               // name of the database
    host: "https://www.alcomy.com",   // Server hosting the postgres database
    port: 8080,                       // port the database is running on
    max: 10,                          // max number of clients in the pool
    min: 1,                           // min number of clients in the pool
    idle: 30000                       // how long a client is allowed to remain idle before being closed (in milliseconds)
  },
  authConfig: {
    jwtSecret: process.env.ALCOMY_JWT_SECRET,
    tokenExpiration: 60 * 15
  }
};

