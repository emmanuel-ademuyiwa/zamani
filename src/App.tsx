import React from 'react';
import Homepage from "./pages/Homepage/Homepage";
import "./sass/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products"
import ScrollToTheTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTheTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </ScrollToTheTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
