import React, { Component } from 'react';
import './App.css';
import DevReg from './Components/Dev_Registration'
import ComReg from './Components/Com_Registration'
import Login from './Components/Login'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import DevProfile from './Components/Profile';
import ContractPage from './Components/ContractPage';
import './Components/CSS/LoginCSS.css';

function App() {
  return (
    <Router>
      <div>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/DevReg' component={DevReg} />
          <Route exact path='/ComReg' component={ComReg} />
          <ProtectedRoute exact path='/DevProfile' component={DevProfile} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/contracts' component={ContractPage} />
        </Router>
      </div>
    </Router>
    
  );
}

export default App;

