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
        <div className="expense-list">

            <ExpensesInfo />
            <div className="container">
                <div className="filters-container">
                    <div className="filters-item">< FilterText /></div>
                    <div className="filters-item"><SortBy /></div>
                    <div className="filters-item"><FilterByDates /></div>
                </div>
                {props.expenses.length > 0 ? (

                    <div>

                        <div className="list-header">
                            <div className="show-for-mobile" ><h2>Expenses</h2></div>
                            <div className="show-for-desktop"> <h2>Expense</h2> </div>
                            <div className="show-for-desktop"> <h2>Amount</h2> </div>
                        </div>



                        {

                            props.expenses.map(expense => (<ExpenseListItem key={expense.id} {...expense} />)


                            )}

                    </div>

                ) : (

                        <h2 className="no-expenses">Oops there are no expenses!!</h2>

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