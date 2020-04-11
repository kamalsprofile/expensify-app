import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import Store from './configureStore/store';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { history } from './components/routes';




const store = Store();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true
    }
}
ReactDOM.render(<p>Loading</p>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push('/dashboard')
            }
        })

    }
    else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
