import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const ExpenseListItem = (props) => {
    const { description, amount, createdAt, id } = props


    return (


        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item-title" >{description}</h3>
                <span className="list-item-sub-title"> {moment(createdAt).format('MMMM Do YYYY')}</span>
            </div>

            <div>
                <h3 className="list-item-data">
                    {numeral(amount / 100).format('$0,0.00')}

                </h3>
            </div>

        </Link>

    );
}


export default ExpenseListItem;