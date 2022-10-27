import React, { useState } from 'react';
import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../context/UserContext/UserContext';
import { useEffect } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("")
    const { user, logout, profile, profileName } = useContext(AuthContext);
    const handalLogout = ()=>{
      logout()
      .then(()=>{toast.warning('Successfully Logout', {autoClose: 500})})
      .catch(error=>{toast.error(error.message)})
    }
    const toogleTheme = ()=>{
      if (theme === "dark" ) {
        setTheme("");
      } else {
        setTheme("dark");
      }
      
    }
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
    return (
      <div>
        <div className="bg-indigo-700 dark:bg-black fixed w-full top-0 z-10">
          <div className="px-4 py-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
              <NavLink
                to="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <img
                  src={logo}
                  alt="Freelancing Educare Institute"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  Freelancing Educare Institute
                </span>
              </NavLink>
              <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="/home"
                    aria-label="Our product"
                    title="Our product"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-medium transition-colors duration-200 "
                        : "font-medium  text-gray-100 transition-colors duration-200 hover:text-secondary"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    aria-label="Our product"
                    title="Our product"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-medium transition-colors duration-200 "
                        : "font-medium  text-gray-100 transition-colors duration-200 hover:text-secondary"
                    }
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-medium transition-colors duration-200 "
                        : "font-medium  text-gray-100 transition-colors duration-200 hover:text-secondary"
                    }
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    aria-label="About us"
                    title="About us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-medium transition-colors duration-200 "
                        : "font-medium  text-gray-100 transition-colors duration-200 hover:text-secondary"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                {user?.email ? (
                  <>
                    <li>
                      <NavLink
                        to="/"
                        onClick={handalLogout}
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-fuchsia-600 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Logout
                      </NavLink>
                    </li>
                    <div className="w-8 relative group cursor-pointer">
                      <img
                        src={user.photoURL || profile}
                        title={user.displayName || profileName}
                        alt=""
                        className=" rounded-full"
                      />
                    </div>
                  </>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-fuchsia-600 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                <label
                  htmlFor="Toggle1"
                  className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
                >
                  <span className="text-white">Light</span>
                  <span className="relative">
                    <input
                      onClick={() => toogleTheme()}
                      id="Toggle1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-6 rounded-full shadow-inner bg-white  dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800 dark:bg-gray-800"></div>
                  </span>
                  <span className="text-white">Dark</span>
                </label>
              </ul>
              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5  text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full ">
                    <div className="p-5 bg-white dark:bg-black dark:text-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <NavLink
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <img
                              src={logo}
                              alt="Freelancing Educare Institute"
                              style={{ width: "50px", height: "50px" }}
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide dark:text-white  text-gray-800 uppercase">
                              Freelancing Educare Institute
                            </span>
                          </NavLink>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              className="w-5 dark:text-white text-gray-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <NavLink
                              to="/"
                              aria-label="Our product"
                              title="Our product"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-secondary font-medium transition-colors duration-200 "
                                  : "font-medium  text-black dark:text-white transition-colors duration-200 hover:text-secondary"
                              }
                            >
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/courses"
                              aria-label="Our product"
                              title="Our product"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-secondary font-medium transition-colors duration-200 "
                                  : "font-medium  text-black dark:text-white transition-colors duration-200 hover:text-secondary"
                              }
                            >
                              Courses
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/faq"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-secondary font-medium transition-colors duration-200 "
                                  : "font-medium  text-black dark:text-white transition-colors duration-200 hover:text-secondary"
                              }
                            >
                              FAQ
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog"
                              aria-label="About us"
                              title="About us"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-secondary font-medium transition-colors duration-200 "
                                  : "font-medium  text-black  dark:text-white transition-colors duration-200 hover:text-secondary"
                              }
                            >
                              Blogs
                            </NavLink>
                          </li>
                          {user?.email ? (
                            <>
                              <li>
                                <NavLink
                                  to="/"
                                  onClick={handalLogout}
                                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white  transition duration-200 rounded shadow-md btn btn-primary"
                                  aria-label="Sign up"
                                  title="Sign up"
                                >
                                  Logout
                                </NavLink>
                              </li>
                              <div className="w-8 relative group cursor-pointer">
                                <img
                                  src={
                                    user?.photoURL
                                      ? user?.photoURL
                                      : "https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg"
                                  }
                                  title={
                                    user?.displayName
                                      ? user?.displayName
                                      : "No Name Found"
                                  }
                                  alt=""
                                  className=" rounded-full"
                                />
                              </div>
                            </>
                          ) : (
                            <li>
                              <NavLink
                                to="/login"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn btn-primary"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Login
                              </NavLink>
                            </li>
                          )}
                          <label
                            htmlFor="Toggle2"
                            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
                          >
                            <span>Light</span>
                            <span className="relative">
                              <input
                                onClick={() => toogleTheme()}
                                id="Toggle2"
                                type="checkbox"
                                className="hidden peer"
                              />
                              <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800 dark:bg-gray-800"></div>
                            </span>
                            <span>Dark</span>
                          </label>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;