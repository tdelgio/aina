import React from "react";

import { useCartContext } from "../../context/CartContext";
import { BackHome, ButtonClearCart, ButtonPrimary } from "../Buttons";

import ItemCart from "../items/ItemCart";
import Form from "./Form";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
  const total = totalPrice();

  return (
    <div className="bg-white flex flex-col items-center min-h-screen h-full text-center pt-12 space-y-8 px-2">
      {cartWidgetItems() > 0 ? (
        cart.map((i) => (
          <>
            <ItemCart
              key={i.item.id}
              name={i.item.title}
              price={i.item.price}
              url={i.item.url}
              id={i.item.id}
              quantity={i.quantity}
            />
          </>
        ))
      ) : (
        <>
          <p className="font-bold mb-6">The Cart it's empty</p>
          <BackHome />
        </>
      )}
      {cartWidgetItems() > 0 && (
        <div className="max-w-md w-full flex flex-col  space-y-4 items-center ">
          <div className="mb-2 flex justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4 px-2 lg:px-4 text-lg font-bold">
            <p>Total</p>
            <hr className="w-full mt-5 mx-3" />
            <p>${total}</p>
          </div>
          <BackHome />
          <ButtonClearCart clearCart={clearCart} text="Empty Cart" />
          <br className="h-8" />
          <Form cart={cart} total={total} clearCart={clearCart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
