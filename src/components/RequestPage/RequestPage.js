import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Request from "../Request/Request";

function RequestPage(props) {

    return(
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <Request id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
}

export default RequestPage