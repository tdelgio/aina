import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, stock, name, price, description, category }) => {
  return (
    <li className="max-w-sm bg-gray-50 py-8 rounded-md shadow flex-grow">
      <div className="flex flex-col items-center h-full">
        <img
          src={image}
          alt="item"
          className="h-40 w-40 rounded-full shadow-sm"
        />
        <h5 className="mt-6 font-mono uppercase tracking-widest text-center text-2xl text-black">
          {name}
        </h5>
        {/* Set a fixed height for the description section */}
        <span className="flex-grow min-h-[100px] flex items-center justify-start pt-4 pb-6 px-8 text-gray-800 text-left font-mono">
          {description}
        </span>
        <div className="flex mt-4 space-x-4 md:mt-4 md:mb-2">
          <Link
            to={`/details/${id}`}
            className="inline-flex items-center px-16 py-2 text-sm text-center tracking-wider font-mono text-white bg-black rounded-sm hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            Order
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Item;
