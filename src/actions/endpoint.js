import { express } from '../../config/default.json';

let endpoint = `http://${express.host}:${express.devServerPort}/api`;

if (process.env.NODE_ENV === 'production') {
  endpoint = `https://${express.prodHost}/api`;
}

export default endpoint;
