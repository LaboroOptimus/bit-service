import {validationEmail, validationPhone, validationPrice} from '../utils/validation'

const initialState = {
    companyCity:'',
    companyHouse:'',
    companyStreet:'',
    companyName: '',
    contactPerson: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    ogrn: '',
    inn: '',
    serviceName: '',
    servicePrice: '',
    isFreeDiagnostics: false,
    isDelivery: false,
    isGuarantee: false,
    isWorkWithLegalEntity: false,
    isEmailNotification: false,
    isPhoneNotification: false,
    isEmailNews: false,

    isPriceValid: false,
    isPersonEmailValid: false,
    isPersonPhoneValid: false,

    address: [],
    prices: []
};

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COMPANY_INFO':
            if(action.payload.name === 'servicePrice'){
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                    isPriceValid: validationPrice(action.payload.value)
                }
            }
            else if(action.payload.name === 'contactPersonEmail'){
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                    isPersonEmailValid: validationEmail(action.payload.value)
                }
            }
            else if(action.payload.name === 'contactPersonPhone'){
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                    isPersonPhoneValid: validationPhone(action.payload.value)
                }
            }
            else {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }}
        case 'CHANGE_COMPANY_CHECKBOX':
            return {
                ...state,
                [action.payload.name]: !state[action.payload.name]
            };


        case 'ADD_COMPANY_PRICE':
            let priceId;

            if(typeof state.prices[state.prices.length - 1] === 'undefined'){
                priceId = 0
            }
            else {
                priceId = state.prices[state.prices.length - 1].id + 1;
            }
            const priceItem = {
                id: priceId,
                name: state.serviceName,
                price: state.servicePrice,
            };
            const newPrices = state.prices;
            newPrices[newPrices.length] = priceItem;
            return {
                ...state,
                prices: newPrices,
                servicePrice: '',
                serviceName: ''
            };
        case 'REMOVE_COMPANY_ADDRESS':
            let key;
            for(let i = 0; i < state.address.length; i++){
                if(state.address[i].id === action.payload){
                    key = i
                }
            }
            let newArr = state.address;
            newArr.splice(key,1);
            return {
                ...state,
                address: [
                    ...state.address.slice(0, key),
                    ...state.address.slice(key),
                ]
            };

        case 'REMOVE_SERVICE_PRICE':
            let priceKey;
            for(let i = 0; i < state.prices.length; i++){
                if(state.prices[i].id === action.payload){
                    priceKey = i
                }
            }
            let newPriceArr = state.prices;
            newPriceArr.splice(priceKey,1);

            return {
                ...state,
                prices: [
                    ...state.prices.slice(0, priceKey),
                    ...state.prices.slice(priceKey),
                ]
            };
        case 'ADD_COMPANY_ADDRESS':
            let companyId;

         if(typeof state.address[state.address.length - 1] === 'undefined'){
             companyId = 0
         }
         else {
             companyId = state.address[state.address.length - 1].id + 1;
         }

            const addressItem = {
                id: companyId,
                city: state.companyCity,
                street: state.companyStreet,
                house: state.companyHouse,
            };
            const newAddress = state.address;
            newAddress[newAddress.length] = addressItem;

            return {
                ...state,
                address: newAddress,
                companyCity: '',
                companyHouse: '',
                companyStreet: ''
            };
        default:
            return {
                ...state
            }
    }
}