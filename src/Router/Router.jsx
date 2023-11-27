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
import Register from "../Pages/UserAutentication/Register/Register";
import Login from "../Pages/UserAutentication/Login/Login";
import PrivateRoute from "../Pages/UserAutentication/PrivateRoute/PrivateRoute";
import OurClasses from "../Pages/OurClassesPage/OurClasses";
import ClassDetails from "../Pages/OurClassesPage/ClassDetails/ClassDetails";
import AddClass from "../Pages/OurClassesPage/AddClasses/AddClass";
import Pagination from "../Pages/ForumPost/Pagination/Pagination";
import DashBoard from "../Layout/Root/DashBoard/DashBoard";
import SeeAllSubscriber from "../Pages/DashBoard/SeeAllSubscriber/SeeAllSubscriber";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import UserActivity from "../Pages/DashBoard/UserActivity/UserActivity";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AllTrainer from "../Pages/DashBoard/AllTrainer/AllTrainer";
import AppliedTrainer from "../Pages/DashBoard/Appliedtrainer/Appliedtrainer";
import TrainerHome from "../Pages/DashBoard/TrainerHome/TrainerHome";




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
          element:<PrivateRoute><BeATrainer></BeATrainer></PrivateRoute> ,
        },
        {
          path: "/register",
          element:<Register></Register> ,
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
        {
          path: "/classes",
          element:<OurClasses></OurClasses> ,
        },
        {
          path:'/classdetails/:id',
          element:<ClassDetails></ClassDetails>,
          loader:({params}) => fetch(`http://localhost:5000/routine/${params.id}`)
        },
        {
          path: "/addclass",
          element:<AddClass></AddClass> ,
         
        },
        // {
        //   path: "/forums",
        //   element:<ForumPost></ForumPost> ,
        // },
        {
          path: "/forums",
          element:<Pagination></Pagination>,
          loader:()=>fetch('http://localhost:5000/postsCount')

        },
       
      ],
    },


    {
         path:'/dashboard',
         element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
         children: [
          {
            path: "seesubscriber",
            element: <SeeAllSubscriber></SeeAllSubscriber> ,
          },
          // admin route
          {
            path: "allusers",
            element:<AllUsers></AllUsers> ,
          },

          {
            path: "userhome",
            element:<UserHome></UserHome> ,
          },
          {
            path: "activity",
            element:<UserActivity></UserActivity> ,
          },
          {
            path: "alltrainer",
            element:<AllTrainer></AllTrainer>
          },
          {
            path: "appliedtrainer",
            element:<AppliedTrainer></AppliedTrainer>
          },
          {
            path: "trainerhome",
            element:<TrainerHome></TrainerHome>
          },

         ]

    }
  ]);
export default router;