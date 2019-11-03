import React from 'react'
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";
import ForgotPass from "../ForgotPass/ForgotPass";

const ForgotpassPage = () => {
    return (
    <React.Fragment>
        <Navigation/>
        <Navtop/>
       <ForgotPass/>
        <Footer/>
    </React.Fragment>
    )
}

export default ForgotpassPage