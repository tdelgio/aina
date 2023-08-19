import React, { useContext } from "react";

import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { setCart, addItem } = useCartContext();

  const onAdd = (count) => {
    setCart(count);
    addItem(item, count);
    // console.log(count);
  };

  return (
    <div className="my-8 xl:my-0 max-w-sm xl:max-w-full mx-auto flex items-center w-full bg-white rounded-md shadow">
      <div
        className="flex flex-col xl:p-4 2xl:p-8 xl:flex-row items-center justify-around min-h-full w-full"
        key={item.id}
      >
        <img
          src={item.url}
          placeholder="blurred"
          alt="item"
          className="h-80 w-full xl:w-80 shadow rounded-t-sm"
        />
        <div className="flex flex-col items-center justify-around space-y-4 py-4 px-4 w-full">
          <div className="flex flex-col items-start justify-around space-y-4 py-4 px-4">
            <h2 className="font-bold pt-2 text-2xl">{item.title}</h2>
            <p className="max-w-sm">{item.description}</p>
            <h3 className="font-bold text-lg ">
              {`$`}
              {item.price}
            </h3>
            <ItemCount stock={item.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
