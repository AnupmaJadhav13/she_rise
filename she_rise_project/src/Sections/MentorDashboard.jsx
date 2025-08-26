import { useState, useEffect } from "react";

// Sample data for requests and courses
const sampleRequests = [
  { id: 1, user: "Jane Doe", course: "Web Development Basics" },
  { id: 2, user: "John Smith", course: "AI & Machine Learning" },
];

const sampleCourses = [
  { id: 1, title: "React Basics", type: "Video Playlist" },
  { id: 2, title: "CSS Advanced", type: "Study Material" },
];

export default function MentorDashboard() {
  const [mentor, setMentor] = useState({
    name: "Mentor Name",
    email: "mentor@example.com",
    profilePic: null,
  });

  const [requests, setRequests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", type: "" });

  useEffect(() => {
    setRequests(sampleRequests);
    setCourses(sampleCourses);
  }, []);

  // Handle profile changes
  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setMentor({ ...mentor, profilePic: URL.createObjectURL(files[0]) });
    } else {
      setMentor({ ...mentor, [name]: value });
    }
  };

  // Handle request actions
  const handleRequest = (id, action) => {
    alert(`Request ${action === "accept" ? "accepted" : "rejected"}!`);
    setRequests(requests.filter((req) => req.id !== id));
  };

  // Handle new course upload
  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const uploadCourse = () => {
    if (!newCourse.title || !newCourse.type) {
      alert("Please fill all fields!");
      return;
    }
    setCourses([...courses, { id: Date.now(), ...newCourse }]);
    setNewCourse({ title: "", type: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Mentor Dashboard</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {mentor.profilePic ? (
              <img
                src={mentor.profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="flex justify-center items-center h-full text-gray-400">
                No Photo
              </span>
            )}
          </div>
          <div className="flex-1 space-y-3">
            <input
              type="text"
              name="name"
              value={mentor.name}
              placeholder="Full Name"
              onChange={handleProfileChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={mentor.email}
              placeholder="Email"
              onChange={handleProfileChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="file"
              name="profilePic"
              onChange={handleProfileChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Requests Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">User Requests</h2>
        {requests.length === 0 ? (
          <p>No requests at the moment.</p>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="flex justify-between items-center border p-4 rounded-lg mb-2"
            >
              <div>
                <p>
                  <strong>{req.user}</strong> requested: {req.course}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRequest(req.id, "accept")}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRequest(req.id, "reject")}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Courses Upload Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload Course / Study Material</h2>
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={handleCourseChange}
            className="w-full border p-2 rounded"
          />
          <select
            name="type"
            value={newCourse.type}
            onChange={handleCourseChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Video Playlist">Video Playlist</option>
            <option value="Study Material">Study Material</option>
          </select>
          <button
            onClick={uploadCourse}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Courses</h3>
          {courses.map((course) => (
            <div
              key={course.id}
              className="border p-3 rounded mb-2 flex justify-between"
            >
              <span>{course.title}</span>
              <span className="text-gray-500">{course.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
