import React, { PureComponent } from 'react'

function Home()
{
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = "/login";
    };
    return (
        <nav>
            <h1>Home</h1>
            <button onClick={handleLogout} >Logout </button>
        </nav>
    )
}

export default Home;