const initialState = {
    name: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    pass: '',
    mustCheckFields: false,
    isAgreementCheck: false,
    isCompanyValid: false,
    isNameValid: false,
    isCityValid: true,
    isPhoneValid: false,
    isEmailValid: false,
    isPassValid: false,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COMPANY_NAME':
            return {
                ...state,
                name: action.payload.value,
                isNameValid: action.payload.check,
            };
        case 'CHANGE_COMPANY':

            return {
                ...state,
                company: action.payload.value,
                isCompanyValid: action.payload.check
            };
        case 'CHANGE_COMPANY_CITY':
            return {
                ...state,
                city: action.payload,
            };
        case 'CHANGE_COMPANY_PHONE':
            return {
                ...state,
                phone: action.payload.value,
                isPhoneValid: action.payload.check
            };
        case 'CHANGE_COMPANY_EMAIL':
            return {
                ...state,
                email: action.payload.value,
                isEmailValid: action.payload.check
            };
        case 'CHANGE_COMPANY_PASS':
            return {
                ...state,
                pass: action.payload.value,
                isPassValid: action.payload.check
            };

        case 'CHANGE_COMPANY_CHECKBOX_REG':
            return {
                ...state,
                isAgreementCheck: !state.isAgreementCheck,
            };
        case 'CHECK_COMPANY_FIELDS':
            return {
                ...state,
                mustCheckFields: true,
            };
        case 'SUBMIT_COMPANY':
            return {
                name: '',
                company: '',
                city: '',
                phone: '',
                email: '',
                pass: '',
                mustCheckFields: false,
                isAgreementCheck: false,
                isCompanyValid: false,
                isNameValid: false,
                isCityValid: true,
                isPhoneValid: false,
                isEmailValid: false,
                isPassValid: false,
            };
        default:
            return {
                ...state
            }
    }
}