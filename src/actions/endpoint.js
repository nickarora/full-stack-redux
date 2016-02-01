import { express } from '../../config/default.json';

let endpoint = `http://${express.host}:${express.devServerPort}/api`;

if (process.env.NODE_ENV === 'production') {
  endpoint = `http://${express.host}:${express.appPort}/api`;
}

export default endpoint;