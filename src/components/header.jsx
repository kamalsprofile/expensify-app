import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth'

const Header = ({ logOut }) => {
    return (
        <div>
            <ul>
                <li><NavLink to="/dashboard" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li><NavLink to="/createExpense" activeClassName="is-active">Create Expense</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
                <button onClick={logOut}>LogOut</button>
            </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(startLogOut())
    }
}
export default connect(undefined, mapDispatchToProps)(Header);