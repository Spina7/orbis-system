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
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as TiIcons from "react-icons/ti";

export const Camion = ({camion}) => {
    const { 
        id,
        Unidad,
        Modelo,
        Marca,
        Año,
        Placas,
        Km,
        Estado
     } = camion;
    return(
        <>
        <TableRow key={Unidad}>
              <TableCell component="th" scope="row">
                  {Unidad}
              </TableCell>
              <TableCell align="left">{Modelo}</TableCell>
              <TableCell align="left">{Marca}</TableCell>
              <TableCell align="left">{Año}</TableCell>
              <TableCell align="left">{Placas}</TableCell>
              <TableCell align="left">{Km}</TableCell>
              <TableCell align="left"><p>{Estado}</p></TableCell>
              <TableCell align="center">
                <a href="#"><BsIcons.BsEyeFill/></a>
                <a href="#"><AiIcons.AiFillEdit/></a>
                <a href="#"><TiIcons.TiDelete/></a>
              </TableCell>
              </TableRow>
            </>
    )
}