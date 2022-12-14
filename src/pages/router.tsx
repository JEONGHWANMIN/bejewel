import { createBrowserRouter } from "react-router-dom";
import Enroll from "./Enroll";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/enroll",
    element: <Enroll />,
  },
]);
