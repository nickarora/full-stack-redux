import config from '../config/default.json';

let dbType;

switch (process.env.NODE_ENV) {
  case 'production':
    dbType = config.mongo.prod;
    break;
  case 'test':
    dbType = config.mongo.test;
    break;
  default:
    dbType = config.mongo.dev;
}

export default `mongodb://${config.mongo.host}/${dbType}`;