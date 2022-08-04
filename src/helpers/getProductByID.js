import { db } from "../firebase/credentials";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

async function getProductByID(id) {
  const collectionRef = collection(db, "products");
  const docRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docRef);
  const product = snapDoc.data();

  const priceSnaps = await getDocs(collection(snapDoc.ref, "prices"));
  product.price = priceSnaps.docs[0].data();
  product.priceId = priceSnaps.docs[0].id;
  return product;
}

export default getProductByID;
