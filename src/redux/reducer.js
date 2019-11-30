import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
    root: rootReducer,
    login: loginReducer,
    profile: profileReducer
})