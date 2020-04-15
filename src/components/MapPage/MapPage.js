import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import MapComponent from "../Map/MapComponent";
import NewMap from "../Map/NewMap";

// google cloud platform


const MapPage = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <NewMap/>
            {/*<MapComponent/>*/}
            <Footer/>
        </React.Fragment>
    )
};

export default MapPage