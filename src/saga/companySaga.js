import {all, call, put, takeEvery} from 'redux-saga/effects'
import fire from "../config/Fire";
import {uniqueArray} from '../utils/format';

export function* watchCompanyLoad() {
    yield takeEvery('LOAD_COMPANY', workerCompanyLoad);
}

export function* workerCompanyLoad() {
    let ref = fire.database().ref().child('company/');
    let data;
    let keys;
    yield call(() => {
        return ref.once('value').then(function (snapshot) {
            data = snapshot.val();
            keys = Object.keys(snapshot.val());
        })
    });

    let formatedData = [];

    for(let i = 0; i < keys.length; i++){
        let obj = data[keys[i]];
        let secondKey = Object.keys(obj);
        formatedData.push(obj[secondKey])
    }
    yield put({type: 'LOAD_COMPANY_SUCCESS', payload: formatedData})
}


export function* watchLoadCompanyPage() {
    yield takeEvery('LOAD_COMPANY_PAGE', workerLoadCompanyPage);
}

export function* workerLoadCompanyPage() {
    const uid = localStorage.getItem('userId');
    let ref = fire.database().ref().child('company/');
    let ref1 = fire.database().ref().child('company/' + uid);
    let keys;
    let isCompanyAlreadyExist = false;
    yield call(() => {
        return ref.once('value').then(function (snapshot) {
            keys = Object.keys(snapshot.val());
        })
    });

    for(let i = 0; i<keys.length; i++){
        if(keys[i] === uid){
            isCompanyAlreadyExist = true;
            break;
        }
    }
    if(isCompanyAlreadyExist){
        try{
            let data;
            let currentKey;
            yield call(() => {
                return ref1.once('value').then(function (snapshot) {
                    currentKey = Object.keys(snapshot.val())[0];
                    data = snapshot.val()[currentKey];
                })
            });
            yield put({type: 'LOAD_COMPANY_PROFILE', payload: data})
        }
        catch (e) {

        }
    }
    else {
        yield put({type: 'EDIT_COMPANY_PROFILE'})
    }
}

export function * watchLoadAllRequests() {
    yield takeEvery('LOAD_ALL_REQUESTS', workerAllRequests);
}

export function * workerAllRequests() {

    let ref = fire.database().ref().child('requests/');
    let data = {};
    let keys = [];
    yield call(() => {
        return ref.once('value').then(function (snapshot) {
            keys = Object.keys(snapshot.val());
            data = snapshot.val();
        })
    });
    let formatedData = []; // данные очищенные от ключей firebase
    let usersID = []; // id пользователей

    // взять id из массива, по этому id сделать запрос на сервер, получить инфо по пользователю

    for(let i = 0; i < keys.length; i++){
     formatedData.push(data[keys[i]]);
     usersID.push(data[keys[i]].uid);
    }

    let uniqueUsersID = uniqueArray(usersID); // уникальные id пользователей
    let users = {};
    let userData = {};
    for(let i = 0; i<uniqueUsersID.length; i++){
        let f1 = fire.database().ref(`/users/${uniqueUsersID[i]}`);
        yield call(() => {
            return f1.once('value').then(function (snapshot) {
                let key = Object.keys(snapshot.val());
                userData = snapshot.val()[key[0]];
            })
        });
        users = { // добавляем к объекту новый объект с идентификатором uniqueUsersID
            ...users,
            [uniqueUsersID[i]]:userData,
        }
    }

    let usersKeys = Object.keys(users);
    let dataKeys = Object.keys(data);

    for(let i = 0; i<usersKeys.length; i++){
        for(let j = 0; j<dataKeys.length; j++){
            if(data[dataKeys[j]].uid === usersKeys[i]){
                data[dataKeys[j]] = {
                    ...data[dataKeys[j]],
                    userInfo:users[usersKeys[i]],
                }
            }
        }
    }

    const dataWithUsersKeys = Object.keys(data);
    let dataWithUsers = [];

    for(let i = 0; i<dataWithUsersKeys.length; i++){
        dataWithUsers.push(data[dataWithUsersKeys[i]]);
    }



    if(Object.keys(data).length !== 0) {
        yield put({type: 'LOAD_ALL_REQUESTS_SUCCESS', payload: dataWithUsers});
    }
    else {
        yield put({type: 'LOAD_ALL_REQUESTS_ERROR'});
    }
}
