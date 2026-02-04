import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-8xl mx-auto px-10">
                <div className="h-23 flex items-center justify-between">

                    {/* LOGO */}
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="World WebLogic"
                            className="h-20 w-auto object-cover"
                        />
                    </NavLink>

                    {/* NAVIGATION */}
                    <nav className="hidden md:flex items-center space-x-8">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-orange-500"
                                    : "text-gray-700 hover:text-orange-500"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        {/* ABOUT DROPDOWN */}
                        <div className="relative group">
                            <span className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition">
                                About
                            </span>

                            <div className="absolute left-0 top-full mt-3 w-52 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/about/who-we-are"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Who We Are
                                </NavLink>

                                <NavLink
                                    to="/about/why-choose-us"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                 Why World WebLogic
                                </NavLink>
                            </div>
                        </div>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-orange-500"
                                    : "text-gray-700 hover:text-orange-500"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* CTA */}
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
                        Login
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;
