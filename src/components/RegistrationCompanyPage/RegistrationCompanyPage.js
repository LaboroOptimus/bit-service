import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import RegistrationCompanyForm from "../RegistrationCompanyForm/RegistrationCompanyForm";


class RegistrationCompanyPage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <RegistrationCompanyForm/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default RegistrationCompanyPage
