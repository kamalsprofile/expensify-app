import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth'

const Header = ({ logOut }) => {
    return (
        <div className="menu-bar">

            <div className="container">
                <div className="header-content">
                    <Link className="logo" to="/dashboard" >
                        <h1>Expensify</h1>
                    </Link>
                    <a className="btn-log-out" onClick={logOut}>Log Out</a>

                </div>



            </div>


        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(startLogOut())
    }
}
export default connect(undefined, mapDispatchToProps)(Header);