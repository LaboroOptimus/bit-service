import React from 'react';
import './App.css'
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
import RegSuccessPage from "./components/RegSuccessPage/RegSuccessPage";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";



function App() {
    return (
        <BrowserRouter>
        <Switch>
            {/*<Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/registration-customer' component={RegistrationCustomerPage}/>
            <Route path='/registration-company' component={RegistrationCompanyPage}/>
            <Route path='/registration-success' component={RegSuccessPage}/>
            <Route path='/map' component={MapPage}/>
            <Route path='/reg' component={RegRouter}/>
            <Route path='/forgot-pass' component={ForgotpassPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/request' component={NewRequestPage}/>
            <Route path='/my-requests' component={MyRequestPage}/>
            <Route path='/find-service' component={FindServicePage}/>*/}

            <PublicRoute restricted={false} exact path='/' component={MainPage}/>
            <PublicRoute restricted={false} path='/login' component={LoginPage}/>
            <PublicRoute restricted={false} path='/registration-customer' component={RegistrationCustomerPage}/>
            <PublicRoute restricted={false} path='/registration-company' component={RegistrationCompanyPage}/>
            <PublicRoute restricted={false} path='/registration-success' component={RegSuccessPage}/>
            <PublicRoute restricted={false} path='/map' component={MapPage}/>
            <PublicRoute restricted={false} path='/reg' component={RegRouter}/>
            <PublicRoute restricted={false} path='/forgot-pass' component={ForgotpassPage}/>
            <PrivateRoute path='/request' component={NewRequestPage}/>
            <PrivateRoute restricted={false} path='/my-requests' component={MyRequestPage}/>
            <PublicRoute restricted={false} path='/find-service' component={FindServicePage}/>
            <PrivateRoute path='/profile' component={ProfilePage}/>
        </Switch>
        </BrowserRouter>
    );
}

export default App;
