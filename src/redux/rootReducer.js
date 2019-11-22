import {CHANGE_NAME,CHANGE_CITY,CHANGE_EMAIL,CHANGE_PASS,CHANGE_PHONE,CHANGE_STATION, SUBMIT} from "./actions";

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
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case CHANGE_PHONE:
            return {
                ...state,
                phone: action.payload
            };
        case CHANGE_CITY:
            return {
                ...state,
                city: action.payload,
            };
        case CHANGE_STATION:
            return {
                ...state,
                station: action.payload
            };
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case CHANGE_PASS:
            return {
                ...state,
                pass: action.payload
            };
        case SUBMIT:
            console.log(state.state);
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