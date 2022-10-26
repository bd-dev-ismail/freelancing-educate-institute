import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { jsPDF } from "jspdf";
const CourseDetails = () => {
    const courseDetails = useLoaderData();

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
    const pdfGenerate=()=>{
        const doc = new jsPDF("landscape", "px", "a4", "false");
        
        doc.addImage(img, "PNG", 65, 20, 500, 400);
        doc.setFontSize(40);
        doc.text(name, 35, 25);
        
        doc.save("details.pdf");
    }
    return (
      <div>
        <div className="success-section">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold badge badge-primary">
                      To build a career in design and color games
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {name}
                  </h2>
                  <div className="flex my-3">
                    <div className="flex text-warning items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <p className="text-black ml-2 font-semibold text-sm">
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
                      <p className="text-xl font-bold">{details?.project}</p>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 md:text-lg">{desc}</p>
                  <p className="text-xl my-2">
                    Course Fee:{" "}
                    <span className="font-bold">${course_fees}</span>
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <button
                    className="btn btn-outline btn-secondary mr-3"
                    onClick={pdfGenerate}
                  >
                    {" "}
                    Download PDF
                  </button>

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
                  src={img}
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