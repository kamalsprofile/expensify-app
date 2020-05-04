import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Home from './Home';

import CreateExpense from './createExpense';
import EditExpense from './editExpense';
import LogIn from './logIn';
import { createBrowserHistory } from 'history/esm/history';
import PrivateRoute from './privateRoutes'
import PublicRoute from './publicRutes';
import NotFound from './notFound';



export const history = createBrowserHistory();
const Routes = () => {

    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact={true} component={LogIn} />
                <PrivateRoute path="/dashboard" component={Home} />
                <PrivateRoute path="/CreateExpense" component={CreateExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <PrivateRoute component={NotFound} />
            </Switch>


        </Router>
    );
}

export default Routes;