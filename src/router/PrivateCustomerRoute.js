import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {isLogin, isRole} from "../utils/isLogin";

const PrivateCustomerRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page

        <Route {...rest} render={props => (
            isLogin() && isRole() === 'customer'?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};


export default connect()(PrivateCustomerRoute);