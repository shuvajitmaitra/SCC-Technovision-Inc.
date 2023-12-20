import profileImage from "../assets/shuvajit-maitra.gif";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import  resume from '../assets/Shuvajit_Maitra_Resume_jr_web_developer.pdf'



const Banner = () => {
  return (
    <div id="Home" className="pb-20">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold py-10 text-center text-[#11F3D3]">
          Developer
        </h1>
      </div>
      <div className="flex flex-col md:flex-row space-y-5 md:gap-10 xl:w-3/4 mx-5 xl:mx-auto text-white ">
        <div className="h-[380px] flex flex-col justify-center items-center gap-3 lg:w-[600px]  rounded-tl-[100px] rounded-br-[100px] text-center border-2 hover:border-[#11F3D3]">
          
         <div>
          <img
            src={profileImage}
            alt="profile-Image"
            className="h-20 w-20 inline-block mx-auto border-2 duration-1000 hover:scale-110  border-[#11F3D3] rounded-full"
          />
         <h2>Shuvajit</h2>
          <p>MERN Developer</p>
         </div>
          <ul >
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><FaRegEnvelope/> shuvajitmaitra@gmail.com</li>
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><IoLocationOutline/> Dhaka, Bangladesh</li>
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><FaMapLocation/> Onsite/Remote/Hybrid </li>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            <li className="text-xs px-2 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">JS</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">React</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">Node</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">MongoDB</li>
          </ul>
          <a href={resume} download={resume} className="flex items-center gap-2 justify-center p-2 bg-white rounded-full w-3/4 mx-auto text-zinc-600 duration-1000 hover:scale-110">Download CV <FiDownload/></a>
        </div>
        <div className="lg:px-20 space-y-3 ">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span></span>Hey <br /> I’m{" "}
            <span className="text-[#11F3D3]">Shuvajit</span>, <br /> MERN
            Developer
          </h2>
          <p className="max-w-7xl text-xs md:text-base">
          Versatile web developer with expertise in HTML, CSS, JavaScript, React, ExpressJs, and MongoDB.
Proven dedication, strong teamwork, and a drive to excel. Eager to contribute skills and evolve into a
lead developer in a dynamic work setting.
          </p>
        </div>
        <div className="h-20 md:h-[300px] md:w-[300px] border-2 hover:border-[#11F3D3] rounded-[50px] duration-1000 hover:scale-110 flex md:flex-col justify-center items-center gap-5">
          <Link to={'https://www.linkedin.com/in/shuvajit-maitra/'} target="_blank" className="bg-[#11F3D3] p-1 shadow-lg rounded-full hover:shadow-[#11F3D3] duration-1000 hover:scale-110 ">

          <FaLinkedinIn className="text-black text-2xl"/>
          </Link>
          <Link to={'https://www.facebook.com/iamshuvajit/'} target="_blank" className="bg-[#11F3D3] p-1 shadow-lg rounded-full hover:shadow-[#11F3D3] duration-1000 hover:scale-110 ">

          <FaFacebookF className="text-black text-2xl"/>
          </Link>
          <Link to={'https://github.com/shuvajitmaitra'} target="_blank" className="bg-[#11F3D3] p-1 shadow-lg rounded-full hover:shadow-[#11F3D3] duration-1000 hover:scale-110 ">

          <FaGithub className="text-black text-2xl"/>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
