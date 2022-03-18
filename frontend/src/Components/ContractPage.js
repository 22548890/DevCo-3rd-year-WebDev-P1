import { useState, useEffect } from 'react'
import Header from './Other/Header'
import Contracts from './Other/Contracts'
import AddContract from './Other/AddContract'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Other/Menu'


function ContractPage() {
  const [showAddContract, setShowAddContract] = useState(false)
  const [contracts, setContracts] = useState([])
  const [showAllContracts, setShowAllContracts] = useState(true)
  const [showOpenContracts, setShowOpenContracts] = useState(false)
  const [showClosedContracts, setShowClosedContracts] = useState(false)

  useEffect(() => {
    const getContracts = async () => {
      const contractsFromServer = await fetchContracts()
      setContracts(contractsFromServer)
    }

    getContracts()
  }, [])

  //Fetch Contracts
  const fetchContracts = async () => {
    const res = await fetch('http://localhost:5000/contracts')
    const data = await res.json()

    return data
  }

  const fetchContract = async (id) => {
    const res = await fetch(`http://localhost:5000/contracts/${id}`)
    const data = await res.json()

    return data
  }

  //Add Contract
  const addContract = async (contract) => {
    const res = await fetch('http://localhost:5000/contracts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(contract),
    })

    const data = await res.json()

    setContracts([...contracts, data])

  }

  // Delete Contract
  const deleteContract = async (id) => {
    await fetch(`http://localhost:5000/contracts/${id}`, {
      method: 'DELETE',
    })
    setContracts(contracts.filter((contract) => contract.id !== id))
  }

  // Expand Contract
  const expandContract = async (id) => {
    const contractToExpand = await fetchContract(id)
    const updContract = {
      ...contractToExpand,
      expandContract: !contractToExpand.expandContract
    }

    const res = await fetch(`http://localhost:5000/contracts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updContract)
    })

    const data = await res.json()

    setContracts(contracts.map((contract) => contract.id === id ? { ...contract, expandContract: data.expandContract } : contract))
  }

  const showDevelopers = async (id) => {
    const devsToShow = await fetchContract(id)
    const showDev = {
      ...devsToShow,
      showDevs: !devsToShow.showDevs
    }

    const res = await fetch(`http://localhost:5000/contracts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(showDev)
    })

    const data = await res.json()

    setContracts(contracts.map((contract) => contract.id === id ? { ...contract, showDevs: data.showDevs } : contract))
  }

  // Toggle Reminder
  const toggleExpand = async (id) => {
    const contractToToggle = await fetchContract(id)
    const updContract = {
      ...contractToToggle,
      expandContract: !contractToToggle.expandContract
    }

    const res = await fetch(`http://localhost:5000/contracts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updContract)
    })

    const data = await res.json()

    setContracts(contracts.map((contract) => contract.id === id ? { ...contract, expandContract: data.expandContract } : contract))
  }

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddContract(!showAddContract)}
          showAdd={showAddContract}
        />
        {showAddContract && <AddContract onAdd=
          {addContract} showAdd={() => setShowAddContract(!showAddContract)}/>}
        {!showAddContract ? (
          <><h2>Listed Contracts{' '}</h2><Menu
            all={() => { setShowAllContracts(true); setShowOpenContracts(false); setShowClosedContracts(false) } }
            open={() => { setShowAllContracts(false); setShowOpenContracts(true); setShowClosedContracts(false) } }
            closed={() => { setShowAllContracts(false); setShowOpenContracts(false); setShowClosedContracts(true) } }
          >
          </Menu>
        {contracts.length > 0 ? (<Contracts contracts={contracts} onExpand={expandContract} all={showAllContracts} open={showOpenContracts} closed={showClosedContracts}
        />) : ('No Contracts to Show')}</>
        ) : (
          <p></p>
        )}
        
      </div>
      
    </Router>
  )
}

export default ContractPage;