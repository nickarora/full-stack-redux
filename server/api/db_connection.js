import config from '../../config/default.json';

let dbType = config.mongo.dev;

if (process.env.NODE_ENV === 'production') {
  dbType = config.mongo.prod;
} else if (process.env.NODE_ENV === 'test') {
  dbType = config.mongo.test;
}

export default `mongodb://${config.mongo.host}/${dbType}`;