import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import filteredExpenseList from '../selectors/expenses'
import FilterText from './filterText';
import SortBy from './sortBy';
import FilterByDates from './filterByDates'


const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            < FilterText />
            <SortBy />
            <FilterByDates />
            {props.expenses.map(expense => (<ExpenseListItem key={expense.id} {...expense} />)

            )}
        </div>
    );
}

const connectedComponent = (state) => {
    return {
        expenses: filteredExpenseList(state.expenses, state.filters)
    }
}

export default connect(connectedComponent)(ExpenseList)