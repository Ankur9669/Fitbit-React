import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/Wishlist/WishList";
import { Route, Routes } from "react-router-dom";
import MockMan from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Homepage />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="wishlist" element={<WishList />}></Route>
        <Route path="mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
