import { useState } from "react";
import React from 'react'
import "./CSS/DevRegCSS.css"

export default function PreviewComProfile() {
    const [data, setData] = useState([]);
    const [onceOff, setOnceOff] = useState(true);
    const id = localStorage.getItem("ComNameView");

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getCompanyProfile/${id}`, {//get com profile
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
            <span>
                <h1>Profile Preview</h1>
                <label className="custom-file-upload fas">
                    <div className="img-wrap" >
                        <img for="photo-upload" className="img-wrap" src={'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'} alt="Upload" />
                    </div>
                </label>
                {data.map((d) => (
                    <>
                        <div className="name">{d.name}</div>
                        <div className="industry">{d.industry}</div>
                    </>
                ))
                }
            </span>
        </div>
    )
}
