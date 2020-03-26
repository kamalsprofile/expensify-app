import React, { Component } from 'react';
import { connect } from 'react-redux';
import visibleExpenses from '../selectors/expenses'
import getTotalAmount from '../selectors/totalExpenses'
import numeral from 'numeral'

const ExpensesInfo = ({ expenses, totalAmount }) => {

    const expenseWord = expenses.length > 1 ? 'expenses' : 'expense';
    const amount = numeral(totalAmount / 100).format('$0,0.00')

    return (
        <h1>
            Vewing {expenses.length} {expenseWord} totalling {amount}
        </h1>
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