import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.user.currentUser);

  return (
    <>

      <Router>
        <Announcement />
        <Navbar user={user}/>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={user ? <Navigate to="/" replace={true} /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" replace={true} /> : <Register />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Newsletter />
        <Footer />
      </Router>


    </>



  );
}

export default App;
