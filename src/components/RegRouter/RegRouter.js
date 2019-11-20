import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 200px 30px;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 30px;
    text-align: center;
    margin-top: 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Link = styled(NavLink)`
    font-size: 25px;
    line-height: 30px;
    color: #3249FF;
    margin: 20px;
    border: 2px solid #fff;
    text-decoration: none;
    :hover {
        border-bottom: 2px solid #3249FF;
    }
`;


function RegRouter() {
    return(
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <Wrapper>
                <Title>Вы клиент или сервисный центр?</Title>
                <Row>
                    <Link to={'/registration-customer'}>Я клиент</Link>
                    <Link to={'/registration-company'}>Я представитель сервисного центра</Link>
                </Row>
            </Wrapper>
            <Footer/>
        </React.Fragment>

    )
}

export default RegRouter