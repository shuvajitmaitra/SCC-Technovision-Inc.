import Banner from "../Components/Banner";
import UserTypes from "../Components/UserTypes";
import { Contact } from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <main>
        <Banner></Banner>
        <UserTypes />
        <Contact />
      </main>
    </div>
  );
};
export default Home;
