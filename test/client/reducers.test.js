import expect from 'expect'
import todoReducer from '../../src/reducers/todo'
import todosReducer from '../../src/reducers/todos'

import * as types from '../../src/constants/consts'

describe('todo reducer', () => {

  let state = {
    _id: 0,
    note: 'Use Redux',
    completed: false,
    created_at: "2016"
  }

  it('should return the initial state', () => {
    expect(
      todoReducer(state, {})
    ).toEqual(
      state
    )
  });

  it('should handle REQUEST_TOGGLE_TODO', () => {
    expect(
      todoReducer(state, {
        type: types.REQUEST_TODO_TOGGLE,
        todo: state
      })
    ).toEqual(
      {
        _id: 0,
        note: 'Use Redux',
        completed: true,
        created_at: "2016"
      }
    )
  });

  it ('should not toggle todos not passed with REQUEST_TOGGLE_TODO', () => {
    expect(
      todoReducer(state, {
        type: types.REQUEST_TODO_TOGGLE,
        todo: { ...state, _id: state.id + 1 }
      })
    ).toEqual(
      state
    )
  });

});