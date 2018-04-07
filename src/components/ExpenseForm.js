import React from 'react';
import moment from 'moment'; // third party dependency
// import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChanged = this.onFocusChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange(e) {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    }

    onAmountChange(e) {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChanged({ focused }) {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState({ error: 'Please provide description and amount.' });
        } else {
            this.setState({ error: '' });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note to this (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    />
                    <button>
                        Add Expense
                    </button>
                </form>
            </div>
        );
    };
}