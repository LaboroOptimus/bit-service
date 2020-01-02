import React from 'react'
import Navigation from "../Navigation/Navigation";
import Navtop from "../Navtop/Navtop";
import Footer from "../Footer/Footer";
import Answer from "../Answer/Answer";

function AnswerPage(props) {

    return(
        <React.Fragment>
            <Navigation/>
            <Navtop/>
            <Answer id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
}

export default AnswerPage