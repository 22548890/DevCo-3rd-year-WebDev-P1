import React, { Component } from 'react';
import './App.css';
import DevReg from './Components/Dev_Registration'
import ComReg from './Components/Com_Registration'
import Login from './Components/Login'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/DevReg' component={DevReg} />
          <Route exact path='/ComReg' component={ComReg} />


        </Switch>


      </div>

    </Router>

  );
}





export default App;
