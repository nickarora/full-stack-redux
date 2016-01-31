import React, { PropTypes } from 'react'

const Todo = (props) => {
  return (
    <li
      className="todo"
      onClick={props.onClick}
      style={{
          textDecoration: props.completed ? 'line-through' : 'none',
          cursor: props.completed ? 'default' : 'pointer'
        }}>
      {props.note}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;