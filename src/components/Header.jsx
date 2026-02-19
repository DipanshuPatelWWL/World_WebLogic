import { useState } from "react";
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
import { FaAngleRight } from "react-icons/fa";

import {
  FaBullhorn,
  FaSearch,
  FaShareAlt,
  FaLaptopCode,
  FaVideo,
  FaAd,
  FaShoppingCart,
  FaIndustry,
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
              alt="Digital WebGuider Logo"
              className="h-54 w-auto object-cover pt-2 mt-6"
            />
          </NavLink>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
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

              <div className="absolute left-0 top-full border-t-4 border-t-[#25baff] mt-3 w-52 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
            {/* <div className="relative group">
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
                        </div> */}

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

              <div
                className="absolute left-15 -translate-x-1/2 top-full mt-3
    w-[1100px] bg-white
    border border-gray-200 border-t-4 border-t-[#25baff]
    shadow-xl rounded-lg
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
    p-8 z-50"
              >
                <div className="grid grid-cols-4 gap-8 text-sm">
                  {/* ================= DIGITAL MARKETING ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaBullhorn className="text-[#25baff]" />
                      Digital Marketing
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/digitalMarketing/digital-marketing-strategy"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Digital Marketing Strategy
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/digitalMarketing/digital-marketing-audit"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Digital Marketing Audit
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/digitalMarketing/content-marketing"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Content Marketing
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/digitalMarketing/email-marketing"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Email Marketing
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/digitalMarketing/reputation-management"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Reputation Management
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/digitalMarketing/franchise-digital-marketing"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Franchise Digital Marketing
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= LOCAL SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaSearch className="text-[#25baff]" />
                      Local SEO Services
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/small-business-seo"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Small Business SEO
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/gbp-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          GBP Optimization
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= SOCIAL MEDIA ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaShareAlt className="text-[#25baff]" />
                      Social Media Marketing
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/social-media-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Social Media Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/social-media-management"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Social Media Management
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/social-media-advertising"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Social Media Advertising
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= WEBSITE DESIGN ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaLaptopCode className="text-[#25baff]" />
                      Website Design & Development
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/wordpress-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          WordPress Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/custom-website-design"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Custom Website Design
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/website-redesign"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Website Redesign Service
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/magento-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Magento Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/mobile-app-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Mobile App Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/joomla-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Joomla Website Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/website-hosting"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Website Hosting Services
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaSearch className="text-[#25baff]" />
                      SEO
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/seo/ecommerce-seo-services"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Ecommerce SEO Services
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/seo/link-building-services"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Link Building Services
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/seo/technical-seo-services"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Technical SEO Services
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/seo/franchise-seo-services"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Franchise SEO Services
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/seo/voice-search-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Voice Search Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/seo/app-store-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          App Store Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/white-label-seo"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          White Label SEO
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/generative-engine-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Generative Engine Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/answer-engine-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Answer Engine Optimization
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= VIDEO SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaVideo className="text-[#25baff]" />
                      Video SEO
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/youtube-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          YouTube Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/customer-testimonial-videos"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Customer Testimonial Videos
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/vlog-video-production"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Vlog Video Production Services
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= DIGITAL ADVERTISING ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaAd className="text-[#25baff]" />
                      Digital Advertising
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/pay-per-click"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Pay Per Click
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/facebook"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Facebook
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/instagram"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Instagram
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/x"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />X
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/linkedin"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          LinkedIn
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/pinterest"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Pinterest
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/conversion-rate-optimization"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Conversion Rate Optimization
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/amazon-ppc-services"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Amazon PPC Services
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* ================= ECOMMERCE ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaShoppingCart className="text-[#25baff]" />
                      Ecommerce Development
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <NavLink
                          to="/services/shopify-web-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Shopify Web Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/woocommerce-development"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Woocommerce Development
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/services/payment-gateway"
                          className={({ isActive }) =>
                            `flex gap-2 transition ${isActive ? "text-[#25baff] font-medium" : "text-gray-600 hover:text-[#25baff]"}`
                          }
                        >
                          <FaAngleRight className="mt-1 text-xs" />
                          Payment Gateway
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MARKET DROPDOWN */}
            <div className="relative group">
              <button
                type="button"
                className="cursor-pointer font-medium text-[#020202] hover:text-[#25baff] transition flex items-center gap-1"
              >
                Market
                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                className="absolute -left-4 -translate-x-1/2 top-full mt-3
    w-[1100px] bg-white
    border border-gray-200 border-t-4 border-t-[#25baff]
    shadow-xl rounded-lg
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
    p-8 z-50"
              >
                <div className="grid grid-cols-5 gap-8 text-sm">
                  {/* Popular Markets */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Popular Markets
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Automotive SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Construction SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Dental SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        HVAC SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Healthcare SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Insurance SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Lawyer SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Real Estate SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Plumber SEO
                      </li>
                    </ul>
                  </div>

                  {/* Automobile & Home */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Automobile & Home
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Aviation SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Home Remodeling SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Cleaning SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Furniture SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Entertainment SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Logistic SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Appliance Repair SEO
                      </li>
                    </ul>
                  </div>

                  {/* Food & Health */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Food & Health
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Restaurant SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Agriculture SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Fitness SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Kitchen Remodeler SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Therapist SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Catering SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Yoga SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Pharma SEO
                      </li>
                    </ul>
                  </div>

                  {/* Service Sector */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Service Sector
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Daycare SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Contractors SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Fire Protection SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Financial SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Pest Control SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Salons SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Veterinary SEO
                      </li>
                    </ul>
                  </div>

                  {/* Others */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-black mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Others
                    </h4>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Education SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Jewelry SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Retail SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Hospitality SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Tree Service SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Photography SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Movers SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Cannabis SEO
                      </li>
                      <li className="flex gap-2 text-gray-600 hover:text-[#25baff] transition cursor-pointer">
                        <FaAngleRight className="mt-1 text-[#25baff] text-xs" />
                        Travel SEO
                      </li>
                    </ul>
                  </div>
                </div>
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

              <div className="absolute left-0 border-t-4 border-t-[#25baff] top-full mt-3 w-72 rounded-xl bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
                `font-medium transition ${
                  isActive
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
                `font-medium transition ${
                  isActive
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
                  Why Digital WebGuider
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
                <a href="mailto:#" className="hover:text-[#a8d97c]">
                  info@Digital WebGuider.com
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
