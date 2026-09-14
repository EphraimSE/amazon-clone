import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
