import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";
// import Login from "./Login";
import loginGoogle from "../helpers/loginGoogle";
import { useUserContext } from "../contexts/userContext";
import createCheckoutSession from "../helpers/createCheckoutSession";

function Cart() {
  const { cart } = useCartContext();
  console.log(cart);

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
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-full">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart?.map((product) => (
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-full">
                {" "}
                {/* product */}
                <div className="w-20">
                  <img className="h-24" src={product.images[0]} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{product.name}</span>
                </div>
              </div>

              <span className="text-center w-1/5 font-semibold text-sm">
                {product.price.unit_amount / 100}{" "}
                {product.price.currency.toUpperCase()}
              </span>
            </div>
          ))}
          <button
            onClick={isAuth}
            className="bg-primary font-semibold hover:bg-primary-600 py-3 text-sm text-white uppercase w-full"
          >
            Checkout
          </button>{" "}
        </div>
      </div>
      <Link to="/" className="flex font-semibold text-bg-primary text-sm mt-10">
        <svg
          className="fill-current mr-2 text-bg-primary w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </Link>
      <div
        id="buy-modal"
        className={`absolute top-0 left-0 w-screen h-screen z-30 backdrop-blur-md flex flex-col justify-center items-center ${
          isLoginModal ? "block" : "hidden"
        }`}
      >
        <button
          onClick={login}
          aria-label="Continue with google"
          role="button"
          class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg shadow flex items-center mt-10"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
            alt="google"
          />
          <p class="text-base font-medium ml-4 text-gray-700">
            Continue with Google
          </p>
        </button>
      </div>

      <div />
    </div>
  );
}

export default Cart;
