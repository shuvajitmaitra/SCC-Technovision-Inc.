import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Banner = () => {
  const {user} = useContext(AuthContext)
  return (
    <div id="Home" className="pb-20 bg-banner bg-no-repeat bg-cover bg-center h-screen md:h-[500px] flex items-center justify-center">
      
    <Link to={user?"dashboard/task" : 'login'}>
    <button className="flex items-center gap-2 justify-center px-5 py-3 font-bold text-xl bg-[#11F3D3] rounded-full mx-auto text-zinc-600 duration-1000 hover:scale-110 hover:shadow-xl hover:shadow-[#11F3D3]">Let’s Explore</button>
    </Link>
    </div>
  );
};
export default Banner;
