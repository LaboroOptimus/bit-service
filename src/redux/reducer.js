import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import requestReducer from "./requestReducer"
import answerReducer from "./answerReducer";
import regCompanyReducer from "./regCompanyReducer";
import companyReducer from "./companyReducer";

export default combineReducers({
    root: rootReducer,
    login: loginReducer,
    profile: profileReducer,
    request: requestReducer,
    answer: answerReducer,
    regCompany: regCompanyReducer,
    company: companyReducer,
})