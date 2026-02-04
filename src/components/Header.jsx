import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-8xl mx-auto px-10">
                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-1">
                        <img
                            src={logo}
                            alt="World WebLogic"
                            className="h-17 w-auto object-cover"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-orange-500 font-medium transition"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-orange-500 font-medium transition"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-orange-500 font-medium transition"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
                        Login
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;
