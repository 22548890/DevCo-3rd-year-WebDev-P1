import { useState } from "react";
import React from 'react'

export default function PreviewComProfile() {
    const [data, setData] = useState([]);
    const [onceOff, setOnceOff] = useState(true);

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getMyProfile`, {//get com profile
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
                    </>
                ))
                }
            </span>
        </div>
    )
}
