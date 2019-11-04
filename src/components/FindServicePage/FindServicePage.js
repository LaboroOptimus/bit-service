import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import FindService from "../FindService/FindService";

const FindServicePage = () => {
    return(
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <FindService/>
            <Footer/>
        </React.Fragment>
    )
}
export default FindServicePage