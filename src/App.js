import React from 'react';
import styled from 'styled-components'
import Navigation from "./components/Navigation/Navigation";
import  './App.css'
import {font} from './fonts/Raleway-Regular.ttf'
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navtop from "./components/Navtop/Navtop";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Advantages from "./components/Advantages/Advantages";
import Cta from "./components/Cta/Cta";
import Prices from "./components/Prices/Prices";
import Reviews from "./components/Reviews/Reviews";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-family: ${font};
`;


function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
