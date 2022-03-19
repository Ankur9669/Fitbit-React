import { createContext, useReducer, useContext, useEffect } from "react";
import Axios from "axios";

const ProductContext = createContext();
const initialState = {};
const reducer = async (state, action) => {
  switch (action.type) {
    case "FETCH": {
      //   console.log(action.payload);
      return { ...state, products: action.payload.products };
    }
    default:
      return { ...state };
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
