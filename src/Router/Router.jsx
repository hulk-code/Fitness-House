import {
    createBrowserRouter,
   
  } from "react-router-dom";

import ErrorPage from "../Pages/Error/ErrorPage";

import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
      ],
    },
  ]);
export default router;