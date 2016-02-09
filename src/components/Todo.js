import React, { PropTypes } from 'react'

const Todo = (props) => {
  return (
    <li className="todo">
      <div className="todo-item">
        <input
          type="checkbox"
          checked={ props.completed}
          onChange={ props.onClick }
          />
        <p>{props.note}</p>
        <button onClick={props.onDelete}>x</button>
      </div>
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;