import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import { CarritoProvider } from './componentes/context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>} />
          <Route path="/item/:idItem" element = {<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="*" element={<h2> Sitio en Construcción </h2>} />

        </Routes>
        </CarritoProvider>
      </BrowserRouter>

      
    </div>
  )
}

export default App