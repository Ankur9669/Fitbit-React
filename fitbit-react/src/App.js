import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/Wishlist/WishList";
import SignUp from "./Pages/Authentication/Signup/SignUp";
import { Route, Routes } from "react-router-dom";
import MockMan from "mockman-js";
import Login from "./Pages/Authentication/Login/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword/ForgotPassword";
import Toasts from "./Util/Toasts/Toasts";
import UserPage from "./Pages/UserPage/UserPage";
import Address from "./Pages/Address/Address";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Toasts />
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="wishlist" element={<WishList />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="addresses" element={<Address />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="user" element={<UserPage />}></Route>
        <Route path="mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
