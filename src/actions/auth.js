import { firebase } from '../firebase/firebase';

export const login = (userid) => {
    return {
        type: 'LOGIN',
        userid
    }
}

export const startLogin = () => {
    return () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        return firebase.auth().signInWithPopup(provider)
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }

}
export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}