import React from 'react';
import './App.css';
import DevReg from './Components/Dev_Registration';
import Login from './Components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={"/login"}>
          <Login/>
        </Route>
        <Route  exact path={"/Dsignup"} component={DevReg}>
          <DevReg/>
        </Route>
      </Switch>
      {/* <Login/> */}
      {/* <DevReg/>  */}
    </Router>
  );
}
export default App;
