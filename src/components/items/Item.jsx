import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, stock, name, price, description, category }) => {
  return (
    <li class="w-full max-w-sm bg-white py-8 rounded-sm shadow ">
      <div class="flex flex-col items-center">
        <img
          src={image}
          placeholder="blurred"
          alt="item"
          className="h-40 w-40 rounded-full shadow-sm"
        />
        <h5 className="mt-6 font-bold text-2xl text-black ">{name}</h5>
        <span class="flex items-center justify-start pt-4 pb-6 px-8 text-gray-800 text-left  font-light">
          {description}
        </span>
        <div class="flex mt-4 space-x-4 md:mt-4 md:mb-2">
          <Link
            to={`/details/${id}`}
            className="inline-flex items-center px-6 py-2 text-sm text-center tracking-wider font-semibold text-white bg-black rounded-sm hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            I Want It
          </Link>
          <Link
            to={`/details/${id}`}
            className="inline-flex items-center px-8 py-2 text-sm font-bold text-center tracking-widest  text-black   bg-white border border-gray-900 rounded-sm hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Item;
