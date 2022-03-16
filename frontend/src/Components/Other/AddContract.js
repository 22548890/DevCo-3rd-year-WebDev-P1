import { useState } from 'react'
import React from "react"


export function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date<10?`0${date}`:`${date}`}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

const AddContract = ({ onAdd }) => {
    const [contractName, setName] = useState('')
    const [contractLength, setLength] = useState('')
    const [contractValue, setValue] = useState('')
    const [contractDes, setDes] = useState('')
    const [contractLan, setLan] = useState('')
    const [office, setOffice] = useState(false)
    const [remote, setRemote] = useState(false)
    const [expandContract] = useState(false)
    const [open] = useState(true)
    const [contractDate] = useState(getCurrentDate())

    const onSubmit = (e) => {
        e.preventDefault()

        if(!contractLength || !contractName || !contractValue || !contractDes || !contractLan) {
            alert('Please fill all boxes')
            return
        }

        if ((office && remote) || (!office && !remote)) {
            alert('Please select one of either remote or office')
            return
        }

        onAdd({ contractName: contractName,contractLength: contractLength, contractValue: contractValue, contractDes: contractDes, contractLan: contractLan, office, remote , expandContract, open, contractDate })

        setName('')
        setLength('')
        setValue('')
        setDes('')
        setLan('')
        setOffice(false)
        setRemote(false)

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
            <input type='text' placeholder='List preferred programming languages' 
            value={contractLan} onChange={(e) => setLan(e.target.value)}
            />
        </div>
        <label >Location:</label>
        <div className='form-control form-control-check'>
            <label>Office</label>
            <input type='checkbox' 
            checked={office}
            value={office} onChange={(e) => setOffice(e.currentTarget.checked)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Remote</label>
            <input type='checkbox' 
            checked={remote}
            value={remote} onChange={(e) => setRemote(e.currentTarget.checked)}
            />
        </div>
        <input type='submit' value='Save contract' 
        className='btn btn-block' />
    </form>
  )
}

export default AddContract