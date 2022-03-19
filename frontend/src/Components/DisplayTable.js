import React, { useState, useEffect } from 'react'
import JsonData from '../contract.json'
import "./CSS/Table.css"


function DisplayTable() {
  // const [data, setData] = useState([]);
  // const [order, setOrder] = useState('ASC');
  // let JsonData='';
  // const requestOpt = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // }
  // async function fetchFunc() {
  //   return await fetch('http://127.0.0.1:5000/getContracts', requestOpt)
  //     .then(response => response.json())
  //     .catch(error => console.log(error));
  // }
  // (async () => {
  //   JsonData = await fetchFunc();
  //   setData(JsonData);
  // })()
  
  const [data, setData] = useState(JsonData);


  // fetch('http://127.0.0.1:5000/getContracts', {
  //   'method':'GET',
  //   headers: { 'Content-Type': 'application/json' }
  // })
  //   .then(response => response.json())
  //   .then(response => setData(response))
  //   .catch(error => console.log(error));

  const [order, setOrder] = useState('ASC');

  const sorting = (column) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('ASC');
    }
  }

  return (
    <div className="tbl-container">
      <table id="myTable" class="table table-striped">
        <thead>
          <tr>
            <th onClick={() => sorting("contract_name")}>Contract Name</th>
            <th onClick={() => sorting("contract_length")}>Contract Length</th>
            <th onClick={() => sorting("contract_value")}>Contract Value</th>
            <th onClick={() => sorting("description")}>Contract Description</th>
            <th onClick={() => sorting("progamming_language")}>Programming Language</th>
            <th onClick={() => sorting("location")}>Location</th>
            <th onClick={() => sorting("date")}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.contract_name}</td>
              <td>{d.contract_length}</td>
              <td>{d.contract_value}</td>
              <td>{d.description}</td>
              <td>{d.progamming_language}</td>
              <td>{d.location}</td>
              <td>{d.date}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTable;