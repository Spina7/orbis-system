import React from 'react'
import './Dashboard.css';
import * as MdIcons from "react-icons/md";

function Dashboard() {
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
            <div className='dashboard__8'>
            <p id='p1_dashboard'>Tracking</p>
            <p id='p2_dashboard'>Detalles</p>
            <p id='p2_dashboard'>Estado</p>
            <p id='p2_dashboard'>Fecha</p>
            <p id='p2_dashboard'>Acciones</p>
            </div>
        <div className='dashboard__6'>
        <div className='dashboard__7'>
        <p id='p4'>234234</p>
            <p id='p3'>Sender: Anyád szűz</p>
            <p id='p3'>Recibido</p>
            <p id='p3'>Nov 01, 2020</p>
</div>
<div className='dashboard__7'>

</div>
<div className='dashboard__7'>

</div>
<div className='dashboard__7'>

</div>
        </div>
        </div>
        </div>
    )
}

export default Dashboard
