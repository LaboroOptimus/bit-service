import {validateCompanyFields, validationImage} from '../utils/validation'


const initialState = {
    companyCity: '',
    companyHouse: '',
    companyStreet: '',
    companyName: '',
    companyPhoto: 'http://placehold.it/200x200',
    contactPerson: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    contactPersonPhoto: 'http://placehold.it/200x200',
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

    isPersonNameValid: false,
    isPersonEmailValid: false,
    isPersonPhoneValid: false,
    isPersonPhotoValid: false,

    isCompanyNameValid: false,
    isCompanyPhotoValid: false,
    isOgrnValid: false,
    isInnValid: false,

    isCompanyAddressValid: false,
    isCompanyStreetValid: false,
    isCompanyHouseValid: false,

    isServiceNameValid: false,
    isServicePriceValid: false,

    mustCheckNewAddress: false,
    mustCheckNewPrice: false,
    mustCheckCompanyFields: false,
    address: [],
    prices: []
};

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPLOAD_COMPANY_SUCCESS':
            console.log('успешно');
            return {
                ...state,
                mustCheckCompanyFields: false,
            };
        case 'UPLOAD_COMPANY_ERROR':
            console.log('error');
            return {
                ...state,
                mustCheckCompanyFields: true,
            };
        case 'CHANGE_COMPANY_PERSON_PHOTO':
            console.log('валидация',validationImage(action.payload.fileType));
            return {
                ...state,
                contactPersonPhoto: action.payload.file,
                isPersonPhotoValid: validationImage(action.payload.fileType)
            };
        case 'CHANGE_COMPANY_PHOTO':
            console.log('валидация',validationImage(action.payload.fileType));
            return {
                ...state,
                companyPhoto: action.payload.file,
                isCompanyPhotoValid: validationImage(action.payload.fileType)
            };
        case 'CHANGE_COMPANY_INFO':
            const name = action.payload.name;
            const valid = action.payload.getAttribute('data-validation');
            return {
                ...state,
                [name]: action.payload.value,
                [valid]: validateCompanyFields(valid, action.payload.value)
            };

        case 'CHANGE_COMPANY_CHECKBOX':
            return {
                ...state,
                [action.payload.name]: !state[action.payload.name]
            };

        case 'ADD_COMPANY_PRICE':
            let priceId;

            if (typeof state.prices[state.prices.length - 1] === 'undefined') {
                priceId = 0
            } else {
                priceId = state.prices[state.prices.length - 1].id + 1;
            }
            const priceItem = {
                id: priceId,
                name: state.serviceName,
                price: state.servicePrice,
            };
            if(state.isServicePriceValid && state.isServiceNameValid){
               /* const newPrices = state.prices;
                newPrices[newPrices.length] = priceItem;*/
                return {
                    ...state,
                    prices: [...state.prices, priceItem],
                    servicePrice: '',
                    serviceName: ''
                };
            }
            else {
                return {
                    ...state,
                    mustCheckNewPrice: true,
                };
            }

        case 'REMOVE_COMPANY_ADDRESS':
            let key;
            for (let i = 0; i < state.address.length; i++) {
                if (state.address[i].id === action.payload) {
                    key = i
                }
            }
            let newArr = state.address;
            newArr.splice(key, 1);
            return {
                ...state,
                address: [
                    ...state.address.slice(0, key),
                    ...state.address.slice(key),
                ]
            };

        case 'REMOVE_SERVICE_PRICE':
            let priceKey;
            for (let i = 0; i < state.prices.length; i++) {
                if (state.prices[i].id === action.payload) {
                    priceKey = i
                }
            }
            let newPriceArr = state.prices;
            newPriceArr.splice(priceKey, 1);

            return {
                ...state,
                prices: [
                    ...state.prices.slice(0, priceKey),
                    ...state.prices.slice(priceKey),
                ]
            };
        case 'ADD_COMPANY_ADDRESS':
            let companyId;

            if (typeof state.address[state.address.length - 1] === 'undefined') {
                companyId = 0
            } else {
                companyId = state.address[state.address.length - 1].id + 1;
            }

            const addressItem = {
                id: companyId,
                city: state.companyCity,
                street: state.companyStreet,
                house: state.companyHouse,
            };
            //const newAddress = state.address;
            //newAddress[newAddress.length] = addressItem;
            if (state.isCompanyAddressValid) {
                return {
                    ...state,
                    address: [...state.address, addressItem],
                    companyCity: '',
                    companyHouse: '',
                    companyStreet: '',
                    mustCheckNewAddress: false,
                }
            } else {
                return {
                    ...state,
                    mustCheckNewAddress: true,
                }
            }
        default:
            return {
                ...state
            }
    }
}