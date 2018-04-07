import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('should render ExpenselistFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// set
test('should render ExpenselistFilters with altfilters correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').prop('onChange')({
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altfilters
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalledWith();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalledWith();
});

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
