import React from "react";
import { Logo } from "../Logo";

const Header = () => {
  return (
    <div className="p-4 heading font-tertiary">
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-4xl text-gray-800">ĀINA</div>
          <nav className="flex space-x-4 text-xl">
            <a
              href="/category/:category"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Products
            </a>

            <a
              href="/contact"
              className="text-gray-800 hover:text-orange-600 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
