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
        </Wrapper>
    </div>
  );
}

export default App;
