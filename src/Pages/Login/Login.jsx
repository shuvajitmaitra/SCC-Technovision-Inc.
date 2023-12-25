import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { userSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    userSignIn(email, password)
    .then(() => {
      Swal.fire(
        'Login successfully!',
        '',
        'success'
      )
      navigate(location.state ? location.state : "/");
      e.target.reset();
    })
    .catch((error) => {
      Swal.fire(
        "email or password Invalid",
        '',
        'error'
      )
     console.log(error.message);
    });

};

const handleGoogleSignIn = () =>{
  googleSignIn()
  .then(() => {
    Swal.fire(
      'Login successfully!',
      '',
      'success'
    )
    navigate(location.state ? location.state : "/");
  })
  .catch((error) => {
    Swal.fire(
      `${error.message}`,
      '',
      'error'
    )
   
  });

  };
  return (
    <div className="py-10 max-w-5xl mx-auto">
        <h3 className="text-3xl border-b-2 lg:text-6xl font-bold text-white pb-2 mb-10">
        Login
      </h3>
      <form
        onSubmit={handleSignIn}
        className="w-full md:w-[400px] border rounded-lg p-6  space-y-3 mx-auto flex flex-col justify-center items-center"
      >
        <input
            type="email"
            className="w-full py-3 my-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "

            placeholder="Email"
            name="email"
            required
          />
        <input
            type="password"
            className="w-full py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-105  "

            placeholder="Password"
            name="password"
            required
          />
        <div className="w-1/2 mx-auto flex justify-center">
          <button className=" text-center shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white  px-10 py-2 mt-4">Login</button>
        </div>
        <div>
          <p className="">
            New here?{" "}
            <Link
              to="/register"
              className="text-blue-500"
            >
              Register
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

export default Login;
