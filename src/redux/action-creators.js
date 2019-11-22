import {CHANGE_CITY, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASS, CHANGE_PHONE, CHANGE_STATION, SUBMIT} from './actions'
import fire from "../config/Fire";
import axios from "axios";

export const submit = (name, city, email, pass, station, phone) => {

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
};
export const changeName = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_NAME,
        payload: value
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
    return {
        type: CHANGE_PHONE,
        payload: value
    }
};
export const changePass = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_PASS,
        payload: value
    }
};

export const changeEmail = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_EMAIL,
        payload: value
    }
};

export const changeCity = (e) => {
    const value = e.target.value;
    return {
        type: CHANGE_CITY,
        payload: value
    }
};

