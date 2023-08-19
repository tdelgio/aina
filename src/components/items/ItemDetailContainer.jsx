import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProducts } from "../../utils/promises";
import ItemDetail from "./ItemDetail";
import AnimationSpin from "../AnimationSpin";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProducts.then((response) => {
      setItem(response.find((i) => parseInt(id) === i.id));
      setLoading(false);
    });
  }, [id]);

  console.log(item);

  return (
    <div className="py-4 xl:py-14 px-4 lg:px-8  lg:h-1/2 lg:w-1/2 mx-auto">
      {loading ? <AnimationSpin /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
