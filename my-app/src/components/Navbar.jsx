import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            DeepFake Detector
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/')} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/video" 
              className={`${isActive('/video')} hover:text-blue-600 transition-colors`}
            >
              Video Analysis
            </Link>
            <Link 
              to="/audio" 
              className={`${isActive('/audio')} hover:text-blue-600 transition-colors`}
            >
              Audio Analysis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;