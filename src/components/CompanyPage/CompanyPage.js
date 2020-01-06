import React from "react";
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Company from "./Company";

function CompanyPage() {
    return (
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <Company/>
            <Footer/>
        </React.Fragment>
    )
}

export default CompanyPage