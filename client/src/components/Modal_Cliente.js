import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Input from '@material-ui/core/Input';

import { projectFirestore as db } from '../firebase/config';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#060b26',
    boxShadow: '5px 5px 10px black',
    border: 'none',
  }
};

export const Modal_Cliente = ({ cliente, mode, isVisible, hideModal }) => {

    const { 
        id,
        Nombre_C,
        Empresa_C,
        RFC_C,
        Domicilio_C,
        Telefono_C
     } = cliente;
  
    const [newNombre_C, setNewNombre_C] = useState(Nombre_C);
    const [newEmpresa_C, setNewEmpresa_C] = useState(Empresa_C);
    const [newRFC_C, setNewRFC_C] = useState(RFC_C);
    const [newDomicilio_C, setNewDomicilio_C] = useState(Domicilio_C);
    const [newTelefono_C, setNewTelefono_C] = useState(Telefono_C);
  
    const [isOpen, setIsOpen] = useState(isVisible);
  
    const closeModal = () => {
      setIsOpen(false);
      hideModal()
    };
  
    const handleNombre_CChange = (e) => setNewNombre_C(e.target.value);
    const handleEmpresa_CChange = (e) => setNewEmpresa_C(e.target.value);
    const handleRFC_CChange = (e) => setNewRFC_C(e.target.value);
    const handleDomicilio_CChange = (e) => setNewDomicilio_C(e.target.value);
    const handleTelefono_CChange = (e) => setNewTelefono_C(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (mode === 'edit') {
        updateQuote();
      } else {
        createQuote();
      }
      closeModal();
    }
  
    const createQuote = async () => {
      try {
        await db.collection('Clientes').add({
          Nombre_C: newNombre_C,
          Empresa_C: newEmpresa_C,
          RFC_C: newRFC_C,
          Domicilio_C: newDomicilio_C,
          Telefono_C: newTelefono_C
        })
      } catch (error) {
        console.error(error);
      }
    }
  
    const updateQuote = async () => {
      try {
        await db.collection('Clientes').doc(id)
          .update({
          Nombre_C: newNombre_C,
          Empresa_C: newEmpresa_C,
          RFC_C: newRFC_C,
          Domicilio_C: newDomicilio_C,
          Telefono_C: newTelefono_C
          })
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <ReactModal isOpen={isOpen} style={customStyles}>
        <form className='modal' onSubmit={handleSubmit}>
          <button className='close-button' onClick={closeModal} >X</button>
          <input type='text' value={newNombre_C} onChange={handleNombre_CChange} placeholder='Nombre' />
          <input type='text' value={newEmpresa_C} onChange={handleEmpresa_CChange} placeholder='Empresa' />
          <input type='text' value={newRFC_C} onChange={handleRFC_CChange} placeholder='RFC' />
          <input type='text' value={newDomicilio_C} onChange={handleDomicilio_CChange} placeholder='Domicilio' />
          <input type='text' value={newTelefono_C} onChange={handleTelefono_CChange} placeholder='Telefono' />
          {
            mode === 'edit' ?
              <button type='submit' className='edit-button'>Actualizar Cliente</button> :
              <button type='submit' className='create-button'>Crear Cliente</button>
          }
        </form>
      </ReactModal>
    )
  }