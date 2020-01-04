import React from 'react'
import './Navigation.css'
import LoginCustomerNav from "../LoginCustomerNav/LoginCustomerNav";
import NotLogNav from "../NotLogNav/NotLogNav";
import {isLogin, isRole} from "../../utils/isLogin";
import LoginCompanyNav from "../LoginCompanyNav/LoginCompanyNav";

/*

НЕ ВОШЕЛ

Регистрация
Вход для клиента
Вход для компании
Найти сервис
Найти сервис на карте
Заявка на ремонт

Главная
Контакты
Как это работает?


ВОШЕЛ ПОЛЬЗОВАТЕЛЬ
Найти сервис на карте
Найти сервис
Заявка на ремонт
Мои заявки
Профиль
Уведомления

ВОШЛА КОМПАНИЯ
Новые заявки
Моя компания
Уведомления

Вход для клиентов
Контакты
Выйти из системы
*/


class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/*{isLogin() ? <LoginCustomerNav/> : <NotLogNav/>}*/}
                {isLogin() && isRole() === 'customer' ? <LoginCustomerNav/> :
                isLogin() && isRole() === 'company' ? <LoginCompanyNav/>
                : <NotLogNav/>}
            </React.Fragment>
        )
    }
}

export default Navigation