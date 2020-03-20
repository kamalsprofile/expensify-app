import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li><NavLink to="/createExpense" activeClassName="is-active">Create Expense</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>


            </ul>
        </div>
    );
}

export default Header;