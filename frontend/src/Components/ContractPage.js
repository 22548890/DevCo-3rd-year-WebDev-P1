import useState from 'react'
import Header from './Other/Header'
import AddContract from './Other/AddContract'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function ContractPage() {
  const [showAddContract, setShowAddContract] = useState(false)
  const [contracts, setContracts] = useState([])

  // extra constant needed
  const [data, setData] = useState();

  //Add Contract
  const addContract = async (contract) => {
    const requestOpt = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          'name':contract.contractName,
          'length':contract.contractLength,
          'value':contract.contractValue,
          'description':contract.contractDes,
          'programming_language':contract.contractLan,
          'location':contract.location,
          'open':contract.open
      }),
    }
    fetch('http://127.0.0.1:5000/createContract', requestOpt)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(error => console.log(error));

    setContracts([...contracts, data])

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
      </div>
      
    </Router>
  )
}

export default ContractPage;
