import request from 'superagent';
import { expect } from 'chai';

import { express } from '../../config/default.json';
import server from '../../server.babel';

const endpoint = `${express.host}:${express.appPort}/api`;

describe('Todos Service', () => {

  it ('should return all todos on GET api/todos', done => {
    request.get(`${endpoint}/todos`).end((err, res) => {
      expect(err).to.be.null;
      expect(res.body).to.be.an.array;
      res.body.forEach(todo => expect(todo.note).to.exist);
      done();
    });
  });

});