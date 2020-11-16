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
import { Modal_Cliente } from './Modal_Cliente';

export const Cliente = ({cliente}) => {
    const { 
        id,
        Nombre_C,
        Empresa_C,
        RFC_C,
        Domicilio_C,
        Telefono_C
     } = cliente;

     const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

     const deleteCliente = async () => {
      try {
        await db.collection('Clientes').doc(id).delete();
      } catch (error) {
        console.error(error);
      }
    }

    return(
        <>
        <TableRow key={Nombre_C}>
              <TableCell component="th" scope="row">
                  {Nombre_C}
              </TableCell>
              <TableCell align="left">{Empresa_C}</TableCell>
              <TableCell align="left">{RFC_C}</TableCell>
              <TableCell align="left">{Domicilio_C}</TableCell>
              <TableCell align="left">{Telefono_C}</TableCell>
              <TableCell align="center">
                <a href="#"><BsIcons.BsEyeFill/></a>
                <a onClick={showModal}><AiIcons.AiFillEdit/></a>
                <a onClick={deleteCliente}><TiIcons.TiDelete/></a>
              </TableCell>
              </TableRow>
              {
        isVisible &&
        <Modal_Cliente cliente={cliente} mode='edit' isVisible={isVisible} hideModal={hideModal} />
      }
            </>
    )
}