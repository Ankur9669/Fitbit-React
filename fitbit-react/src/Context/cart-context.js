import { useContext, useReducer, createContext } from "react";
import { cartReducer } from "../Reducers/cart-reducer";

const CartContext = createContext();
const initialState = [];
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
