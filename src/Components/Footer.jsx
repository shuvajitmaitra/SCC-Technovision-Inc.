import logo from "../assets/shuvajit-maitra-logo.png";


const Footer = () => {
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

    return(
        <div className="max-w-screen-xl mx-auto py-20 text-white space-y-5">
           <div className="flex justify-center items-center gap-1 text-4xl ">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10"
        />
        Shuvajit Maitra
      </div>
      <div  className="flex gap-3 justify-center items-center flex-wrap ">{navLinks.map((nav) => handleNavLink(nav))}</div>
      <h3 className="text-center">All @copy reserve by Shuvajit Maitra</h3>
        </div>
    )}
export default Footer;