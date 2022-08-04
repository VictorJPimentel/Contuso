import React, { useEffect, useState } from "react";
import getActiveProducts from "../helpers/getActiveProducts";
import ItemCard from "../components/itemCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/credentials";
function Home() {
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
      <button onClick={logout}>Logout</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br></br>
      <ul>
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
    </>
  );
}

export default Home;
