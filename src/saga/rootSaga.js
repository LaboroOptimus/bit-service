import {all, call, put, takeEvery} from 'redux-saga/effects'
import {
    ADD_REQUEST_SUCCESS,
    LOAD_PROFILE,
    LOAD_USER_INFO,
    LOAD_USER_PROFILE,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_USER_INFO,
    SUCCESS_REGISTRATION
} from '../redux/actions'
import fire from "../config/Fire";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/* USER INFO */
export function* watchUserInfo() {
    yield takeEvery(LOAD_USER_INFO, workerUserInfo);
}

export function* workerUserInfo() {
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
        yield put({type: SET_USER_INFO, payload: user})
    } catch (e) {
        console.log(e)
    }
}

/* USER INFO */

/* LOAD PROFILE */
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


    } catch (e) {
        console.log(e)
    }
}

/* LOAD PROFILE */

/* NEW REQUEST */
export function* watchAddRequest() {
    yield takeEvery('ADD_REQUEST', workerAddRequest);
}

export function* workerAddRequest(data) {
    const uid = localStorage.getItem('userId');
    const time = new Date();
    const today = time.getDate() + '/' + (time.getMonth() + 1);

    try {
        yield call(() => {
                return fire.database().ref('users/' + uid + '/requests').push({
                    type: data.payload.type,
                    brand: data.payload.brand,
                    model: data.payload.model,
                    desc: data.payload.desc,
                    station: data.payload.station,
                    phone: data.payload.phone,
                    email: data.payload.email,
                    date: today,
                    uid: uid,
                    status: 'active',
                });
            }
        );
        yield call(() => {
                return fire.database().ref('requests/').push({
                    type: data.payload.type,
                    brand: data.payload.brand,
                    model: data.payload.model,
                    desc: data.payload.desc,
                    station: data.payload.station,
                    phone: data.payload.phone,
                    email: data.payload.email,
                    date: today,
                    uid: uid,
                    status: 'active',
                });
            }
        );
        yield put({type: ADD_REQUEST_SUCCESS});
    } catch (e) {
        console.log(e);
    }
}
/* NEW REQUEST */

export function* watchRegistrationSuccess() {
    yield takeEvery('SUBMIT', workerRegistrationSuccess);
}

export function* workerRegistrationSuccess() {
    yield put({type: SUCCESS_REGISTRATION});
}

/* LOGIN */
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

/* LOGIN */

export default function* rootSaga() {
    yield all([
        watchRegistrationSuccess(),
        watchLogin(),
        watchLoadProfile(),
        watchUserInfo(),
        watchAddRequest()
    ])
}