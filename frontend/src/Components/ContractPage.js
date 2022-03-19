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
  const fetchContracts = async (contract) => {

    const res = await fetch('http://localhost:5000/contracts')
    const data = await res.json()

    return data


    // let data = null
    // const requestOpt = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    // }
    // async function fetchFunc() {
    //     return await fetch('http://127.0.0.1:5000/comGetContracts', requestOpt)
    //     .then(response => response.json())
    //     .catch(error => console.log(error));
    // }
    // (async () => {
    //     data = await fetchFunc();
    // })()

    // return data
  }

  const fetchContract = async (id) => { // FIXME: What id is this???

    const res = await fetch(`http://localhost:5000/contracts/${id}`)
    const data = await res.json()

    return data
    // let data = null
    // const requestOpt = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    // }
    // async function fetchFunc() {
    //     return await fetch(`http://127.0.0.1:5000/getContract/${id}`, requestOpt)
    //     .then(response => response.json())
    //     .catch(error => console.log(error));
    // }
    // (async () => {
    //     data = await fetchFunc();
    // })()

    // return data
  }

  //Add Contract
  const addContract = async (contract) => {
    let data = null
    const requestOpt = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          'contract_name':contract.contract_name,
          'contract_length':contract.contract_length,
          'contract_value':contract.contract_value,
          'contract_description':contract.contract_description,
          'programming_language':contract.programming_language,
          'location':contract.location
      }),
    }
    async function fetchFunc() {
        return await fetch('http://127.0.0.1:5000/createContract', requestOpt)
        .then(response => response.json())
        .catch(error => console.log(error));
    }
    (async () => {
        data = await fetchFunc();
    })()

    setContracts([...contracts, data])
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
        {contracts.length > 0 ? (<Contracts contracts={contracts} all={showAllContracts} open={showOpenContracts} closed={showClosedContracts}
        />) : ('No Contracts to Show')}</>
        ) : (
          <p></p>
        )}
        
      </div>
      
    </Router>
  )
}

export default ContractPage;