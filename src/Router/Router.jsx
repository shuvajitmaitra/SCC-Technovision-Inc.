

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../MainLayout/Layout";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    }
  ])
export default Router;

