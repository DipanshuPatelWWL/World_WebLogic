import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaBars,
    FaTimes,
    FaChevronDown,
} from "react-icons/fa";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenSubMenu(null);
    };
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-10">
                <div className="h-24 flex items-center justify-between">
                    {/* LOGO */}
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="XYZ Logo"
                            className="h-54 w-auto object-cover pt-2 mt-6"
                        />
                    </NavLink>

                    {/* NAVIGATION */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-[#25baff]"
                                    : "text-[#020202] hover:text-[#25baff]"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        {/* ABOUT DROPDOWN */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-[#020202] hover:text-[#25baff] transition flex items-center gap-1"
                            >
                                About
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-52 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/about/who-we-are"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Who We Are
                                </NavLink>

                                <NavLink
                                    to="/about/why-choose-us"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Why Choose Us
                                </NavLink>
                            </div>
                        </div>

                        {/* SERVICES DROPDOWN */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-[#020202] hover:text-[#25baff] transition flex items-center gap-1"
                            >
                                Services
                                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </button>

                            <div className="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <NavLink
                                    to="/services/web-design"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Web Designing
                                </NavLink>

                                <NavLink
                                    to="/services/mobile-application-development"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    App Development
                                </NavLink>

                                <NavLink
                                    to="/services/web-development"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Web Development
                                </NavLink>

                                <NavLink
                                    to="/services/social-media-marketing"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Social Media Marketing
                                </NavLink>

                                <NavLink
                                    to="/services/seo"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Search Engine Optimization
                                </NavLink>

                                <NavLink
                                    to="/services/online-reputation-management"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Online Reputation Management
                                </NavLink>
                            </div>
                        </div>

                        {/* PLANS & PRICING */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="cursor-pointer font-medium text-[#020202] hover:text-[#25baff] transition flex items-center gap-1"
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
                                        className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                    >
                                        SEO Services Packages ▸
                                    </NavLink>

                                    <div className="absolute left-full top-0 ml-1 w-56 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                        <NavLink
                                            to="/pricing/seo-starter-pack"
                                            className="block px-5 py-3 hover:bg-[#25baff]/10 hover:text-[#25baff] hover:rounded-xl"
                                        >
                                            Starter Pack
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/pricing/smo-packages"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    SMO Services Packages
                                </NavLink>

                                <NavLink
                                    to="/pricing/ppc-packages"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    PPC Services Packages
                                </NavLink>

                                <NavLink
                                    to="/pricing/web-design-packages"
                                    className="block px-5 py-3 text-[#020202] hover:text-[#25baff] hover:bg-[#25baff]/10 transition hover:rounded-xl"
                                >
                                    Web Designing Packages
                                </NavLink>
                            </div>
                        </div>

                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-[#25baff]"
                                    : "text-[#020202] hover:text-[#25baff]"
                                }`
                            }
                        >
                            Portfolios
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-[#25baff]"
                                    : "text-[#020202] hover:text-[#25baff]"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* SOCIAL ICONS */}
                    <div className="hidden md:flex gap-5 mt-1 mr-3 text-lg text-[#020202]">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#25baff] hover:scale-110 transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#a8d97c] hover:scale-110 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#25baff] hover:scale-110 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>

                    <button
                        className="md:hidden text-2xl text-[#020202] ml-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5">
                    <NavLink
                        to="/"
                        onClick={closeMobile}
                        className="block font-medium text-[#020202] hover:text-[#25baff]"
                    >
                        Home
                    </NavLink>

                    {/* ABOUT */}
                    <div>
                        <button
                            onClick={() => toggleSubMenu("about")}
                            className="w-full flex justify-between items-center font-medium text-[#020202]"
                        >
                            About
                            <FaChevronDown
                                className={`transition ${openSubMenu === "about" ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openSubMenu === "about" && (
                            <div className="ml-4 mt-3 space-y-2">
                                <NavLink
                                    to="/about/who-we-are"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Who We Are
                                </NavLink>
                                <NavLink
                                    to="/about/why-choose-us"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Why XYZ
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* SERVICES */}
                    <div>
                        <button
                            onClick={() => toggleSubMenu("services")}
                            className="w-full flex justify-between items-center font-medium text-[#020202]"
                        >
                            Services
                            <FaChevronDown
                                className={`transition ${openSubMenu === "services" ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openSubMenu === "services" && (
                            <div className="ml-4 mt-3 space-y-2">
                                <NavLink
                                    to="/services/seo"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    SEO
                                </NavLink>
                                <NavLink
                                    to="/services/web-design"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Web Design
                                </NavLink>
                                <NavLink
                                    to="/services/web-development"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Web Development
                                </NavLink>
                                <NavLink
                                    to="/services/mobile-application-development"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Mobile Application Development
                                </NavLink>
                                <NavLink
                                    to="/services/social-media-marketing"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Social Media Marketing
                                </NavLink>
                                <NavLink
                                    to="/services/online-reputation-management"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Online Reputation Management
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* PLANS & PRICING */}
                    <div>
                        <button
                            onClick={() => toggleSubMenu("pricing")}
                            className="w-full flex justify-between items-center font-medium text-[#020202]"
                        >
                            Plans & Pricing
                            <FaChevronDown
                                className={`transition ${openSubMenu === "pricing" ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openSubMenu === "pricing" && (
                            <div className="ml-4 mt-3 space-y-2">
                                <NavLink
                                    to="/pricing/seo-packages"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    SEO Services Packages
                                </NavLink>
                                <NavLink
                                    to="/pricing/seo-starter-pack"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Starter Pack
                                </NavLink>
                                <NavLink
                                    to="/pricing/smo-packages"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    SMO Services Packages
                                </NavLink>
                                <NavLink
                                    to="/pricing/ppc-packages"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    PPC Services Packages
                                </NavLink>
                                <NavLink
                                    to="/pricing/web-design-packages"
                                    onClick={closeMobile}
                                    className="block hover:text-[#25baff]"
                                >
                                    Web Designing Packages
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/portfolio"
                        onClick={closeMobile}
                        className="block font-medium text-[#020202] hover:text-[#25baff]"
                    >
                        Portfolios
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMobile}
                        className="block font-medium text-[#020202] hover:text-[#25baff]"
                    >
                        Contact
                    </NavLink>

                    {/* MOBILE CONTACT + SOCIAL (BOTTOM) */}
                    <div className="border-t pt-6 space-y-4">
                        {/* EMAIL + TIME */}
                        <div className="space-y-2 text-sm text-[#020202]">
                            <div className="flex items-center gap-2">
                                <span className="text-[#25baff]">✉</span>
                                <a
                                    href="mailto:#"
                                    className="hover:text-[#a8d97c]"
                                >
                                    info@xyz.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#25baff]">⏰</span>
                                <span className="hover:text-[#a8d97c]">
                                    Mon – Fri: 10:00 AM – 07:00 PM
                                </span>
                            </div>
                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-6 text-xl text-[#020202]">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#25baff]"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#a8d97c]"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#25baff]"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
