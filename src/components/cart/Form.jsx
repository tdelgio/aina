import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ clearCart, total, cart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: formData.name,
        phone: formData.phone,
      },
    });

    if (error) {
      console.error(error);
      setError(error.message);
      setIsProcessing(false);
      return;
    }

    // Send paymentMethod.id to your server for payment processing
    console.log(paymentMethod);

    setIsProcessing(false);
    clearCart();
    alert("Payment successful!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-8 border border-black w-full max-w-lg rounded-sm"
    >
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Name:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <label className="font-bold text-gray-100">Phone Number:</label>
          <input
            className="border-2 border-black pl-2 font-semibold rounded-sm"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="bg-black border text-white font-light p-4 mt-4 mb-2 tracking-wide"
        >
          {isProcessing ? "Processing..." : "Submit Order"}
        </button>
      </div>
      <div className="mt-4">
        <label className="font-bold text-gray-100">Card Details:</label>
        <CardElement className="p-2 border bg-gray-100 border-gray-300 rounded-md" />
      </div>
    </form>
  );
};

export default CheckoutForm;
