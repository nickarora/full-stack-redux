import { expect } from 'chai'
import todosReducer from '../../src/reducers/todos'

import * as types from '../../src/constants/action_types'

describe('todos reducer', () => {

  let state = [{
    _id: 0,
    note: 'Use Redux',
    completed: false,
    created_at: "2016"
  }, {
    _id: 1,
    note: 'Dont use Flux',
    completed: false,
    created_at: "2016"
  }]

  it('should return the initial state', () => {
    expect(
      todosReducer(state, {})
    ).to.eql(
      state
    )
  });

  it('should handle REQUEST_TOGGLE_TODO', () => {
    expect(
      todosReducer(state, {
        type: types.REQUEST_TODO_TOGGLE,
        todo: state[1]
      })
    ).to.eql([
      state[0], { ...state[1], completed: !state[1].completed }
    ])
  });

  it('should handle REQUEST_ADD_TODO', () => {
    const todo = {_id: 'X123', note: 'note', completed: false, created_at: 'pending'};

    expect(
      todosReducer(state, {
        type: types.REQUEST_ADD_TODO,
        todo
      })
    ).to.eql( state.concat(todo) )
  })

});


