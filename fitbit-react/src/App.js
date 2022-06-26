import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/Wishlist/WishList";
import SignUp from "./Pages/Authentication/Signup/SignUp";
import { Route, Routes } from "react-router-dom";
import MockMan from "mockman-js";
import Login from "./Pages/Authentication/Login/Login";
import Toasts from "./Util/Toasts/Toasts";
import UserPage from "./Pages/UserPage/UserPage";
import Address from "./Pages/Address/Address";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";
import { useEffect } from "react";
import { useUser } from "./Context/user-context";
import { useCart } from "./Context/cart-context";
import { useAddresses } from "./Context/address-context";
import { useWishList } from "./Context/wishlist-context";
import { verifyUser } from "./Util/verifyUser";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  const { dispatchUser } = useUser();
  const { dispatch: dispatchCart } = useCart();
  const { dispatchWishList } = useWishList();
  const { dispatchAddresses } = useAddresses();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token != undefined) {
        const { data, success, message } = await verifyUser();
        if (success) {
          dispatchUser({
            type: "LOGIN",
            payload: { value: data },
          });

          dispatchCart({
            type: "SET_CART",
            payload: {
              value: data.cart,
            },
          });

          dispatchWishList({
            type: "SET_WISHLIST",
            payload: { value: data.wishlist },
          });

          dispatchAddresses({
            type: "SET_ADDRESSES",
            payload: { value: data.addresses },
          });
        }
      }
    })();
  }, []);

  return (
    <div className="App">
      <Toasts />
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        ></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route
          path="addresses"
          element={
            <RequireAuth>
              <Address />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="user"
          element={
            <RequireAuth>
              <UserPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
