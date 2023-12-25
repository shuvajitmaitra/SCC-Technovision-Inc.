import {  NavLink } from "react-router-dom";
import logo from "../assets/shuvajit-maitra-logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
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
  return (
    <div
      id="Home"
      className="max-w-screen-xl mx-auto border-b py-7 border-zinc-600 text-white flex justify-between items-center flex-col md:flex-row px-5 xl:px-0 space-y-4"
    >
      <div className="flex justify-center items-center gap-1">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 "
        />
        <h3 className="text-xl font-bold">SCC Technovision</h3>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        {user && <NavLink className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/dashboard/task">Dashboard</NavLink>}
        <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/about">About</NavLink>
        <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/contact">Contact</NavLink>
        {user ? (
          <>
            <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          }
              onClick={handleLogOut}
              to="/logout"
            >
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/login">Login</NavLink>
            <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/register">Join Us</NavLink>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
