import React from 'react';
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Main from "../Main/Main";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import Advantages from "../Advantages/Advantages";
import Cta from "../Cta/Cta";
import Prices from "../Prices/Prices";
import Reviews from "../Reviews/Reviews";
import News from "../News/News";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const MainPage = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Wrapper>
            <Navtop/>
            <Main/>
            <HowItWorks/>
            <Services/>
            <Advantages/>
            <Cta/>
            <Prices/>
            <Reviews/>
            <News/>
            <Footer/>
            </Wrapper>
        </React.Fragment>
    )
}

export default MainPage