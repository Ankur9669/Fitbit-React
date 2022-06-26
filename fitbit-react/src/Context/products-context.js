import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { fetchProducts } from "../Util/fetch-products";

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
  const [areProductsLoading, setProductsLoading] = useState(false);
  const [searchProductString, setSearchProductString] = useState("");

  useEffect(() => {
    // Fetching Data
    (async () => {
      setProductsLoading(true);
      const { data, success, message } = await fetchProducts();
      if (success) {
        dispatch({
          type: "FETCH",
          payload: { products: data },
        });
      } else {
        showToast("Could not fetch products", "ERROR");
      }
      setProductsLoading(false);
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        dispatch,
        areProductsLoading,
        searchProductString,
        setSearchProductString,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
