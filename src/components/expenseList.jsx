import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import filteredExpenseList from '../selectors/expenses'
import FilterText from './filterText';
import SortBy from './sortBy';
import FilterByDates from './filterByDates'
import numeral from 'numeral';
import ExpensesInfo from './expensesInfo'


const ExpenseList = (props) => {
    return (
        <div>
            <ExpensesInfo />
            <div className="container">

                <div className="filters-container">
                    <div className="filters-item">< FilterText /></div>
                    <div className="filters-item"><SortBy /></div>
                    <div className="filters-item"><FilterByDates /></div>
                </div>

                {

                    props.expenses.map(expense => (<ExpenseListItem key={expense.id} {...expense} />)


                    )}

            </div>

        </div>
    );
}

const connectedComponent = (state) => {
    return {
        expenses: filteredExpenseList(state.expenses, state.filters),

    }
}

export default connect(connectedComponent)(ExpenseList)