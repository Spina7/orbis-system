import React from 'react';
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
import Container from './Container'



function Dashboard() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
  ];
  
    const classes = useStyles();
    return (
        <div className='container'>
        <div className='dashboard'>
            <div className='imagen'>

            </div>
            
            <div className='dashboard__userInfo'>
                <strong>Panel De Administracion</strong>
                <p id='user_info'>Daniel Piña</p>
                <p><MdIcons.MdEmail/> danielpina@orbis.com</p>
            </div>
        </div>
        <div className='dashboard__1'>
            <strong id='strong'>Completados</strong>
            <p id='number'>5</p>

        </div>
        <div className='dashboard__1'>
        <strong id='strong'>Pendientes</strong>
        <p id='number'>5</p>

        </div>
        <div className='dashboard__1'>
        <strong id='strong'>En Camino</strong>
        <p id='number'>5</p>

        </div>
        <div className='dashboard__3'>
        <strong id='strong'>Pendientes</strong>
        

        </div>
        <div className='dashboard__4'>
        <strong id='strong'>Pagos Pendientes</strong>
        <p id='number_2'>$500,000</p>

        </div>
        <div className='dashboard__4'>
        <strong id='strong'>Ventas Del Mes</strong>
        <p id='number_2'>$500,000</p>

        </div>
        <div className='dashboard__4'>
        <strong id='strong'>Porcentaje De Retraso</strong>
        <p id='number'>5%</p>

        </div>
        <div className="slider">
        <Container/>
       </div> 
        </div>
    )
}

export default Dashboard
