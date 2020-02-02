import {
    CHANGE_BRAND,
    CHANGE_DESCRIPTION, CHANGE_EMAIL_NOTIFICATION,
    CHANGE_MODEL,
    CHANGE_PHONE_NOTIFICATION,
    CHANGE_TYPE,
    CHANGE_EMAIL_REQUEST,
    CHANGE_PHONE_REQUEST,
    CHANGE_STATION_REQUEST,
    CHANGE_FILE_REQUEST,
    LOAD_PROFILE,
    LOAD_USER_INFO,
    ADD_REQUEST,
    LOAD_REQUESTS, LOAD_ANSERS, LOAD_ANSWERS
} from "./actions";
import {store} from "./store";
import {validationStation,validationPhone,validationEmail,validationDescription,validationTechBrand,validationTechModel,validationTechType} from "../utils/validation";

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE,
    }
};

export const loadUserInfo = () => {
    return {
        type: LOAD_USER_INFO,
    }
};

/* REQUEST */

export const changeType = (e) => {
    const value = e.target.value;
    const validate = validationTechType(value)
    return {
        type: CHANGE_TYPE,
        payload: {value, validate}
    }
};

export const changeModel = (e) => {
    const value = e.target.value;
    const validate = validationTechModel(value);
    return {
        type: CHANGE_MODEL,
        payload: {value, validate}
    }
};

export const changeBrand = (e) => {
    const value = e.target.value;
    const validate = validationTechBrand(value);
    return {
        type: CHANGE_BRAND,
        payload: {value, validate}
    }
};

export const changeDescription = (e) => {
    const value = e.target.value;
    const validate = validationDescription(value);
    return {
        type: CHANGE_DESCRIPTION,
        payload: {value, validate}
    }
};

export const changePhone = (e) => {
    const value = e.target.value;
    const validate = validationPhone(value);
    return {
        type: CHANGE_PHONE_REQUEST,
        payload: {value, validate}
    }
};

export const changeEmail = (e) => {
    const value = e.target.value;
    const validate = validationEmail(value);
    return {
        type: CHANGE_EMAIL_REQUEST,
        payload: {value, validate}
    }
};

export const changeStation = (e) => {
    const value = e.target.value;
    const validate = validationStation(value);
    return {
        type: CHANGE_STATION_REQUEST,
        payload: {value, validate}
    }
};

export const changeFile = (file) => {
    //console.log('file', file.name.split(".").splice(-1,1)[0]);
   return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(store.dispatch({type:CHANGE_FILE_REQUEST, payload: {file: reader.result, fileType: file.name.split(".").splice(-1,1)[0]}}))
        };
        reader.readAsDataURL(file);
        reader.onerror = reject;
    })
};

export const changeCompanyPersonFile = (file) => {
    //console.log('file', file.name.split(".").splice(-1,1)[0]);
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(store.dispatch({type:'CHANGE_COMPANY_PERSON_PHOTO', payload: {file: reader.result, fileType: file.name.split(".").splice(-1,1)[0]}}))
        };
        reader.readAsDataURL(file);
        reader.onerror = reject;
    })
};

export const changeCompanyPhoto = (file) => {
    //console.log('file', file.name.split(".").splice(-1,1)[0]);
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(store.dispatch({type:'CHANGE_COMPANY_PHOTO', payload: {file: reader.result, fileType: file.name.split(".").splice(-1,1)[0]}}))
        };
        reader.readAsDataURL(file);
        reader.onerror = reject;
    })
};


export const phoneNotification = () => {
    return {
        type: CHANGE_PHONE_NOTIFICATION
    }
};

export const emailNotification = () => {
    return {
        type: CHANGE_EMAIL_NOTIFICATION
    }
};

function validateRequest(a,b,c,d,e,f,g) {
    return a&&b&&c&&d&&e&&f&&g;
}

function validateUploadCompanyProfile(a,b,c,d,e,f,g,h,i,j,k,l,m) {
    return a&&b&&c&&d&&e&&f&&g&&h&&i&&j&&k&&l&&m;
}

export const updateCompanyProfile = (e) => {
    e.preventDefault();
    let data =  store.getState().company;
    let isValidateUpload = validateUploadCompanyProfile(data.isPersonNameValid, data.isPersonPhoneValid,data.isPersonEmailValid,
        data.isCompanyNameValid,data.isOgrnValid,data.isInnValid,data.isCompanyAddressValid,data.isCompanyStreetValid,
        data.isCompanyHouseValid,data.isServiceNameValid,data.isServicePriceValid, data.isPersonPhotoValid, data.isCompanyPhotoValid);

    console.log(data.isPersonNameValid, data.isPersonPhoneValid,data.isPersonEmailValid,
        data.isCompanyNameValid,data.isOgrnValid,data.isInnValid,data.isCompanyAddressValid,data.isCompanyStreetValid,
        data.isCompanyHouseValid,data.isServiceNameValid,data.isServicePriceValid);
    let profile = {
        name: data.companyName,
        ogrn: data.ogrn,
        inn: data.inn,
        photo: data.companyPhoto,
        personName: data.contactPerson,
        personEmail: data.contactPersonEmail,
        personPhone: data.contactPersonPhone,
        personPhoto: data.contactPersonPhoto,
        isFreeDiagnostics: data.isFreeDiagnostics,
        isDelivery: data.isDelivery,
        isGuarantee: data.isGuarantee,
        isWorkWithLegalEntity: data.isWorkWithLegalEntity,
        isEmailNotification: data.isEmailNotification,
        isPhoneNotification: data.isPhoneNotification,
        isEmailNews: data.isEmailNews,
        address: data.address,
        prices: data.prices,
    };

    return {
        type: 'UPLOAD_PROFILE_REQUEST',
        payload: {profile,isValidateUpload}
    }
};

export const addRequest = (e, station, phone, email, type, brand, desc, model,
                           isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,emailNotification,phoneNotification,file,isFileType) => {
    e.preventDefault();
    const isValidate = validateRequest(isStationCheck, isModelCheck, isTypeCheck, isEmailCheck, isPhoneCheck, isDescriptionCheck,isFileType);
    return {
        type: ADD_REQUEST,
        payload: {station, phone, email, type, brand, desc, model, isValidate,emailNotification,phoneNotification,file}
    }
};

export const loadRequest = () => {
    return {
        type: LOAD_REQUESTS
    }
};

export const loadAnswers = (id) => {
    return {
        type: LOAD_ANSWERS,
        payload: id,
    }
};

export const filterActive = () => {
    return {
        type:'TEST',
    }
};

export const filterDelete = () => {
    return {
        type: 'TEST'
    }
};