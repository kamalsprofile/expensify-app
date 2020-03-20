import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './configureStore/store';
import { addExpense } from './actions/expenses';
import { setFilterText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';



const store = Store();
store.dispatch(addExpense({ description: "water bill", amount: 300, createdAt: 20000 }));
store.dispatch(addExpense({ description: "gas bill", amount: 800, createdAt: 2000 }));

const state = store.getState()
const getExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(getExpenses);
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
