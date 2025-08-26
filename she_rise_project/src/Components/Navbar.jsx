import { useState } from "react";
import { Link } from "react-router-dom";
import AuthPopup from "./AccountPopup"; 
import UserDashboard from "../Sections/UserDashboard";
import MentorDashboard from "../Sections/MentorDashboard"; // Import mentor dashboard

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track user role: "user" or "mentor"
  const [role, setRole] = useState(null);

  const handleLoginSuccess = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole); // Set role on login
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDashboard(false);
    setRole(null);
  };

  return (
    <>
      <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-200">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 ml-25">
            <img src="/img1.png" alt="SheRise Logo" className="h-12 w-12 mr-4" />
            <h1 className="text-3xl font-bold text-white">SheRise</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center text-lg mr-29">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/courses" className="text-white hover:text-gray-300">Courses</Link>
            <Link to="/mentor-connect" className="text-white hover:text-gray-300">Mentor Counselling</Link>
            <Link to="/business-connect" className="text-white hover:text-gray-300">Grow Ur Business</Link>
            <Link to="/community-forum" className="text-white hover:text-gray-300">Community Forum</Link>

            {!isLoggedIn ? (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center px-6 py-3 border border-white-500 rounded-full text-white hover:bg-orange-50 text-lg"
              >
                Login
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowDashboard(!showDashboard)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-3xl font-bold focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 pt-4 pb-6 space-y-2 text-lg">
            <Link to="/" className="block text-white hover:text-gray-300">Home</Link>
            <Link to="/courses" className="block text-white hover:text-gray-300">Courses</Link>
            <Link to="/mentor-connect" className="block text-white hover:text-gray-300">Mentor Counselling</Link>
            <Link to="/business-connect" className="block text-white hover:text-gray-300">Grow Ur Business</Link>
            <Link to="/community-forum" className="block text-white hover:text-gray-300">Community Forum</Link>

            {!isLoggedIn ? (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="w-full mt-2 px-6 py-3 border border-white-500 rounded-full text-white hover:bg-orange-50 text-lg"
              >
                Login
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowDashboard(!showDashboard)}
                  className="w-full mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}

        {/* Auth Popup */}
        <AuthPopup
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={handleLoginSuccess} // pass role when login succeeds
        />
      </nav>

      {/* Show Dashboard based on role */}
      {isLoggedIn && showDashboard && (
        <>
          {role === "mentor" ? <MentorDashboard /> : <UserDashboard />}
        </>
      )}
    </>
  );
}
