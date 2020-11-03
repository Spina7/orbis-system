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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
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
        <div className='dashboard__5'>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        
        </div>
    )
}

export default Dashboard
