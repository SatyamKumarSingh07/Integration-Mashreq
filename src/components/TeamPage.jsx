import React from 'react';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-orange-300">
      <div className="py-16 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Integration Team Structure
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Meet the dedicated professionals behind our success
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-40 py-12">
        <div className="bg-red-200 rounded-xl shadow-lg p-8">
          <img
            src="/fino.webp"
            alt="Integration Team Structure"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Team Overview</h2>
            <p className="text-gray-600">
              Our integration team consists of skilled professionals organized in a 
              structured hierarchy to ensure efficient delivery of solutions. Each team 
              member brings unique expertise and contributes to our collective success.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Approach</h2>
            <p className="text-gray-600">
              We follow a collaborative approach where team members work together 
              seamlessly across different levels and specializations. This structure 
              enables us to handle complex integration projects effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;