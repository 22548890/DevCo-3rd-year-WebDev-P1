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
import DevJobsTable from './Components/DevJobsTable'
import PendingContractTable from './Components/PendingJobsTable';
import AcceptedContractTable from './Components/AcceptedJobsTable';
import ViewProfile from './Components/ViewProfile';
import EditProfile from './Components/Profile';
import Modal from './Components/Other/Modal';

function App() {
  return (
    <Router>
      <div>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/DevReg' component={DevReg} />
          <Route exact path='/ComReg' component={ComReg} />
          <ProtectedRoute exact path='/ViewProfile' component={ViewProfile} />
          <ProtectedRoute exact path='/EditProfile' component={EditProfile} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/contracts' component={ContractPage} />
        </Router>
      </div>
    </Router>
    // <Modal text = {<p>Company</p>}> </Modal>
  );
}

export default App;

