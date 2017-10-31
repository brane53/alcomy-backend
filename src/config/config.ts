import * as _ from 'lodash';

let CONFIG = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  dev: 'development',
  prod: 'production',
  test: 'testing'
};

const envConfig = require('./' + CONFIG.env);

_.merge(CONFIG, envConfig);
console.log(CONFIG);

export default CONFIG;