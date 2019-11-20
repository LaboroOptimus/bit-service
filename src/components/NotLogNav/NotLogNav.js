import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {slide as Menu} from 'react-burger-menu';
import '../Navigation/Navigation.css';
import {ReactComponent as Home} from "../Navigation/assets/home.svg";
import {ReactComponent as Company} from "../Navigation/assets/suitcase.svg";
import {ReactComponent as Info} from "../Navigation/assets/information.svg";
import {ReactComponent as Location} from "../Navigation/assets/placeholder.svg";
import {ReactComponent as Loupe} from "../Navigation/assets/loupe.svg";
import {ReactComponent as Request} from "../Navigation/assets/file.svg";
import {ReactComponent as User} from "../Navigation/assets/user.svg";
import {ReactComponent as Key} from "../Navigation/assets/key.svg";
import {ReactComponent as Question} from "../Navigation/assets/question.svg";
import closeicon from "../Navigation/assets/close_img.png";

const LocationIcon = styled(Location)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const CompanyIcon = styled(Company)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


const InfoIcon = styled(Info)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const LoupeIcon = styled(Loupe)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const HomeIcon = styled(Home)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const RequestIcon = styled(Request)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const UserIcon = styled(User)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


const KeyIcon = styled(Key)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const QuestionIcon = styled(Question)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


const Line = styled.div`
    background: rgba(178, 178, 178, 0.19);
    height: 3px;
    padding: 0 !important;
    margin-top: 12%;
    margin-bottom: 12%;
`;
const TopStatickBlock = styled.div`
   background: #808BE8; 
`;

const Title = styled.p`
    color: #fff;
    margin: 0;
`;

const ToggleIcon = styled.img`
    width: 20px !important;
    height: 20px !important;
    margin-top: 10px;
`;
/*
*
Регистрация
Вход для клиента
Вход для компании

Найти сервис
Найти сервис на карте
Заявка на ремонт

Главная
Контакты
Как это работает?
*
* */

function NotLogNav() {
    return (
        <Menu customCrossIcon={<ToggleIcon src={closeicon}/>}>
            <TopStatickBlock>
                <Title>Wonder Service</Title>
            </TopStatickBlock>
            <NavLink to="/reg" className="menu-item">
                <div>
                    <KeyIcon/>
                    Регистрация
                </div>
            </NavLink>
            <NavLink to="/login" className="menu-item">
                <div>
                   <UserIcon/>
                    Вход для клиента
                </div>
            </NavLink>
            <NavLink to="/login" className="menu-item">
                <div>
                    <CompanyIcon/>
                    Вход для компании
                </div>
            </NavLink>

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
                    <RequestIcon/>
                    Заявка на ремонт
                </div>
            </NavLink>
            <Line/>
            <NavLink to="/" id="contact" className="menu-item">
                <div>
                    <HomeIcon/>
                    Главная
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
                    <InfoIcon/>
                    Как это работает?
                </div>
            </NavLink>
        </Menu>
    )
}

export default NotLogNav