import {all, call, put, takeEvery} from 'redux-saga/effects'
import {
    ADD_REQUEST_CHECK_FIELDS,
    ADD_REQUEST_SUCCESS,
    CHANGE_FILE_REQUEST,
    LOAD_ANSWERS,
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
import {randomInteger} from "../utils/randomNumm";
import {history} from '../router/history'

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

/* CHANGE FILE */
export function* watchChangeFileRequest() {
    yield takeEvery(CHANGE_FILE_REQUEST, workerChangeFileRequest);
}

export function* workerChangeFileRequest(data) {
    //console.log(data);
    // превью фотки в заявке
    yield put({type: 'PREVIEW_FILE', payload: data})
}

/* CHANGE FILE */

/* NEW REQUEST */
export function* watchAddRequest() {
    yield takeEvery('ADD_REQUEST', workerAddRequest);
}

export function* workerAddRequest(data) {
    const uid = localStorage.getItem('userId');
    const time = new Date();
    const today = time.getDate() + '/' + (time.getMonth() + 1);
    const isValidate = data.payload.isValidate;
    console.log(isValidate);
    const id = randomInteger(1000, 100000)


    if (isValidate) {
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
                        emailNotification: data.payload.emailNotification,
                        phoneNotification: data.payload.phoneNotification,
                        file: data.payload.file,
                        date: today,
                        uid: uid,
                        id: id,
                        status: 'активна',
                        answers: 0
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
                        emailNotification: data.payload.emailNotification,
                        phoneNotification: data.payload.phoneNotification,
                        file: data.payload.file,
                        date: today,
                        uid: uid,
                        id: id,
                        status: 'активна',
                        answers: 0
                    });
                }
            );
            yield put({type: ADD_REQUEST_SUCCESS});
            history.push('/my-requests')

        } catch (e) {
            console.log(e);
        }
    } else {
        yield put({type: ADD_REQUEST_CHECK_FIELDS});
    }

}

/* NEW REQUEST */

/* LOAD REQUESTS */
export function* watchLoadRequests() {
    yield takeEvery('LOAD_REQUESTS', workerLoadRequests)
}

export function* workerLoadRequests() {
    let uid = localStorage.getItem('userId');
    let data;
    try {
        let f1 = fire.database().ref(`/users/${uid}/requests`);
        let userData = yield call(() => {
            return f1.once('value').then(function (snapshot) {
                //let index = Object.keys(snapshot.val());
                data = snapshot.val();
                //user = snapshot.val()[index[0]];
            })
        });
        yield put({type: 'LOAD_REQUESTS_SUCCESS', payload: data})

    } catch (e) {
        console.log(e)
    }
}

/* LOAD REQUESTS */


/* LOAD ANSWERS */

export function* watchLoadAnswers() {
    yield takeEvery(LOAD_ANSWERS, workerLoadAnswers)
}

export function* workerLoadAnswers(data) {
    let uid = localStorage.getItem('userId');
    let request;
    let index;

   /* console.log('saga');
    console.log(typeof data.payload);
*/
    try {
        let f1 = fire.database().ref(`/users/${uid}/requests`);
        yield call(() => {
            return f1.orderByChild('id').equalTo(+data.payload).once('value').then(function (snapshot) {
                index = Object.keys(snapshot.val())[0];
                request = snapshot.val();
               /* console.log(request);
                console.log(index);
                console.log(request[index]);*/
            })
        });
        yield put({type: 'LOAD_REQUEST_SUCCESS', payload: request[index]})
    } catch (e) {
        console.log(e)
    }

   /* try {
        let f1 = fire.database().ref(`/users/${uid}/requests/${index}/answers`);
        yield call(() => {
            return f1.once('value').then(function (snapshot)  {
                request = snapshot.val();
                //console.log('answers', request);
                //console.log(index);
            })
        });
        yield put({type: 'TEST'})
    } catch (e) {
        console.log(e)
    }*/

/*TODO: тут сделать структуру объекта answers, так как сейчас это число. Предусмотреть изменение в других местах*/
}

/* LOAD ANSWERS */

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
        watchAddRequest(),
        watchChangeFileRequest(),
        watchLoadRequests(),
        watchLoadAnswers()
    ])
}