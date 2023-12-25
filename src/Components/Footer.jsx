import {  NavLink } from "react-router-dom";
import logo from "../assets/shuvajit-maitra-logo.png";


const Footer = () => {
  

    return(
        <div className="max-w-screen-xl mx-auto py-20 text-white space-y-5 bg-slate-700">
           <div className="flex justify-center items-center gap-1 text-4xl ">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10"
        />
       SCC Technovision
      </div>
      <div  className="flex gap-3 justify-center items-center flex-wrap ">
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/">Home</NavLink>
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/dashboard/task">Dashboard</NavLink>
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/about">About</NavLink>
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/contact">Contact</NavLink>
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/login">Login</NavLink>
      <NavLink  className={({ isActive }) =>
            isActive ? "text-[#11F3D3]" : "text-white"
          } to="/register">Join Us</NavLink>
      </div>
      <h3 className="text-center">All @copy reserve by Shuvajit Maitra</h3>
        </div>
    )}
export default Footer;