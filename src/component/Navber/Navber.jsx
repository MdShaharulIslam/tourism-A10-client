import { Link, NavLink } from "react-router-dom";
import logo from '/public/logo.png';
import userp from '/public/user.png';
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { getAuth, updateProfile } from "firebase/auth";


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const auth = getAuth();

  const handleSignOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error));
  };

  const activeClasses = "text-blue-500 font-bold";
  const navLink = (
    <>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          About
        </NavLink>
      </li>
          <li>
        <NavLink
          to="/contact"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
         ContactUs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/updateProfile"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogPost"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
        Gallary
        </NavLink>
      </li>
    </>
  );

  const update = e => {
       e.preventDefault();
    const photourl = e.target.photourl.value;
     updateProfile(auth.currentUser, {
          
      photoURL: photourl
    })
    
      .then(() => {
        console.log('Profile photo updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile photo:', error);
      });
      };

  return (

    <div className="navbar bg-purple-400 rounded-lg my-6 ">
      
      <div className="navbar-start">
        <div className="w-20 rounded-full hidden lg:flex items-center text-black font-extrabold   "><img src={logo} alt="#" />Buy,Sell & Rent</div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full mr-4"></div>
        <div className="w-10 rounded-full mr-4 tooltip" data-tip={user?.displayName}>
        
          {user ? <img className="w-10 rounded-full" alt="#" src={user.photoURL} /> : <img alt="#" src={userp} />}
        </div>
        {user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link to="/login"><button className="btn">Login</button></Link>}
      </div>
    </div>
  );
};

export default Navber;
