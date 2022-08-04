import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getProductByID from "../helpers/getProductByID";
import { useCartContext } from "../contexts/cartContext";
import { useUserContext } from "../contexts/userContext";

function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { cart, setCart } = useCartContext();
  const { user } = useUserContext();

  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductByID(id);
      setProductInfo(product);
    }

    getProductInfo();
  }, [id]);

  function addToCart() {
    setCart([...cart, productInfo]);

    // console.log(productInfo);

    // function isAuth() {}
  }

  return (
    <>
      <div className="w-full justify-between flex">
        <div className="text-5xl font-bold underline">
          Product: {productInfo?.name}
        </div>
        <Link to="/cart">
          <button className="bg-blue-300 p-10">Cart</button>
        </Link>
      </div>

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
