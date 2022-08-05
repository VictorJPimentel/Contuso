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
    console.log(productInfo)
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCart([...cart, productInfo]);

    // console.log(productInfo);

    // function isAuth() {}
  }

  return (
    <>
      <div class="w-screen h-screen flex flex-col bg-primary">
        <nav
          class=" flex lg:sticky top-0   bg-header opacity-90"
        >
          <div
            class="container flex flex-wrap px-4 py-2 mx-auto lg:mx-0 lg:space-x-4 opacity-100"
          >
            <Link to="/">
              <button className="inline-flex p-2 text-stone-300 text-xl font-bold uppercase tracking-wider font-title">CONTUSO</button>
            </Link>
            {/* <a
              href=""
              class="inline-flex p-2 text-stone-300 text-xl font-bold uppercase tracking-wider font-title"
              >CONTUSO
            </a> */}
            <div
              class="w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0"
            >
              <ul
                class="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0"
              >
                <li>
                  {/* <a
                    href="#"
                    class="flex px-4 py-2 font-text text-stone-300 hover:bg-stone-700 rounded-md"
                    >Home
                  </a> */}
                  <Link to="/">
                    <button className="flex px-4 py-2 font-content text-stone-300 hover:bg-stone-700 rounded-md">Home</button>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <button className="flex px-4 py-2 font-content text-stone-300 hover:bg-stone-700 rounded-md">Cart</button>
                  </Link>
                </li>
                {/* <li class="relative">
                  <a
                    href="#products"
                    class="flex w-full outline-none focus:outline-none px-4 py-2 font-text text-stone-300 hover:bg-stone-700 rounded-md"

                  >
                    Products
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="./contactUs.html"
                    class="flex px-4 py-2 font-text text-stone-300 hover:bg-stone-700 rounded-md"
                    >Contact us
                    </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div class= "grid place-items-center w-full h-full">
          {/* Item card in the middle */}
          <div class="flex flex-col content-center justify-center bg-product h-fit w-80 lg:w-96 md:w-80  p-6 text-center rounded-lg shadow-lg">
            <div className="w-full justify-between flex text-center ">
              <div className="text-4xl font-bold text-stone-300 text-center font-title m-auto mb-4">
                {productInfo?.name}
              </div>
            </div>
            <img src={productInfo?.images[0]} alt="" class=" lg:m-auto w-80 rounded-lg"/>
            <p class="font-content text-stone-300 my-3 font-bold">${productInfo?.price.unit_amount / 100}</p>
            {/* <p>{productInfo?.description}</p> */}
            <p class="font-content text-stone-300 text-sm text-left mb-3">{productInfo?.description}</p>
            <button onClick={addToCart} className="p-4 bg-slate-600 hover:bg-slate-700 font-content rounded-lg">
              {" "}
              Add to cart
            </button>
            <br></br>
            <button className="p-4 bg-slate-400 hover:bg-slate-500 font-content"> Buy now</button>
          </div>
        </div>
      </div>
      <footer class="text-stone-300 bg-primary">
      <div class="max-w-3xl mx-auto py-6">
        <hr class="h-px my-6 bg-primary" />
        <div
          class="flex flex-col items-center justify-between mt-6 md:flex-row"
        >
          <div>
            <a
              href="#"
              class="text-xl font-bold font-title text-stone-300 hover:text-stone-400"
              >CONTUSO&copy;</a
            >
          </div>

          <div class="flex mt-4 md:m-0">
            <div class="-m-x4">
              <a
                href="https://www.instagram.com/carpartscom/?hl=en"
                target="_blank"
                class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >Instagram</a
              >
              <a
                href="https://www.facebook.com/carpartscom/"
                target="_blank"
                class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >Facebook</a
              >
              <a
                href="https://twitter.com/search?lang=en&q=%23carparts"
                target="_blank"
                class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >Twitter</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
      {/* <div className="w-full justify-between flex">
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
      <button className="p-4 bg-slate-400"> Buy now</button> */}
    </>
  );
}

export default Product;
