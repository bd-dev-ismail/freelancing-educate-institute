import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'
const AllCourses = ({courses}) => {
    console.log(courses);
    const { name, course_fees, student, review ,img} = courses;
    return (
      <div>
        <div className="all-courses   col-span-1">
          <div className="course-title p-2 ">
            <div className="text-2xl hover:text-secondary-focus">
              {" "}
              <Link>{name}</Link>
            </div>
          </div>
          <div className="course-card col-span-2">
            <div>
              <div className="card lg:card-side h-48 bg-base-100 shadow-xl">
                <figure>
                  <img src={img} alt="Album" className='w-80'/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
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