import React, { PropTypes } from 'react'

const TodoInput = (props) => {
  return (
    <form className="todo-input-form" onSubmit = { (e) => {
        e.preventDefault();
        const todo = {};
        props.onSubmit(todo);
      }}>
      <div className="todo-input-form-group">
      <input
        type="text"
        placeholder="Today I need to..."
        value={ props.todoText }
        onChange={ props.onInputChange }/>
      <button type="submit">+</button>
      </div>
    </form>
  )
}

TodoInput.propTypes = {
  todoText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default TodoInput;