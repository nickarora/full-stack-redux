import crypto from 'crypto';

export default (len = 24) => {
  return crypto.randomBytes(Math.ceil(len/2))
    .toString('hex') // convert to hexadecimal format
    .slice(0,len);   // return required number of characters
}