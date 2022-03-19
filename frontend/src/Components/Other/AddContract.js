import { useState } from 'react'
import React from "react"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from './Button';

const AddContract = ({ onAdd, showAdd }) => {
    const [contract_name, setName] = useState('')
    const [contract_length, setLength] = useState('')
    const [contract_value, setValue] = useState('')
    const [contract_description, setDes] = useState('')
    const [programming_language, setLan] = useState('')
    const [location, setLocation] = useState('')
    const [open] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!contract_length || !contract_name || !contract_value || !contract_description || !programming_language) {
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

        onAdd({ contract_name: contract_name,contract_length: contract_length, contract_value: contract_value, contract_description: contract_description, programming_language: programming_language, location:location ,  open })
        
        // let location = 'office';
        // if (remote) {
        //     location = 'remote';
        // }

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
            <input type='text' placeholder='Add contract name' value={contract_name} onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Length</label>
            <input type='text' placeholder='Add contract length' value={contract_length} onChange={(e) => setLength(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Value(ZAR)</label>
            <input type='text' placeholder='Add contract value' 
            value={contract_value} onChange={(e) => setValue(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Contract Description</label>
            <input type='text' placeholder='Add contract description' 
            value={contract_description} onChange={(e) => setDes(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Preferred Programming Languages</label>
            <select className="comConSelect" required value={programming_language} onChange={(e) => setLan(e.target.value)}>
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