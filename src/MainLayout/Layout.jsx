import { Outlet } from "react-router-dom";


const Layout = () => {


    return(
        <div className="bg-[#292F36] min-h-screen">
             <Outlet></Outlet>
        </div>
    )}
export default Layout;