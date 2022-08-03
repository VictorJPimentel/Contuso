import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductByID from "../helpers/getProductByID";
import { useCartContext } from "../contexts/cartContext";

function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductByID(id);
      setProductInfo(product);
    }

    getProductInfo();
  }, [id]);

  function addToCart() {
    setCart([...cart, productInfo]);

    console.log(productInfo);
  }

  return (
    <>
      <div>Product: {productInfo?.name}</div>

      <br></br>
      <button onClick={addToCart} className="p-4 bg-slate-600">
        {" "}
        Add to cart
      </button>
      <br></br>
      <button className="p-4 bg-slate-400"> Buy now</button>
    </>
  );
}

export default Product;
