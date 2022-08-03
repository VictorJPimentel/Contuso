import { db } from "../firebase/credentials";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function () {
  const collectionRef = collection(db, "products");
  const filter = query(collectionRef, where("active", "==", true));

  const snaps = await getDocs(filter);
  const products = [];

  for await (const snap of snaps.docs) {
    const product = snap.data();
    product.id = snap.id;
    const priceSnaps = await getDocs(collection(snap.ref, "prices"));
    product.price = priceSnaps.docs[0].data();
    products.push(product);
  }

  return products;
}
