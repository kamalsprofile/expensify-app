import React, { Component } from 'react';
import { Link } from 'react-router-dom'



const ExpenseListItem = (props) => {
    const { description, amount, note, createdAt, id } = props
    console.log(props)

    return (
        <div>

            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p> {amount} - {createdAt} </p>

        </div>
    );
}


export default ExpenseListItem;