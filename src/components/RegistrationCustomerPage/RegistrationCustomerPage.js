import React from 'react'
import RegistrationCustomerForm from "../RegistrationCustomerForm/RegistrationCustomerForm";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";


class RegistrationCustomerPage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <RegistrationCustomerForm/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default RegistrationCustomerPage
