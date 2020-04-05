export default (state = {}, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                user_ID: action.userid
            };
        case 'LOGOUT':
            return {};
        default: return state;

    }
}