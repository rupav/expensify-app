import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

/* eslint-disable react/prefer-stateless-function, no-useless-constructor */

export class ExpenseSummary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const expensesTotal = selectExpensesTotal(this.props.expenses) / 100;
        const expenseCount = this.props.expenses.length;
        return (
            <div>
                <h2>{`Viewing ${expenseCount} expenses totalling $${expensesTotal}`}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// export default ExpenseSummary;
export default connect(mapStateToProps)(ExpenseSummary);

/* eslint-enable */
