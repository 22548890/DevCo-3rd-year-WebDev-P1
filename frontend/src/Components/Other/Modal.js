import React from 'react';
import Popup from 'reactjs-popup';
import { FaRegUser } from 'react-icons/fa'
import Developer from './Developer'

const Modal = ({text}) => {
  return (
    <Popup
    trigger={<div className="modal-item"> {text} </div>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Profile</div>
          <div className={'content'}>
            {' '}
            
            <br />

          </div>
        </div>
      )}
    </Popup>
  )
}

export default Modal