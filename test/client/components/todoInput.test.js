import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TodoInput from '../../../src/components/TodoInput';

chai.use(chaiEnzyme());

describe('<TodoInput />', () => {
  const addTodo = sinon.spy();
  const changeInput = sinon.spy();

  const wrapper = shallow(
    <TodoInput
      todoText={'My New Todo'}
      onSubmit={ addTodo }
      onInputChange={ changeInput }
    />
  );

  it('should have the className todo-input-form', () => {
    expect(wrapper).to.have.className('todo-input-form');
  });

  it('should display the text of the current input', () => {
    expect(wrapper.find('input[type="text"]')).to.have.prop('value').match(/My New Todo/);
  });

  it('should call changeInput action creator on keypress', () => {
    wrapper.find('input[type="text"]').simulate('change');
    expect(changeInput).to.be.calledOnce;
  });

  it('should call addTodo action creator on submit', () => {
    const event = { preventDefault: sinon.spy };
    wrapper.simulate('submit', event);
    expect(addTodo).to.be.calledOnce;
  });
});
