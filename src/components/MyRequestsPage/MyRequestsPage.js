import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import MyRequests from "../MyRequests/MyRequests";

function MyRequestPage() {
    return(
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <MyRequests/>
            <Footer/>
        </React.Fragment>
    )
}

export default MyRequestPage