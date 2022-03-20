import React, { useState } from 'react'
import "./CSS/Table.css"
import moment from 'moment'

function AcceptedContractTable() {

    const [data, setData] = useState([]);
    const [onceOff, setOnceOff] = useState(true)

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getAcceptedContracts`, {
            'method': 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.log(error));
        setOnceOff(false);
    }

    const routeChange = (entry) => {
        alert(entry);

    }

    const handleDevTable = (status) => {
        if (status === "available") {
            localStorage.setItem("DevJobsTable_status", "available");
            window.location.reload();
        }
        else if (status === "pending") {
            localStorage.setItem("DevJobsTable_status", "pending");
            window.location.reload();
        } else {
            localStorage.setItem("DevJobsTable_status", "accepted");
            window.location.reload();
        }
    }

    const routeViewComProfile = (ComName) => {
        alert(ComName);
        localStorage.setItem("ComNameView", ComName);
    }

    return (
        <div className="tbl-container">
            <div>
                <button onClick={() => handleDevTable("available")} className="btn view-av">Available Contracts</button>
                <button onClick={() => handleDevTable("pending")} className="btn view-pen">Pending Contracts</button>
                <button onClick={() => handleDevTable("accepted")} className="btn view-ac">Accepted Contracts</button>
            </div>

            <table id="myTable" className="table table-accept">

                <thead >
                    <tr>
                        <th >Company Name</th>
                        <th >Contract Length</th>
                        <th >Contract Value</th>
                        <th >Contract Description</th>
                        <th >Programming Language</th>
                        <th >Location</th>
                        <th >Date</th>
                        <th> Status </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td title="CLICK TO VIEW PROFILE" className="link" onClick={() => routeViewComProfile(d.company_name)}>{d.company_name}</td>
                            <td>{d.length}</td>
                            <td>{d.value}</td>
                            <td>{d.description}</td>
                            <td>{d.programming_language}</td>
                            <td>{d.location}</td>
                            <td>{moment(d.date).format("MM/DD/YYYY")}</td>
                            <td>Accepted</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AcceptedContractTable;