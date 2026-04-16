import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";
import { Link } from "react-router-dom";

const WebDesigningPackages = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* ===== BANNER ===== */}
      <section
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/80" />
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Web Designing Packages
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 font-light">
            Home → Services → Web Designing Packages
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b3253]">
              Our Web Design Plans
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Custom design • Fully responsive • SEO-ready structure • Maintenance included
            </p>
          </div>

          {/* ===== PRICING CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* SILVER */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">SILVER</h3>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-green-600 mx-1">400</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
              </div>

              <div className="px-8 py-8 border-t border-gray-100 text-center text-base">
                <p className="font-medium mb-6">Partially Custom Design – 1 Revision</p>

                <div className="space-y-4">
                  <Feature included>Layered Source Files (PSD / Figma)</Feature>
                  <Feature included>Responsive Design (Desktop + Tablet + Mobile)</Feature>
                  <Feature>New Logo Design</Feature>
                  <Feature>HTML Email Signature / Template</Feature>
                  <Feature>Letterhead Design</Feature>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link to="/payment">
                  <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg border-2 border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                    Start Today
                  </button>
                </Link>
              </div>
            </div>

            {/* GOLD – Popular */}
            <div className="relative rounded-2xl border-2 border-[#25baff] bg-white shadow-2xl scale-[1.04] z-10 hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <div className="relative bg-[#25baff] py-7 text-center">
                <h3 className="text-3xl font-bold text-white">GOLD</h3>
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                  <div className="absolute top-5 right-[-38px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-44 text-center shadow-md">
                    MOST POPULAR
                  </div>
                </div>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-[#25baff] mx-1">800</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
              </div>

              <div className="px-8 py-8 border-t border-gray-100 text-center text-base">
                <p className="font-medium mb-6">Fully Custom Design – up to 2 Revisions</p>

                <div className="space-y-4">
                  <Feature included>Layered Source Files (PSD / Figma)</Feature>
                  <Feature included>Responsive Design (Desktop + Tablet + Mobile)</Feature>
                  <Feature included>New Logo Design</Feature>
                  <Feature included>HTML Email Signature / Template</Feature>
                  <Feature included>Letterhead Design</Feature>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link to="/payment">
                  <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg bg-[#25baff] text-white hover:bg-[#1a9fe0] shadow-lg shadow-[#25baff]/30 transition-all duration-300 hover:cursor-pointer">
                    Start Today
                  </button>
                </Link>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">PREMIUM</h3>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-gray-700 mx-1">1800</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
              </div>

              <div className="px-8 py-8 border-t border-gray-100 text-center text-base">
                <p className="font-medium mb-6">Premium Custom Design – Unlimited Revisions</p>

                <div className="space-y-4">
                  <Feature included>Layered Source Files (PSD / Figma)</Feature>
                  <Feature included>Responsive Design (Desktop + Tablet + Mobile)</Feature>
                  <Feature included>New Logo Design</Feature>
                  <Feature included>HTML Email Signature / Template</Feature>
                  <Feature included>Letterhead Design</Feature>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link to="/payment">
                  <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg border-2 border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                    Start Today
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ===== CMS SUPPORT ===== */}
          <div className="mt-20 mb-16">
            <h3 className="text-3xl font-bold text-center text-[#0b3253] mb-10">
              Supported CMS Platforms
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <p className="font-semibold text-lg mb-3">SILVER</p>
                <p className="text-gray-600">
                  WordPress / Joomla / Concrete5 / Drupal
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <p className="font-semibold text-lg mb-3">GOLD</p>
                <p className="text-gray-600">
                  WordPress / Joomla / Concrete5 / Drupal / Magento / Shopify
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <p className="font-semibold text-lg mb-3">PREMIUM</p>
                <p className="text-gray-600">
                  WordPress / Joomla / Concrete5 / Drupal / Magento / PrestaShop /
                  Shopify / BigCommerce
                </p>
              </div>
            </div>
          </div>

          {/* ===== DETAILED FEATURES ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-12 text-sm">
            {/* SILVER Detailed */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-[#25baff] mb-8 text-center">SILVER</h3>

              <div className="space-y-3">
                <Feature included>Custom Blog</Feature>
                <Feature included>CMS Core Updates</Feature>
                <Feature included>Front-End User Management</Feature>
                <Feature included>Back-End Admin Panel</Feature>
                <Feature included>Social Media Login Integration</Feature>
                <Feature included>Enhanced Website Security</Feature>
                <Feature included>GUI Admin Dashboard</Feature>
                <Feature>Shopping Cart / E-commerce</Feature>
                <Feature>Dealer / Affiliate Section</Feature>
                <Feature included>SEO Friendly URL Structure</Feature>
                <Feature included>Newsletter / Subscription Module</Feature>
                <Feature included>Google Analytics eCommerce Tracking</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />3 Conversion Forms</p>
                <Feature>Content Migration</Feature>
                <Feature>Products Migration</Feature>
                <Feature>Order History Migration</Feature>
                <Feature>User Accounts Migration</Feature>
                <Feature>New Domain Registration (optional)</Feature>
                <Feature included>Web Hosting Included</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />25 Hosted Email Accounts</p>
                <p className="flex items-center gap-3"><span className="w-5" />5 Hours / month – Maintenance</p>
              </div>
              <Link to="/payment">
                <button className="mt-10 w-full py-4 bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition hover:cursor-pointer">
                  Start Today
                </button>
              </Link>
            </div>

            {/* GOLD Detailed */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#25baff]">
              <h3 className="text-2xl font-bold text-[#25baff] mb-8 text-center">GOLD</h3>

              <div className="space-y-3">
                <Feature included>Custom Blog</Feature>
                <Feature included>CMS Updates – up to 6 months</Feature>
                <Feature included>Front-End User Management</Feature>
                <Feature included>Back-End Admin Panel</Feature>
                <Feature included>Social Media Login Integration</Feature>
                <Feature included>Enhanced Website Security</Feature>
                <Feature included>GUI Admin Dashboard</Feature>
                <Feature included>Shopping Cart / E-commerce</Feature>
                <Feature included>Dealer / Affiliate Section</Feature>
                <Feature included>SEO Friendly URL Structure</Feature>
                <Feature included>Newsletter / Subscription Module</Feature>
                <Feature included>Google Analytics eCommerce Tracking</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />7 Conversion Forms</p>
                <Feature included>Content Migration</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />Up to 500 Products Migration</p>
                <Feature included>Order History Migration</Feature>
                <Feature included>User Accounts Migration</Feature>
                <Feature included>New Domain Registration (optional)</Feature>
                <Feature included>Web Hosting Included</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />50 Hosted Email Accounts</p>
                <p className="flex items-center gap-3"><span className="w-5" />10 Hours / month – Maintenance</p>
              </div>
              <Link to="/payment">
                <button className="mt-10 w-full py-4 bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition hover:cursor-pointer">
                  Start Today
                </button>
              </Link>
            </div>

            {/* PREMIUM Detailed */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-[#25baff] mb-8 text-center">PREMIUM</h3>

              <div className="space-y-3">
                <Feature included>Custom Blog</Feature>
                <Feature included>CMS Updates – up to 6 months</Feature>
                <Feature included>Front-End User Management</Feature>
                <Feature included>Back-End Admin Panel</Feature>
                <Feature included>Social Media Login Integration</Feature>
                <Feature included>Enhanced Website Security</Feature>
                <Feature included>GUI Admin Dashboard</Feature>
                <Feature included>Shopping Cart / E-commerce</Feature>
                <Feature included>Dealer / Affiliate Section</Feature>
                <Feature included>SEO Friendly URL Structure</Feature>
                <Feature included>Newsletter / Subscription Module</Feature>
                <Feature included>Google Analytics eCommerce Tracking</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />12 Conversion Forms</p>
                <Feature included>Content Migration</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />Up to 2000 Products Migration</p>
                <Feature included>Order History Migration</Feature>
                <Feature included>User Accounts Migration</Feature>
                <Feature included>New Domain Registration (optional)</Feature>
                <Feature included>Web Hosting Included</Feature>
                <p className="flex items-center gap-3"><span className="w-5" />200 Hosted Email Accounts</p>
                <p className="flex items-center gap-3"><span className="w-5" />25 Hours / month – Maintenance</p>
              </div>
              <Link to="/payment">
                <button className="mt-10 w-full py-4 bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition hover:cursor-pointer">
                  Start Today
                </button>
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center mt-20">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Need a custom quote or have special requirements?
            </p>
            <Link
              to="/free-consultation"
            >
              <button className="bg-[#0b3253] hover:bg-[#08213a] text-white px-12 py-5 rounded-xl text-lg font-semibold transition shadow-lg hover:cursor-pointer">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ===== REUSABLE FEATURE COMPONENT ===== */
const Feature = ({ children, included = false }) => (
  <div className="flex items-center gap-3 text-gray-700">
    {included ? (
      <FaCheck className="text-green-500 text-lg flex-shrink-0" />
    ) : (
      <HiMiniXMark className="text-gray-400 text-xl flex-shrink-0" />
    )}
    <span>{children}</span>
  </div>
);

export default WebDesigningPackages;