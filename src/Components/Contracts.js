import Contract from './Contract'


const Contracts = ({ contracts, onExpand, onDevs, all, open, closed }) => {
  return (
    <>
      {contracts.map((contract) => (
        all ? (
          <Contract key={contract.id} contract={contract}
            onExpand={onExpand}
            onDevs={onDevs}
          />) : (
          open ? (
            <Contract key={contract.id} contract={contract}
              onExpand={onExpand}
              onDevs={onDevs} />
          ) : (
            closed ? (
              <Contract key={contract.id} contract={contract}
                onExpand={onExpand}
                onDevs={onDevs} />
            ) : (
              <p>No contracts to show</p>
            )
          )
        )
      ))}
    </>
  )
}

export default Contracts