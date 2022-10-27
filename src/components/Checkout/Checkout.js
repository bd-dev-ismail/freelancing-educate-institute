import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const cart = useLoaderData();
    console.log(cart);
    const {name, course_fees, img} = cart;
    return (
      <div>
        <div className="flex min-h-[65vh] items-start justify-center dark:text-white dark:bg-black bg-gray-100 text-gray-900">
          <div className="flex flex-col max-w-3xl p-6 my-20 space-y-4 sm:p-10 ">
            <h2 className="text-xl font-semibold">
              Course Name: {name}
            </h2>
            <ul className="flex flex-col divide-y divide-gray-700"></ul>
            <div className="space-y-1 text-right lg:flex items-center justify-between" >
              <img
                src={img}
                alt=""
                className='w-80 h-44'
              />
              <div className="ml-5">
                <h4>
                  Course Fee: <span className="font-semibold">{course_fees}$</span>
                </h4>
                <h4 className="text-sm text-gray-400">
                  Not including taxes and shipping costs
                </h4>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Link to="/courses">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-full btn btn-outline btn-secondary"
                >
                  Back <span className="sr-only sm:not-sr-only" style={{marginLeft: '5px'}}>to Courses</span>
                </button>
              </Link>
              <button
                type="button"
                className="px-6 py-2 border font-semibold rounded-full btn btn-outline btn-primary"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Checkout;