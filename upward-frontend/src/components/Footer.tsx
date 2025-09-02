import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">UPWARD</h2>
          <p className="mt-3 text-sm text-gray-400">
            Empowering traders with insights, analytics, and tools for smarter investing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="#" className="hover:text-blue-400 transition">Explore</a>
          <a href="#" className="hover:text-blue-400 transition">Watchlist</a>
          <a href="#" className="hover:text-blue-400 transition">Portfolio</a>
          <a href="#" className="hover:text-blue-400 transition">Support</a>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} UPWARD. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
