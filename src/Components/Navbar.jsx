import { Link } from "react-router-dom";
import logo from "../assets/shuvajit-maitra-logo.png";
const Navbar = () => {
  const navLinks = ["Home",'Skill', "Project", 'Eduction', "About", 'Contact'];

  const handleNavLink = (nav) => {
    const handleClickNavLink =()=>{
      document.getElementById(nav).scrollIntoView({behavior: "smooth"})
    }
    return (
      <ul
        key={nav}
      >
        <li className="cursor-pointer" onClick={handleClickNavLink} >{nav}</li>
      </ul>
    );
  };

  return (
    <div id="Home" className="max-w-screen-xl mx-auto border-b py-7 border-zinc-600 text-white flex justify-between items-center flex-col md:flex-row px-5 xl:px-0 space-y-4">
      <div className="flex justify-center items-center gap-1">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 "
        />
        <h3 className="text-xl font-bold">SCC Technovision</h3>
      </div>
      <div  className="flex gap-3 flex-wrap justify-center">{navLinks.map((nav) => handleNavLink(nav))} <Link to="/login">Login</Link>
      <Link to="/register">Join Us</Link>
      </div>

    </div>
  );
};
export default Navbar;
