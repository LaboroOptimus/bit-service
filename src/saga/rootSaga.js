import {all, call, put, takeEvery} from 'redux-saga/effects'
import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, SUCCESS_REGISTRATION, LOAD_PROFILE, LOAD_USER_PROFILE} from '../redux/actions'
import fire from "../config/Fire";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* watchLoadProfile() {
    yield takeEvery(LOAD_PROFILE, workerLoadProfile);
}

export function* workerLoadProfile() {
    let uid = localStorage.getItem('userId');
    let user;
    try {
        let f1 = fire.database().ref(`/users/${uid}/`);
        let userData = yield call(() => {
            return f1.once('value').then(function (snapshot) {
                let index = Object.keys(snapshot.val());
                user = snapshot.val()[index[0]];
            })
        });
        yield put({type: LOAD_USER_PROFILE, payload: user})


    }
    catch (e) {
        console.log(e)
    }

    }


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
            if (error.code === 'auth/wrong-password') {
                errorMessage = 'Неверный пароль';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'Пользователь не найден';
            } else {
                errorMessage = 'Произошла ошибка, попробуйте еще раз';
            }
            yield put({type: LOGIN_ERROR, payload: errorMessage});
        }
    }


    export default function* rootSaga() {
        yield all([
            watchRegistrationSuccess(),
            watchLogin(),
            watchLoadProfile()
        ])
    }