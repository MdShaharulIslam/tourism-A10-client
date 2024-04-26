import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navber from "../Navber/Navber";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";

const Registration = () => {
  const location = useLocation(); // Move inside the component
  const navigate = useNavigate(); // Move inside the component

  const auth = getAuth();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one capital letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one small letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        }).then(() => {
          toast.success("Registration successful!");
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 1000); // 1-second delay
        }).catch((error) => {
          setRegisterError(error.message);
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <Helmet><title>Registration-Form</title></Helmet>
      <div className="mx-8"><Navber /></div>
      <div className="hero">
        <div className="hero-content flex-col bg-purple-400 rounded-lg">
          <div data-aos="flip-left" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-2xl text-center font-poppins font-bold">
                Register Your Account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Picture"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
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
                <span
                  className="absolute top-4 right-2 cursor-pointer"
                  onClick={() => setShowpassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-400">Register</button>
              </div>
            </form>
            <ToastContainer />
            {registerError && <p className="text-red-600 text-center">{registerError}</p>}
            <p className="text-center mb-4 ">
              Already Registered? <Link to="/login" className="text-blue-500">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
