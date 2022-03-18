import React, { PureComponent } from 'react'
import ContractPage from './ContractPage';
import './CSS/Home.css';


function Home()
{
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = "/login";
    };
    return (
        <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
          <label >DevCo</label>
          
          </div>

          <ul id="menu">
            <li>
              <a href="#my-contracts">My Contracts</a>
            </li>
            <li>
              <a href="/DevProfile">Profile</a>
            </li>
            <li>
            <button className="styleBtn" onClick={handleLogout} >Logout </button>
            </li>
          </ul>
        </div>
        
      </nav>


        <ContractPage/>
      
      
    </>
            
    
    )
}

export default Home;