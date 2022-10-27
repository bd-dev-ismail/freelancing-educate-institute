import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          fetch(
            "https://freelancing-educare-institute-server.vercel.app/about"
          ),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () =>
          fetch(
            "https://freelancing-educare-institute-server.vercel.app/about"
          ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () =>
          fetch(
            "https://freelancing-educare-institute-server.vercel.app/courses"
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) =>
          fetch(
            `https://freelancing-educare-institute-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://freelancing-educare-institute-server.vercel.app/checkout/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
        loader: async () =>
          fetch(
            "https://freelancing-educare-institute-server.vercel.app/about"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);