import React, { useState } from 'react';

export const Factura = ({factura}) => {
    const { 
        id,
        LugarDeExpedición,
        FechaDeExpedición
     } = factura;
    return(
        <div>
            <div className='factura'>
                <div className='factura__data'>
                <img src="http://orbislogistics.com.mx/wp-content/uploads/2020/10/LOGO3-266x63.png" className="factura__image"/>
                <div className='factura__1'>
                    <p>ORBIS LOGISTICS SOLUTIONS, S.A. DE C.V.</p>
                    <p>RFC: OLS140228RA6</p>
                    <p>AV. LUDWIG VAN BEETHOVEN No. 5113, INTERIOR 4
                        COL. RESIDENCIAL LA ESTANCIA, ZAPOPAN, JALISCO
                        CP 45030</p>
                    <p>SERVICIO PÚBLICO FEDERAL</p>
                </div>
                <div className='factura__2'>
                <p className='p' >CARTA PORTE</p>
                <strong>LD15</strong>
                <p>IMPORTACIÓN</p>
                </div>
                </div>
                <div className='factura__data'>
                    <div className='factura__3'>
                        <p id='p2'>Lugar de Expedición : </p>
                        <p id='p3'>{LugarDeExpedición}</p>
                    </div>
                    <div className='factura__4'>
                        <p id='p2'>Fecha de Expedición :</p>
                        <p id='p3'>{FechaDeExpedición}</p>
                    </div>
                </div>
                <div className='factura__5'>
                        <p id='p2'>Origen : </p>
                        <p id='p4'>Nuevo Laredo</p>
                    </div>
                    <div className='factura__6'>
                        <p id='p2'>Remitente : </p>
                        <p id='p4'>Orbis Logistics</p>
                    </div>
                    <div className='factura__7'>
                        <p id='p2'>RFC Remitente : </p>
                        <p id='p4'>345546456</p>
                    </div>
                    <div className='factura__8'>
                        <p id='p2'>Domicilio : </p>
                        <p id='p5'>Lopez 588</p>
                        <p id='p4'>Lopez 588</p>
                    </div>
                    <div className='factura__5-2'>
                        <p id='p2'>Destino :</p>
                        <p id='p4'>Villaguay</p>
                    </div>
                    <div className='factura__6-2'>
                        <p id='p2'>Destinatario :</p>
                        <p id='p4'>Pedro Saborido</p>
                    </div>
                    <div className='factura__7-2'>
                        <p id='p2'>RFC Destinatario :</p>
                        <p id='p4'>214232321</p>
                    </div>
                    <div className='factura__8-2'>
                        <p id='p2'>Patio Destino :</p>
                        <p id='p5'>Lopez 588</p>
                        <p id='p4'>Lopez 588</p>
                    </div>
                    <div className='factura__9'>
                        <p id='p2'>Se recoge en : </p>
                        <p id='p5'>Patio</p>
                    </div>
                    <div className='factura__10'>
                        <p id='p2'>Se entrega en : </p>
                        <p id='p5'>Patio</p>
                    </div>
                    <div className='factura__11'>
                        <p id='p2'>Valor Unitario por cuota o fracción: </p>
                        <p id='p4'>Cuota convenida</p>
                    </div>
                    <div className='factura__12'>
                        <p id='p2'>Valor Declarado: </p>
                        <p id='p4'>No declarado</p>
                    </div>
                    <div className='factura__13'>
                        <p id='p2'>Peso Declarado: </p>
                        <p id='p4'>1</p>
                    </div>
                    <div className='factura__data'>
                    <div className='factura__3'>
                        <p id='p2'>Cantidad: </p>
                        <p id='p3'>150</p>
                    </div>
                    <div className='factura__3'>
                        <p id='p2'>Contenido: </p>
                        <p id='p3'>Rollos de papel</p>
                    </div>
                    <div className='factura__4'>
                        <p id='p2'>Peso Declarado:</p>
                        <p id='p3'>1</p>
                    </div>
                </div>

                <div className='factura__14'>
                <p id='p2'>Total Flete:</p>
                        <p id='p5'>$1.00</p>
                </div>
                <div className='factura__15'>
                <p id='p2'>Seguro: </p>
                        <p id='p5'>$0.00</p>
                </div>
                <div className='factura__15'>
                <p id='p2'>Otros: </p>
                        <p id='p5'>$0.00</p>
                </div>
                <div className='factura__15'>
                <p id='p2'>Importe: </p>
                        <p id='p5'>$1.00</p>
                </div>
                <div className='factura__15'>
                <p id='p2'>IVA 16%: </p>
                        <p id='p5'>$0.16</p>
                </div>
                <div className='factura__16'>
                <p id='p2'>Ret. IVA 4%:</p>
                        <p id='p5'>$0.04</p>
                </div>
                <div className='factura__15'>
                <p id='p2'>Neto: </p>
                        <p id='p5'>$1.12</p>
                </div>
                <div className='factura__data'>
                    <div className='factura__4'>
                        <p id='p2'>Cantidad en letras: </p>
                        <p id='p3'>Un Peso 12/100</p>
                    </div>
                </div>
                <h2>DOCUMENTO SIN VALOR FISCAL</h2>
                <span></span>
                <h3>OBSERVACIONES:</h3> 
                <div className='factura__17'>
                <p id='p2'>Contacto: </p>
                    <p id='p5'>Pedro Carlochos</p>
                </div>
                <div className='factura__18'>
                <p id='p2'>Cita (fecha y hora): </p>
                        <p id='p5'>06-2020 11:30</p>
                </div>
                <div className='factura__19'>
                <p id='p2'>Impo/Expo: </p>
                        <p id='p5'>1545</p>
                </div>
                <div className='factura__18'>
                <p id='p2'>Agencia Aduanal:</p>
                        <p id='p5'>4458552</p>
                </div>
                <div className='factura__20'>
                        <p id='p2'>Pedimento: </p>
                        <p id='p5'>45454</p>
                    </div>
                    <div className='factura__21'>
                        <p id='p2'>Referencia: </p>
                        <p id='p5'>3265</p>
                    </div>
                    <div className='factura__data'>
                    <div className='factura__3'>
                        <p id='p2'>Unidad: </p>
                        <p id='p3'>DGFR141</p>
                    </div>
                    <div className='factura__3'>
                        <p id='p2'>Operador: </p>
                        <p id='p3'>Carlos capussotto</p>
                    </div>
                    <div className='factura__4'>
                        <p id='p2'>Placas Tractor: </p>
                        <p id='p3'>TYF444</p>
                    </div>
                </div>
                <div className='factura__20'>
                        <p id='p2'>Pedimento: </p>
                        <p id='p5'>45454</p>
                    </div>
                    <div className='factura__21'>
                        <p id='p2'>Referencia: </p>
                        <p id='p5'>3265</p>
                    </div>
                    <p id='p6'>
                    ESTA MERCANCÍA VIAJA POR CUENTA Y RIESGO DEL DESTINATARIO Y LIBRE DE MANIOBRAS PARA EL OPERADOR.
                    </p>
            </div>
            <div>
            <button>Edit</button>
            <button>Delete</button>
            </div>
            </div>
    )
}