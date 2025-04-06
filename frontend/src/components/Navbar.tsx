import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, isAuthenticated } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-semibold text-gray-800">HealthCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">Dashboard</Link>
                <Link to="/appointments" className="text-gray-600 hover:text-blue-500">Appointments</Link>
                <Link to="/clinics" className="text-gray-600 hover:text-blue-500">Find Clinics</Link>
                <Link to="/emergency" className="text-red-500 hover:text-red-600">Emergency</Link>
                <Link to="/profile" className="flex items-center space-x-2">
                  <img
                    src={user?.profileImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'}
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-gray-600">{user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-500">Login</Link>
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2">
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 py-2">Dashboard</Link>
                <Link to="/appointments" className="text-gray-600 hover:text-blue-500 py-2">Appointments</Link>
                <Link to="/clinics" className="text-gray-600 hover:text-blue-500 py-2">Find Clinics</Link>
                <Link to="/emergency" className="text-red-500 hover:text-red-600 py-2">Emergency</Link>
                <Link to="/profile" className="flex items-center space-x-2 py-2">
                  <img
                    src={user?.profileImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'}
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-gray-600">{user?.name}</span>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login" className="text-gray-600 hover:text-blue-500 py-2">Login</Link>
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center">
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;