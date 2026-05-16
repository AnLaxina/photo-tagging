import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import TestMap from "../pages/TestMap";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    }, 
    {
        path: "/map-test",
        Component: TestMap
    }
])