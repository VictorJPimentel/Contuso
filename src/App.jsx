import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Cart,
  Checkout,
  Home,
  Login,
  NotFound,
  Product,
  Profile,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
