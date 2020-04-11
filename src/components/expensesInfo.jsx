import React, { Component } from 'react';
import { connect } from 'react-redux';
import visibleExpenses from '../selectors/expenses'
import getTotalAmount from '../selectors/totalExpenses'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

const ExpensesInfo = ({ expenses, totalAmount }) => {

    const expenseWord = expenses.length > 1 ? 'expenses' : 'expense';
    const amount = numeral(totalAmount / 100).format('$0,0.00')

    return (
        <div className='summary-content'>
            <div className="container">
                <h1>
                    Vewing <strong>{expenses.length}</strong>  {expenseWord} totalling <strong>{amount}</strong>
                </h1>
                <Link className="btn-add-expense" to="/CreateExpense">Add Expense</Link>
            </div>

        </div>

    );
}

const mapStateToProps = (state) => {
    const expenses = visibleExpenses(state.expenses, state.filters)

    return {
        expenses: expenses,
        totalAmount: getTotalAmount(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesInfo);