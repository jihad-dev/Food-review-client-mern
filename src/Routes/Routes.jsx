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
        loader:  () => fetch('http://localhost:5000/services')
         
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
    ],
  },

]);
