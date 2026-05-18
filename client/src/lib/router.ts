import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import TestMap from "../pages/TestMap";
import HollyberryMap from "../pages/maps/Hollyberry";
import ErrorPage from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    ErrorBoundary: ErrorPage,
    Component: Home,
  },
  {
    path: "/map",
    children: [
      {
        index: true,
        Component: ErrorPage,
      },
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
