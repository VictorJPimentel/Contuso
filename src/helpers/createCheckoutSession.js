import { db } from "../firebase/credentials";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { async } from "@firebase/util";

async function createCheckoutSession(uid, cart) {
  const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);
  const { id } = await addDoc(collectionRef, {
    mode: "payment",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    collect_shipping_address: true,
    line_items: cart.map((item) => {
      return { quantity: 1, price: item.priceId };
    }),
  });

  const cancelStreaming = onSnapshot(
    doc(db, `customers/${uid}/checkout_sessions/${id}`),
    (snapshot) => {
      let url = snapshot.data().url;
      if (url) {
        cancelStreaming();
        window.location.href = url;
      }
    }
  );
}

export default createCheckoutSession;
