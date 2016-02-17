import crypto from 'crypto';

const randomHex = (len = 24) =>
  crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);

export default randomHex;
