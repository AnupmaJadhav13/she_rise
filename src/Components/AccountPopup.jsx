import { useState } from "react"

export default function AccountPopup({ isOpen, onClose, onAuthSuccess }) {
  const [role, setRole] = useState(null)
  const [formData, setFormData] = useState({})
  const [error, setError] = useState("")
  const [isSignIn, setIsSignIn] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files : value,
    })
  }

  const handleClose = () => {
    setRole(null)
    setFormData({})
    setError("")
    setIsSignIn(false)
    onClose()
  }

  const handleBack = () => {
    setRole(null)
    setFormData({})
    setError("")
    setIsSignIn(false)
  }

  const handleSignInSubmit = (e) => {
    e.preventDefault()

    if (!formData.username || !formData.password) {
      setError("Username and password are required")
      return
    }

    const userData = {
      name: formData.username,
      role: "user",
      email: formData.username + "@example.com", // Mock email for sign in
    }

    onAuthSuccess(userData)
    handleClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const userData = {
      name: formData.name || formData.username || "User",
      role,
      email: formData.email,
    }

    onAuthSuccess(userData)
    handleClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-3xl p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white text-lg font-bold"
          >
            ×
          </button>
          <h1 className="text-2xl font-bold text-center">
            {isSignIn
              ? "Welcome Back"
              : !role
                ? "Join Our Community"
                : role === "user"
                  ? "Create User Account"
                  : "Become a Mentor"}
          </h1>
          <p className="text-blue-100 text-center mt-2 text-sm">
            {isSignIn
              ? "Sign in to your account"
              : !role
                ? "Choose your path to get started"
                : "Fill in your details to continue"}
          </p>
        </div>

        <div className="p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 flex items-center gap-2">
              <span className="text-red-500">⚠</span>
              {error}
            </div>
          )}

          {isSignIn && (
            <form className="space-y-4" onSubmit={handleSignInSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsSignIn(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </form>
          )}

          {!role && !isSignIn && (
            <div className="text-center space-y-6">
              <div className="grid gap-4">
                <button
                  onClick={() => setRole("user")}
                  className="group p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                      👤
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Join as User</h3>
                      <p className="text-gray-600 text-sm">Connect with mentors and grow your skills</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setRole("mentor")}
                  className="group p-6 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center text-green-600 text-xl">
                      🎓
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Become a Mentor</h3>
                      <p className="text-gray-600 text-sm">Share your expertise and guide others</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          )}

          {role === "user" && !isSignIn && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          {role === "mentor" && !isSignIn && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Areas of Interest</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Technology", "Business", "Education", "Health", "Others"].map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="areaOfInterest"
                          value={interest}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          onChange={(e) => {
                            const selected = formData.areaOfInterest || []
                            if (e.target.checked) {
                              setFormData({ ...formData, areaOfInterest: [...selected, interest] })
                            } else {
                              setFormData({
                                ...formData,
                                areaOfInterest: selected.filter((item) => item !== interest),
                              })
                            }
                          }}
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Preferred Languages</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["English", "Hindi", "Marathi", "Gujarati", "Bengali"].map((lang) => (
                      <label
                        key={lang}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="languages"
                          value={lang}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          onChange={(e) => {
                            const selected = formData.languages || []
                            if (e.target.checked) {
                              setFormData({ ...formData, languages: [...selected, lang] })
                            } else {
                              setFormData({
                                ...formData,
                                languages: selected.filter((item) => item !== lang),
                              })
                            }
                          }}
                        />
                        <span className="text-sm text-gray-700">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  <input
                    type="text"
                    name="education"
                    placeholder="Enter your educational background"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education Proof</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="educationProof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Upload PDF, JPG, JPEG, or PNG files</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Become Mentor
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
