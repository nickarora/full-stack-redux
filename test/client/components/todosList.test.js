import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Todo from '../../../src/components/Todo';
import TodosList from '../../../src/components/TodosList';

chai.use(chaiEnzyme());

describe('<TodosList />', () => {
  const deleteTodo = sinon.spy();
  const clickTodo = sinon.spy();
  const todos = [
    { _id: 'abc',
      note: 'todo1',
      completed: false },
    { _id: 'xyz',
      note: 'todo2',
      completed: true }
  ];

  const wrapper = shallow(
    <TodosList
      todos={todos}
      onTodoDelete={ deleteTodo }
      onTodoClick={ clickTodo }
    />
  );

  it('should have the className todos-list', () => {
    expect(wrapper).to.have.className('todos-list');
  });

  it('should render a Todo component for each todo passed in', () => {
    expect(wrapper.render()).to.have.exactly(2).descendants('.todo');
  });
});
