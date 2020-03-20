import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Help from './help';
import CreateExpense from './createExpense';
import Header from './header';
import EditExpense from './editExpense';


const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/CreateExpense" component={CreateExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
            </Switch>


        </Router>
    );
}

export default Routes;