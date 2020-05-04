import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LogIn extends Component {
    state = {}
    render() {
        return (
            <div className="box-layout">
                <div className="login-box">
                    <h1 className="login-layout__title">Expensify App</h1>
                    <p>Control your expeses easily</p>
                    <a className='btn btn-login' onClick={() => {
                        this.props.startLogin()
                        this.props.history.push("/dashboard")
                    }}>Log In</a>
                </div>


            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LogIn);