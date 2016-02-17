import config from '../config/default.json';

let dbType;

switch (process.env.NODE_ENV) {
  case 'production':
    dbType = process.env.MONGOLAB_URI || `mongodb://${config.mongo.host}/${config.mongo.prod}`;
    break;
  case 'test':
    dbType = `mongodb://${config.mongo.host}/${config.mongo.test}`;
    break;
  default:
    dbType = `mongodb://${config.mongo.host}/${config.mongo.dev}`;
}

export default dbType;
