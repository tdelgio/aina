import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { setCart, addItem } = useCartContext();

  const onAdd = (count) => {
    setCart(count);
    addItem(item, count);
  };

  return (
    <div className="my-8 xl:my-0 max-w-sm xl:max-w-full mx-auto flex items-center w-full bg-white rounded-md shadow-lg font-mono">
      <div
        className="flex flex-col xl:p-6 2xl:p-12 xl:flex-row items-center justify-center min-h-full w-full"
        key={item.id}
      >
        <img
          src={item.url}
          placeholder="blurred"
          alt={item.title}
          className="xl:w-80 xl:h-80 object-cover rounded-lg shadow-md mb-6 xl:mb-0"
        />
        <div className="flex flex-col items-center justify-center space-y-4 py-6 px-8 w-full">
          <h2 className="font-bold text-2xl text-center">{item.title}</h2>
          <p className="text-gray-700 text-center text-lg">
            {item.description}
          </p>
          <h3 className="font-bold text-xl text-center text-black">{`$${item.price}`}</h3>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
