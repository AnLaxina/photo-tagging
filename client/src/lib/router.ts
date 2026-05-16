import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import TestMap from "../pages/TestMap";
import HollyberryMap from "../pages/maps/Hollyberry";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/map",
    children: [
      {
        path: "test",
        Component: TestMap,
      },
      {
        path: "hollyberry",
        Component: HollyberryMap,
      },
    ],
  },
]);
