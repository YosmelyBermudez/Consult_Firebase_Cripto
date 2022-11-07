import { useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import {Button,Form} from 'react-bootstrap'
import firebase from '../Config/firebase';
import { useEffect } from "react";
import { deleteMoneda, getByIdMoneda, update } from "../Config/MonedaService";

function MonedaModificar(){
    const {id} = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    useEffect(
        () =>{
            const result = async ()=>{
                try{
                    const respuesta = await getByIdMoneda(id)
                    console.log(respuesta.data())
                    if(respuesta){
                        setValue('name',respuesta.data().name)
                        setValue('price',respuesta.data().price)
                        setValue('symbol',respuesta.data().symbol)
                        setValue('volume',respuesta.data().volume)
                        setValue('image',respuesta.data().image)
                    }
                }catch(e){
                    console.log(e)
                }
            }
            result()
        },
        [id]

    )
    const onSubmit =  async data => {
        console.log(data)
        try{
            const document = await update(id,data)
            console.log(document)
            
        }catch(e){
            console.log(e)
        }
        
    }
    const handleDelete = async () =>{
        try{
            const document = await deleteMoneda(id)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <div>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Nombre"  {...register("name", { required: true })}/>
                    <Form.Text className="text-muted">
                    {errors.name && <span>This field is required</span>} 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Precio"  {...register("price", { required: true })}/>
                    <Form.Text className="text-muted">
                    {errors.price && <span>This field is required</span>} 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Símbolo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Simbolo"  {...register("symbol", { required: true })}/>
                    <Form.Text className="text-muted">
                    {errors.symbol && <span>This field is required</span>} 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Volumen 24hr</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Volumen"  {...register("volume", { required: true })}/>
                    <Form.Text className="text-muted">
                    {errors.volume && <span>This field is required</span>} 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar URL"  {...register("image", { required: true })}/>
                    <Form.Text className="text-muted">
                    {errors.image && <span>This field is required</span>} 
                    </Form.Text>
                </Form.Group>

               
                <Button type='submit' variant="info">Guardar</Button>
    </Form>
        </div>

    )

    }
export default MonedaModificar