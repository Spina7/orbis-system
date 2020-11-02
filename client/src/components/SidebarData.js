import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Panel',
        path: '/',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Nuevo Embarque',
        path: '/embarque',
        icon: <AiIcons.AiFillFileAdd/>,
        cName: 'nav-text'
    },
    {
        title: 'Carta Porte',
        path: '/factura',
        icon: <FaIcons.FaFileInvoice/>,
        cName: 'nav-text'
    },
    {
        title: 'Camiones',
        path: '/camiones',
        icon: <FaIcons.FaTrailer/>,
        cName: 'nav-text'
    },
    {
        title: 'Conductores',
        path: '/conductores',
        icon: <BsIcons.BsFillPeopleFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <FaIcons.FaAddressBook/>,
        cName: 'nav-text'
    },
];