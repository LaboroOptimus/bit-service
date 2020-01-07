const initialState = {
    companyCity:'',
    companyHouse:'',
    companyStreet:'',
    serviceName: '',
    servicePrice: '',
    contactPerson: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    companyName: '',
    isFreeDiagnostics: false,
    isDelivery: false,
    isGuarantee: false,
    isWorkWithLegalEntity: false,
    isEmailNotification: false,
    isPhoneNotification: false,
    isEmailNews: false,
    ogrn: '',
    inn: '',
    address: [],
    prices: []
};

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COMPANY_CHECKBOX':
            return {
                ...state,
                [action.payload.name]: !state[action.payload.name]
            };
        case 'CHANGE_COMPANY_INN':
            return {
                ...state,
                inn: action.payload
            };
        case 'CHANGE_COMPANY_NAME':
            return {
                ...state,
                companyName: action.payload
            };
        case 'CHANGE_COMPANY_OGRN':
            return {
                ...state,
                ogrn: action.payload
            };
        case 'CHANGE_COMPANY_PERSON_EMAIL':
            return {
                ...state,
                contactPersonEmail: action.payload
            };
        case 'CHANGE_COMPANY_PERSON_PHONE':
            return {
                ...state,
                contactPersonPhone: action.payload,
            };
        case 'CHANGE_COMPANY_PERSON_NAME':
            return {
                ...state,
                contactPerson: action.payload
            };
        case 'CHANGE_SERVICE_NAME':
            return {
                ...state,
                serviceName: action.payload
            };
        case 'CHANGE_SERVICE_PRICE':
            return {
                ...state,
                servicePrice: action.payload
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
        case 'CHANGE_COMPANY_CITY':
            return {
                ...state,
                companyCity: action.payload,
            };
        case 'CHANGE_COMPANY_STREET':
            return {
                ...state,
                companyStreet: action.payload
            };
        case 'CHANGE_COMPANY_HOUSE':
            return {
                ...state,
                companyHouse: action.payload
            };
        default:
            return {
                ...state
            }
    }
}