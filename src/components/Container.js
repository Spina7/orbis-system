import React, {useState, useEffect} from 'react';
import {Factura} from './Factura';
import { useData } from '../hooks/useData';

function Container() {
    
    const {docs: facturas} = useData('facturas');

    return (
        <div>
            {
                facturas.map((factura) => (
                    <Factura key={factura.id} factura={factura} />
                ))
            }
        </div>
    )
}

export default Container
