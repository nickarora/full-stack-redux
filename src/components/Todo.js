import React, { PropTypes } from 'react'

const Todo = (props) => {
  return (
    <li className="todo">
      {props.note}
    </li>
  )
}

Todo.propTypes = {
  note: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;