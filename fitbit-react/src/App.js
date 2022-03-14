import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Homepage />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
