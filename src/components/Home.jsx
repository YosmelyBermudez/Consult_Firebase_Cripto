import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Tabla from './Tabla';

function Home() {


  const [monedas,setMonedas] = useState([])
  const [buscar, setBuscar] = useState('')

  const ConsumirDatos = async() => {
    const respuesta = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    console.log(respuesta.data)
    setMonedas(respuesta.data)
  }
  useEffect(() => {
    ConsumirDatos()
  },[])
  return (
    <>
    <div className="container">
      <div className='row'>
      <input type='text' placeholder='Buscar moneda' onChange={e => setBuscar(e.target.value)}/>
      <Tabla monedas ={monedas}  buscar={buscar} />
      </div>
    </div>
    </>
  );
}

export default Home;
