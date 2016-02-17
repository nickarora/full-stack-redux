import React, { PropTypes } from 'react';

import Todo from './Todo';
import todosShape from '../util/todosShape';

const handleTodoDelete = (props, todo) => () => props.onTodoDelete(todo);
const handleTodoClick = (props, todo) => () => props.onTodoClick(todo);

const TodosList = (props) =>
    <ul className="todos-list">
      {props.todos.map(todo =>
        <Todo
          key={todo._id}
          note={todo.note}
          completed={todo.completed}
          onDelete={handleTodoDelete(props, todo)}
          onClick={handleTodoClick(props, todo)}
        />
      )}
    </ul>;


TodosList.propTypes = {
  onTodoDelete: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(todosShape).isRequired
};

export default TodosList;
