import React, { Component } from 'react';
import { conect, connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LogIn extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>
                    LogIn
                </p>
                <button onClick={() => {
                    this.props.startLogin()
                    // this.props.history.push("/dashboard")
                }}>LogIn</button>
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