import React from 'react';
import { Link } from 'react-router-dom';

const Integration = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-orange-400 via-blue-300 to-orange-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-6">
              We are a dedicated team of innovators and problem solvers, committed to 
              delivering cutting-edge solutions for our clients. Our expertise spans 
              across various domains, ensuring comprehensive and effective results 
              for every project we undertake.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-2 bg-orange-900 text-white rounded-lg hover:bg-orange-700 transition-colors hover:scale-110"
            >
              See More
            </Link>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src="/Integration.jpeg"
              alt="Integration"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Integration Team</h2>
            <p className="text-gray-600 mb-6">
              Our integration team consists of skilled professionals who specialize
              in seamlessly connecting different systems and technologies. With years
              of experience in system integration, we ensure smooth and efficient
              implementation of all solutions.
            </p>
            <Link
              to="/team"
              className="inline-block px-6 py-2 bg-orange-900 text-white rounded-lg hover:bg-orange-700 transition-colors hover:scale-110"
            >
              View Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;