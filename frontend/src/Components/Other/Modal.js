import React from 'react';
import Popup from 'reactjs-popup';
import { FaRegUser } from 'react-icons/fa'

const Modal = (contract) => {
  
  return (
    <Popup
      trigger={<button className="button"> <FaRegUser style={{ color: 'green', cursor: 'pointer' }} /> </button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Developers interested in this contract </div>
          <div className={`contract `}>
            {' '}

            <br />

          </div>
          <div className="actions">
            <Popup
              
            >
              <span>

              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Modal