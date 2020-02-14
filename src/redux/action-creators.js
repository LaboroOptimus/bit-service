import {
    CHANGE_CHECKBOX,
    CHANGE_CITY,
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASS,
    CHANGE_PHONE,
    CHANGE_STATION,
    CHECK_FIELDS,
    CLEAR_REG,
    EXIT,
    LOGIN,
    SUBMIT
} from './actions'
import fire from "../config/Fire";
import axios from "axios";
import {history} from '../router/history'
import {validationEmail, validationName, validationPass, validationPhone} from '../utils/validation'

export const submit = (name, city, email, pass, station, phone, isEmailValid, isNameValid, isPhoneValid, isAgreementCheck) => {
    if (isNameValid && isEmailValid && isAgreementCheck && isPhoneValid) {
        const date = new Date();
        const dateOfReg = `${date.getDate()} ` + `${(date.getMonth() + 1)} ` + `${date.getFullYear()}`;
        const role = 'customer';
        const data = {name, city, pass, email, station, phone, dateOfReg, role};
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
};

export const login = (e, email, pass) => {
    e.preventDefault();
    return {
        type: LOGIN,
        payload: {email, pass}
    }
};

export const exit = () => {
    localStorage.setItem('userId', null);
    localStorage.setItem('role', null);
    return {
        type: EXIT
    }
};

export const changeCompanyName = (e) => {
    const value = e.target.value;
    const check = validationName(value);
    return {
        type: 'CHANGE_COMPANY_NAME',
        payload: {value, check}
    }
};

export const changeCompany = (e) => {
    const value = e.target.value;
    // валидация имени компании
    const check = validationName(value);
    return {
        type: 'CHANGE_COMPANY',
        payload: {value, check}
    }
};

export const changeCompanyCity = (e) => {
    const value = e.target.value;
    return {
        type: 'CHANGE_COMPANY_CITY',
        payload: value
    }
};

export const changeCompanyPhone = (e) => {
    const value = e.target.value;
    const check = validationPhone(value);
    return {
        type: 'CHANGE_COMPANY_PHONE',
        payload: {value, check}
    }
};

export const changeCompanyEmail = (e) => {
    const value = e.target.value;
    const check = validationEmail(value);
    return {
        type: 'CHANGE_COMPANY_EMAIL',
        payload: {value, check}
    }
};

export const changeCompanyPass = (e) => {
    const value = e.target.value;
    const check = validationPass(value);
    return {
        type: 'CHANGE_COMPANY_PASS',
        payload: {value, check}
    }
};

export const changeCompanyCheckboxReg = (e) => {
    return {
        type: 'CHANGE_COMPANY_CHECKBOX_REG',
    }
};

export const onCompanyRegistration = (e, name, company, phone, email, city, pass, isAgreementCheck, isCompanyValid, isNameValid, isCityValid, isPhoneValid, isEmailValid, isPassValid) => {
    e.preventDefault();
    if (isAgreementCheck && isCompanyValid && isNameValid && isCityValid && isPhoneValid && isEmailValid && isPassValid) {
        const date = new Date();
        const dateOfReg = `${date.getDate()} ` + `${(date.getMonth() + 1)} ` + `${date.getFullYear()}`;
        const role = 'company';
        const data = {name, company, phone, email, city, pass, dateOfReg, role};
        fire.auth().createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                console.log('компания создана');
                let uid = response.user.uid;
                axios.post(`https://bit-ser.firebaseio.com/users/${uid}.json`, data).then(() => {
                    console.log('занес данные в таблицу компаний')
                })
            }).then(() => {
            console.log('успешно')

        })
            .catch((e) => {
                console.log(e)
            });
        history.push('/registration-success');
        return {
            type: 'SUBMIT_COMPANY',
        }
    } else {
        return {
            type: 'CHECK_COMPANY_FIELDS'
        }
    }
};





