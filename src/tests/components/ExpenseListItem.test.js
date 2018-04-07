import React from 'react';
import { shallow } from 'enzyme';
import ElementListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem  with expense', () => {
    const wrapper = shallow(<ElementListItem expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});
