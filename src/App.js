import React from 'react';
import './App.css'
import MainPage from "./components/MainPage/MainPage";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationCustomerPage from "./components/RegistrationCustomerPage/RegistrationCustomerPage";
import MapPage from "./components/MapPage/MapPage";
import ForgotpassPage from "./components/ForgotpassPage/ForgotpassPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NewRequestPage from "./components/NewRequestPage/NewRequestPage";
import FindServicePage from "./components/FindServicePage/FindServicePage";
import MyRequestPage from "./components/MyRequestsPage/MyRequestsPage";
import RegistrationCompanyPage from "./components/RegistrationCompanyPage/RegistrationCompanyPage";
import RegRouter from "./components/RegRouter/RegRouter";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/registration-customer' component={RegistrationCustomerPage}/>
            <Route path='/registration-company' component={RegistrationCompanyPage}/>
            <Route path='/map' component={MapPage}/>
            <Route path='/reg' component={RegRouter}/>
            <Route path='/forgot-pass' component={ForgotpassPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/request' component={NewRequestPage}/>
            <Route path='/my-requests' component={MyRequestPage}/>
            <Route path='/find-service' component={FindServicePage}/>
        </Switch>
    );
}

export default App;
