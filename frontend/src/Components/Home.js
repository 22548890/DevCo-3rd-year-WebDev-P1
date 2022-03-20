import React, { PureComponent } from 'react'
import ContractPage from './ContractPage';
import './CSS/Home.css';
import DevJobsTable from './DevJobsTable'
import CheckDev from './Other/CheckDev';
import Modal from './Other/Modal';


function Home() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <>
      <nav id="navbar" class="">
        <div className="nav-wrapper">
          <div className="logo">
            <label >DevCo</label>

          </div>

          <ul id="menu">
            <li>
              <a href="/DevProfile">Profile</a>
            </li>
            <li>
              <button className="styleBtn" onClick={handleLogout} >Logout </button>
            </li>
          </ul>
        </div>

      </nav>
      <CheckDev />

    </>


  )
}

export default Home;