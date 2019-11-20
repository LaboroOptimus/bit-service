import React from 'react'
import './Navigation.css'
import LogNav from "../LogNav/LogNav";
import NotLogNav from "../NotLogNav/NotLogNav";

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


ВОШЕЛ
Найти сервис на карте
Найти сервис
Заявка на ремонт
Мои заявки
Профиль
Уведомления

Вход для сервисных центров ?
Контакты
Выйти из системы
*/


class Navigation extends React.Component {
    state = {
        isLogin: false
    }

    render() {
        const isLogin = this.state.isLogin;
        return (
            <React.Fragment>
                {isLogin ? <LogNav/> : <NotLogNav/>}
            </React.Fragment>
        )
    }
}

export default Navigation