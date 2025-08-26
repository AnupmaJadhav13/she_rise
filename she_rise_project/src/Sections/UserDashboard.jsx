import { useState, useEffect } from "react";

// Example notifications and courses
const sampleCourses = [
  { id: 1, title: "Web Development Basics", progress: 60 },
  { id: 2, title: "AI & Machine Learning", progress: 25 },
];

const sampleNotifications = [
  { id: 1, message: "New course added: React Advanced", date: "2025-08-25" },
  { id: 2, message: "Mentor reply on your query", date: "2025-08-24" },
];

export default function UserDashboard() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profilePic: null,
  });
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    setCourses(sampleCourses);
    setNotifications(sampleNotifications);
  }, []);

  // Handle profile changes
  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setUser({ ...user, profilePic: URL.createObjectURL(files[0]) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const updatePassword = () => {
    if (password.new !== password.confirm) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {user.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
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
              value={user.name}
              placeholder="Full Name"
              onChange={handleProfileChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={user.email}
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

      {/* Password Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="space-y-3 max-w-md">
          <input
            type="password"
            name="current"
            placeholder="Current Password"
            value={password.current}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="new"
            placeholder="New Password"
            value={password.new}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm New Password"
            value={password.confirm}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded"
          />
          <button
            onClick={updatePassword}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Learning Paths / Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{course.title}</h3>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="border-b pb-2 last:border-b-0 last:pb-0"
            >
              <p>{note.message}</p>
              <span className="text-gray-400 text-sm">{note.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
