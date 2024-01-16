import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

import About from "../components/About/About";
import AllService from "../components/AllService/AllService";
import Details from "../components/Details/Details";
import Blogs from "../components/Blogs/Blogs";
import MyReview from "../components/MyReview/MyReview";
import PrivateRoute from "./PrivateRoute";
import AddService from "../components/AddService/AddService";
import UpdateReview from "../components/UpdateReview/UpdateReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
   
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/services',
        element:<AllService></AllService>,
        loader:  () => fetch('https://food-review-server-mern.vercel.app/services')
         
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: ({params}) => fetch(`https://food-review-server-mern.vercel.app/services/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/myReview',
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path:'/add-service',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      }
      ,
      {
        path:'/update-review/:id',
        element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader: async ({params}) => fetch(`https://food-review-server-mern.vercel.app/reviews/${params.id}`)
      }
    ],
  },

]);
