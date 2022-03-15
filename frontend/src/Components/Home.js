import React, { PureComponent } from 'react'
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
            <button onClick={handleLogout} >Logout </button>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
            
    
    )
}

export default Home;