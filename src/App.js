import React from 'react';
import './App.css';
import DevReg from './Components/Dev_Registration'
import ComReg from './Components/Com_Registration'
import Login from './Components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={"/login"}>
          <Login/>
        </Route>
        <Route  exact path={"/Dsignup"} >
          <DevReg/>
        </Route>
        <Route  exact path={"/Csignup"} >
          <ComReg/>
        </Route>
      </Switch>
      {/* <Login/> */}
      {/* <DevReg/>  */}
    </Router>
  );
}
export default App;
