import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';
import TodoInput from '../components/TodoInput';
import { toggleTodo, addTodo, deleteTodo, inputChange } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput
          todoText={this.props.todoText}
          onInputChange = { (e) => this.props.inputChange(e.target.value) }
          onSubmit = { () => this.props.addTodo(this.props.todoText) } />
        <TodosList
          todos={this.props.todos}
          onTodoDelete = { todo => this.props.deleteTodo(todo) }
          onTodoClick = { todo => this.props.toggleTodo(todo) }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ todos, todoText }) => {
  return { todos, todoText };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo, addTodo, deleteTodo, inputChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
