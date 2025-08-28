export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical, simple, and market-ready skills designed for young rural women. 
            Learn at your own pace — anytime, anywhere.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Technology", "Personal Growth", "Entrepreneurship", "Creativity"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white shadow rounded-full hover:bg-indigo-100 text-gray-700 text-sm transition-transform transform hover:scale-105"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Basic Computer Skills", desc: "Learn computer, internet & email.", level: "Beginner", rating: "⭐ 4.7", progress: "0%", mentor: "Anita" },
            { title: "Spoken English", desc: "Improve daily communication skills.", level: "Beginner", rating: "⭐ 4.8", progress: "20%", mentor: "Rohit" },
            { title: "Handicrafts & Sewing", desc: "Creative skills for small business.", level: "Intermediate", rating: "⭐ 4.5", progress: "Not Started", mentor: "Sunita" },
            { title: "Digital Entrepreneurship", desc: "Start & grow an online business.", level: "Advanced", rating: "⭐ 4.9", progress: "50%", mentor: "Priya" },
            { title: "Financial Literacy", desc: "Learn money management & savings.", level: "Beginner", rating: "⭐ 4.6", progress: "Completed", mentor: "Meena" },
            { title: "Personal Development", desc: "Boost confidence & life skills.", level: "Beginner", rating: "⭐ 4.7", progress: "10%", mentor: "Kavita" },
          ].map((course, i) => (
            <div 
              key={i} 
              className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full">{course.level}</span>
                <span className="text-xs">{course.rating}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-indigo-700">{course.title}</h2>
              <p className="mt-2 text-gray-600">{course.desc}</p>

              {/* Mentor */}
              <p className="mt-2 text-sm text-gray-500">👩‍🏫 Guided by: {course.mentor}</p>
              
              {/* Progress */}
              <p className="mt-3 text-sm text-gray-500">📈 Progress: {course.progress}</p>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105">
                  ▶ Watch
                </button>
                <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-transform transform hover:scale-105">
                  📚 Enroll
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-transform transform hover:scale-105">
                  More ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Engagement Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">🌸 Join Our Learning Community</h2>
          <p className="mt-2 text-gray-600">Ask questions, share progress, and connect with other learners.</p>
          <button className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition-transform transform hover:scale-105">
            Join Discussion Forum
          </button>
        </div>

      </main>
    </div>
  );
}
