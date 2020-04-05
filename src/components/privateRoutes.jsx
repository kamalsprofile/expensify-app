import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './header';

export const PrivateRoute = ({ isAuthentecated, component: Component, ...rest }) => {
    return (
        <div>
            <Header />
            <Route {...rest} component={(props) => (
                isAuthentecated ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect to="/" />
                    )
            )} />
        </div>

    );
}

const mapStateToProps = (state) => ({
    isAuthentecated: state.auth.user_ID
})
export default connect(mapStateToProps)(PrivateRoute);