import { useState } from "react";


const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }        
    }
    const restarContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }       
    }

    return (
        <>
            <button onClick={restarContador}> - </button>
            <p> {contador} </p>
            <button onClick={sumarContador}> + </button>

            <button onClick={()=> funcionAgregar(contador)}> Agregar al carrito </button>
        </>
    )
}

export default Contador