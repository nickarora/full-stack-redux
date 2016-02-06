import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';
import TodoInput from '../components/TodoInput';
import { toggleTodo, addTodo, inputChange } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <TodoInput
          todoText={this.props.todoText}
          onInputChange = { (e) => this.props.inputChange(e.target.value) }
          onSubmit = { () => this.props.addTodo(this.props.todoText) } />
        <TodosList
          todos={this.props.todos}
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
  return bindActionCreators({ toggleTodo, addTodo, inputChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
