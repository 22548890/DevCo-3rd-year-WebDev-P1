import React, { useState } from 'react'
import "./CSS/Table.css"
import ComReg from './Com_Registration'
import { useNavigate } from "react-router-dom";
import Profile from './Profile'
import moment from 'moment'


function DevContractTable() {

    const [data, setData] = useState([]);
    const [order, setOrder] = useState('DSC');
    const [onceOff, setOnceOff] = useState(true);

    if (onceOff) {
        fetch(`http://127.0.0.1:5000/getAvailableContracts/date/DSC`, {
        'method': 'GET',
        headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.log(error));
        setOnceOff(false);
    }

    const sorting = (column) => {
        let search = document.querySelector('input').value;
        if (order === 'ASC') {
            setOrder('DSC');
            if (search != '') {
                fetch(`http://127.0.0.1:5000/searchCompany/${search}/${column}/ASC`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
                })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
            } else {
                fetch(`http://127.0.0.1:5000/getAvailableContracts/${column}/ASC`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
                })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
            }
        }
        if (order === 'DSC') {
            setOrder('ASC');
            if (search != '') {
                fetch(`http://127.0.0.1:5000/searchCompany/${search}/${column}/DSC`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
                })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
            } else {
                fetch(`http://127.0.0.1:5000/getAvailableContracts/${column}/DSC`, {
                'method': 'GET',
                headers: { 'Content-Type': 'application/json' }
                })
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error));
            }
        }
    }

    const routeChange = (entry) => {
        alert(entry);

    }

    const handleChange = () => {
        let search = document.querySelector('input').value;
        if (search === '') {
            search = '@';
        } 
        fetch(`http://127.0.0.1:5000/searchCompany/${search}/date/DSC`, {
        'method': 'GET',
        headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(response => setData(response))
        .catch(error => console.log(error));
    }

    const routeViewComProfile = (ComName) => {
        alert(ComName);
        localStorage.setItem("ComNameView", ComName);
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
                    <input type="text" placeholder="Search..." onChange={() => handleChange()}/>

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