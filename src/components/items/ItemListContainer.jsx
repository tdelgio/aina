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
    setLoading(true); // Reset loading state when category changes or component mounts
    getProducts
      .then((response) => {
        if (category === undefined) {
          setProducts(response); // Set all products if no category
        } else {
          setProducts(response.filter((i) => category === i.category)); // Filter by category
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false after products are fetched
      });
  }, [category]);

  console.log(products);

  return (
    <div className="py-12 px-12 lg:px-8 w-full bg-black">
      <ul className="flex flex-wrap items-center justify-center gap-14 max-w-7xl mx-auto">
        {loading ? <AnimationSpin /> : <ItemList products={products} />}
      </ul>
    </div>
  );
};

export default ItemListContainer;
