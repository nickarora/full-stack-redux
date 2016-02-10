import { express } from '../../config/default.json';

let endpoint = `http://${express.host}:${express.devServerPort}/api`;

if (process.env.NODE_ENV === 'production') {
  const port = process.env.PORT || express.appPort;
  endpoint = `https://${express.host}:${port}/api`;
}

export default endpoint;