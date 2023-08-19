import React, { useState } from "react";
import { Navigate } from "react-router";
// import { getFirestore } from "../../services/getFirebase";

const Form = ({ clearCart, total, cart }) => {
  const [formData, setFormData] = useState(initialState);
  console.log(cart);

  return (
    <form
      action="https://getform.io/f/6152e63f-968f-4ea9-9d53-dfa86409f281"
      method="POST"
      name="bakery"
      className="bg-black p-8 border border-black w-full max-w-lg rounded-sm"
    >
      <div className="flex flex-col items-start justify-center">
        <input type="hidden" name="form-name" value="bakery" />
        {cart.map((order) => (
          <>
            <input type="hidden" name="name" value={order.quantity} />
            <input type="hidden" name="name" value={order.item.title} />
          </>
        ))}
        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Name:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Phone Number:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="number"
            name="phone"
          />
        </div>
        <div className=" flex flex-col items-start space-y-1 mt-2">
          <label className="font-bold text-gray-100">Message:</label>
          <textarea
            className=" text-sm font-semibold border-2 bg-gray-100 border-black pl-1 rounded-sm w-48 h-24"
            name="message"
          />
        </div>
        <button
          className="bg-black border text-white font-light p-4 mt-4 mb-2 tracking-wide"
          type="submit"
        >
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default Form;

const initialState = {
  name: "",
  phone: "",
  email1: "",
  email2: "",
};
