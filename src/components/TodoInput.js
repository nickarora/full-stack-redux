import React, { PropTypes } from 'react';

const handleSubmit = (props) => (e) => {
  e.preventDefault();
  props.onSubmit();
};

const TodoInput = (props) =>
    <form className="todo-input-form" onSubmit={handleSubmit(props)}>
      <div className="todo-input-form-group">
        <input
          type="text"
          placeholder="Today I need to..."
          value={props.todoText}
          onChange={props.onInputChange}
        />
      </div>
      <button type="submit"><div className="todo-button-text">+</div></button>
    </form>;

TodoInput.propTypes = {
  todoText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default TodoInput;
