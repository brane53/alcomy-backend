import * as pg from 'pg';
import {Pool, PoolConfig} from 'pg'
import { CONFIG } from "./configLoader";



console.log('DB: ', CONFIG.databaseConfig);


let dbConfig = CONFIG.databaseConfig;

const config: PoolConfig = {
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  max: dbConfig.max, 
  idleTimeoutMillis: dbConfig.idleTimeoutMillis,
};

// let connectionString = `postgresql://brane:b468273915@localhost/`



// let client = new pg.Client();

export class Database {
  pool: Pool;

  constructor() {
    
  }

  connect() {
    this.pool = new pg.Pool(config);

    this.pool.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack);
    });

    return this.pool.connect()
      .then((client) => {
        return client;
      });
  }

}