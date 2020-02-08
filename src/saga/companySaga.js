import {all, call, put, takeEvery} from 'redux-saga/effects'
import fire from "../config/Fire";

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

   /* console.log('isCompanyAlreadyExist', isCompanyAlreadyExist);
    console.log(keys);
    console.log(uid)*/
}

