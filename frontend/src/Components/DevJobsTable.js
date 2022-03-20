import React, { useState } from 'react'
import "./CSS/Table.css"
import ComReg from './Com_Registration'
import { useNavigate } from "react-router-dom";
import Profile from './Profile'
import moment from 'moment'


function DevContractTable() {

    const [data, setData] = useState([]);
    const [sortby, setSorby] = useState('date');
    const [order, setOrder] = useState('DSC');
    const [onceOff, setOnceOff] = useState(true)

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getContracts/${sortby}/${order}`, {
            'method': 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.log(error));
        setOnceOff(false);
    }

    const sorting = (column) => {
        if (order === 'ASC') {
            setSorby(column);
            setOrder('DSC');
            fetch(`http://127.0.0.1:5000/getContracts/${sortby}/${order}`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
        }
        if (order === 'DSC') {
            setSorby(column);
            setOrder('ASC');
            fetch(`http://127.0.0.1:5000/getContracts/${sortby}/${order}`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
        }
    }

    const routeChange = (entry) => {
        alert(entry);

    }

    const routeViewComProfile = (ComName) => {
        alert(ComName);
        localStorage.setItem("ComNameView", ComName);
        // alert(localStorage.getItem("ComNameView"));
    }

    return (
        <div className="tbl-container">
            <div>
                <button className="btn view-av">Available Contracts</button>
                <button className="btn view-pen">Pending Contracts</button>
                <button className="btn view-ac">Accepted Contracts</button>
            </div>

            <table id="myTable" class="table table-striped">

                <thead >
                    <input type="text" placeholder="Search..." />

                    <tr>
                        <th onClick={() => sorting("company_name")}>Company Name</th>
                        <th onClick={() => sorting("length")}>Contract Length</th>
                        <th onClick={() => sorting("value")}>Contract Value</th>
                        <th >Contract Description</th>
                        <th onClick={() => sorting("programming_language")}>Programming Language</th>
                        <th onClick={() => sorting("location")}>Location</th>
                        <th onClick={() => sorting("date")}>Date</th>
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
                            <td className="link-apply" onClick={() => routeChange("APPLIED - " + d.id)}>APPLY</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DevContractTable;