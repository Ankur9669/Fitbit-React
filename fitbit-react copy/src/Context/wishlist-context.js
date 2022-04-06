import { useContext, useReducer, createContext } from "react";
import { wishListReducer } from "../Reducers/wishlist-reducer";

const WishListContext = createContext();
const initialState = [];

const WishListProvider = ({ children }) => {
  const [wishlist, dispatchWishList] = useReducer(
    wishListReducer,
    initialState
  );

  return (
    <WishListContext.Provider value={{ wishlist, dispatchWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
const useWishList = () => useContext(WishListContext);
export { WishListProvider, useWishList };
