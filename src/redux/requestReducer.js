import {
    ADD_REQUEST_CHECK_FIELDS,
    ADD_REQUEST_SUCCESS,
    CHANGE_BRAND,
    CHANGE_DESCRIPTION,
    CHANGE_EMAIL_NOTIFICATION,
    CHANGE_EMAIL_REQUEST,
    CHANGE_FILE_REQUEST,
    CHANGE_FILE_REQUEST_ASYNC,
    CHANGE_MODEL,
    CHANGE_PHONE_NOTIFICATION,
    CHANGE_PHONE_REQUEST,
    CHANGE_STATION_REQUEST,
    CHANGE_TYPE,
    SET_USER_INFO,
    LOAD_REQUESTS,
    LOAD_REQUESTS_SUCCESS
} from "./actions";
import {validationImage} from "../utils/validation";

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
    file: null,
    isFileType: true,
    isStationCheck: true,
    emailNotification: false,
    phoneNotification: false,
    mustCheckFields: false,
    isRequestSuccess: false,
    requestItems:[],
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
            return {
                ...state,
                phone: action.payload.value,
                isPhoneCheck: action.payload.validate
            };

        case CHANGE_STATION_REQUEST:
            return {
                ...state,
                station: action.payload.value,
                isStationCheck: action.payload.validate
            };

        case CHANGE_EMAIL_REQUEST:
            return {
                ...state,
                email: action.payload.value,
                isEmailCheck: action.payload.validate,
            };
        case CHANGE_FILE_REQUEST:
            return {
                ...state,
                file:action.payload.file,
                isFileType: validationImage(action.payload.fileType)
            };

        case CHANGE_FILE_REQUEST_ASYNC:
            return {
                ...state,
                file: action.payload
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
                file: null,
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

        case LOAD_REQUESTS_SUCCESS:
            //console.log(typeof action.payload);
            let arr = [];
            for(let key in action.payload){
                arr.push(action.payload[key])
            }
            return {
                ...state,
                requestItems: arr
            };
        default:
            return {
                ...state
            }
    }
}