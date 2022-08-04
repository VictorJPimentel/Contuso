import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";
// import Login from "./Login";
import loginGoogle from "../helpers/loginGoogle";
import { useUserContext } from "../contexts/userContext";
import createCheckoutSession from "../helpers/createCheckoutSession";

function Cart() {
  const { cart } = useCartContext();
  // console.log(cart);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const { user, setUser } = useUserContext();

  // console.log(user.uid);

  function login() {
    loginGoogle();
    setIsLoginModal(false);
    createCheckoutSession(user.uid, cart);
  }

  function isAuth() {
    if (user) {
      createCheckoutSession(user.uid, cart);
      console.log("buy");
    }

    if (!user) {
      setIsLoginModal(true);
    }
  }

  return (
    <div className="w-screen relative h-screen flex flex-col bg-blue-300 ">
      <div
        id="buy-modal"
        className={`absolute top-0 left-0  bg-green-400/10 w-screen h-screen z-30 backdrop-blur-md flex flex-col justify-center items-center ${
          isLoginModal ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-1/5 h-1/3 flex flex-col items-center justify-evenly">
          <button onClick={login}>Sign in with Google</button>
        </div>
      </div>
      Your cart:
      {cart?.map((product) => (
        <p>{product.name}</p>
      ))}
      <button onClick={isAuth}>Buy</button>
      <Link to="/">Back to home</Link>
      <div />
    </div>
  );
}

export default Cart;
