import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';
import { completeTodo } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <TodosList
          todos={this.props.todos}
          onTodoClick = { id => this.props.completeTodo(id) }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ completeTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
