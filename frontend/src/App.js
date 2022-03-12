import React, { Component } from 'react';
import './App.css';
import DevReg from './Components/Dev_Registration'
import ComReg from './Components/Com_Registration'
import Login from './Components/Login'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Router>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/DevReg' component={DevReg} />
          <ProtectedRoute exact path='/ComReg' component={ComReg} />
          <ProtectedRoute exact path='/' component={Home} />
        </Router>
      </div>
    </Router>
  );
}

export default App;

