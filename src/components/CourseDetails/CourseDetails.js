import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const componentRef = useRef();
  const {
    name,
    course_fees,
    details,
    img,
    review,
    student,
    desc,
    category_id,
  } = courseDetails;
    
  const handalPrint = useReactToPrint({
    content: () => componentRef.current,
  })
    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    },[])

    return (
      <div className="dark:bg-black">
        <div className="success-section">
          <div className="px-4 py-16 mx-auto dark:text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mt-10 flex justify-center items-center">
              <button onClick={handalPrint} className="btn btn-outline btn-secondary">
                {" "}
                Download PDF
              </button>
             
            </div>

            <div ref={componentRef} className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6">
                  <div>
                    <p className="inline-block px-3 py-px mt-6 mb-4 text-xs font-semibold badge badge-primary dark:badge-secondary">
                      Freelancing Educare Institute
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none dark:text-white">
                    {name}
                  </h2>
                  <div className="flex my-3">
                    <div className="flex text-warning items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <p className="text-black dark:text-white ml-2 font-semibold text-sm">
                        {review}
                      </p>
                    </div>
                    <div>
                      <p className="text-black ml-2 font-semibold text-sm">
                        {student}+ Students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-5">
                    <div className="course-duration shadow-lg border border-gray-600 rounded-lg p-2">
                      <p className="text-sm font-semibold">Course Duration</p>
                      <p className="text-xl font-bold">
                        {details?.duration} Month
                      </p>
                    </div>
                    <div className="course-lecture shadow-lg border border-gray-600 rounded-lg p-2">
                      <p className="text-sm font-semibold">Leacture</p>
                      <p className="text-xl font-bold">
                        {details?.class} Module
                      </p>
                    </div>
                    <div className="course-project shadow-lg border border-gray-600 rounded-lg p-2">
                      <p className="text-sm font-semibold">Projects</p>
                      <p className="text-xl font-bold dark:text-white">
                        {details?.project}
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 md:text-lg dark:text-white">
                    {desc}
                  </p>
                  <p className="text-xl my-2">
                    Course Fee:{" "}
                    <span className="font-bold">${course_fees}</span>
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <Link
                    to={`/checkout/${category_id}`}
                    aria-label=""
                    className="btn btn-outline btn-primary mt-2 md:mt-0"
                  >
                    Get Premium Access
                  </Link>
                </div>
              </div>
              <div className="relative lg:w-1/2">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={img ? img : "https://i.ibb.co/sPgWYJB/graphic.jpg"}
                  alt=".."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;