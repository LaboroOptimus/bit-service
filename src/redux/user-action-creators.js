import {
    CHANGE_BRAND,
    CHANGE_DESCRIPTION, CHANGE_EMAIL_NOTIFICATION,
    CHANGE_MODEL,
    CHANGE_PHONE_NOTIFICATION,
    CHANGE_TYPE,
    CHANGE_EMAIL_REQUEST,
    CHANGE_PHONE_REQUEST,
    CHANGE_STATION_REQUEST,
    LOAD_PROFILE,
    LOAD_USER_INFO,
    ADD_REQUEST
} from "./actions";

import {validationStation,validationPhone,validationEmail,validationDescription,validationTechBrand,validationTechModel,validationTechType} from "../utils/validation";

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE,
    }
};

export const loadUserInfo = () => {
    return {
        type: LOAD_USER_INFO,
    }
};

/* REQUEST */

export const changeType = (e) => {
    const value = e.target.value;
    const validate = validationTechType(value)
    return {
        type: CHANGE_TYPE,
        payload: {value, validate}
    }
};

export const changeModel = (e) => {
    const value = e.target.value;
    const validate = validationTechModel(value);
    return {
        type: CHANGE_MODEL,
        payload: {value, validate}
    }
};

export const changeBrand = (e) => {
    const value = e.target.value;
    const validate = validationTechBrand(value);
    return {
        type: CHANGE_BRAND,
        payload: {value, validate}
    }
};

export const changeDescription = (e) => {
    const value = e.target.value;
    const validate = validationDescription(value);
    return {
        type: CHANGE_DESCRIPTION,
        payload: {value, validate}
    }
};

export const changePhone = (e) => {
    const value = e.target.value;
    const validate = validationPhone(value);
    return {
        type: CHANGE_PHONE_REQUEST,
        payload: {value, validate}
    }
};

export const changeEmail = (e) => {
    const value = e.target.value;
    const validate = validationEmail(value);
    return {
        type: CHANGE_EMAIL_REQUEST,
        payload: {value, validate}
    }
};

export const changeStation = (e) => {
    const value = e.target.value;
    const validate = validationStation(value);
    return {
        type: CHANGE_STATION_REQUEST,
        payload: {value, validate}
    }
};

export const phoneNotification = () => {
    return {
        type: CHANGE_PHONE_NOTIFICATION
    }
};

export const emailNotification = () => {
    return {
        type: CHANGE_EMAIL_NOTIFICATION
    }
};

function validateRequest(a,b,c,d,e,f) {
    return a&&b&&c&&d&&e&&f;
}

export const addRequest = (e, station, phone, email, type, brand, desc, model,
                           isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,emailNotification,phoneNotification) => {
    e.preventDefault();
    console.log('action', isStationCheck);
    const isValidate = validateRequest(isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck)
    return {
        type: ADD_REQUEST,
        payload: {station, phone, email, type, brand, desc, model, isValidate,emailNotification,phoneNotification}
       // payload: {station, phone, email, type, brand, desc, model,isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck}
    }
};