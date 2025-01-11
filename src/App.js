import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import ItemListContainer from "./components/items/ItemListContainer";
import Layout from "./components/Layout/Layout";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Cart from "./components/cart/CartWidget";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { DesignSystem } from "./components/Layout/DesignSystem";
// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51Pa4ko2KaxVTzcwYp4ve9sRD215v3r9vqgNDucXA83lS8Flr49ZneHIhSGsH7F777zyoR6b7xF3Cm1lIwSlLlIOU005XmWFG5j"
);

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Layout>
            <div className="block z-0 bg-white">
              <Routes>
                <Route exact path="/" element={[<DesignSystem />]} />

                <Route
                  path="/category/:category"
                  element={<ItemListContainer />}
                />
                <Route path="/details/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </Layout>
        </Elements>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
