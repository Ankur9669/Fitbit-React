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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="wishlist" element={<WishList />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
