import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";

import { productInputs, userInputs } from "./formSource";

import "./style/dark.scss";
import "./style/responsive.scss";
import { useContext, useEffect } from "react";

import { Context as ThemeContext } from "./context/themeContext.js";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/apiCalls";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <>
      <main className={darkMode ? "dark" : "main"}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            {admin && (
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="users">
                  <Route index element={<List type={"users"}/>} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={userInputs} title="Yeni Kullanıcı Ekle" />
                    }
                  />
                </Route>
                <Route path="products">
                  <Route
                    index
                    element={<List data={products} type={"products"} />}
                  />
                  <Route path=":productId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={productInputs} title="Yeni Ürün Ekle" />
                    }
                  />
                </Route>
                <Route path="orders">
                  <Route index element={<List />} />
                  <Route path=":orderId" element={<Single />} />
                </Route>
              </Route>
            )}
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
