import {LOAD_USER_PROFILE} from './actions'

const initialState = {
    userName: '',
    userPhone: '',
    userEmail: '',
    userCity: '',
    isLoad: false

};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_PROFILE:
            return {
                userName: action.payload.name,
                userPhone: action.payload.phone,
                userEmail: action.payload.email,
                userCity: action.payload.city,
                isLoad: true,
            };
        default:
            return {
                ...state
            }
    }
}