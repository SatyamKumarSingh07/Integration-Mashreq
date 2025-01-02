import React from 'react';
import { ArrowRight, Target, Users, Lightbulb, Code, GitBranch, BarChart } from 'lucide-react';

const AboutIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-orange-200 to-blue-300">
      <div className="py-16 bg-gradient-to-r from-blue-400 via-red-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            About Our Integration Team
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Transforming complex challenges into seamless solutions through innovation and expertise
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block p-3 bg-orange-200 rounded-lg">
              <Target className="w-8 h-8 text-red-800" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900">Our Work Motive</h2>
            <p className="text-lg text-black">
              We strive to create innovative solutions that bridge technological gaps and 
              enhance business efficiency. Our team is dedicated to delivering excellence 
              through careful planning, precise execution, and continuous improvement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-200 p-6 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-red-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-gray-600">Working together to achieve exceptional results</p>
            </div>
            <div className="bg-red-200 p-6 rounded-xl shadow-lg">
              <Lightbulb className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Pushing boundaries with creative thinking</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-600 via-orange-200 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-100 p-8 rounded-xl shadow-lg">
              <Code className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly connecting different systems and applications to work as one 
                unified solution.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>API Development</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>Data Migration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-100 p-8 rounded-xl shadow-lg">
              <GitBranch className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamlining workflows and automating repetitive tasks to improve 
                efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>Workflow Optimization</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>Custom Automation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-100 p-8 rounded-xl shadow-lg">
              <BarChart className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Performance Analysis</h3>
              <p className="text-gray-600 mb-4">
                Monitoring and optimizing system performance to ensure peak efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>System Monitoring</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-orange-600 mr-2" />
                  <span>Performance Tuning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutIntegration;