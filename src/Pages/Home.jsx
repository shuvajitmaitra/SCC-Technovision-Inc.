import Banner from "../Components/Banner";
import { Contact } from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <nav >
             <Navbar></Navbar>
             </nav>
      <main>
        <Banner></Banner> 
    
        <Contact />
        <div className="bg-slate-700">
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Home;
