import { useState } from 'react'
import React from "react"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from './Button';


export function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date<10?`0${date}`:`${date}`}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

const AddContract = ({ onAdd, showAdd }) => {
    const [contractName, setName] = useState('')
    const [contractLength, setLength] = useState('')
    const [contractValue, setValue] = useState('')
    const [contractDes, setDes] = useState('')
    const [contractLan, setLan] = useState('')
    // const [office, setOffice] = useState(false)
    // const [remote, setRemote] = useState(false)
    const [location, setLocation] = useState('')
    const [expandContract] = useState(false)
    const [open] = useState(true)
    const [contractDate] = useState(getCurrentDate())

    const onSubmit = (e) => {
        e.preventDefault()

        if(!contractLength || !contractName || !contractValue || !contractDes || !contractLan) {
            alert('Please fill all boxes')
            return
        }

        // if ((office && remote) || (!office && !remote)) {
        //     alert('Please select one of either remote or office'+remote+' -office='+office)
        //     return
        // }
        if (location == '') {
            alert('Please select one of either remote or office')
            return
        }

        onAdd({ contractName: contractName,contractLength: contractLength, contractValue: contractValue, contractDes: contractDes, contractLan: contractLan, location:location , expandContract, open, contractDate })
        
        // let location = 'office';
        // if (remote) {
        //     location = 'remote';
        // }
        // Post to Database
        const requestOpt = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'contract_name':contractName,
                'contract_length':contractLength,
                'contract_value':contractValue,
                'contract_description':contractDes,
                'programming_language':contractLan,
                'location':location
            }),
        }
        async function fetchFunc() {
            return await fetch('http://127.0.0.1:5000/createContract', requestOpt)
            .then(response => response.json())
            .catch(error => console.log(error));
        }
        (async () => {
            let info = await fetchFunc();
        })()

        // window.location.pathname = "/";
        
        setName('')
        setLength('')
        setValue('')
        setDes('')
        setLan('')
        // setOffice(false)
        // setRemote(false)
        setLocation('')

    }
  return (
      
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Contract Name</label>
            <input type='text' placeholder='Add contract name' value={contractName} onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Length</label>
            <input type='text' placeholder='Add contract length' value={contractLength} onChange={(e) => setLength(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Value(ZAR)</label>
            <input type='text' placeholder='Add contract value' 
            value={contractValue} onChange={(e) => setValue(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Description</label>
            <input type='text' placeholder='Add contract description' 
            value={contractDes} onChange={(e) => setDes(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Preferred Programming Languages</label>
            <select className="comConSelect" required value={contractLan} onChange={(e) => setLan(e.target.value)}>
            <option value={"None"} hidden >Select preferred language</option>
            <option value={"Java"} >Java</option>
            <option value={"Python"} >Python</option>
            <option value={"C"}> C/C++</option>
            <option value={"Go"} >Go</option>         
        </select>
        </div>
        <label >Location:</label>
        <div className='form-control form-control-check'>
            <label>Office</label>
            <input type='radio' name='location' 
            //checked={office}
            onChange={(e) => setLocation('office') }
            />
            <label>Remote</label>
            <input type='radio' name='location'
            //checked={remote}
            onChange={(e) => setLocation('remote')}
            />
        </div>
            <input type='submit' value='Save contract' 
        className='btn btn-block' />
        
    </form>
  )
}

export default AddContract