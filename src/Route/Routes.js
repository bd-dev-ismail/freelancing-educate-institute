import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/courses', element: <Courses></Courses>
        },
        {
            path: '/faq', element: <Faq></Faq>
        },
        {
            path: '/blog', element: <Blog></Blog>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        }
    ]}
])