import * as pg from 'pg';
import {Pool, PoolConfig, QueryConfig} from 'pg'
import { CONFIG } from "./configLoader";
import * as Sequelize from "sequelize";

let dbConfig = CONFIG.databaseConfig;

export const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  dialect: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  pool: {
    min: dbConfig.min,
    max: dbConfig.max,
    idle: dbConfig.idle
  },
})


// const config: PoolConfig = {
//   user: dbConfig.user,
//   password: dbConfig.password,
//   database: dbConfig.database,
//   host: dbConfig.host,
//   port: dbConfig.port,
//   max: dbConfig.max, 
//   idleTimeoutMillis: dbConfig.idleTimeoutMillis,
// };

// let connectionString = `postgresql://brane:b468273915@localhost/`


/* class Database {
  pool: Pool;

  constructor() {
    this.init();
  }

  private init() {
    // this.pool = new pg.Pool(config);

    this.pool.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack);
    });
  }

  query(text: string, values?: any[]): Promise<any> {
    console.log('query:', text, values);
    return this.pool.query(text, values);
  }

  connect(callback) {
    return this.pool.connect(callback)
  }

}

const database = new Database();

export default database;
 */
