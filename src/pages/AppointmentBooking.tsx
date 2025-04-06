import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const AppointmentBooking = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <Calendar className="w-5 h-5" />
              <h2>Select Date</h2>
            </div>
            <div className="border rounded-lg p-4">
              {/* Calendar placeholder - To be implemented */}
              <p className="text-gray-500">Calendar component will be implemented here</p>
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <Clock className="w-5 h-5" />
              <h2>Select Time</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                <button
                  key={time}
                  className="p-3 text-sm border rounded-md hover:bg-blue-50 hover:border-blue-500 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;