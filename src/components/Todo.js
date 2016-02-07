import React, { PropTypes } from 'react'

const Todo = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={ props.completed}
        onClick={props.onClick}
        />
      <div
        className="todo"
        style={{
            textDecoration: props.completed ? 'line-through' : 'none',
            cursor: props.completed ? 'default' : 'pointer'
          }}>
        {props.note}
      </div>
      <button onClick={props.onDelete}>x</button>
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