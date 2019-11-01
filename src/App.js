import React from 'react';
import styled from 'styled-components'
import  './App.css'
import {font} from './fonts/Raleway-Regular.ttf'
import MainPage from "./components/MainPage/MainPage";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
      <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
      </Switch>
  );
}

export default App;
