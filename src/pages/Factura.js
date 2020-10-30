import React from 'react';
import './Factura.css';
function Factura() {
    return (
        <div className="container">
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
                    
                </div>
            </div>
        </div>
    )
}

export default Factura
