import React from 'react';
import reactDom from 'react-dom';
import './Modal.css';
 
// import ReactDOM from 'react-dom';

function Modal({ children }) {
    return reactDom.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }