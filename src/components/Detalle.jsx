import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getByIdMoneda } from "../Config/MonedaService";

function Detalle() {
    const [monedas,setMonedas] = useState([])
    const { id } = useParams()
    console.log(id)

    const ConsumirDatos = async() => {
    const respuesta = await getByIdMoneda(id)
    console.log(respuesta.data())
    setMonedas(respuesta.data())
    
  }
    
  useEffect (() => {
    ConsumirDatos()
  },[])
    
    return (
       <div>
        <img src={monedas.image} alt={monedas.name} style={{width: '15%'}} />
                <span>
                    {monedas.name}
                    </span>
                    <span> {monedas.symbol}</span>
                    <p> Precio: {monedas.price} USD</p>
                    <button>Comprar</button>
       </div>

    );
}
export default Detalle