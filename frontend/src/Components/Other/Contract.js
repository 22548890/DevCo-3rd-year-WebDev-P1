import { FaAngleDown, FaRegUser, FaAngleUp } from 'react-icons/fa'
import React from 'react';
import '../CSS/ContractR.css';
import Modal from './Modal.js'
import { useState } from 'react'

const Contract = ({ contract}) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className={'contract'}>
      {expand ? (
        <><h3>
          {contract.contract_name}{' '}
          <FaAngleUp style={{ color: 'grey', cursor: 'pointer' }}
            onClick={() => setExpand(false)} />
        </h3>
          <p>Contract Length: {contract.contract_length}</p>
          <p>Contract Value: {contract.contract_value}</p>
          <p>Contract Description: {contract.contract_description}</p>
          <p>Contract Language/s: {contract.contract_language}</p>
          {contract.office ? (<p>Location: office</p>) : (<p>Location: remote</p>)}
          <p>Date Posted: {contract.contractDate}</p>
          {contract.open ? (
            <>
              {contract.contractDev.length > 0 ? 
                 <Modal trigger={<button> Trigger</button>} position="right center">
                   </Modal>
            :
              <FaRegUser style={{ color: 'black', cursor: 'pointer' }}/>}
            </>
          ) : (
            <p>Developer assigned to contract:</p>
          )}
        </>
      ) : (
        <><h3>
          {contract.contractName}{' '}
          <FaAngleDown style={{ color: 'grey', cursor: 'pointer' }}
            onClick={() => setExpand(true)} />
        </h3>
          {contract.open ? (<p>Open</p>) : (<p>Closed</p>)}
        </>
      )}
    </div>
  )
}

export default Contract
