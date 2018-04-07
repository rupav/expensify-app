import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(expense) {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Add Expense!</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense!</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 // console.log(expense);
//                 // props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/'); // to redirect to dashboard page
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
