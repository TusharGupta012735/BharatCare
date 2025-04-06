import React from "react";
import { Activity, Calendar, MapPin, MessageSquare, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/appointments"
              className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Calendar className="w-6 h-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-blue-900">
                Book Appointment
              </span>
            </a>
            <a
              href="/clinics"
              className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <MapPin className="w-6 h-6 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-900">
                Find Clinic
              </span>
            </a>
            <a
              href="/profile"
              className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <User className="w-6 h-6 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-purple-900">
                Health Profile
              </span>
            </a>
            <a
              href="/chatbot"
              className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-orange-900">
                Chat Support
              </span>
            </a>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Upcoming Appointments
          </h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Dr. Sarah Wilson</p>
                <p className="text-sm text-gray-600">Tomorrow at 10:00 AM</p>
              </div>
            </div>
            <a
              href="/appointments"
              className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Appointments →
            </a>
          </div>
        </div>

        {/* Health Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Health Overview
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-600">Last Check-up</span>
              </div>
              <span className="text-gray-900 font-medium">2 months ago</span>
            </div>
            <a
              href="/profile"
              className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View Health Profile →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
