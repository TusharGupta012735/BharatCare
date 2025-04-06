import React from 'react';
import { MapPin } from 'lucide-react';

const ClinicFinder = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Find a Clinic</h1>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location or postal code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            Enter your location above to find clinics near you. You'll be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>View clinic locations on a map</li>
            <li>Check clinic hours and services</li>
            <li>Read patient reviews and ratings</li>
            <li>Book appointments directly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicFinder;