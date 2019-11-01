import React from 'react'
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";


class RegistrationPage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <RegistrationForm/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default RegistrationPage
