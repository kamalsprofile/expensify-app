export default (expenses) => {
    if (expenses.length > 0) {
        const total = expenses.map(expense => {
            return expense.amount
        })
        let totalAmount = total.reduce((amount, num) => {
            return amount + num
        }, 0)
        return totalAmount
    }
    else return 0;

}