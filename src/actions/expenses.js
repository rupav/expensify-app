import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    // this function returned is run by redux internally, and thus we have access to dispatch!
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData; // destrucured the expenseData into 4 properties!
        const expense = { description, note, amount, createdAt };
        // console.log('outer!!!');
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
            // console.log('inner!!!');
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// export const startRemoveExpense = ({ id } = {}) => {
//     return (dispatch) => {
//         return database.ref(`expenses/${id}`).remove().then(() => {
//             dispatch(removeExpense({ id }));
//         });
//     };
// };

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// startEditExpense
export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        // below return statement is for returning a promise chain, can be used in testing.
        return database.ref(`expenses/${id}`).update({ ...updates }).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses));
            });
    };
};

