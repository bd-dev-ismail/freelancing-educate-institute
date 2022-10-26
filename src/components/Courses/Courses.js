import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../AllCourses/AllCourses';
import Coursesidebar from '../CourseSidebar/Coursesidebar';
import './Courses.css'
const Courses = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
      <div className="dark:bg-black">
        {" "}
        <div className="dark:text-white px-4 pt-8 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="text-center">
            <h3 className="text-5xl pb-4 font-semibold">Popular Courses</h3>
            <p className="text-sm ">
              Our course list is arranged with those skills which are currently
              in most demand in the country and outside the country. From here
              you can enroll in online or offline courses anytime at your
              convenience.
            </p>
          </div>
          <div
            className="lg:grid gap-4 lg:my-10 my-3"
            style={{ gridTemplateColumns: "1fr 3fr" }}
          >
            <div id="course-title">
              <h3 className="text-2xl font-bold">Courses Categories:</h3>
              {allCourses.map((courses) => (
                <Coursesidebar courses={courses} key={courses.id} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              {allCourses.map((courses) => (
                <AllCourses courses={courses} key={courses.id}></AllCourses>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Courses;