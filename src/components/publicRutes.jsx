import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './header';

export const PublicRoute = ({ isAuthentecated, component: Component, ...rest }) => {
    return (
        <div>
            <Route {...rest} component={(props) => (
                isAuthentecated ?
                    (
                        <Redirect to="/dashboard" />

                    ) :
                    (
                        <Component {...props} />
                    )
            )} />
        </div>

    );
}

const mapStateToProps = (state) => ({
    isAuthentecated: state.auth.user_ID
})
export default connect(mapStateToProps)(PublicRoute);