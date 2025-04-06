import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, MapPin, AlertCircle, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Your Health, Our Priority
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience healthcare reimagined with AI-powered diagnosis, seamless appointments, and instant medical assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/emergency"
            className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Emergency Help
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Stethoscope className="w-8 h-8 text-blue-500" />}
          title="AI-Powered Diagnosis"
          description="Get accurate preliminary diagnoses through our advanced AI system and expert doctor verification."
        />
        <FeatureCard
          icon={<Calendar className="w-8 h-8 text-green-500" />}
          title="Smart Appointments"
          description="Book and manage appointments effortlessly with real-time queue updates and waiting time predictions."
        />
        <FeatureCard
          icon={<MapPin className="w-8 h-8 text-purple-500" />}
          title="Clinic Finder"
          description="Locate the nearest clinics with detailed information about facilities, fees, and availability."
        />
        <FeatureCard
          icon={<AlertCircle className="w-8 h-8 text-red-500" />}
          title="Emergency Response"
          description="Quick access to emergency services with one-tap SOS alerts and family notifications."
        />
        <FeatureCard
          icon={<MessageSquare className="w-8 h-8 text-indigo-500" />}
          title="Medical Chatbot"
          description="Get instant answers about medications, dosages, and general health queries."
        />
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-500 text-white py-16 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-xl mb-8">Join thousands of users who trust us with their healthcare needs.</p>
        <Link
          to="/register"
          className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Create Free Account
        </Link>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;