import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Fila = ({moneda,id,index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
            <img src={moneda.image} alt={moneda.name} style={{width: '3%'}} />
                <span>
                    {moneda.name}
                    </span>
                <span> {moneda.symbol}</span>
                <Button variant="info"><Link to={`/Detalle/${id}`}>Detalle</Link></Button>
                <Button variant="info"><Link to={`/Moneda/editar/${id}`}>Editar</Link></Button>
                
            </td>
            <td>{moneda.price}</td>
            <td>{moneda.volume}</td>
        </tr>
    )
}
export default Fila