import './Css/BtnCrea.css'

import React, { useState } from "react";
import Form from "@/components/Form";

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onRequestClose} className='cerrar'>X</button>
      </div>
    </div>
  );
};

const BtnCrea = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (

    <div className="A">
      <button onClick={abrirModal} className='modal'>Nueva Creacion</button>

      <Modal isOpen={modalAbierto} onRequestClose={cerrarModal}>
        <Form />
      </Modal>
    </div>
  );
};

export default BtnCrea;
