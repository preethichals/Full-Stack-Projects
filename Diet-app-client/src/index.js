import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <AuthProvider>
       <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  
);
