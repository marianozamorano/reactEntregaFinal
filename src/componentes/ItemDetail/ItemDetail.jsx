import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

//importamos el CarritoContext
import { CarritoContext } from '../context/CarritoContext';

// importamos el hook useContext
import { useContext } from 'react';


const ItemDetail = ({id, nombre, stock, precio,img}) => {
    //Creamos un estado local con la cantidad de productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    //Cambios en la clase 6:

    const {agregarAlCarrito} = useContext(CarritoContext);

    //

    //Creamos una funcion manejadora de la cantidad
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        // console.log("Productos agregados: " + cantidad);
        //Aca voy a crear un objeto con el item y la cantidad:
        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam asperiores quisquam quaerat, omnis quidem accusamus esse? Aut provident excepturi molestiae ut voluptates blanditiis, veritatis quo! Obcaecati ab porro consequatur.</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail