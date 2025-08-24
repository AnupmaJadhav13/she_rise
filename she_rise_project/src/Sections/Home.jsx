export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-indigo-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-blue-600">SheRise</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            A platform where <span className="font-semibold">ambition meets guidance</span>and
            <span className="font-semibold"> innovation meets opportunity. </span> Together With
            <span className="font-semibold"> Mentor Counselling </span>,
            <span className="font-semibold">Enhance your learning through our courses</span>
            <span className="font-semibold">Grow or Expand Your Business Connect and Community Forum</span>. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg font-semibold">
              🚀 Get Started
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-blue-50 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Mentor Connect */}
          <a href="/mentor-connect" className="group">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200">
                <span className="text-blue-600 font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                Mentor Connect
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with expert mentors to guide your career journey and help you achieve your goals.
              </p>
              <span className="text-blue-600 font-medium group-hover:underline">Explore Mentors →</span>
            </div>
          </a>

          {/* Courses */}
          <a href="/courses" className="group">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200">
                <span className="text-indigo-600 font-bold text-2xl">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition-colors">
                Courses
              </h3>
              <p className="text-gray-600 mb-4">
                Explore curated courses that empower you with knowledge and skills for the future.
              </p>
              <span className="text-indigo-600 font-medium group-hover:underline">Explore Courses →</span>
            </div>
          </a>

          {/* Business Connect */}
          <a href="/business-connect" className="group">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200">
                <span className="text-teal-600 font-bold text-2xl">B</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-600 transition-colors">
                Business Connect
              </h3>
              <p className="text-gray-600 mb-4">
                Network with entrepreneurs, investors, and leaders to grow your business.
              </p>
              <span className="text-teal-600 font-medium group-hover:underline">Start Networking →</span>
            </div>
          </a>

          {/* Community Forum */}
          <a href="/community-forum" className="group">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-200">
                <span className="text-cyan-600 font-bold text-2xl">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">
                Community Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Join discussions with like-minded professionals and share valuable knowledge.
              </p>
              <span className="text-cyan-600 font-medium group-hover:underline">Join Discussions →</span>
            </div>
          </a>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-gray-200 p-12 text-center shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">🌟 Join Our Growing Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-700">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">850+</div>
              <div className="text-gray-700">Mentors Available</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-teal-600 mb-2">1,200+</div>
              <div className="text-gray-700">Successful Connections</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
