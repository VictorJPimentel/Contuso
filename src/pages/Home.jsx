import React, { useEffect, useState } from "react";
import getActiveProducts from "../helpers/getActiveProducts";
import ItemCard from "../components/itemCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/credentials";
import { useUserContext } from "../contexts/userContext";
function Home() {
  const { user, setUser } = useUserContext();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }

    getProducts();
  }, []);

  function logout() {
    console.log("Logout");
    signOut(auth);
  }

  return (
    <>
      <nav class="flex lg:sticky top-0   bg-header opacity-90">
        <div class="container flex flex-wrap px-4 py-2 mx-auto lg:mx-0 lg:space-x-4">
          <a
            href=""
            class="inline-flex p-2 text-stone-300 text-xl font-bold uppercase tracking-wider font-title"
          >
            CONTUSO
          </a>
          <div class="w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0">
            <ul class="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0">
              <li>
                <a
                  href="#"
                  class="flex px-4 py-2 font-content text-stone-300 hover:bg-stone-700 rounded-md"
                >
                  Home
                </a>
              </li>
              <li class="relative">
                <a
                  href="#products"
                  class="flex w-full outline-none focus:outline-none px-4 py-2 font-content text-stone-300 hover:bg-stone-700 rounded-md"
                >
                  Products
                </a>
              </li>
              {user ? (
                <li>
                  <button
                    class="flex w-full outline-none focus:outline-none px-4 py-2 font-content text-stone-300 hover:bg-stone-700 rounded-md"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
      <section class="flex items-center w-full justify-center h-screen mb-0 bg-fixed bg-center bg-cover bg-main-page">
        <div class="p-5 lg:text-main-title md:text-7xl text-6xl text-stone-300 rounded-md bg-primary capitalize font-title opacity-90">
          CONTUSO
        </div>
      </section>
      <div class="w-auto bg-primary p-10">
        <div class="max-w-lg m-auto">
          <h1 class="text-5xl text-center ml-0 font-title uppercase mb-4 text-stone-300">
            The Most Reliable Car parts in the industry
          </h1>
          <p class="mb-4 m-auto text-lg text-left font-content text-secondary">
            From all over the globe our products have impacted thousands of
            lifes by imporing the way their cars function. Our teams focus on
            maximizing the quality of our car parts so that you never have to
            worry about a car malfunction
          </p>

          <p class="mb-4 m-auto text-lg text-left font-content text-secondary">
            We provide personal vehicle owners and enthusiasts with the{" "}
            <b>vehicle related products</b> and <b>knowledge</b> that fulfill
            their wants and needs at the right price.
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-full h-96 mb-0 bg-fixed bg-center bg-cover lg:p-32 p-10 bg-main-page2"
        // style="background-image: url(./imgs/second_main.jpg)"
      >
        <p class="p-5 lg:text-2xl text-lg text-stone-300 bg-primary bg-opacity-80 rounded-xl font-title text-center shadow-2xl">
          "Contuso provides the most reliable car parts we have ever seen. We
          recommend Contuso to anyone who wants the best quiality"
          <br />
          <b>
            -<i>Top Gear Magazine</i>
          </b>
        </p>
      </div>
      <section
        id="products"
        class="flex flex-col items-center justify-center bg-primary"
      >
        <h1 className="text-5xl font-bold font-title p-8 text-stone-300 uppercase">
          Our Products
        </h1>
        <br></br>
        <ul className="flex lg:flex-row justify-between flex-col items-center">
          {products
            ? products.map((product) => (
                <>
                  <li key={product.id}>
                    <ItemCard product={product}></ItemCard>
                  </li>
                  <br></br>
                </>
              ))
            : null}
        </ul>
      </section>
      <footer class="text-stone-300 bg-primary">
        <div class="max-w-3xl mx-auto py-6">
          <hr class="h-px my-6 bg-primary" />
          <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a
                href="#"
                class="text-xl font-bold font-title text-stone-300 hover:text-stone-400"
              >
                CONTUSO&copy;
              </a>
            </div>

            <div class="flex mt-4 md:m-0">
              <div class="-m-x4">
                <a
                  href="https://www.instagram.com/carpartscom/?hl=en"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/carpartscom/"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/search?lang=en&q=%23carparts"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
