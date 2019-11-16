import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Request from "../NewRequest/NewRequest";


class NewRequestPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <Request/>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default NewRequestPage