import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/*logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-gray-900">SheRise</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  )
}
