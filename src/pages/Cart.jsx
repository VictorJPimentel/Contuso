import React from "react";
import { useCartContext } from "../contexts/cartContext";

function Cart() {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      Test
      {cart?.map((product) => {
        <p>{product.name}</p>;
      })}
    </>
  );
}

export default Cart;
