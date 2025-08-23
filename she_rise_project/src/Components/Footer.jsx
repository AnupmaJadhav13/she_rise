import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected with Our Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest updates on business opportunities, mentorship programs, and community events delivered to
              your inbox.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">BusinessConnect</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering entrepreneurs and businesses to connect, grow, and thrive in today's competitive marketplace
                through mentorship and community support.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="hover:text-white transition-colors duration-200 flex items-center group">
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/business-connect"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Business Directory
                  </a>
                </li>
                <li>
                  <a
                    href="/mentor-connect"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Find Mentors
                  </a>
                </li>
                <li>
                  <a
                    href="/community-forum"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-white transition-colors duration-200 flex items-center group">
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Events & Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Business Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/services/mentorship"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Business Mentorship
                  </a>
                </li>
                <li>
                  <a
                    href="/services/networking"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Networking Events
                  </a>
                </li>
                <li>
                  <a
                    href="/services/consulting"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Business Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="/services/funding"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Funding Assistance
                  </a>
                </li>
                <li>
                  <a
                    href="/services/training"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Skills Training
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketplace"
                    className="hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Business Marketplace
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">123 Business District</p>
                    <p className="text-gray-400">Innovation Hub, Suite 456</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:hello@businessconnect.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    hello@businessconnect.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Business Hours</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} BusinessConnect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
