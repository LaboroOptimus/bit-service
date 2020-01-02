export const formatAddress = (numm) => {
    if (numm >=2 && numm <= 4){
        return 'адреса'
    }
    else if(numm === 1){
        return 'адрес'
    }
    else if (numm > 4 && numm < 21){
       return 'адресов'
    }
    else {
        return 'адрес'
    }
};

export const formatPhone = (numm) => {
    if(numm >= 2 && numm <=4 ){
        return 'телефона'
    }
    else if(numm === 1){
        return 'телефон'
    }
    else if(numm > 4){
        return 'телефонов'
    }
};

export const formatPrice = (numm) => {
    if(numm >= 2 && numm <= 4 ){
        return 'цены'
    }
    else if(numm === 1 || numm === 21 || numm === 31){
        return 'цену'
    }
    else if(numm > 4){
        return 'цен'
    }
};

export const formatMinutes = (minutes) => {
    if(minutes >= 0 && minutes <=9){
        return '0' + minutes
    }
    else {
        return minutes
    }
}

export const formatHours = (hours) => {
    if(hours >=0 && hours <= 9){
        return '0' + hours;
    }
    else {
        return hours
    }
}