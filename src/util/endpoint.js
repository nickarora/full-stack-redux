import { express } from '../../config/default.json';

let endpoint = `http://${express.host}:${express.devServerPort}`;

if (process.env.NODE_ENV === 'production') {
  endpoint = `https://${express.prodHost}`;
}

export default endpoint;
