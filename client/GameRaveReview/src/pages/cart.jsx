// Cart.js
import React from 'react';
import { useEffect } from 'react';
import { useCartContext } from './cartcontent';
import Nav from '../components/nav'
import { Link } from 'react-router-dom';


function Cart() {
  const { cart, removeFromCart, clearCart,setCart } = useCartContext();

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  };


  useEffect(() => {
    const savedCart = getCartFromLocalStorage();
    if (savedCart.length > 0) {
      // You may want to update the cart in the context if needed
       setCart(savedCart);
    }
  }, []);

  // Save cart data to local storage when the cart changes
  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);



  return (
    <div>
        <Nav/>
      
      <ul>
        {cart.map((game) => (
          <div key={game.id} className="Games">
            <img   src={game?.background_image} alt="one bedroom" />
           <h2>{game.name}</h2> 
           <h3>Rating: {game.rating}</h3>
           <h3>Total Playtime: {game?.playtime}hrs</h3>
           <button><Link to={'/details/' + game.id}>More Info</Link></button>
            <button onClick={() => removeFromCart(game.id)}>Remove</button>
          </div>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Collection</button>
    </div>
  );
}

export default Cart;
