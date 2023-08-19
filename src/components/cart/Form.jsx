import React, { useState } from "react";
// import { getFirestore } from "../../services/getFirebase";

const Form = ({ clearCart, total, cart }) => {
  const [formData, setFormData] = useState(initialState);

  // const db = getFirestore();
  // const orders = db.collection("orders");

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const orderDetail = cart.map((i) => `${i.item.title}: ${i.quantity}`);
  //   const date = new Date();

  //   const newOrder = {
  //     date: date,
  //     buyer: formData,
  //     item: orderDetail,
  //     total: total,
  //   };

  //   orders
  //     .add(newOrder)
  //     .then((response) => alert(`Su ID de compra es: ${response.id} `))
  //     .then(setFormData(initialState))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       clearCart();
  //       console.log(newOrder);
  //     });
  // }
  // Manejos campos del form
  // function handleChange(e) {
  //   setFormData({
  //     ...formData,e
  //     [e.target.name]: e.target.value,
  //   });
  // }
  return (
    <form
      netlify
      name="Contact Form"
      className="bg-black p-8 border border-black w-full max-w-lg rounded-sm"
    >
      <div className="flex flex-col items-start justify-center">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-white">Phone Number:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="number"
            name="phone"
          />
        </div>
        <div className=" flex flex-col items-start space-y-1 mt-2">
          <label className="font-bold text-white">Message:</label>
          <textarea
            className=" text-sm font-semibold border-2 border-black pl-1 rounded-sm w-48 h-24"
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
