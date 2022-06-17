import { useContext, useReducer, createContext } from "react";
import { addressReducer } from "../Reducers/address-reducer";
const initialState = {
  addresses: [],
};
const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [{ addresses }, dispatchAddresses] = useReducer(
    addressReducer,
    initialState
  );
  return (
    <AddressContext.Provider value={{ addresses, dispatchAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddresses = () => useContext(AddressContext);
export { AddressProvider, useAddresses };
