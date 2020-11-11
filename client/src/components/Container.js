import React, {useState, useEffect} from 'react';
import {CartaPorte} from './CartaPorte';
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

function Container() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
    const classes = useStyles();
    
    const {docs: cartasporte} = useData('CartaPorte');

    return (
        <div className='dashboard__5'>
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID (Tracking)</TableCell>
            <TableCell align="left">Origen</TableCell>
            <TableCell align="left">Destino</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Fecha</TableCell>
            <TableCell align="left">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                cartasporte.map((cartaporte) => (
                    <CartaPorte key={cartaporte.id} cartaporte={cartaporte} />
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        
    )
}

export default Container
