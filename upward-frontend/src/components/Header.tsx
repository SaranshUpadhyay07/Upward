import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons: npm install lucide-react
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-black to-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-lg border-b border-gray-800 header">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
            <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-9 w-auto drop-shadow-md" 
            />
            <h4 className="text-2xl font-bold text-emerald-500 tracking-wide">
            UPWARD
            </h4>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/explore" className="text-lg font-medium hover:text-green-500 active:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Explore
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="/your-watchlist" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Watchlist
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="/your-portfolio" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Your Portfolio
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="more" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          More
        </Link>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="px-5 py-2 border-2 border-blue-600 text-white rounded hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/40">
          Login / Register
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-6 py-6 border-t border-gray-800 md:hidden z-50">
          <Link to="/explore" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Explore
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="/your-watchlist" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Watchlist
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="/your-portfolio" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          Your Portfolio
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="more" className="text-lg font-medium hover:text-green-500 shadowing-blue cursor-pointer transition duration-300">
          More
        </Link>
          <button className="px-5 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/40">
            Login / Register
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
