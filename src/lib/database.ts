import { CONFIG } from "./configLoader";
import * as Sequelize from "sequelize";

let dbConfig = CONFIG.databaseConfig;

export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  dialect: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  pool: {
    min: dbConfig.min,
    max: dbConfig.max,
    idle: dbConfig.idle
  },
})

