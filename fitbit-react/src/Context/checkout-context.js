import { useContext, createContext, useReducer } from "react";
import { checkoutReducer } from "../Reducers/checkout-reducer";

const initialState = {
  orderId: "",
  totalPrice: 0,
  selectedAddress: {},
  orders: [],
};

const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
  const [checkoutDetails, dispatchCheckout] = useReducer(
    checkoutReducer,
    initialState
  );
  return (
    <CheckoutContext.Provider value={{ checkoutDetails, dispatchCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckout = () => useContext(CheckoutContext);
export { useCheckout, CheckoutProvider };
