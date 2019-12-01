import {store} from "../redux/store";

export const isLogin = () => {
    const state = store.getState();
    const uid = localStorage.getItem('userId');
   /* console.log('uid:', uid);
    console.log('login:', state.login.isLogin);
    console.log('возвращает:', !!((uid !== 'null' && uid !== '' && uid) || state.login.isLogin));*/
    return !!((uid !== 'null' && uid !== '' && uid) || state.login.isLogin);
}