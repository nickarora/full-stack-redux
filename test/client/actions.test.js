import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/actions';
import * as types from '../../src/constants/actionTypes';
import endpoint from '../../src/actions/endpoint';
import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('creates an action to handle changes to text field input', () => {
    const inputText = 'Finish docs';
    const expectedAction = {
      type: types.TEXT_INPUT_CHANGE,
      inputText
    };

    expect(actions.inputChange(inputText)).to.eql(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates DEL_TODO_SUCCESS after successfully deleting todo', (done) => {
    const todo = { _id: 'ABCD', note: 'test todo', completed: false, created_at: '2016' };

    nock(endpoint)
      .delete(`/todos/${todo._id}`)
      .reply(200, todo);

    const expectedActions = [
      { type: types.REQUEST_DEL_TODO, todo },
      { type: types.DEL_TODO_SUCCESS }
    ];

    const store = mockStore({ todos: [todo] }, expectedActions, done);
    store.dispatch(actions.deleteTodo(todo));
  });

  it('creates DEL_TODO_FAIL if request to delete todo is unsuccessful', (done) => {
    const todo = { _id: 'ABCD', note: 'test todo', completed: false, created_at: '2016' };

    nock(endpoint)
      .delete(`/todos/${todo._id}`)
      .reply(500);

    const expectedActions = [
      { type: types.REQUEST_DEL_TODO, todo },
      { type: types.DEL_TODO_FAIL, todo }
    ];

    const store = mockStore({ todos: [todo] }, expectedActions, done);
    store.dispatch(actions.deleteTodo(todo));
  });

  it('creates ADD_TODO_SUCCESS after successfully adding todo', (done) => {
    const testHex = 'ABCDABCDABCDABCDABCDABCD';
    const todo = { _id: testHex, note: 'test todo', completed: false, created_at: 'pending' };

    const resTodo = {
      ...todo,
      created_at: '2016'
    };

    const randomHexStub = sinon.stub().returns(testHex);
    actions.__Rewire__('randomHex', randomHexStub);

    nock(endpoint)
      .post(`/todos`)
      .reply(200, resTodo);

    const expectedActions = [
      { type: types.REQUEST_ADD_TODO, todo },
      { type: types.ADD_TODO_SUCCESS, todo: resTodo }
    ];

    const store = mockStore({ todos: [] }, expectedActions, done);
    store.dispatch(actions.addTodo(todo.note));
  });

  it('creates TODO_TOGGLE_SUCCESS after successfully toggling todo', (done) => {
    const todo = { _id: '200', note: 'test todo', completed: false, created_at: '2016' };

    const resTodo = {
      ...todo,
      completed: !todo.completed
    };

    nock(endpoint)
      .put(`/todos/${todo._id}`)
      .reply(200, resTodo);

    const expectedActions = [
      { type: types.REQUEST_TODO_TOGGLE, todo },
      { type: types.TODO_TOGGLE_SUCCESS, todo: resTodo }
    ];

    const store = mockStore({ todos: [] }, expectedActions, done);
    store.dispatch(actions.toggleTodo(todo));
  });
});
