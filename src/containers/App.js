import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';
import TodoInput from '../components/TodoInput';
import todosShape from '../util/todosShape';
import { toggleTodo, addTodo, deleteTodo, inputChange } from '../actions/actions';

class App extends Component {

  handleInputChange = e => this.props.inputChange(e.target.value);
  handleAddTodo = () => this.props.addTodo(this.props.todoText);
  handleDeleteTodo = todo => this.props.deleteTodo(todo);
  handleToggleTodo = todo => this.props.toggleTodo(todo);

  render() {
    return (
      <div>
        <TodoInput
          todoText={this.props.todoText}
          onInputChange={ this.handleInputChange }
          onSubmit={ this.handleAddTodo }
        />
        <TodosList
          todos={this.props.todos}
          onTodoDelete={ this.handleDeleteTodo }
          onTodoClick={ this.handleToggleTodo }
        />
      </div>
    );
  }

}

App.propTypes = {
  todos: PropTypes.arrayOf(todosShape).isRequired,
  todoText: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = ({ todos, todoText }) => ({ todos, todoText });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleTodo, addTodo, deleteTodo, inputChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
