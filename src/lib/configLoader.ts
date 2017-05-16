import { DEV_CONFIG } from "../config/config.development";
import { PROD_CONFIG } from "../config/config.production"
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const env = process.env.NODE_ENV;

console.log(`Node environment: ${env}`);
console.log(`loading config.${env}.ts`);

// return the config for the set environment
function setConfig() {
  if (env === 'development') {
    return DEV_CONFIG;
  } else if(env === 'production') {
    return PROD_CONFIG
  }
}

export const CONFIG = setConfig();