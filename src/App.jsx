import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
