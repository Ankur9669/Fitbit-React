import { useContext, createContext, useReducer } from "react";
import { productReducer } from "../Reducers/products-reducer";
import { products } from "../Temp/products";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products1, dispatch] = useReducer(productReducer, products);
  return (
    <ProductContext.Provider value={{ products: products1, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
