import { expect } from 'chai';
import todoTextReducer from '../../../src/reducers/todoText';

import * as types from '../../../src/constants/actionTypes';

describe('todoText reducer', () => {
  const state = '';

  it('should return the initial state', () => {
    expect(
      todoTextReducer(state, {})
    ).to.equal(state);
  });

  it('should handle TEXT_INPUT_CHANGE', () => {
    expect(
      todoTextReducer(state, {
        type: types.TEXT_INPUT_CHANGE,
        inputText: 'test'
      })
    ).to.equal('test');
  });

  it('should handle REQUEST_ADD_TODO', () => {
    expect(
      todoTextReducer(state, {
        type: types.REQUEST_ADD_TODO,
        todo: {}
      })
    ).to.equal('');
  });
});
