import React, { useContext } from "react";

const CartContext = useContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ item: 1 }}>{children}</CartContext.Provider>
  );
};

export default CartContext;
