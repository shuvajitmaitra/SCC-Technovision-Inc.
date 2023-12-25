import { FaBars, FaShoppingBag } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    Swal.fire({
      title: "Logout?",
      text: "Do you want to logged out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "LogOut",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then((result) => {
            console.log(result.user);
            Swal.fire({
              title: "Deleted!",
              text: "Your are successfully delete!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };
  const navStyle =
    "bg-[#11F3D3] flex justify-center items-center gap-1 font-medium text-white my-4 py-1 rounded w-full";
  const navActive =
    "text-[#11F3D3] border-2 border-[#11F3D3] flex justify-center items-center gap-1 font-medium  my-4 py-1 rounded w-full";



  const dashLink = (
    <>
      {
        <>
          <li>
            <NavLink
              className={
                location.pathname === "/dashboard/task" ? navActive : navStyle
              }
              to="/dashboard/task"
            >
              <MdOutlineHome />
              Show Task
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
        <button className={navStyle} onClick={handleLogOut}>
          <FaShoppingBag />
          Sign Out
        </button>
      </li>
    </>
  );
  return (
    <div className="h-full flex text-center ">
      <Helmet>
        <title>SCC Technovision | Dashboard</title>
      </Helmet>
      <div className="hidden lg:block w-64 bg-zinc-200 px-10 py-5 space-y-3">
        <div className="text-xl font-medium flex justify-center flex-col items-center gap-2">
          <img
            src={user?.photoURL}
            alt=""
          />
          <h2>{user?.displayName}</h2>
        </div>
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
