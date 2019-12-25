import {
    CHANGE_NAME,
    CHANGE_CITY,
    CHANGE_EMAIL,
    CHANGE_PASS,
    CHANGE_PHONE,
    CHANGE_STATION,
    CHANGE_CHECKBOX,
    SUBMIT,
    CHECK_FIELDS, SUCCESS_REGISTRATION, CLEAR_REG
} from "./actions";

const initialState = {
    isLogin: false,
    name:'',
    phone: '',
    city: '',
    station: '',
    email: '',
    pass: '',
    uid:'',
    isEmailValid: false,
    isPhoneValid: false,
    isNameValid: false,
    isAgreementCheck: false,
    mustCheckFields: false,
    isRegistrationSuccess: false,
    isPassValid: false,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_FIELDS:
            return {
                ...state,
                mustCheckFields: true
            };
        case CHANGE_CHECKBOX:
            return {
                ...state,
                isAgreementCheck: !state.isAgreementCheck
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.value,
                isNameValid: action.payload.check
            };
        case CHANGE_PHONE:
            return {
                ...state,
                phone: action.payload.value,
                isPhoneValid: action.payload.check
            };
        case CHANGE_CITY:
            return {
                ...state,
                city: action.payload,
            };
        case CHANGE_STATION:
            return {
                ...state,
                station: action.payload
            };
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload.value,
                isEmailValid: action.payload.check
            };
        case CHANGE_PASS:
            return {
                ...state,
                pass: action.payload.value,
                isPassValid: action.payload.check
            };
        case SUBMIT:
            const newState = {
                ...state,
                name: '',
                email: '',
                phone: '',
                city: '',
                station: '',
                pass: '',
            };
        return {
            newState
        };
        case SUCCESS_REGISTRATION:
            return {
                ...state,
                isRegistrationSuccess: true
            };
        case CLEAR_REG:
            return {
                ...state,
                isRegistrationSuccess: false
            };
        default:
            return {
                ...state
            }
    }
}