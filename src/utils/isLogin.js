import {store} from "../redux/store";

export const isLogin = () => {
    const state = store.getState();
    const uid = localStorage.getItem('userId');
   /* console.log('uid:', uid);
    console.log('login:', state.login.isLogin);*/
    console.log('islogin:', !!((uid !== 'null' && uid !== '' && uid) || state.login.isLogin));
    return !!((uid !== 'null' && uid !== '' && uid) || state.login.isLogin);
}

export const isRole = () => {
    const state = store.getState();
    const role = localStorage.getItem('role');

    if(role === 'customer' || state.role === 'customer'){
        console.log('role - customer')
        return 'customer'
    }
    else if(role === 'company' || state.role === 'company'){
        console.log('role - company')
        return 'company'
    }
    else{
        console.log('role null')
        return null
    }
};