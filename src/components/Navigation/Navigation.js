import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import './Navigation.css'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import closeicon from './assets/close_img.png'
import {ReactComponent as Location} from './assets/placeholder.svg';
import {ReactComponent as Loupe} from './assets/loupe.svg';
import {ReactComponent as Service} from './assets/responsive.svg';
import {ReactComponent as User} from './assets/user.svg';
import {ReactComponent as Message} from "./assets/email.svg";
import {ReactComponent as Key} from "./assets/key.svg";
import {ReactComponent as Question} from "./assets/question.svg";
import {ReactComponent as Exit} from "./assets/exit.svg";
import {ReactComponent as Request} from "./assets/file.svg";
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


               {/* <Menu customCrossIcon={<ToggleIcon src={closeicon}/>}>
                    <TopStatickBlock>
                        <Title>Wonder Service</Title>
                    </TopStatickBlock>

                    <NavLink to="/map" className="menu-item">
                        <div>
                            <LocationIcon/>
                            Найти сервис на карте
                        </div>
                    </NavLink>
                    <NavLink to="/find-service" className="menu-item">
                        <div>
                            <LoupeIcon/>
                            Найти сервис
                        </div>
                    </NavLink>

                    <NavLink to="/request" className="menu-item">
                        <div>
                            <ServiceIcon/>
                            Заявка на ремонт
                        </div>
                    </NavLink>

                    <NavLink to="/my-requests" className="menu-item">
                        <div>
                            <RequestIcon/>
                            Мои заявки
                        </div>
                    </NavLink>

                    <NavLink to="/profile" className="menu-item">
                        <div>
                            <UserIcon/>
                            Профиль
                        </div>
                    </NavLink>
                    <NavLink to="/" className="menu-item">
                        <div>
                            <MessageIcon/>
                            Сообщения
                        </div>
                    </NavLink>

                    <Line/>
                    <NavLink to="/login" id="contact" className="menu-item">
                        <div>
                            <KeyIcon/>
                            Вход для сервисных центров
                        </div>
                    </NavLink>
                    <NavLink to="/" id="contact" className="menu-item">
                        <div>
                            <QuestionIcon/>
                            Контакты
                        </div>
                    </NavLink>

                    <NavLink to="/" id="contact" className="menu-item">
                        <div>
                            <ExitIcon/>
                            Выйти из системы
                        </div>
                    </NavLink>
                </Menu>*/}
            </React.Fragment>
        )
    }
}

export default Navigation