import React from 'react';
import { connect } from 'react-redux';
import ElementListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// to export as a named unconnected component
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ElementListItem key={expense.id} expense={expense} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

