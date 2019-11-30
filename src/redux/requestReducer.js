import {CHANGE_BRAND, CHANGE_DESCRIPTION, CHANGE_MODEL, CHANGE_TYPE, SET_USER_INFO,CHANGE_EMAIL_NOTIFICATION,CHANGE_PHONE_NOTIFICATION,ADD_REQUEST_SUCCESS} from "./actions";

const initialState = {
    type: '',
    brand: '',
    model: '',
    description: '',
    phone: '',
    email: '',
    station: '',
    emailNotification: false,
    phoneNotification: false,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            console.log(action.payload);
            return {
                ...state,
                email: action.payload.email,
                station: action.payload.station,
                phone: action.payload.phone,
            };

        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload
            };
        case CHANGE_BRAND:
            return {
                ...state,
                brand: action.payload,
            };
        case CHANGE_MODEL:
            return {
                ...state,
                model: action.payload
            };
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                model: action.payload
            };
        case CHANGE_EMAIL_NOTIFICATION:
            return {
                ...state,
                emailNotification: !state.emailNotification,
            };
        case CHANGE_PHONE_NOTIFICATION:
            return {
                ...state,
                phoneNotification: !state.phoneNotification,
            };
        case ADD_REQUEST_SUCCESS:
            return {
                ...state,
                type: '',
                brand: '',
                model: '',
                description: '',
                phone: '',
                email: '',
                station: '',
                emailNotification: false,
                phoneNotification: false,
            };
        default:
            return {
                ...state
            }
    }
}