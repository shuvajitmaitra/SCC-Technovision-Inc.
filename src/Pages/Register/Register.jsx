import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.config";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(email, photo, password);
    const regExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&`#^(){}.])[0-9a-zA-Z@$!%*?&`#^(){}.]{6,}$/;

    if (!regExp.test(password)) {
      return setError("Invalid password");
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        console.log(result.user);
        Swal.fire("Registration successfully!", "", "success");
        console.log(location.state);
        navigate(location.state ? location.state : "/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("", `${error.message}`, "error");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire("Login successfully!", "", "success");
        console.log(location.state);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire(`${error.message}`, "", "error");
      });
  };

  return (
    <div className="pt-32 md:pt-20">
      <h3 className="text-xl md:text-4xl font-bold text-center">
        Register Now!
      </h3>
     
      <form  onSubmit={handleRegister} className="space-y-3 w-full md:w-1/2 mx-auto flex flex-col justify-center items-center">
        <input
          name="name"
          type="name"
          placeholder="name"
          className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
          required
        />

        <input
          name="email"
          type="email"
          placeholder="email"
          className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
          required
        />

        <input
          name="photo"
          type="text"
          placeholder="Image Link..."
          className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
          required
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          className="w-full md:w-1/2 py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "
          required
        />
        <p className="text-red-400">{error}</p>
        <div className="">
          <button
            type="submit"
            className=" text-center shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white  px-10 py-2"
          >
            Register
          </button>
        </div>
        <div>
          <p className="">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="block mx-auto right-0 left-0 mt-6 bg-[#F3AA60] py-2 px-4 rounded-full text-white">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center text-xl gap-2 font-medium "
          >
            <FcGoogle /> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
