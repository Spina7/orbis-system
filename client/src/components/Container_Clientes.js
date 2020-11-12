import React, {useState, useEffect} from 'react';
import {Cliente} from './Cliente';
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

function Container_Clientes() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
    const classes = useStyles();
    
    const {docs: clientes} = useData('Clientes');

    return (
        <div className='container'>
        <div className='dashboard__5'>
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Empresa</TableCell>
            <TableCell align="left">RFC</TableCell>
            <TableCell align="left">Domicilio</TableCell>
            <TableCell align="left">Telefono</TableCell>
            <TableCell align="center">Acciones <button>Agregar</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                clientes.map((cliente) => (
                    <Cliente key={cliente.id} cliente={cliente} />
                )).reverse()
            }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
        
    )
}

export default Container_Clientes
