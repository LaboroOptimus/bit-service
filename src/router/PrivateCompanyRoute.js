import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {isLogin, isRole} from "../utils/isLogin";

const PrivateCompanyRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page

        <Route {...rest} render={props => (
            isLogin() && isRole() === 'company'?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};


export default connect()(PrivateCompanyRoute);