import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
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