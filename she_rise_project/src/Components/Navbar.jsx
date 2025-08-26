import { useState } from "react";
import { Link } from "react-router-dom";
import AuthPopup from "./AccountPopup"; 
export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-gray-900">SheRise</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link to="/mentor-connect" className="text-gray-600 hover:text-gray-900">
              Mentor Counselling 
            </Link>
            <Link to="/business-connect" className="text-gray-600 hover:text-gray-900">
              Grow Ur Business
            </Link>
            <Link to="/community-forum" className="text-gray-600 hover:text-gray-900">
              Community Forum
            </Link>

            {/* Login Button */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center px-4 py-2 border border-white-500 rounded-full text-gray-700 hover:bg-orange-50"
            >
              <span className="mr-2">Login</span>
              <div className="bg-blue-500 text-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A9 9 0 1118.364 4.56M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Auth Popup */}
      <AuthPopup isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
