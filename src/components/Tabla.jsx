import React, {useState,useEffect} from 'react';
import Fila from './Fila';
import { getAllMonedas } from '../Config/MonedaService';

const titles = ["#", "Coin", "Price","24h Volume"];

const Tabla = ({monedas,buscar}) => {
    const monedasFiltradas = monedas.filter((moneda) => 
        moneda.name.toLowerCase().includes(buscar.toLowerCase()) | moneda.symbol.toLowerCase().includes(buscar.toLowerCase()));
    const [coin,setCoin] = useState([])
    const [search,setSearch] = useState('')
    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const coin = await getAllMonedas(search)
                    console.log("coin",coin)
                    setCoin(coin)
                }catch(e){
                    console.log(e)
                }
                
            }
            result()
        }, [])
    return (
        <table>
           <thead>
                <tr className='titulos'>
                    {titles.map((title,index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead> 
            <tbody>
                {coin.map((moneda,index) => (
                    <Fila moneda={moneda.data()} id={moneda.id} key={index} index={index + 1} />
                ))}
                
            </tbody>
        </table>
    )
}

export default Tabla