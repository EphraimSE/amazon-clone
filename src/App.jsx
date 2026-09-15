import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />}>
              <Route path="/home/username" element={<p>Welcome username!</p>} />
            </Route>

            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
