// ConfigLoader loads the correct configuration (Development or 
// Production) depending on the node environment.


import { CONFIG as DEV_CONFIG } from "../config/development";
import { CONFIG as TEST_CONFIG } from "../config/testing";
import { CONFIG as PROD_CONFIG } from "../config/production";

const env = process.env.NODE_ENV || 'development';

console.log(`Node environment: ${env}`);
console.log(`loading config.${env}.ts`);

if (env === 'development') {
  if (DEV_CONFIG.database.user === undefined) {
    console.log("ALCOMY_DB_USER env variable not set")
    process.exit()
  }
  if (DEV_CONFIG.database.password === undefined) {
    console.log("ALCOMY_DB_PASSWORD env variable not set")
    process.exit()
  }
  if (DEV_CONFIG.database.port === undefined) {
    console.log("ALCOMY_DB_PORT env variable not set")
    process.exit()
  }
}

// return the config for the set environment
function setConfig(environment: string) {
  if (environment === 'production') {
    return PROD_CONFIG;
  } else if (environment === 'testing'){
    return TEST_CONFIG;
  } else {
    return DEV_CONFIG;
  }
}

export const CONFIG = setConfig(env);