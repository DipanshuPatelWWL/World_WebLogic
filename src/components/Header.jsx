import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
                            <span className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1">
                                About
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
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
                                    Why Choose Us
                                </NavLink>
                            </div>
                        </div>


                        {/* Market  */}
                        <div className="relative group">
                            <span className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1">
                                Market
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </span>

                            <div className="absolute left-0 top-full mt-3 w-60 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/market/cannabis-seo-services"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Cannabis SEO Services
                                </NavLink>

                                <NavLink
                                    to="/market/seo-for-furniture-stores"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    SEO for Furniture Stores
                                </NavLink>
                            </div>
                        </div>


                        {/* SERVICES DROPDOWN */}
                        <div className="relative group">
                            <span className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1">
                                Services
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </span>

                            <div className="absolute left-0 top-full mt-3 w-70 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/services/seo"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Search Engine Optimization
                                </NavLink>

                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Web Design
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Web Development
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Mobile Application Development
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Social Media Marketing
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Online Reputation Management
                                </NavLink>
                            </div>
                        </div>


                        {/* PLANS & PRICING DROPDOWN */}
                        <div className="relative group">
                            <span className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1">
                                Plans & Pricing
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </span>

                            <div className="absolute left-0 top-full mt-3 w-70 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                <div className="relative group/sub">
                                    <NavLink
                                        to="/"
                                        className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                    >
                                        SEO Services Packages ▸
                                    </NavLink>

                                    {/* Submenu (opens right side) */}
                                    <div className="absolute left-full top-0 ml-1 w-56 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">

                                        <NavLink
                                            to="/"
                                            className="block px-5 py-3 hover:bg-gray-50 hover:text-orange-500"
                                        >
                                            Starter Pack
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    SMO Services Packages
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    PPC Services Packages
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition"
                                >
                                    Web Designing Packages
                                </NavLink>
                            </div>
                        </div>


                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-orange-500"
                                    : "text-gray-700 hover:text-orange-500"
                                }`
                            }
                        >
                            Portfolios
                        </NavLink>
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

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-1 mr-3 text-lg">
                        <a
                            href="https://www.facebook.com/WorldWebLogic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
                            aria-label="World WebLogic Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/worldweblogic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
                            aria-label="World WebLogic Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/world-weblogic-pvt-ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
                            aria-label="World WebLogic LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
