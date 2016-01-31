import React, { PropTypes } from 'react';

import Todo from './Todo'

const TodosList = (props) => {
  return (
    <ul className="todos-list">
      {props.todos.map(todo =>
        <Todo key={todo._id}
              note={todo.note}
              completed={todo.completed}
              onClick={() => props.onTodoClick(todo._id)} />
      )}
    </ul>
  )
}

const todosShape = PropTypes.shape({
  note: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}).isRequired

TodosList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(todosShape).isRequired
}

export default TodosList;