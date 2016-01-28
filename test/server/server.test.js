import request from 'superagent';
import { expect } from 'chai';

import { express } from '../../config/default.json';
import seedTodos from './test_seed';
import Todo from '../../server/api/models/todo';

import server from '../../server.babel';

const endpoint = `${express.host}:${express.appPort}/api`;

describe('Todos Service', () => {

  Todo.collection.drop();

  beforeEach(done => {
    Todo.collection.insert(seedTodos, (err, docs) => {
      if (err) throw err;
      done();
    })
  });

  afterEach(done => {
    Todo.collection.drop();
    done();
  });

  it ('should return all todos on GET api/todos', done => {
    request.get(`${endpoint}/todos`).end((err, res) => {
      expect(err).to.be.null;
      expect(res.body).to.be.an.array;
      expect(res.body).to.have.length(4);
      res.body.forEach(todo => expect(todo.note).to.exist);
      done();
    });
  });

  it ('should add a todo on POST api/todos', done => {
    request
      .post(`${endpoint}/todos`)
      .send({ note: 'New Todo'})
      .end((err, { body }) => {
        expect(err).to.be.null;
        expect(body.note).to.exist;
        Todo.findById(body._id, (err, found) => {
          expect(found).to.exist;
          done();
        });
      });
  });

  it ('should update a todo on PUT api/todos', done => {
    Todo.findOne({ note: 'Todo1' }, (err, todo) => {
      const update = { completed: true, created_at: Date.now() };
      request
        .put(`${endpoint}/todos/${todo._id}`)
        .send(update)
        .end( (err, { body }) => {
          expect(body.completed).to.be.true;
          done();
        });
    });
  });

});