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

console.log('port: ' + process.env.PORT);
console.log('node env: ' + process.env.NODE_ENV);
console.log('mongo uri: ' + process.env.MONGOLAB_URI);
console.log('SELECTED DB: ' + dbType);

export default dbType;