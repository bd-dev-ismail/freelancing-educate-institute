import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advantage from '../Advantage/Advantage';

const Faq = () => {
    const data = useLoaderData();
    return (
      <div className="dark:bg-black ">
        <div className="container mx-auto dark:text-white">
          <h3 className="text-5xl pt-20 text-center  pb-6 font-semibold">
            Our Institute Features
          </h3>
          <p className="text-center">
            Freelancing Educare Institute is a trusted organization dedicated to
            creating breakthroughs in IT. Since its inception, Freelancing
            Educare has achieved multifaceted success in the long 13 years.
            Contributing to the construction of digital Bangladesh. One of the
            leading IT companies in Bangladesh has been playing an important
            role in eliminating the unemployment problem since 2008.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 pt-20 pb-20">
          {data.map((about) => (
            <Advantage about={about} key={about.id}></Advantage>
          ))}
        </div>
      </div>
    );
};

export default Faq;