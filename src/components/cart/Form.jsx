import React, { useState } from "react";

const Form = ({ clearCart, total, cart }) => {
  const [formData, setFormData] = useState(initialState);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here or call an API to submit the form
    console.log(formData);
    // Optionally, clear the cart after the order is submitted
    clearCart();
  };

  return (
    <form
      action="https://getform.io/f/6152e63f-968f-4ea9-9d53-dfa86409f281"
      method="POST"
      name="bakery"
      className="bg-black p-8 border border-black w-full max-w-lg rounded-sm"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-start justify-center">
        <input type="hidden" name="form-name" value="bakery" />

        {/* Mapping through cart and adding order details as hidden inputs */}
        {cart.map((order, index) => (
          <input
            key={index}
            type="hidden"
            name="order[]"
            value={`${order.quantity} x ${order.item.title}`}
          />
        ))}

        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Name:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Phone Number:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-start space-y-1 mt-2">
          <label className="font-bold text-gray-100">Message:</label>
          <textarea
            className="text-sm font-semibold border-2 bg-gray-100 border-black pl-1 rounded-sm w-48 h-24"
            name="message"
            value={formData.message}
            onChange={handleChange}
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
  message: "",
};
