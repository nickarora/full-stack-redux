import React from 'react'

export default (props) => {
  const todo = props.todo;
  return (
    <li className="todo">{todo.note}</li>
  )
}