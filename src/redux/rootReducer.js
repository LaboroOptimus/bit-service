import fire from "../config/Fire";
import axios from 'axios'

const initialState = {
    isLogin: false,
    name:'',
    phone: '',
    city: '',
    station: '',
    email: '',
    pass: '',
    uid:'',
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'CHANGE_PHONE':
            return {
                ...state,
                phone: action.payload
            };
        case 'CHANGE_CITY':
            return {
                ...state,
                city: action.payload,
            };
        case 'CHANGE_STATION':
            return {
                ...state,
                station: action.payload
            };
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'CHANGE_PASS':
            return {
                ...state,
                pass: action.payload
            };
        case 'SUBMIT':
            fire.auth().createUserWithEmailAndPassword(state.email, state.pass)
                .then((response) => {
                    console.log('отправлено 1');
                    let uid = response.user.uid;
                    const data = {
                        name: state.name,
                        email: state.email,
                        phone: state.phone,
                        city: state.city,
                        station: state.station,
                        pass: state.pass,
                    };
                    axios.post(`https://bit-ser.firebaseio.com/users/${uid}.json`, data).then(()=>{
                        console.log('отправлено 2')
                    })
                }).then(() => {
                    console.log('успешно')
            })
                .catch((e) => {
                    console.log(e)
                });

        return {
            name: '',
            email: '',
            phone: '',
            city: '',
            station: '',
            pass: '',
            ...state
        };

        default:
            return {
                state
            }
    }
}