import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

class ProfilePage extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Navtop/>
                <Profile/>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default ProfilePage