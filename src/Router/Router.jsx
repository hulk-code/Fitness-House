import {
    createBrowserRouter,
   
  } from "react-router-dom";

import ErrorPage from "../Pages/Error/ErrorPage";

import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import ReadMore from "../Pages/Posts/ReadMore/ReadMore";

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
        {
          path: "/readmore/:id",
          element:<ReadMore></ReadMore>,
          loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
      ],
    },
  ]);
export default router;