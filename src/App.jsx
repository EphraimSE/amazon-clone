import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* pass user login props */}
        <Header />
        <main>
          <Navbar />
          <Routes>
            {/* Redirect user to home page */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="username" element={<p>Welcome username!</p>} />
            </Route>

            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

//Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
