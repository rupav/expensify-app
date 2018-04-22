import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';


const store = configureStore();
store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
    } else {
        console.log('log out');
    }
});
