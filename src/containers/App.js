import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <p>Todos List Length: { this.props.todos.length }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
}

export default connect(mapStateToProps)(App);
