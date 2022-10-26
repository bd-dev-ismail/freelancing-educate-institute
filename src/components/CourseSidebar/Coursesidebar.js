import React from 'react';
import { Link } from 'react-router-dom';

const Coursesidebar = ({ courses }) => {
  console.log(courses);
  const { name, id} = courses;
  return (
    <div>
      <Link to={`/courses/${id}`}>
        <h3 className="text-2xl shadow-2xl p-3 hover:text-secondary cursor-pointer my-2 w-full ">
          {name}
        </h3>
      </Link>
    </div>
  );
};

export default Coursesidebar;