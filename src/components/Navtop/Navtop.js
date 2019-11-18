import React from 'react'
import styled from "styled-components";
import {NavLink} from 'react-router-dom'

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

const Link = styled(NavLink)`
    margin-right: 5px;

`


const Navtop = () => {
    return (
        <NavPanel>
            <Phone>Меню</Phone>
            <NavBlock><Link to="/reg">Регистрация</Link>
                <Link to="/login">Вход</Link>
            </NavBlock>
           {/* <NavBlock><NavLink to="/login">Вход</NavLink></NavBlock>*/}
        </NavPanel>
    )
}

export default Navtop