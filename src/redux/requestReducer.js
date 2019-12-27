import {
    CHANGE_EMAIL_REQUEST,
    CHANGE_PHONE_REQUEST,
    CHANGE_STATION_REQUEST,
    CHANGE_BRAND,
    CHANGE_DESCRIPTION,
    CHANGE_MODEL,
    CHANGE_TYPE,
    SET_USER_INFO,
    CHANGE_EMAIL_NOTIFICATION,
    CHANGE_PHONE_NOTIFICATION,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_CHECK_FIELDS
} from "./actions";

const initialState = {
    type: '',
    isTypeCheck: false,
    brand: '',
    isBrandCheck: false,
    model: '',
    isModelCheck: false,
    description: '',
    isDescriptionCheck: false,
    phone: '',
    isPhoneCheck: true,
    email: '',
    isEmailCheck: true,
    station: '',
    isStationCheck: true,
    emailNotification: false,
    phoneNotification: false,
    mustCheckFields: false,
    isRequestSuccess: false,
};


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                email: action.payload.email,
                station: action.payload.station,
                phone: action.payload.phone,
            };

        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload.value,
                isTypeCheck: action.payload.validate,
            };
        case CHANGE_BRAND:
            return {
                ...state,
                brand: action.payload.value,
                isBrandCheck: action.payload.validate,
            };
        case CHANGE_MODEL:
            return {
                ...state,
                model: action.payload.value,
                isModelCheck: action.payload.validate
            };
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload.value,
                isDescriptionCheck: action.payload.validate
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

        case CHANGE_PHONE_REQUEST:
            console.log('phone', action.payload.validate)
            console.log('phone value: ', action.payload.value)
            return {
                ...state,
                phone: action.payload.value,
                isPhoneCheck: action.payload.validate
            };

        case CHANGE_STATION_REQUEST:
            console.log('station', action.payload.validate)
            return {
                ...state,
                station: action.payload.value,
                isStationCheck: action.payload.validate
            };

        case CHANGE_EMAIL_REQUEST:
            console.log('email', action.payload.validate)
            return {
                ...state,
                email: action.payload.value,
                isEmailCheck: action.payload.validate,
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
                isEmailCheck: true,
                isStationCheck: true,
                isPhoneCheck: true,
                isDescriptionCheck: false,
                isModelCheck: false,
                isBrandCheck: false,
                isTypeCheck: false,
                isRequestSuccess: true
            };
        case ADD_REQUEST_CHECK_FIELDS:
            return {
                ...state,
                mustCheckFields: true
            };
        default:
            return {
                ...state
            }
    }
}