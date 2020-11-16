import React, {useState, useEffect} from 'react';
import {Conductor} from './Conductor';
import { useData } from '../hooks/useData';
import * as MdIcons from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Dashboard.css';
import { Modal_Conductor } from './Modal_Conductor';

function Container_Conductores() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
    const classes = useStyles();
    
    const {docs: conductores} = useData('Operadores');

    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const newConductor = {
          Nombre_P: '',
          Unidad_P: '',
          Placas_P: '',
          Estado_P: '',
          Telefono_P: ''
    }

    return (
        <div className='container'>
        <div className='dashboard__5'>
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Unidad</TableCell>
            <TableCell align="left">Placas</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Telefono</TableCell>
            <TableCell align="center">Acciones <button className='add-button' onClick={showModal}>Agregar</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                conductores.map((conductor) => (
                    <Conductor key={conductor.id} conductor={conductor} />
                )).reverse()
            }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        {
        isVisible &&
        <Modal_Conductor conductor={newConductor} mode='create' isVisible={isVisible} hideModal={hideModal} />
      }
        </div>
        
    )
}

export default Container_Conductores
