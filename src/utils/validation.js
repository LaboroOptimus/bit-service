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
}