import React from 'react'
import Footer from "../Footer/Footer";
import Navtop from "../Navtop/Navtop";
import Navigation from "../Navigation/Navigation";
import LoginForm from "../LoginForm/LoginForm";


const LoginPage = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <LoginForm/>
            <Footer/>
        </React.Fragment>
    )
}

export default LoginPage