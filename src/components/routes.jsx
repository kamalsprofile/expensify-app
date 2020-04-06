import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Help from './help';
import CreateExpense from './createExpense';
import EditExpense from './editExpense';
import LogIn from './logIn';
import { createBrowserHistory } from 'history/esm/history';
import PrivateRoute from './privateRoutes'
import PublicRoute from './publicRutes';



export const history = createBrowserHistory();
const Routes = () => {

    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact={true} component={LogIn} />
                <PrivateRoute path="/dashboard" component={Home} />
                <PrivateRoute path="/CreateExpense" component={CreateExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <PrivateRoute path="/help" component={Help} />
            </Switch>


        </Router>
    );
}

export default Routes;