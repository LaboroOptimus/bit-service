import React from 'react';
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import AllRequests from "./AllRequests";

const AllRequestsPage = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <AllRequests/>
            <Footer/>
        </React.Fragment>
    )
}

export default AllRequestsPage