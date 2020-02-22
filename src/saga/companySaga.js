import {all, call, put, takeEvery} from 'redux-saga/effects'
import fire from "../config/Fire";

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

