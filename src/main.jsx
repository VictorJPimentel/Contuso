import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

import App from "./App";
import "./index.css";
// createApp(App).mount('#app');

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
);
