import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Navber/Navber";
import { AuthContext } from "../provider/AuthProvider";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth
} 
from "firebase/auth";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const auth = getAuth();
  const { signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState();
  
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setRegisterError("");
    
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one capital letter");
      return;
    }
     else if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one small letter");
      return;
    }

    setRegisterError("");
    
    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000); // 2-second delay
      })
      .catch((error) => {
        console.error("you have no account", error);
        setRegisterError("Invalid email or password. Please First Register.");
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      toast.success('Sign in successful!');
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1000); // 2-second delay
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      console.log(user);
      toast.success('Sign in successful!');
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1000); // 1-second delay
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login-Page</title>
      </Helmet>
      <div className="mx-8"><Navber></Navber></div>
      
      <h1 className="text-4xl text-center font-poppins font-bold">
        Please login
      </h1>
      <div className="hero ">
        <div  className="hero-content flex-col lg:flex-row-reverse bg-purple-400 rounded-lg" >
          <div data-aos="flip-left" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="relative">
                <input
                  className="input input-bordered w-full py-2 px-4"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  id=""
                  required
                />
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <span
                  className="absolute top-4 right-2 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-400">Login</button>
              </div>
            </form>
            <button
              className="btn w-full mt-4 text-blue-400"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle />
              Login With Google
            </button>
            <button
              className="btn w-full mt-4"
              onClick={handleGithubSignIn}
            >
              <FaGithub />
              Login With GitHub
            </button>
            <p className="text-center mb-4">
              Dont Have an Account{" "}
              <Link to="/registration" className="text-blue-500">
                Register
              </Link>
            </p>
            <ToastContainer></ToastContainer>
            {registerError && (
              <p className="text-red-600 text-center">{registerError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
