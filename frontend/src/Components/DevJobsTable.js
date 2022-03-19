import React, { useState } from 'react'
import "./CSS/Table.css"

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
    

    return (
        <div className="tbl-container">
            <table id="myTable" class="table table-striped">
                <thead>
                    <tr>
                        <th onClick={() => sorting("name")}>Contract Name</th>
                        <th onClick={() => sorting("length")}>Contract Length</th>
                        <th onClick={() => sorting("value")}>Contract Value</th>
                        <th >Contract Description</th>
                        <th onClick={() => sorting("programming_language")}>Programming Language</th>
                        <th onClick={() => sorting("location")}>Location</th>
                        <th onClick={() => sorting("date")}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.name}</td>
                            <td>{d.length}</td>
                            <td>{d.value}</td>
                            <td>{d.description}</td>
                            <td>{d.programming_language}</td>
                            <td>{d.location}</td>
                            <td>{d.date}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DevContractTable;