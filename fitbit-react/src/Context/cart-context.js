import { useContext, useReducer, createContext } from "react";
import { cartReducer } from "../Reducers/cart-reducer";

const CartContext = createContext();
const initialState = {
  totalPrice: "",
  cart: [],
};
const CartProvider = ({ children }) => {
  const [{ totalPrice, cart }, dispatch] = useReducer(
    cartReducer,
    initialState
  );
  return (
    <CartContext.Provider value={{ cart, dispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
