import React from 'react'
import styled from "styled-components";

const NavPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 40px;
`;

const Phone = styled.h4`
    font-size: 16px;
    margin: 0;
    flex-grow:1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    
`;

const NavBlock = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`;


const Navtop = () => {
    return (
        <NavPanel>
            <Phone>8(800)000-00-00</Phone>
            <NavBlock><a href="/">Вы владелец сервиса?</a></NavBlock>
            <NavBlock><a href="/">Найти сервис на карте</a></NavBlock>
            <NavBlock><a href="/">Войти на сайт</a></NavBlock>
        </NavPanel>
    )
}

export default Navtop