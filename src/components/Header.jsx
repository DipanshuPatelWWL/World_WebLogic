import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-10">
                <div className="h-24 flex items-center justify-between">

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
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1"
                            >
                                About
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-52 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/about/who-we-are"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Who We Are
                                </NavLink>

                                <NavLink
                                    to="/about/why-choose-us"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Why World WebLogic
                                </NavLink>
                            </div>
                        </div>

                        {/* MARKET */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1"
                            >
                                Market
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-60 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/market/cannabis-seo-services"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Cannabis SEO Services
                                </NavLink>

                                <NavLink
                                    to="/market/seo-for-furniture-stores"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    SEO for Furniture Stores
                                </NavLink>
                            </div>
                        </div>

                        {/* SERVICES DROPDOWN */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1"
                            >
                                Services
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/services/seo"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Search Engine Optimization
                                </NavLink>

                                <NavLink
                                    to="/services/web-design"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Web Design
                                </NavLink>

                                <NavLink
                                    to="/services/web-development"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Web Development
                                </NavLink>

                                <NavLink
                                    to="/services/mobile-application-development"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Mobile Application Development
                                </NavLink>

                                <NavLink
                                    to="/services/social-media-marketing"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Social Media Marketing
                                </NavLink>

                                <NavLink
                                    to="/services/online-reputation-management"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Online Reputation Management
                                </NavLink>
                            </div>
                        </div>

                        {/* PLANS & PRICING */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-gray-700 hover:text-orange-500 transition flex items-center gap-1"
                            >
                                Plans & Pricing
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                <div className="relative group/sub">
                                    <NavLink
                                        to="/pricing/seo-packages"
                                        className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                    >
                                        SEO Services Packages ▸
                                    </NavLink>

                                    <div className="absolute left-full top-0 ml-1 w-56 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                        <NavLink
                                            to="/pricing/seo-starter-pack"
                                            className="block px-5 py-3 hover:bg-gray-50 hover:text-orange-500 hover:rounded-xl"
                                        >
                                            Starter Pack
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/pricing/smo-packages"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    SMO Services Packages
                                </NavLink>

                                <NavLink
                                    to="/pricing/ppc-packages"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    PPC Services Packages
                                </NavLink>

                                <NavLink
                                    to="/pricing/web-design-packages"
                                    className="block px-5 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition hover:rounded-xl"
                                >
                                    Web Designing Packages
                                </NavLink>
                            </div>
                        </div>

                        <NavLink
                            to="/portfolio"
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

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-5 mt-1 mr-3 text-lg">
                        <a
                            href="https://www.facebook.com/WorldWebLogic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/worldweblogic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/world-weblogic-pvt-ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:scale-110 transition"
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
