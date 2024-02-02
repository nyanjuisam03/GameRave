import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Include setCart in the context value
  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setCart, // Include setCart in the context value
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
