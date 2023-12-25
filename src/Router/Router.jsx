

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../MainLayout/Dashboard";
import Task from "../Pages/Dashboard/Task/Task";
import About from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
      children: [
        {
          path: "task",
          element: <Task/>
        },
      ]
    }
  ])
export default Router;

