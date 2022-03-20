import { useState } from "react";
import React from 'react'

export default function ViewProfile() {
    const [data, setData] = useState([]);
    const [onceOff, setOnceOff] = useState(true);

    const handleDelete = () => {
        const requestOpt = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        async function fetchFunc() {
            return await fetch('http://127.0.0.1:5000/devDelete', requestOpt)
                .then(response => response.json())
                .catch(error => console.log(error));
        }
        (async () => {
            let info = await fetchFunc();
        })()
        alert("Deleted Account");
        localStorage.clear();
        window.location.pathname = "/login";

    };

    const handleEdit = (e) => {
        e.preventDefault();
        window.location.pathname = "/EditProfile";
    };

    const handleHome = (e) => {
        e.preventDefault();
        window.location.pathname = "/";
    };

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getMyProfile`, {
            'method': 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.log(error));
        setOnceOff(false);
    }
    return (
        <div className="card">
            <form onSubmit={handleEdit}>
                <h1>Profile Preview</h1>
                <label className="custom-file-upload fas">
                    <div className="img-wrap" >
                        <img for="photo-upload" src={'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'} alt="Upload" />
                    </div>
                </label>
                {data.map((d) => (
                    <>
                        <div className="name">{d.name}</div>
                        <div className="email">{d.email}</div>
                        <div className="scale">JavaScript - {d.scaleC}</div>
                        <div className="scale">Python - {d.scaleGo}</div>
                        <div className="scale">C/C++ - {d.scaleJava}</div>
                        <div className="scale">Go - {d.scalePython}</div>
                        <div className="Money made:">Money made: R{d.money_made}</div>
                    </>
                ))
                }
                <button className="styleBtn edit" type="submit">Edit Details </button>
                <button className="deleteBtn" onClick={handleDelete}>Delete Account </button>
                <button className="btn home" onClick={handleHome} >Back Home</button>
            </form>
        </div>
    )
}



