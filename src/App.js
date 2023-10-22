import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (selectedProduct) => {
    setCart([...cart, selectedProduct]);
  };
  const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item._id !== productId);
        setCart(updatedCart);
      };

  return (
    <div className="App">
      <Router>
        <Routes>
           <Route exact path='/' element={<ProductsList cart={cart} addToCart={addToCart} />}></Route>
        <Route exact path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
