import { useContext, usecart, createContext } from "react";
import { cartReducer } from "../Reducers/cart-reducer";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ cartReducer }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
