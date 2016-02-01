import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';
import { toggleTodo } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <TodosList
          todos={this.props.todos}
          onTodoClick = { todo => this.props.toggleTodo(todo) }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
