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

export const Modal_Conductor = ({ conductor, mode, isVisible, hideModal }) => {

    const { 
        id,
        Nombre_P,
        Unidad_P,
        Placas_P,
        Estado_P,
        Telefono_P
     } = conductor;
  
    const [newNombre_P, setNewNombre_P] = useState(Nombre_P);
    const [newUnidad_P, setNewUnidad_P] = useState(Unidad_P);
    const [newPlacas_P, setNewPlacas_P] = useState(Placas_P);
    const [newEstado_P, setNewEstado_P] = useState(Estado_P);
    const [newTelefono_P, setNewTelefono_P] = useState(Telefono_P);
  
    const [isOpen, setIsOpen] = useState(isVisible);
  
    const closeModal = () => {
      setIsOpen(false);
      hideModal()
    };
  
    const handleNombre_PChange = (e) => setNewNombre_P(e.target.value);
    const handleUnidad_PChange = (e) => setNewUnidad_P(e.target.value);
    const handlePlacas_PChange = (e) => setNewPlacas_P(e.target.value);
    const handleEstado_PChange = (e) => setNewEstado_P(e.target.value);
    const handleTelefono_PChange = (e) => setNewTelefono_P(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (mode === 'edit') {
        updateConductor();
      } else {
        createConductor();
      }
      closeModal();
    }
  
    const createConductor = async () => {
      try {
        await db.collection('Operadores').add({
          Nombre_P: newNombre_P,
          Unidad_P: newUnidad_P,
          Placas_P: newPlacas_P,
          Estado_P: newEstado_P,
          Telefono_P: newTelefono_P
        })
      } catch (error) {
        console.error(error);
      }
    }
  
    const updateConductor = async () => {
      try {
        await db.collection('Operadores').doc(id)
          .update({
            Nombre_P: newNombre_P,
            Unidad_P: newUnidad_P,
            Placas_P: newPlacas_P,
            Estado_P: newEstado_P,
            Telefono_P: newTelefono_P
          })
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <ReactModal isOpen={isOpen} style={customStyles}>
        <form className='modal' onSubmit={handleSubmit}>
          <button className='close-button' onClick={closeModal} >X</button>
          <input type='text' value={newNombre_P} onChange={handleNombre_PChange} placeholder='Nombre' />
          <input type='text' value={newUnidad_P} onChange={handleUnidad_PChange} placeholder='Unidad' />
          <input type='text' value={newPlacas_P} onChange={handlePlacas_PChange} placeholder='Placas' />
          <input type='text' value={newEstado_P} onChange={handleEstado_PChange} placeholder='Estado' />
          <input type='text' value={newTelefono_P} onChange={handleTelefono_PChange} placeholder='Telefono' />
          {
            mode === 'edit' ?
              <button type='submit' className='edit-button'>Actualizar Conductor</button> :
              <button type='submit' className='create-button'>Crear Conductor</button>
          }
        </form>
      </ReactModal>
    )
  }