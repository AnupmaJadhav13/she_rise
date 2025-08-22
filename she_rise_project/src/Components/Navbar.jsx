
export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/*logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-swmibold text-gray-900">SheRise</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                        </a>
                        <a href="/mentor-connect" className="text-gray-600 hover:text-gray-900">
                        Mentor Connect
                        </a>
                        <a href="/business-connect" className="text-gray-600 hover:text-gray-900">
                        Business Connect            
                        </a>
                        <a href="/community-forum" className="text-gray-600 hover:text-gray-900">
                        Community Forum
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-gray-900">
                        About Us
                        </a>
                    </div>                      
                </div>
            </div>
        </nav>
    )
}
