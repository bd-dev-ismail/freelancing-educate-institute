import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './AllCourses.css'
const AllCourses = ({courses}) => {
    console.log(courses);
    const { name, course_fees, student, review ,img, id} = courses;
    return (
      <div>
        <div className="all-courses   col-span-1">
          <div className="course-title p-2 ">
            <div className="text-2xl hover:text-secondary-focus">
              {" "}
              <Link to={`/courses/${id}`}>{name}</Link>
            </div>
          </div>
          <div className="course-card col-span-2">
            <div>
              <div className="card lg:card-side h-full bg-base-100 shadow-xl">
                <figure>
                  <img src={img} alt="Album" className="w-80" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <div>
                    <p className="text-warning">
                      <span className="flex justify-start items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <p className="text-black ml-2">{review} reviews</p>
                      </span>
                    </p>
                    <p>Student: {student}</p>
                    <p>
                      Course Fees:{" "}
                      <span className="font-bold">${course_fees}</span>
                    </p>
                  </div>

                  <div className="card-actions justify-end">
                    <Link to={`/courses/${id}`}>
                      <button className="btn btn-primary">
                        Course Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCourses;