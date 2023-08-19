import React from "react";

import Cart from "./components/cart/CartWidget";
import { CartContextProvider } from "./context/CartContext";
import ItemListContainer from "./components/items/ItemListContainer";
import Layout from "./components/Layout/Layout";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <div className="block z-0  bg-black">
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/details/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
