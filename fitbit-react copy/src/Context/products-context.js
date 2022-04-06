import { createContext, useReducer, useContext, useEffect } from "react";
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

  useEffect(() => {
    // Fetching Data
    (async () => {
      const { data, success, message } = await fetchProducts();
      if (success) {
        dispatch({
          type: "FETCH",
          payload: { products: data },
        });
      } else {
        console.log(message);
        showToast("Could not fetch products", "ERROR");
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
