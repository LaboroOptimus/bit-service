import {LOAD_ANSWERS,LOAD_REQUEST_SUCCESS} from "./actions";

const initialState = {
    requestId: null,
    request: null,
    answers: [],
    isRequestLoad: false
}


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ANSWERS:
            return {
                ...state,
                requestId: action.payload,
                isRequestLoad: false
            };

        case LOAD_REQUEST_SUCCESS:
            return {
                ...state,
                request: action.payload,
                isRequestLoad: true,
            };
        default:
            return {
                ...state
            }
    }
}