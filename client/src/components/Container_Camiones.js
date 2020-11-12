import React, {useState, useEffect} from 'react';
import {Camion} from './Camion';
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

function Container_Camiones() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
    const classes = useStyles();
    
    const {docs: camiones} = useData('Camiones');

    return (
        <div className='container'>
        <div className='dashboard__5'>
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Unidad</TableCell>
            <TableCell align="left">Modelo</TableCell>
            <TableCell align="left">Marca</TableCell>
            <TableCell align="left">Año</TableCell>
            <TableCell align="left">Placas</TableCell>
            <TableCell align="left">Kilometros</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="center">Acciones <button>Agregar</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                camiones.map((camion) => (
                    <Camion key={camion.id} camion={camion} />
                )).reverse()
            }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
        
    )
}

export default Container_Camiones
