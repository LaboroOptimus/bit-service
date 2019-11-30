import {
    CHANGE_BRAND,
    CHANGE_DESCRIPTION, CHANGE_EMAIL_NOTIFICATION,
    CHANGE_MODEL,
    CHANGE_PHONE_NOTIFICATION,
    CHANGE_TYPE,
    LOAD_PROFILE,
    LOAD_USER_INFO,
    ADD_REQUEST
} from "./actions";

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
    return {
        type: CHANGE_TYPE,
        payload: value
    }
};

export const changeModel = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_MODEL,
        payload: value,
    }
};

export const changeBrand = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_BRAND,
        payload: value
    }
};

export const changeDescription = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_DESCRIPTION,
        payload: value
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

export const addRequest = (e, station, phone, email, type, brand, desc, model) => {
    e.preventDefault();
    return {
        type: ADD_REQUEST,
        payload: {station, phone, email, type, brand, desc, model}
    }
}