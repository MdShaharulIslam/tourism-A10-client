import { Link, NavLink } from "react-router-dom";
import logo from '/public/logo.png';
import userp from '/public/user.png';
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState, useEffect } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave');
    } else {
      setTheme('dark');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  const handleSignOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error));
  };

  const activeClasses = "text-blue-500 font-bold";
  const themeClass = theme === 'synthwave' ? "dark" : "light";
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
          exact
          to="/allTouristSpot"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/addTouristSpot"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/myList"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          My List
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/about"
          activeClassName=""
          className={`hover:text-yellow-200 ${activeClasses}`}
        >
          About
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    document.body.className = themeClass;
  }, [themeClass]);

  return (
    <div className={`navbar ${themeClass} bg-[#00ffa6] rounded-lg my-6`}>
      <div className="navbar-start">
        <div className="w-24 rounded-full hidden lg:flex items-center text-black font-extrabold"><img src={logo} alt="#" /></div>
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
      <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
        <div className="w-10 rounded-full mr-4"></div>
        <div className="w-10 rounded-full mr-4 tooltip" data-tip={user?.displayName}>
          {user ? <img className="w-10 rounded-full" alt="#" src={user.photoURL} /> : <img alt="#" src={userp} />}
        </div>
        {user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link to="/login"><button className="btn">Login</button></Link>}
      </div>
    </div>
  );
};

export default Navbar;
