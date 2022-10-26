import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './AllCourses.css'
const AllCourses = ({courses}) => {
    const { name, course_fees, student, review ,img, id} = courses;
    const navigate = useNavigate();
    const handalDetails = ()=>{
      navigate(`/courses/${id}`);
    }
    return (
      <div>
        <div
          onClick={handalDetails}
          className="card w-96 bg-base-100 shadow-2xl mb-5 cursor-pointer dark:text-black"
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">
              {name}
              <div className="badge badge-secondary">{student} Students</div>
            </h2>
            <div className="flex items-center">
              <p className="text-warning flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="font-semibold" style={{ marginLeft: "-150px" }}>
                {review} Reviews
              </p>
            </div>
            <div>
              <p className="text-lg">
                Course Fee: <span className="font-bold">${course_fees}</span>
              </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Course Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCourses;