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
import { Modal_Conductor } from './Modal_Conductor';

export const Conductor = ({conductor}) => {
    const { 
        id,
        Nombre_P,
        Unidad_P,
        Placas_P,
        Estado_P,
        Telefono_P
     } = conductor;

     const [isVisible, setIsVisible] = useState(false);

     const showModal = () => setIsVisible(true);
     const hideModal = () => setIsVisible(false);
   
        const deleteConductor = async () => {
         try {
           await db.collection('Operadores').doc(id).delete();
         } catch (error) {
           console.error(error);
         }
       }

    return(
        <>
        <TableRow key={Nombre_P}>
              <TableCell component="th" scope="row">
                  {Nombre_P}
              </TableCell>
              <TableCell align="left">{Unidad_P}</TableCell>
              <TableCell align="left">{Placas_P}</TableCell>
              <TableCell align="left"><p>{Estado_P}</p></TableCell>
              <TableCell align="left">{Telefono_P}</TableCell>
              <TableCell align="center">
                <a href="#"><BsIcons.BsEyeFill/></a>
                <a onClick={showModal}><AiIcons.AiFillEdit/></a>
                <a onClick={deleteConductor}><TiIcons.TiDelete/></a>
              </TableCell>
              </TableRow>
              {
        isVisible &&
        <Modal_Conductor conductor={conductor} mode='edit' isVisible={isVisible} hideModal={hideModal} />
      }
            </>
    )
}