import {all, put, takeEvery,} from 'redux-saga/effects'
import {CLEAR_REG, SUCCESS_REGISTRATION} from '../redux/actions'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* watchRegistrationSuccess() {
    yield takeEvery('SUBMIT', workerRegistrationSuccess);
}

export function* workerRegistrationSuccess() {
    yield put({type: SUCCESS_REGISTRATION});
}

/*
export function* watchRedirect() {
    yield takeEvery('SUCCESS_REGISTRATION', workerRedirect);
}

export function* workerRedirect() {
    yield put({type: CLEAR_REG});
}
*/



export default function* rootSaga() {
    yield all([
        watchRegistrationSuccess(),
        /*watchRedirect(),*/
    ])
}