import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpenseSummary expenses={expenses} />);
});

test('should render ExpenseSummary correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
