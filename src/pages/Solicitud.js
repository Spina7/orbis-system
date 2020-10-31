import React from 'react';
import './Solicitud.css';

function Solicitud() {
    return (
        <div className="container">
            <div className='solicitud'>
            <label>Lugar de Expedición :</label>
                <input id='input__1' type="text" name="expedicion" />
                <label>Fecha de Expedición :</label>
                <input id='input__1' type="date" name="fecha" />
            </div>
            <div className='solicitud'>
            <label>Total Flete :</label>
            <label>Neto :</label>

            </div>
            <div className='solicitud'>
            <label>Acciones</label>
            </div>
            <div className='solicitud__1'>
                <label>Origen : </label>
                <input id='input__2' type="text" name="origen" />
                <label>Remitente : </label>
                <input id='input__2' type="text" name="remitente" />
                <label>RFC Remitente : </label>
                <input id='input__2' type="text" name="rfc-remitente" />
                <label>Domicilio : </label>
                <input id='input__2' type="text" name="domicilio" />
                <label>Se recoge en :</label>
                <input id='input__2' type="text" name="recoge" />
            </div>
            <div className='solicitud__1'>
            <label>Destino :</label>
                <input id='input__2' type="text" name="destino" />
                <label>Destinatario :</label>
                <input id='input__2' type="text" name="destinatario" />
                <label>RFC Destinatario :</label>
                <input id='input__2' type="text" name="rfc-destinatario" />
                <label>Patio Destino :</label>
                <input id='input__2' type="text" name="patio-destino" />
                <label>Se entrega en :</label>
                <input id='input__2' type="text" name="entrega" />
            </div>
            <div className='solicitud__2'>

            </div>
        </div>
        
    )
}

export default Solicitud