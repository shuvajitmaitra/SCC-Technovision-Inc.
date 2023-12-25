import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://scc-technovision-server-two.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      console.log("Error trucked", error.response);
      if (error.response.status == 404 || error.response.status == 401) {
        logOut();
        navigate("/login");
      }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
