import { useState } from 'react'
import React from "react"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from './Button';

const AddContract = ({ onAdd, showAdd }) => {
    const [contractName, setName] = useState('')
    const [contractLength, setLength] = useState('')
    const [contractValue, setValue] = useState('')
    const [contractDes, setDes] = useState('')
    const [contractLan, setLan] = useState('')
    const [location, setLocation] = useState('')
    const [expandContract] = useState(false)
    const [open] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!contractLength || !contractName || !contractValue || !contractDes || !contractLan) {
            alert('Please fill all boxes')
            return
        }

        if (location == '') {
            alert('Please select one of either remote or office')
            return
        }

        onAdd({ contractName: contractName,contractLength: contractLength, contractValue: contractValue, contractDes: contractDes, contractLan: contractLan, location:location , expandContract, open })
        
        setName('')
        setLength('')
        setValue('')
        setDes('')
        setLan('')
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