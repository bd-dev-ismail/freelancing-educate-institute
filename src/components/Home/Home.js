import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Advantage from '../Advantage/Advantage';
import { AuthContext } from '../context/UserContext/UserContext';

const Home = () => {
    const data = useLoaderData();
  const [error, setError] = useState('')
  const { login, loginGithub, loginGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handalLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrimPassword.value;
    if(password !== confrimPassword){
      setError("Password not Matched");
      toast.error("Password not Matched");
      return;
    }
    login(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setError('')
      toast.success("Successfully Login Your Account", {autoClose: 500});
      form.reset();
    })
    .catch(error=>{
      setError(error.message);
      toast.error(error.message, {autoClose: 500})
    })
  }
    const handalGoogle = () => {
      loginGoogle()
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace: true });
          toast.success("Successfully Login With Google", { autoClose: 500 });
        })
        .catch((error) => toast.error(error.message, { autoClose: 500 }));
    };
    const handalGithub = () => {
      loginGithub()
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace: true });
          toast.success("Successfully Login With Github", { autoClose: 500 });
        })
        .catch((error) => toast.error(error.message, { autoClose: 500 }));
    };
    return (
      <div>
        <div className="relative">
          <img
            src="https://i.ibb.co/60ydNdw/hero-1-jpg.webp"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <p className="badge badge-secondary">
                    Best IT Training Institute in the country
                  </p>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl sm:leading-none">
                    Let the career <br className="hidden md:block" />
                    begin Confidence{" "}
                    <span className="text-teal-accent-400">in skills</span>
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                    With experienced mentors and updated curriculum, Freelancing
                    Educare Institute is ready to advance your career. Choose
                    your favorite course today from our more than 30 trendy
                    courses.
                  </p>
                  <Link
                    to="/courses"
                    aria-label=""
                    className="inline-flex items-center text-secondary-focus font-semibold btn btn-link"
                  >
                    Our Courses
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Login Your Account
                    </h3>
                    <form>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="Enter Your Email"
                          required
                          type="email"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="password"
                          className="inline-block mb-1 font-medium"
                        >
                          Password
                        </label>
                        <input
                          placeholder="Enter Your Password"
                          required
                          type="password"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="password"
                          name="password"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="confrimPassword"
                          className="inline-block mb-1 font-medium"
                        >
                          Confrim Password
                        </label>
                        <input
                          placeholder="Enter Your Confrim Password"
                          required
                          type="password"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="confrimPassword"
                          name="confrimPassword"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2 text-error">{error}</div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          onClick={handalLogin}
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white btn btn-primary"
                        >
                          Login
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 sm:text-sm">
                        New In Freelancing Educare?{" "}
                        <Link to="/register" className="btn btn-link">
                          Create an account
                        </Link>
                      </p>
                    </form>
                    <div className="my-3">
                      <button
                        onClick={handalGoogle}
                        className="btn btn-outline btn-secondary"
                        style={{ marginRight: "5px" }}
                      >
                        Login With Google
                      </button>
                      <button
                        onClick={handalGithub}
                        className="btn btn-outline"
                      >
                        Login With Github
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 mt-[-30px] lg:mt-[-50px]">
          {data.map((about) => (
            <Advantage about={about} key={about.id}></Advantage>
          ))}
        </div>
        <div className="success-section">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold badge badge-primary">
                      13 years of success
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Making IT Expert Trusted
                    <br className="hidden md:block" />
                    organization{" "}
                    <span className="inline-block text-deep-purple-accent-400">
                      in the world
                    </span>
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Freelancing Educare Institute is at your side to keep
                    yourself updated with modern technology. Be it IT sector or
                    non-IT sector, IT experts are now in good demand everywhere.
                    That is why we have been creating IT experts for 13 years
                    with updated curriculum, experienced mentors and modern
                    labs. As a result of this, we have found more than 50
                    thousand successful faces, who have become self-reliant and
                    created employment for more people. And the success of these
                    students is the inspiration for our journey. We believe that
                    every human being is talented, and it is our responsibility
                    to develop your talent. All that is required is your
                    interest and regular practice.
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <Link
                    to="/courses"
                    className="btn btn-outline btn-secondary mr-3"
                  >
                    Our Courses
                  </Link>
                  <Link
                    to="/"
                    aria-label=""
                    className="btn btn-outline btn-primary mt-2 md:mt-0"
                  >
                    Get 15% discount
                  </Link>
                </div>
              </div>
              <div className="relative lg:w-1/2">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="https://i.ibb.co/YRjVKY9/02-default.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;