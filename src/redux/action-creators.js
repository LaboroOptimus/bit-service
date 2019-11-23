import {
    CHANGE_CHECKBOX,
    CHANGE_CITY,
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASS,
    CHANGE_PHONE,
    CHANGE_STATION,
    CHECK_FIELDS, CLEAR_REG,
    SUBMIT
} from './actions'
import fire from "../config/Fire";
import axios from "axios";
import {validationEmail, validationName, validationPass, validationPhone} from '../utils/validation'

export const submit = (name, city, email, pass, station, phone, isEmailValid, isNameValid, isPhoneValid, isAgreementCheck) => {
    if (isNameValid && isEmailValid && isAgreementCheck && isPhoneValid) {
        const data = {name, city, pass, email, station, phone};
        fire.auth().createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                console.log('отправлено 1');
                let uid = response.user.uid;
                axios.post(`https://bit-ser.firebaseio.com/users/${uid}.json`, data).then(() => {
                    console.log('отправлено 2')
                })
            }).then(() => {
            console.log('успешно')

        })
            .catch((e) => {
                console.log(e)
            });

        return {
            type: SUBMIT,
        }
    } else {
        return {
            type: CHECK_FIELDS
        }
    }
};

export const changeCheckbox = () => {
    return {
        type: CHANGE_CHECKBOX,
    }
};

export const changeName = (e) => {
    const value = e.target.value;

    const check = validationName(value);

    return {
        type: CHANGE_NAME,
        payload: {value, check}

    }
};
export const changeStation = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_STATION,
        payload: value
    }
};
export const changePhone = (e) => {
    const value = e.target.value;
    const check = validationPhone(value)
    return {
        type: CHANGE_PHONE,
        payload: {value, check}
    }
};
export const changePass = (e) => {
    const value = e.target.value;
    const check = validationPass(value);
    return {
        type: CHANGE_PASS,
        payload: {value, check}
    }
};

export const changeEmail = (e) => {
    const value = e.target.value;
    const check = validationEmail(value);
    return {
        type: CHANGE_EMAIL,
        payload: {value, check}
    }
};

export const changeCity = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_CITY,
        payload: value
    }
};

export const clearReg = () => {
    return {
        type: CLEAR_REG
    }
}



