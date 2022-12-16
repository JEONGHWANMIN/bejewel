import { createBrowserRouter, redirect } from "react-router-dom";
import { getProducts } from "src/apis/product";
import Enroll from "./Enroll";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const data = await getProducts();
      if (!data) throw redirect("/404");
      return data;
    },
  },
  {
    path: "/enroll",
    element: <Enroll />,
  },
]);
