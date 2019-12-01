import React, {Component} from 'react'
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import user from '../Navtop/assets/user.png';
import {connect} from "react-redux";
import {ReactComponent as Notif} from "./assets/notification.svg";
import {ReactComponent as Exit} from "./assets/logout.svg";
import {ReactComponent as User} from "../Navigation/assets/user.svg";
import {ReactComponent as Key} from "../Navigation/assets/key.svg";
import {exit} from "../../redux/action-creators";
import {loadProfile} from "../../redux/user-action-creators";
import {isLogin} from "../../utils/isLogin";

const NavPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: #fff;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(201, 200, 200, 0.15)
`;

const NotifIcon = styled(Notif)`
    width: 20px;
    fill: #AAAAAA;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
`;

const Phone = styled.h4`
    font-size: 15px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
    margin-left: 60px; 
`;

const NavBlock = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 30px;
`;

const Icon = styled.div`
   position: relative;
   margin-top: 6px;
   margin-right: 40px;
   
`;

const IconCount = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    color: #fff;
    background-color: #536EFD;
    border-radius: 50%;
    font-size: 10px;
    text-align: center;
    position: absolute;
    right: 3px;
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
`;
const Profile = styled.div`
    display: flex;
    flex-direction: row;  
    margin-right: 20px;
    margin-top: 3px;
`;

const Greet = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    margin-top: 10px;
    margin-right: 10px;
`;

const ExitContainer = styled(NavLink)`
    margin-top: 7px;
    text-decoration: none;
    color: #000;
`;

const ExitIcon = styled(Exit)`
    width: 20px;
    fill: #536EFD;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 3px;
    margin-right: 0;
`;

const ExitText = styled.span`
    margin: 0 0 0 3px;
    color: #536EFD;
    font-size: 18px; 
    
    :hover {
    border-bottom: 1px solid #536EFD;
    }
    
`;

const IconContainer = styled(NavLink)`
    margin-right: 10px;
`;

const LinksContainer = styled(NavLink)`
    margin-right: 10px;
    text-decoration: none;
    color: #536EFD;
    font-size: 18px;
`;

const LinkText = styled.span`
    border-bottom: 1px solid transparent;
    
    :hover {
        border-bottom: 1px solid #536EFD;
    }
`;

const UserIcon = styled(User)`
    width: 14px;
    fill: #536EFD;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 5px;
    margin-right: 3px;
`;

const KeyIcon = styled(Key)`
    width: 14px;
    fill: #536EFD;
    margin-right: 10px;
    vertical-align: top;
    margin-top: 5px;
    margin-right: 1px;
`;

class Navtop extends Component {

    componentDidMount() {
        this.props.onLoadProfile();
    }

    render() {
        return (
            <NavPanel>
                <Phone>Меню</Phone>
                {isLogin() ? (
                        <Profile>
                            {!this.props.isLoad ? null :
                                (<React.Fragment>
                                    <NavLink to={'/profile'}><UserImg src={user}/></NavLink>
                                    <Greet>Привет, {this.props.name.split(' ')[0]}</Greet>
                                    <IconContainer to={'/'}>
                                        <Icon>
                                            <IconCount>2</IconCount>
                                            <NotifIcon/>
                                        </Icon>
                                    </IconContainer>
                                </React.Fragment>)}
                            <ExitContainer to={'/'}>
                                <ExitIcon/>
                                <ExitText onClick={this.props.onExit}>Выйти</ExitText>
                            </ExitContainer>
                        </Profile>
                    ) :
                    (
                        <NavBlock>
                            <LinksContainer to="/reg">
                                <KeyIcon/>
                                <LinkText>Регистрация</LinkText>
                            </LinksContainer>

                            <LinksContainer to="/login">
                                <UserIcon/>
                                <LinkText>Вход</LinkText>
                            </LinksContainer>
                        </NavBlock>

                    )}
            </NavPanel>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.profile.userName,
        isLoad: state.profile.isLoad,
    }
};

const mapDispatchToProps = dispatch => ({
    onExit: () => dispatch(exit()),
    onLoadProfile: () => dispatch(loadProfile())
});


export default connect(mapStateToProps, mapDispatchToProps)(Navtop)