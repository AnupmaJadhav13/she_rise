import Navbar from "../Components/Navbar";

export default function BusinessConnect() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">BusinessConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Network with entrepreneurs, investors, and business leaders to grow your business and explore new
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-12">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search businesses, opportunities, or investors..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
              Add Your Business
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
