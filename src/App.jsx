import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
