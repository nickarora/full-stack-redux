import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Todo from '../../../src/components/Todo';

chai.use(chaiEnzyme());

describe('<Todo />', () => {
  const onTodoClick = sinon.spy();
  const onDeleteClick = sinon.spy();

  it('should have the className todo', () => {
    const wrapper = shallow(
      <Todo
        onClick={onTodoClick}
        onDelete={onDeleteClick}
        note={'My Todo'}
        completed={false}
      />
    );
    expect(wrapper).to.have.className('todo');
  });
});
