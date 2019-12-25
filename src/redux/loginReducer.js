import {CHANGE_EMAIL, CHANGE_PASS, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, EXIT} from './actions'

const initialState = {
    email: '',
    pass: '',
    isEmailValid: false,
    isPassValid: false,
    isLogin: false,
    isLoginError: false,
    loginErrorMessage: '',
    uid: '',
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EMAIL:
            console.log(action.payload)
            return {
                ...state,
                email: action.payload.value,
            };
        case CHANGE_PASS:
            return {
                ...state,
                pass: action.payload.value,
            };
        case LOGIN_SUCCESS:
            console.log('успешно залогинен', 'uid:', action.payload);
            return {
                ...state,
                isLogin: true,
                isLoginError: false,
                uid: action.payload
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isLoginError: true,
                email: '',
                pass: '',
                loginErrorMessage: action.payload
            };
        case LOGIN:
            return {
                ...state,
            };
        case EXIT:
            return {
                ...state,
                isLogin: false
            };
        default :
            return {
                ...state
            }
    }
}