export const CONFIG = {
  port: process.env.PORT,
  logger: false,
  database: {
    user: process.env.DB_USER,            // user for the database
    password: process.env.DB_PASSWORD,    // password to access the database
    database: process.env.DB_NAME,        // name of the database
    host: process.env.DB_HOST,            // Server hosting the postgres database
    port: process.env.DB_PORT,            // port the database is running on
    max: 10,                              // max number of clients in the pool
    min: 1,                               // min number of clients in the pool
    idle: 30000                           // how long a client is allowed to remain idle before being closed (in milliseconds)
  },
  authConfig: {
    jwtSecret: process.env.ALCOMY_JWT_SECRET,
    tokenExpiration: 60 * 15
  }
};

