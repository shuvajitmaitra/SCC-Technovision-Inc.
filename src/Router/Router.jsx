

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../MainLayout/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";

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
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "add-task",
          element: <AddTask/>
        }
      ]
    }
  ])
export default Router;

