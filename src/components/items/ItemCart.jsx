import React from "react";

import { useCartContext } from "../../context/CartContext";
import { RemoveIcon } from "../Buttons";

const ItemCart = ({ name, price, url, id, quantity }) => {
  const { removeItem } = useCartContext();
  const handleRemove = () => removeItem(id);

  return (
    <div className="bg-gray-50 flex flex-col justify-between px-2 mx-2  h-full shadow-md rounded-md max-w-md w-full py-4">
      <div className="ml-2 flex flex-row items-center">
        <img
          src={url}
          placeholder="blurred"
          alt="item"
          width={50}
          height={50}
          className=" h-12 w-14 shadow-md rounded-md"
        />
        <div className="flex flex-col items-start justify-center px-4 w-full">
          <h2 className="font-bold text-left text-md lg:text-lg">{name}</h2>
          <p className="tracking-normal ">${price}</p>
        </div>
        <div className="rounded-sm h-12 w-24 mx-2 flex items-center justify-center">
          <span className="font-bold text-2xl whitespace-nowrap">
            x {quantity}
          </span>
        </div>

        <button onClick={handleRemove}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};
export default ItemCart;
