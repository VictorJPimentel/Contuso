import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";
// import Login from "./Login";
import loginGoogle from "../helpers/loginGoogle";

function Cart() {
  const { cart } = useCartContext();
  console.log(cart);

  function login() {
    loginGoogle();
  }

  return (
    <div className="w-screen relative h-screen flex flex-col bg-blue-300 ">
      {/* <div className="absolute top-0 left-0  bg-green-400/10 w-screen h-screen z-30 background-blur-sm flex flex-col justify-center items-center">
        <div className="bg-white w-1/5 h-1/3 flex flex-col items-center justify-evenly">
          <form
            onSubmit={(e) => login(e)}
            className="flex flex-col items-center justify-evenly"
          >
            <input type="text" name="email" placeholder="email"></input>
            <input
              type="password"
              name="password"
              placeholder="password"
            ></input>
          </form>
   

      
        </div>
      </div> */}
      <button onClick={login}>Sign in with Google</button>
      Your cart:
      {cart?.map((product) => (
        <p>{product.name}</p>
      ))}
      <button>Buy</button>
      <Link to="/">Back to home</Link>
      <div />
    </div>
  );
}

export default Cart;
