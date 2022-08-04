import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase/credentials";
import {
  Cart,
  Checkout,
  Home,
  Login,
  NotFound,
  Product,
  Profile,
} from "./pages";
import { useUserContext } from "./contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { user, setUser } = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    }
    if (!firebaseUser) {
      setUser(null);
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
