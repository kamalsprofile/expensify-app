import uuid from 'uuid';
import database from '../firebase/firebase'

//ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense

});

export const addExpenseFunction = (newExpense = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user_ID
        console.log(uid)
        const { description = '', note = '', amount = 0, createdAt = 0 } = newExpense;
        const expense = {
            description,
            note,
            amount,
            createdAt
        }
        database.ref(`users/${uid}/expenses`)
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }

}

//REMOVE EXPENSE
export const removeExpense = ({ id }) =>
    ({
        type: 'REMOVE_EXPENSE',
        id
    })
export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user_ID
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }

}

// EDIT EXPENSE
export const editExpense = ({ id }, updates) => {

    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

}
export const startEditExpense = ({ id }, updates) => {

    return (dispatch, getState) => {
        const uid = getState().auth.user_ID
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense({ id }, updates))
        })
    }
}

// setup the expenses array

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})
export const startSetExpenses = () => {

    return (dispatch, getState) => {
        const uid = getState().auth.user_ID;
        console.log("id", uid)
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapShot) => {
                const expenses = []
                snapShot.forEach(record => {
                    expenses.push({
                        id: record.key,
                        ...record.val()
                    })
                });
                console.log('my expenses', expenses);
                dispatch(setExpenses(expenses))
            })
    }


}