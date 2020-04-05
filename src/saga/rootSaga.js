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
import {formatHours,formatMinutes} from "../utils/format";
import {watchCompanyLoad, watchLoadCompanyPage, watchLoadAllRequests} from './companySaga'

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

/* UPLOAD COMPANY PROFILE */
export function * watchUploadCompanyProfile() {
    yield takeEvery('UPLOAD_PROFILE_REQUEST', workerUploadCompanyProfile);
}

export function * workerUploadCompanyProfile(data) {
    const uid = localStorage.getItem('userId');
    const time = new Date();
    const today = time.getDate() + '/' + (time.getMonth() + 1);
    const now = formatHours(time.getHours()) + ':' + formatMinutes(time.getMinutes());
    const isValidate = data.payload.isValidateUpload;
    console.log(isValidate);
    const id = randomInteger(1000, 100000)
    var ref1 = fire.database().ref().child('users/' + uid);
    var ref2 = fire.database().ref().child('company/');
    var ref3 = fire.database().ref().child('company/' + uid);
    let key;

    yield call(() => {
        return ref1.once('value').then(function (snapshot) {
            key = Object.keys(snapshot.val())[0];
        })
    });

    let keys;
    yield call(() => {
        return ref2.once('value').then(function (snapshot) {
           keys = Object.keys(snapshot.val());
        })
    });

    let ifCompanyExist = false;
    let companyKey;

    for(let i = 0; i<keys.length; i++){
        if(keys[i] === uid){
            ifCompanyExist = true;
            break;
        }
    }

    if(ifCompanyExist){
        yield call(() => {
            return ref3.once('value').then(function (snapshot) {
                companyKey = Object.keys(snapshot.val())[0];
                console.log('company key',  companyKey);
            })
        });
    }

    console.log(ifCompanyExist);

    if (isValidate) {
        try {
            yield call(() => {
                    return fire.database().ref('users/' + uid + `/${key}`).update({
                        dateUpload: today,
                        timeUpload: now,
                        name: data.payload.profile.name,
                        ogrn: data.payload.profile.ogrn,
                        inn: data.payload.profile.inn,
                        photo: data.payload.profile.photo,
                        personName: data.payload.profile.personName,
                        personEmail: data.payload.profile.personEmail,
                        personPhone: data.payload.profile.personPhone,
                        personPhoto: data.payload.profile.personPhoto,
                        isFreeDiagnostics: data.payload.profile.isFreeDiagnostics,
                        isDelivery: data.payload.profile.isDelivery,
                        isGuarantee: data.payload.profile.isGuarantee,
                        isWorkWithLegalEntity: data.payload.profile.isWorkWithLegalEntity,
                        isEmailNotification: data.payload.profile.isEmailNotification,
                        isPhoneNotification: data.payload.profile.isPhoneNotification,
                        isEmailNews: data.payload.profile.isEmailNews,
                        address: data.payload.profile.address,
                        prices: data.payload.profile.prices,
                    });
                }
            );
            if(ifCompanyExist){
                console.log('company exist', data.payload.profile.address);
                yield call(() => {
                        return fire.database().ref('company/' + uid + `/${companyKey}`).update({
                            dateUpload: today,
                            timeUpload: now,
                            name: data.payload.profile.name,
                            ogrn: data.payload.profile.ogrn,
                            inn: data.payload.profile.inn,
                            photo: data.payload.profile.photo,
                            personName: data.payload.profile.personName,
                            personEmail: data.payload.profile.personEmail,
                            personPhone: data.payload.profile.personPhone,
                            personPhoto: data.payload.profile.personPhoto,
                            isFreeDiagnostics: data.payload.profile.isFreeDiagnostics,
                            isDelivery: data.payload.profile.isDelivery,
                            isGuarantee: data.payload.profile.isGuarantee,
                            isWorkWithLegalEntity: data.payload.profile.isWorkWithLegalEntity,
                            isEmailNotification: data.payload.profile.isEmailNotification,
                            isPhoneNotification: data.payload.profile.isPhoneNotification,
                            isEmailNews: data.payload.profile.isEmailNews,
                            address: data.payload.profile.address,
                            prices: data.payload.profile.prices,
                        });
                    }
                );
            }
            else {
                console.log('company not exist')
                yield call(() => {
                        return fire.database().ref('company/' + uid).push({
                            id: id,
                            dateUpload: today,
                            timeUpload: now,
                            name: data.payload.profile.name,
                            ogrn: data.payload.profile.ogrn,
                            inn: data.payload.profile.inn,
                            photo: data.payload.profile.photo,
                            personName: data.payload.profile.personName,
                            personEmail: data.payload.profile.personEmail,
                            personPhone: data.payload.profile.personPhone,
                            personPhoto: data.payload.profile.personPhoto,
                            isFreeDiagnostics: data.payload.profile.isFreeDiagnostics,
                            isDelivery: data.payload.profile.isDelivery,
                            isGuarantee: data.payload.profile.isGuarantee,
                            isWorkWithLegalEntity: data.payload.profile.isWorkWithLegalEntity,
                            isEmailNotification: data.payload.profile.isEmailNotification,
                            isPhoneNotification: data.payload.profile.isPhoneNotification,
                            isEmailNews: data.payload.profile.isEmailNews,
                            address: data.payload.profile.address,
                            prices: data.payload.profile.prices,
                            status: 'не подтвержден',
                            rating: 0,
                            amountOrders: 0,
                            userRating: 0,
                        });
                    }
                );
            }

            yield put({type: 'UPLOAD_COMPANY_SUCCESS'});
            history.push('/company')

        } catch (e) {
            console.log(e);
        }
    } else {
        yield put({type: 'UPLOAD_COMPANY_ERROR'});
    }
}

/* UPLOAD COMPANY PROFILE */

/* NEW REQUEST */
export function* watchAddRequest() {
    yield takeEvery('ADD_REQUEST', workerAddRequest);
}

export function* workerAddRequest(data) {
    const uid = localStorage.getItem('userId');
    const time = new Date();
    const today = time.getDate() + '/' + (time.getMonth() + 1);
    const now = formatHours(time.getHours()) + ':' + formatMinutes(time.getMinutes());
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
                        time: now,
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
                        time: now,
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
        yield call(() => {
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
    try {
        let f1 = fire.database().ref(`/users/${uid}/requests`);
        yield call(() => {
            return f1.orderByChild('id').equalTo(+data.payload).once('value').then(function (snapshot) {
                index = Object.keys(snapshot.val())[0];
                request = snapshot.val();
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
        let role;
        let f1 = fire.database().ref(`/users/${uid}`);
        yield call (()=>{
            return f1.once('value').then(function (snapshot) {
                data = snapshot.val();
                let index = Object.keys(snapshot.val())[0];
                role = data[index].role;
            })
        });
        console.log(role)
        localStorage.setItem('userId', uid);
        localStorage.setItem('role', role);
        yield put({type: LOGIN_SUCCESS, payload: {uid,role}});
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
        watchLoadAnswers(),
        watchUploadCompanyProfile(),
        watchLoadCompanyPage(),
        watchCompanyLoad(),
        watchLoadAllRequests()
    ])
}