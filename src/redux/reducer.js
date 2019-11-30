import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import requestReducer from "./requestReducer"

export default combineReducers({
    root: rootReducer,
    login: loginReducer,
    profile: profileReducer,
    request: requestReducer
})