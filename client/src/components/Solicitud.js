import React from 'react';
import './Solicitud.css';
import Button from '@material-ui/core/Button';

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
            <div className='vertical-center'>
            <Button variant="contained" color="primary">Hola Mundo!</Button>
            <button className='boton'onClick={this.createAndDownloadPdf}>Download PDF</button>
            </div>
            <label>Estado : </label>
                <input id='input__1' type="text" name="origen" />
            </div>
            <div className='solicitud__1'>
                <label>Origen : </label>
                <input id='input__2' type="text" name="origen" />
                <label>Remitente : </label>
                <input id='input__2' type="text" name="remitente" />
                <label>RFC Remitente : </label>
                <input id='input__2' type="text" name="rfc-remitente" />
                <label>Domicilio : </label>
                <input id='input__2' type="text" name="domicilio" maxLength={23} />
                <label>#2 Domicilio : </label>
                <input id='input__2' type="text" name="domicilio" maxLength={33} />
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
                <label>Patio Destino : </label>
                <input id='input__2' type="text" name="domicilio" maxLength={23} />
                <label>#2 Patio Destino : </label>
                <input id='input__2' type="text" name="domicilio" maxLength={33} />
                <label>Se entrega en :</label>
                <input id='input__2' type="text" name="entrega" />
            </div>
            <div className='solicitud__2'>
            <label id='label__1'>Valor Unitario por cuota o fracción: </label>
                <input id='input__3' type="text" name="entrega" />
                <label id='label__1'>Valor Declarado: </label>
                <input id='input__3' type="text" name="entrega" />
                <label id='label__1'>Peso Declarado: </label>
                <input id='input__4' type="text" name="entrega" />
            </div>
            <div className='solicitud__2'>
            <label id='label__1'>Cantidad: </label>
                <input id='input__5' type="text" name="entrega" />
                <label id='label__1'>Contenido: </label>
                <input id='input__5' type="text" name="entrega" />
                <label id='label__1'>Peso Declarado: </label>
                <input id='input__5' type="text" name="entrega" />
            </div>
            <div className='solicitud__3'>
            <label id='label__1'>Total Flete: </label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>Seguro: </label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>Otros: </label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>IVA 16%: </label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>Ret. IVA 4%:</label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>Neto: </label>
                <input id='input__6' type="text" name="entrega" />
                <label id='label__1'>Cantidad en letras: </label>
                <input id='input__7' type="text" name="entrega" />
            </div>
            <div className='solicitud__4'>
                <h2>Observaciones: </h2>
            <label id='label__1'>Contacto: </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Cita (fecha y hora): </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Impo/Expo: </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Agencia Aduanal: </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Pedimento: </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Referencia: </label>
                <input id='input__8' type="text" name="entrega" />
                <label id='label__1'>Unidad: </label>
                <input id='input__9' type="text" name="entrega" />
                <label id='label__1'>Operador: </label>
                <input id='input__9' type="text" name="entrega" />
                <label id='label__1'>Placas Tractor: </label>
                <input id='input__9' type="text" name="entrega" />
                <label id='label__1'>Pedimento: </label>
                <input id='input__10' type="text" name="entrega" />
                <label id='label__1'>Referencia:</label>
                <input id='input__10' type="text" name="entrega" />
            </div>
        </div>
        
    )
}

export default Solicitud