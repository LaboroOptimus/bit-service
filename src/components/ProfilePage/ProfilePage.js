import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import {connect} from 'react-redux';
import {loadProfile} from "../../redux/user-action-creators";

class ProfilePage extends React.Component{

    componentDidMount() {
        this.props.onLoad();
    }

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

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(loadProfile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)