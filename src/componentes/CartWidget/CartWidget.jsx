import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/3144/3144456.png"

    const {cantidadTotal} = useContext(CarritoContext);
    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
            
        </div>
    )
}

export default CartWidget