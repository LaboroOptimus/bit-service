import React from 'react';
import  './App.css'
import {font} from './fonts/Raleway-Regular.ttf'
import MainPage from "./components/MainPage/MainPage";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import MapPage from "./components/MapPage/MapPage";

function App() {
  return (
      <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/registration' component={RegistrationPage}/>
            <Route path='/map' component={MapPage}/>
      </Switch>
  );
}

export default App;
