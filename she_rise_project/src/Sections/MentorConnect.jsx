import { useState } from "react"
import { Star } from "lucide-react"

const MentorConnect = () => {
  // Dummy data
  const mentors = [
    {
      id: 1,
      name: "Dr. Aarti Sharma",
      domain: "Data Science",
      qualifications: "PhD in Computer Science, 10+ years experience",
      rating: 4.8,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      domain: "Web Development",
      qualifications: "M.Tech, Full Stack Developer @ Infosys",
      rating: 4.5,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Sneha Patil",
      domain: "Cybersecurity",
      qualifications: "Certified Ethical Hacker, 8 years industry experience",
      rating: 4.7,
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

  const [search, setSearch] = useState("")

  // Filter mentors by search input
  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.domain.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">MentorConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find experienced mentors to guide your career journey and help you achieve your professional goals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search mentors by name or domain..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center 
              transform transition duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />

              {/* Mentor Info */}
              <h2 className="text-xl font-semibold text-gray-900">{mentor.name}</h2>
              <p className="text-indigo-600 font-medium">{mentor.domain}</p>
              <p className="text-sm text-gray-600 mt-2">{mentor.qualifications}</p>

              {/* Rating */}
              <div className="flex items-center justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(mentor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-700">{mentor.rating}</span>
              </div>

              {/* Connect Button */}
              <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                Send Connect Request
              </button>
            </div>
          ))}
        </div>

        {/* If no mentors found */}
        {filteredMentors.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No mentors found.</p>
        )}
      </main>
    </div>
  )
}

export default MentorConnect
