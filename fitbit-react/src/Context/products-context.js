import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext();
const initialState = {};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH": {
      return { ...state, products: action.payload.products };
    }
    default:
      return { ...state };
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
