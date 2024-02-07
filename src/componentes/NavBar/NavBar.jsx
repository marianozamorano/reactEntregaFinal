import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';



const NavBar = () => {

    return (
        <header>
            <Link to="/">
                <img className='imgLogo' src = "https://img.freepik.com/vector-premium/logotipo-tienda-digital-o-logotipo-productos-electronicos-o-logotipo-comercio-electronico_372882-55.jpg?w=826" alt="Logo Digital Store" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="categoria/2">Notebook</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/3">Celulares</NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/4">Teclado y Mouse</NavLink>
                    </li>
                    
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar