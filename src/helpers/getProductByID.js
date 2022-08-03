import { db } from "../firebase/credentials";
import { collection, doc, getDoc } from "firebase/firestore";

async function getProductByID(id) {
  const collectionRef = collection(db, "products");
  const docRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docRef);
  const product = snapDoc.data();
  return product;
}

export default getProductByID;
