import { FaBars, FaShoppingBag } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";


import { Helmet } from "react-helmet";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const navStyle ="bg-[#7cb518] flex justify-center items-center gap-1 font-medium text-white my-4 py-1 rounded w-full";
  const navActive = "text-[#7cb518] border-2 border-[#7cb518] flex justify-center items-center gap-1 font-medium  my-4 py-1 rounded w-full"
 

  const dashLink = (
    <>
     {
       <>
       <li>
        <NavLink
          className={location.pathname === "/dashboard/add-task" ? navActive  : navStyle}
          to="/dashboard/add-task"
        >
          <MdOutlineHome />
          Add Task
        </NavLink>
      </li>
      </>
     }

    
      <li>
        <NavLink
          className={navStyle}
          to="/"
        >
          <MdOutlineHome />
          Home
        </NavLink>
      </li>
      <li>
        <button
          className={navStyle}
        >
          <FaShoppingBag />
          Sign Out
        </button>
      </li>
    </>
  );
  return (
    <div className="h-full flex text-center ">
        <Helmet>
        <title>TrendLoom | Dashboard</title>
      </Helmet>
      <div className="hidden lg:block w-64 bg-zinc-200 px-10 py-5 space-y-3">
        <span className="text-xl font-medium flex justify-center items-center gap-2"><IoStorefrontOutline /> TrendLoom</span>
        <ul>{dashLink}</ul>
      </div>

      <div className="lg:hidden z-20">
        <div className="drawer ">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle "
          />
          <div className="absolute p-8  flex items-center gap-6 ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="drawer-button"
            >
              <FaBars className="text-xl " />
            </label>
            {/* <span className="text-xl">TrendLoom </span> */}
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className=" lg:w-80 min-h-full px-10 bg-base-200  text-base-content">
              {dashLink}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Dashboard;
