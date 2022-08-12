import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import "./sass/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products/Products";
import ScrollToTheTop from "./components/ScrollToTop";
import SingleProduct from "./pages/Products/SingleProduct";
import { useSelector } from "react-redux";
import Cart from "./pages/Cart/Cart";

function App() {
    const currentItem = useSelector((state:any) => state.shop.currentItem);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTheTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="products" element={<Products />} />
            <Route
              path="/detail/:id"
              element={!currentItem ? <Navigate to="/" /> : <SingleProduct />}
            />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </ScrollToTheTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
