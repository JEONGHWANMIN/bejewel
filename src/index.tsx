import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import { router } from "./pages/router";
import Header from "./components/Header";
import "./style/fonts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
