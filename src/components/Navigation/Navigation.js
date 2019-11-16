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
import {ReactComponent as Settings} from "./assets/settings.svg";
import {ReactComponent as Key} from "./assets/key.svg";
import {ReactComponent as Question} from "./assets/question.svg";
import {ReactComponent as Exit} from "./assets/exit.svg";
import {ReactComponent as Request} from "./assets/file.svg";


const TopStatickBlock = styled.div`
   background: #808BE8; 
`;


const Line = styled.div`
    background: rgba(178, 178, 178, 0.19);
    height: 3px;
    padding: 0 !important;
    margin-top: 12%;
    margin-bottom: 12%;
`;

const Title = styled.p`
    color: #fff;
    margin: 0;
`;

const LocationIcon = styled(Location)`
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

const RequestIcon = styled(Request)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


const ServiceIcon = styled(Service)`
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

const MessageIcon = styled(Message)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


const SettingsIcon = styled(Settings)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const ToggleIcon = styled.img`
    width: 20px !important;
    height: 20px !important;
    margin-top: 10px;
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

const ExitIcon = styled(Exit)`
    width: 20px;
    fill: #b2b2b2;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;


class Navigation extends React.Component {
    state = {}

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>

                <Menu customCrossIcon={<ToggleIcon src={closeicon}/>}>
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
                    {/*<NavLink to="/login" onClick={this.showSettings} className="menu-item">
                        <div>
                            <SettingsIcon/>
                            Настройки
                        </div>
                    </NavLink>*/}

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
                </Menu>
            </React.Fragment>
        )
    }
}

export default Navigation