import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationSpin from "../AnimationSpin";
import ItemList from "../items/ItemList";
import { getProducts } from "../../utils/promises";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    if (category === undefined) {
      getProducts.then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getProducts.then(
        (response) =>
          setProducts(response.filter((i) => category === i.category)),
        setLoading(false)
      );
    }
  }, [category]);

  console.log(products);

  return (
    <div className="py-14 px-4 lg:px-8 w-full bg-[#d98c3e]">
      <ul className="flex flex-row flex-wrap items-start justify-center gap-14">
        {loading ? <AnimationSpin /> : <ItemList products={products} />}
      </ul>
    </div>
  );
};

export default ItemListContainer;
