export const validationName = (value) => {
    return !(value.length < 2 || value.length > 25);
}

export const validationEmail = (value) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

export const validationPhone = (value) => {
    //let re =/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}/;
    //let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    let re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    return re.test(String(value).toLowerCase());
}

export const validationPass = (value) => {
   return value.length > 6;
}
/* тип техники,  марка техники,  модель техники, описание, станция метро*/

export const validationTechType = (value) => {
    return value.length > 5
};

export const validationTechBrand = (value) => {
    return value.length > 2
};

export const validationTechModel = (value) => {
    return value.length > 5
}

export const validationDescription = value => {
    return value.length > 8
}

export const validationStation = value => {
    return value.length > 5
}
export const validationImage = type => {
    if(type === 'png' || type === 'jpg' || type === 'jpeg'){
        return true;
    }
    else {
        return false
    }
};

export const validationPrice = price => {
    return +price >= 0 && +price <= 20000;
}

export const validationEmptyString = string => {
    return string.length !== 0;
}

export const validationCompanyAddress = string => {
    return string.length >= 4;
}

export const validationWorkHours = string => {
    if(Number(string) > 0 && Number(string) < 24){
        return true
    }
    else {
        return false
    }
};

export const validateCompanyFields = (name, field) => {
    switch (name) {
        case 'isPersonNameValid':
            return validationEmptyString(field);
        case 'isPersonEmailValid':
            return validationEmail(field);
        case 'isPersonPhoneValid':
            return validationPhone(field);
        case 'isCompanyNameValid':
            return validationEmptyString(field);
        case 'isOgrnValid':
            return validationEmptyString(field);
        case 'isInnValid':
            return validationEmptyString(field);
        case 'isCompanyAddressValid':
            return validationCompanyAddress(field);
        case 'isCompanyStreetValid':
            return  validationCompanyAddress(field);
        case 'isCompanyHouseValid':
            return validationCompanyAddress(field);
        case 'isServiceNameValid':
            return validationEmptyString(field);
        case 'isServicePriceValid':
            return validationPrice(field);
        case 'isCompanyWorkHoursValid':
            return validationWorkHours(field);
        default:
            return true
    }
};
