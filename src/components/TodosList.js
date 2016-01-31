import React from 'react';

import Todo from './Todo'

export default (props) => {
  return (
    <ul className="todos-list">
      {props.todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      )}
    </ul>
  )
}