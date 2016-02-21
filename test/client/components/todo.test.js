import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Todo from '../../../src/components/Todo';

chai.use(chaiEnzyme());

describe('<Todo />', () => {
  const toggleTodo = sinon.spy();
  const deleteTodo = sinon.spy();

  const wrapper = shallow(
    <Todo
      onClick={ toggleTodo }
      onDelete={ deleteTodo }
      note={'My Todo'}
      completed={false}
    />
  );

  it('should have the className todo', () => {
    expect(wrapper).to.have.className('todo');
  });

  it('should display the text of the todo', () => {
    expect(wrapper.text()).to.contain('My Todo');
  });

  it('should call toggleTodo action creator on checkbox click', () => {
    wrapper.find('input[type="checkbox"]').simulate('click');
    expect(toggleTodo).to.be.calledOnce;
  });

  it('should call deleteTodo action creator on delete button click', () => {
    wrapper.find('button').simulate('click');
    expect(deleteTodo).to.be.calledOnce;
  });
});
