import React, { useState } from 'react';
import { projectFirestore as db } from '../firebase/config';
import './Dashboard.css';
import * as MdIcons from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export const CartaPorte = ({cartaporte}) => {
    const { 
        id,
        Tracking,
        Origen,
        Destino,
        Estado,
        FechaExp
     } = cartaporte;
    return(
        <>
        <TableRow key={Tracking}>
              <TableCell component="th" scope="row">
                  {Tracking}
              </TableCell>
              <TableCell align="left">{Origen}</TableCell>
              <TableCell align="left">{Destino}</TableCell>
              <TableCell align="left">{Estado}</TableCell>
              <TableCell align="left">{FechaExp}</TableCell>
              <TableCell align="left"><button>editar</button></TableCell>
              </TableRow>
            </>
    )
}