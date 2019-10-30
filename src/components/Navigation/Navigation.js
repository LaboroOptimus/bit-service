import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Navigation.css'
import styled from 'styled-components'

const MenuIcon = styled.img`
    width: 18px;
    margin-right: 5px;
    margin-top: 5px;
`




class Navigation extends React.Component {
    state = {}

    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">
                    Главная
                </a>
                <a id="about" className="menu-item" href="/">
                    Мой Профиль
                </a>
                <a id="contact" className="menu-item" href="/">
                    Мои Сообщения
                </a>
                <a onClick={ this.showSettings } className="menu-item--small" href="/">
                    Настройки
                </a>
            </Menu>
            // TODO: добавить иконки
        )
    }
}

export default Navigation