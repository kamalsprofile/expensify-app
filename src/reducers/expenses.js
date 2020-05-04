const defaultExpensesState = []
export default (state = defaultExpensesState, action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return action.expenses;
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => {
                return item.id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    console.log(action.updates)
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else return expense
            })
        default:
            return state
    }
}