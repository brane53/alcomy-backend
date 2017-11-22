const user: string = process.env.ALCOMY_DB_USER
const password: string = process.env.ALCOMY_DB_PASSWORD
const dbPort: number = process.env.ALCOMY_DB_PORT

if (user === undefined) {
  console.log("ALCOMY_DB_USER env variable not set")
  process.exit()
}
if (password === undefined) {
  console.log("ALCOMY_DB_PASSWORD env variable not set")
  process.exit()
}
if (dbPort === undefined) {
  console.log("ALCOMY_DB_PORT env variable not set")
  process.exit()
}

export const CONFIG = {
  port: process.env.PORT || 3000,
  logger: true,
  database: {
    user: user,             // user for the database
    password: password,             // password to access the database
    database: "alcomy-dev",   // name of the database
    host: "localhost",        // Server hosting the postgres database
    port: dbPort,               // port the database is running on
    max: 10,                  // max number of clients in the pool
    min: 1,                   // min number of clients in the pool
    idle: 30000               // how long a client is allowed to remain idle before being closed (in milliseconds)
  },
  authConfig: {
    jwtSecret: 'cuteLittleKittens',
    tokenExpiration: 60 * 5
  }
};

