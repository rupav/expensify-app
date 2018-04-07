import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = (_count) => ({
    type: 'SET',
    count: _count
});

// Reducer
// 1. Reducers are pure function - output is determined only by input
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT': {
        return {
            count: state.count + action.incrementBy
        };
    }
    case 'DECREMENT': {
        return {
            count: state.count - action.decrementBy
        };
    }
    case 'RESET':
        return {
            count: 0
        };
    case 'SET': {
        return {
            count: action.count
        };
    }
    default:
        return state;
    }
}

const store = createStore(countReducer);

// When the state changes, subscribe will render again!
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount(90));
