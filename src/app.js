import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();


console.log(state);
console.log(visibleExpenses);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'))        