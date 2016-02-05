import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/actions'
import * as types from '../../src/constants/consts'
import endpoint from '../../src/actions/endpoint'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates TODO_TOGGLE_SUCCESS after successfully toggling todo', (done) => {

    const todo = { _id: "200", note: "test todo", completed: false, created_at: "2016" }

    const resTodo = {
      ...todo,
      completed: !todo.completed
    }

    nock(endpoint)
      .put(`/todos/${todo._id}`)
      .reply(200, resTodo )

    const expectedActions = [
      { type: types.REQUEST_TODO_TOGGLE, todo },
      { type: types.TODO_TOGGLE_SUCCESS, todo: resTodo }
    ]

    const store = mockStore({ todos: [] }, expectedActions, done)
    store.dispatch(actions.toggleTodo(todo))
  })

})

