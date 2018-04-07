import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange(calendarFocused) {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange(e) {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange(e) {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    defaultValue={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBys}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId="startDate"
                    endDateId="endDate"
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
