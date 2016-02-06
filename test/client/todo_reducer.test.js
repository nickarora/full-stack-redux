import { expect } from 'chai'
import todoReducer from '../../src/reducers/todo'

import * as types from '../../src/constants/action_types'

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
    ).to.eql(
      state
    )
  });

  it('should handle REQUEST_TOGGLE_TODO', () => {
    expect(
      todoReducer(state, {
        type: types.REQUEST_TODO_TOGGLE,
        todo: state
      })
    ).to.eql(
      {
        _id: 0,
        note: 'Use Redux',
        completed: true,
        created_at: "2016"
      }
    )
  });

  it ('should not toggle the wrong todo', () => {
    expect(
      todoReducer(state, {
        type: types.REQUEST_TODO_TOGGLE,
        todo: { ...state, _id: state.id + 1 }
      })
    ).to.eql(
      state
    )
  });


  it ('should handle TODO_TOGGLE_FAIL', () => {
    expect(
      todoReducer(state, {
        type: types.TODO_TOGGLE_FAIL,
        todo: state
      })
    ).to.eql(
      {
        _id: 0,
        note: 'Use Redux',
        completed: true,
        created_at: "2016"
      }
    )
  });

  it ('should handle TODO_TOGGLE_SUCCESS', () => {
    expect(
      todoReducer(state, {
        type: types.TODO_TOGGLE_SUCCESS,
        todo: state
      })
    ).to.eql(
      state
    )
  });

});