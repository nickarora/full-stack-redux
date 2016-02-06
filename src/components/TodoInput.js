import React, { PropTypes } from 'react'

const TodoInput = (props) => {
  return (
    <form onSubmit = { (e) => {
        e.preventDefault();
        const todo = {};
        props.onSubmit(todo);
      }}>
      <input
        type="text"
        value={ props.todoText }
        onChange={ props.onInputChange }/>
      <button type="submit">+</button>
    </form>
  )
}

TodoInput.propTypes = {
  todoText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default TodoInput;