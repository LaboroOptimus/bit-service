
const initialState = {
    isLogin: false
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTION':
            console.log('изменился')
            return {
                isLogin: true
            }
        default:
            return {
                state
            }
    }
}