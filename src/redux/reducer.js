import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import requestReducer from "./requestReducer"
import answerReducer from "./answerReducer";

export default combineReducers({
    root: rootReducer,
    login: loginReducer,
    profile: profileReducer,
    request: requestReducer,
    answer: answerReducer
})