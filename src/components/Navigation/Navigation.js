import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Navigation.css'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const MenuIcon = styled.img`
    width: 18px;
    margin-right: 5px;
    margin-top: 5px;
`;


class Navigation extends React.Component {
    state = {}

    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
            <Menu>
                <NavLink to="/find-service" className="menu-item">
                    Найти сервис
                </NavLink>
                <NavLink to="/request" className="menu-item">
                    Заявка на ремонт
                </NavLink>
                <NavLink to="/profile" id="about" className="menu-item">
                    Мой Профиль
                </NavLink>
                <NavLink to="/" id="contact" className="menu-item">
                    Мои Сообщения
                </NavLink>
                <NavLink to="/login" onClick={ this.showSettings } className="menu-item--small" >
                    Настройки
                </NavLink>
            </Menu>
            </React.Fragment>
            // TODO: добавить иконки
        )
    }
}

export default Navigation