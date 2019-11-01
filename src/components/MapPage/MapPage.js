import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import MapComponent from "../Map/MapComponent";

const MapPage = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <MapComponent/>
            <Footer/>
        </React.Fragment>
    )
}
export default MapPage