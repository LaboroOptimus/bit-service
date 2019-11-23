import {all, put, takeEvery,call} from 'redux-saga/effects'
import {LOGIN, SUCCESS_REGISTRATION, SET_USER_SESSION, LOGIN_SUCCESS, LOGIN_ERROR} from '../redux/actions'
import fire from "../config/Fire";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* watchRegistrationSuccess() {
    yield takeEvery('SUBMIT', workerRegistrationSuccess);
}

export function* workerRegistrationSuccess() {
    yield put({type: SUCCESS_REGISTRATION});
}

export function* watchLogin() {
    yield takeEvery(LOGIN, workerLogin);
}

export function* workerLogin(data) {
    try {
        const newData = yield call(() => {
                return fire.auth().signInWithEmailAndPassword(data.payload.email, data.payload.pass);
            }
        );
        const uid = newData.user.uid;
        localStorage.setItem('userId', uid);
       yield put({type: LOGIN_SUCCESS, payload: uid});
    } catch (error) {
        let errorMessage = 'Произошла ошибка';
        if(error.code === 'auth/wrong-password'){
            errorMessage = 'Неверный пароль';
        }
        else if(error.code === 'auth/user-not-found'){
            errorMessage = 'Пользователь не найден';
        }
        else {
            errorMessage = 'Произошла ошибка, попробуйте еще раз';
        }
        yield put({type: LOGIN_ERROR, payload: errorMessage});
    }
}





export default function* rootSaga() {
    yield all([
        watchRegistrationSuccess(),
        //watchLoginSuccess(),
        watchLogin()
     /*   watchLogin()*/
        /*watchRedirect(),*/
    ])
}