import React from "react";
import { Link } from "react-router-dom";

export const AddToCart = ({ handleOnAdd }) => {
  return (
    <button
      onClick={handleOnAdd}
      className="flex items-center justify-center bg-black text-white  max-w-xs w-full shadow-sm"
    >
      <span className="flex space-x-4 p-4 mx-auto bg-black font-semibold tracking-wider text-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 8H12V5H15V3H12V0H10V3H7V5H10V8ZM6 17C4.9 17 4.01 17.9 4.01 19C4.01 20.1 4.9 21 6 21C7.1 21 8 20.1 8 19C8 17.9 7.1 17 6 17ZM16 17C14.9 17 14.01 17.9 14.01 19C14.01 20.1 14.9 21 16 21C17.1 21 18 20.1 18 19C18 17.9 17.1 17 16 17ZM7.1 12H14.55C15.3 12 15.96 11.59 16.3 10.97L20.16 3.96L18.42 3L14.55 10H7.53L3.27 1H0V3H2L5.6 10.59L4.25 13.03C3.52 14.37 4.48 16 6 16H18V14H6L7.1 12Z"
            fill="#F5F5F5"
          />
        </svg>
        <p> Add to Cart</p>
      </span>
    </button>
  );
};

export const RemoveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2"
  >
    <path
      d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#CC5F58"
    />
  </svg>
);

export const FinishButton = () => {
  return (
    <Link
      to="/cart"
      className="flex items-center justify-between border border-black rounded-sm max-w-xs w-full shadow-sm bg-white text-black font-semibold"
    >
      <span className="px-5 p-2 mx-auto">Checkout</span>
    </Link>
  );
};

export const BackHome = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-between rounded-sm max-w-xs w-full shadow-sm bg-black text-gray-50 font-extralight"
    >
      <span className="px-5 p-2 mx-auto">More Products</span>
    </Link>
  );
};

export const ButtonPrimary = ({ to, text }) => (
  <Link
    to={to}
    className="mx auto p-2 flex items-center justify-center border border-black rounded-sm max-w-xs w-full shadow-sm bg-white text-black font-semibold"
  >
    {text}
  </Link>
);

export const ButtonClearCart = ({ clearCart, text }) => (
  <button
    onClick={clearCart}
    className="flex items-center p-2 bg-black-200 font-light tracking-wide border border-black text-black max-w-sm rounded-sm mx-auto"
  >
    {text}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 inline"
    >
      <path
        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
        fill="#111111"
      />
    </svg>
  </button>
);
