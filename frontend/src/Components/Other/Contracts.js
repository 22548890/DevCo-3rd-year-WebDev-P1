import Contract from './Contract'


const Contracts = ({ contracts, all, open, closed }) => {

  return (
    <>
      {contracts.map((contract) => (
        all ? (
          <Contract key={contract.id} contract={contract}
          />) : (<p></p>)))
      }
      {contracts.filter(contract => contract.open == true).map((contract) => (
        open ? (
          <Contract key={contract.id} contract={contract}
          />) : (<p></p>)))
      }
      {contracts.filter(contract => contract.open == false).map((contract) => (
        closed ? (
          <Contract key={contract.id} contract={contract}
          />) : (<p></p>)))
      }
    </>
  )
}

export default Contracts
