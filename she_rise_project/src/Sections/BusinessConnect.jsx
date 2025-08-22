import { useState } from "react"
import AddBusinessForm from "../Components/AddUrBusinessForm" ;


export default function BusinessConnect() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">BusinessConnect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Network with entrepreneurs, investors, and business leaders to grow your business and explore new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-12">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search businesses, opportunities, or investors..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Your Business
            </button>
          </div>
        </div>

        {/* Sample Business Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <img
              src="/modern-tech-startup-office.png"
              alt="Tech Startup"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">TechFlow Solutions</h3>
            <p className="text-gray-500 text-sm mb-3">Innovative software solutions for modern businesses</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Technology</span>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition">Connect</button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <img
              src="/artisan-coffee-shop.png"
              alt="Coffee Shop"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Artisan Coffee Co.</h3>
            <p className="text-gray-500 text-sm mb-3">Premium coffee and cozy workspace for professionals</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Food & Beverage</span>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition">Connect</button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <img
              src="/modern-gym-equipment.png"
              alt="Fitness Center"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">FitLife Wellness</h3>
            <p className="text-gray-500 text-sm mb-3">Complete fitness and wellness solutions for healthy living</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Healthcare</span>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition">Connect</button>
            </div>
          </div>
        </div>
      </main>

      {showForm && <AddBusinessForm onClose={() => setShowForm(false)} />}
    </div>
  )
}
