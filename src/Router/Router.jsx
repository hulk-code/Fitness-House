import {
    createBrowserRouter,
   
  } from "react-router-dom";

import ErrorPage from "../Pages/Error/ErrorPage";

import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import ReadMore from "../Pages/Posts/ReadMore/ReadMore";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import OurTrainer from "../Pages/TrainerPage/OurTrainer/OurTrainer";
import KnowMore from "../Pages/TrainerPage/KnowMore/KnowMore";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";

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
        {
          path: "/galery",
          element:<GalleryPage></GalleryPage> ,
        },
        {
          path: "/trainer",
          element:<OurTrainer></OurTrainer> ,
        },
        {
          path: "/knowmore/:id",
          element:<KnowMore></KnowMore> ,
          loader:({params}) => fetch(`http://localhost:5000/instructorprofile/${params.id}`)
        },
        {
          path: "/beatrainer",
          element:<BeATrainer></BeATrainer> ,
        },
      ],
    },
  ]);
export default router;