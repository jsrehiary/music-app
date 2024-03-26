// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4 px-9 flex justify-between items-start w-full">
      {/* Left side navigation */}
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">Home</a>
        </li>
        <li>
          <a href="/" className="text-white">About</a>
        </li>
      </ul>

      {/* Center search bar */}
      <div className="flex text-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white border-2 border-gray-600 rounded-full py-1 px-4 w-full"
        />
      </div>

      {/* Right side profile avatar */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-white">John Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;
