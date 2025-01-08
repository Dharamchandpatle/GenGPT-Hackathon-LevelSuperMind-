import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaChartBar, FaClipboardList, FaCogs, FaUsers, FaGithub } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-transparent py-6">
      <div className="container mx-auto flex justify-between items-center px-12">
        {/* Logo or Brand */}
        <div className="text-black font-extrabold text-xl sm:text-2xl">
          <a href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            HackCode👨‍💻
          </a>
        </div>

        {/* Navbar for larger screens */}
        <nav className="hidden sm:flex space-x-8">
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/")}
          >
            <FaHome className="inline-block mr-2" />
            Home
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/analyze")}
          >
            <FaChartBar className="inline-block mr-2" />
            Analysis & Social Media
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/overview")}
          >
            <FaClipboardList className="inline-block mr-2" />
            Overview
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/features")}
          >
            <FaCogs className="inline-block mr-2" />
            Features
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/team")}
          >
            <FaUsers className="inline-block mr-2" />
            Team
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => window.open("https://github.com/rahulpatil298/Social_media-HackCode-", "_blank")}
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-black text-3xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                navigate("/");
                toggleMobileMenu();
              }}
            >
              <FaHome className="inline-block mr-2" />
              Home
            </button>
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                navigate("/analyze");
                toggleMobileMenu();
              }}
            >
              <FaChartBar className="inline-block mr-2" />
              Analysis & Social Media
            </button>
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                navigate("/overview");
                toggleMobileMenu();
              }}
            >
              <FaClipboardList className="inline-block mr-2" />
              Overview
            </button>
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                navigate("/features");
                toggleMobileMenu();
              }}
            >
              <FaCogs className="inline-block mr-2" />
              Features
            </button>
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                navigate("/team");
                toggleMobileMenu();
              }}
            >
              <FaUsers className="inline-block mr-2" />
              Team
            </button>
            <button
              className="text-black hover:text-gray-700"
              onClick={() => {
                window.open("https://github.com", "_blank");
                toggleMobileMenu();
              }}
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
