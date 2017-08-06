export const DEV_CONFIG = {
  databaseConfig: {
    user: "brane",            // env var: PGUSER
    password: "b468273915",   // env var: PGPASSWORD
    database: "alcomy-dev",   // env var: PGDATABASE
    host: "localhost",        // Server hosting the postgres database
    port: 5433,               // env var: PGPORT
    max: 10,                  // max number of clients in the pool
    min: 1,                   // min number of clients in the pool
    idleTimeoutMillis: 30000  // how long a client is allowed to remain idle before being closed
  }
};

