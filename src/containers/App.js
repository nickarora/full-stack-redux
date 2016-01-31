import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodosList from '../components/TodosList';

class App extends Component {
  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <TodosList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
}

export default connect(mapStateToProps)(App);
