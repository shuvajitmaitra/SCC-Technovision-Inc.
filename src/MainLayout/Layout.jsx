import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#292F36] min-h-screen ">
      <div className="bg-[#3d454e5b]">
        <Navbar />
      </div>
      <Outlet></Outlet>
      <div className="bg-slate-700">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
