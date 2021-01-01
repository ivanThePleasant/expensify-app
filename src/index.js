import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import { configureStore } from './store/configureStore'
import 'react-dates/lib/css/_datepicker.css'
// import getVisibleExpenses from './selectors/expenses'

const store = configureStore()


// const state = store.getState()

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)
// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
   
)


ReactDOM.render(jsx, document.getElementById('root'))